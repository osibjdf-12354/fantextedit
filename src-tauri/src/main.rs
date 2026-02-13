#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fs;
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};

use base64::engine::general_purpose::STANDARD;
use base64::Engine;
use encoding_rs::{EUC_KR, UTF_16BE, UTF_16LE, UTF_8};
use rfd::FileDialog;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
struct TextStyleState {
    bold: bool,
    italic: bool,
    underline: bool,
    strikethrough: bool,
    size: f32,
    heading_level: u8,
}

impl Default for TextStyleState {
    fn default() -> Self {
        Self {
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
            size: 10.0,
            heading_level: 0,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(tag = "kind", rename_all = "snake_case")]
enum Block {
    Paragraph {
        text: String,
        style: TextStyleState,
        #[serde(default)]
        source_name: Option<String>,
        #[serde(default)]
        title: Option<String>,
        #[serde(default)]
        children: Vec<Block>,
    },
    Image {
        path: String,
        caption: String,
        #[serde(default)]
        data_url: Option<String>,
        #[serde(default)]
        title: Option<String>,
        #[serde(default)]
        children: Vec<Block>,
    },
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Document {
    title: String,
    blocks: Vec<Block>,
}

impl Default for Document {
    fn default() -> Self {
        Self {
            title: "Untitled".to_owned(),
            blocks: vec![paragraph_block(String::new(), None, None)],
        }
    }
}

#[derive(Debug, Serialize)]
struct TextFileLoadResult {
    path: String,
    title: String,
    content: String,
    encoding: String,
}

#[derive(Debug, Serialize)]
struct ProjectLoadResult {
    path: String,
    document: Document,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct AutosaveSessionState {
    autosave_path: String,
    project_path: Option<String>,
    saved_at_unix_ms: u64,
}

#[derive(Debug, Serialize)]
struct StartupLoadResult {
    autosave_path: String,
    project_path: Option<String>,
    saved_at_unix_ms: u64,
    document: Document,
}

fn paragraph_block(text: String, source_name: Option<String>, title: Option<String>) -> Block {
    Block::Paragraph {
        text,
        style: TextStyleState::default(),
        source_name,
        title,
        children: Vec::new(),
    }
}

fn file_stem_or_untitled(path: &Path) -> String {
    path.file_stem()
        .and_then(|stem| stem.to_str())
        .unwrap_or("Untitled")
        .to_owned()
}

fn image_mime_type(path: &Path) -> &'static str {
    match path
        .extension()
        .and_then(|extension| extension.to_str())
        .map(|extension| extension.to_ascii_lowercase())
        .as_deref()
    {
        Some("png") => "image/png",
        Some("jpg") | Some("jpeg") => "image/jpeg",
        Some("bmp") => "image/bmp",
        Some("gif") => "image/gif",
        Some("webp") => "image/webp",
        Some("svg") => "image/svg+xml",
        _ => "application/octet-stream",
    }
}

fn image_data_url(path: &Path) -> Result<String, String> {
    let bytes = fs::read(path)
        .map_err(|error| format!("Failed to read image '{}': {error}", path.display()))?;
    Ok(format!(
        "data:{};base64,{}",
        image_mime_type(path),
        STANDARD.encode(bytes)
    ))
}

fn ensure_document_has_block(document: &mut Document) {
    if document.blocks.is_empty() {
        document
            .blocks
            .push(paragraph_block(String::new(), None, None));
    }
}

fn hydrate_image_block(block: &mut Block) {
    match block {
        Block::Paragraph { children, .. } => {
            for child in children {
                hydrate_image_block(child);
            }
        }
        Block::Image {
            path,
            data_url,
            children,
            ..
        } => {
            if data_url.is_none() && !path.trim().is_empty() {
                if let Ok(encoded) = image_data_url(Path::new(path)) {
                    *data_url = Some(encoded);
                }
            }

            for child in children {
                hydrate_image_block(child);
            }
        }
    }
}

fn hydrate_image_blocks(document: &mut Document) {
    for block in &mut document.blocks {
        hydrate_image_block(block);
    }
}

fn decode_html_entity(entity: &str) -> Option<char> {
    match entity {
        "amp" => Some('&'),
        "lt" => Some('<'),
        "gt" => Some('>'),
        "quot" => Some('"'),
        "apos" => Some('\''),
        "nbsp" => Some(' '),
        _ => {
            if let Some(hex) = entity
                .strip_prefix("#x")
                .or_else(|| entity.strip_prefix("#X"))
            {
                return u32::from_str_radix(hex, 16)
                    .ok()
                    .and_then(char::from_u32);
            }

            if let Some(decimal) = entity.strip_prefix('#') {
                return decimal.parse::<u32>().ok().and_then(char::from_u32);
            }

            None
        }
    }
}

fn html_to_text(input: &str) -> String {
    let mut output = String::new();
    let mut chars = input.chars().peekable();

    while let Some(ch) = chars.next() {
        if ch == '<' {
            let mut tag = String::new();
            while let Some(next) = chars.next() {
                if next == '>' {
                    break;
                }
                tag.push(next);
            }

            let normalized = tag.trim().to_ascii_lowercase();
            let tag_name = normalized
                .trim_start_matches('/')
                .split_whitespace()
                .next()
                .unwrap_or_default();

            if tag_name.starts_with("br")
                || matches!(tag_name, "p" | "div" | "li" | "tr" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
            {
                output.push('\n');
            }
            continue;
        }

        if ch == '&' {
            let mut entity = String::new();
            while let Some(&next) = chars.peek() {
                entity.push(next);
                chars.next();
                if next == ';' || entity.len() > 16 {
                    break;
                }
            }

            if let Some(trimmed) = entity.strip_suffix(';') {
                if let Some(decoded) = decode_html_entity(trimmed) {
                    output.push(decoded);
                    continue;
                }
            }

            output.push('&');
            output.push_str(&entity);
            continue;
        }

        if ch != '\r' {
            output.push(ch);
        }
    }

    let mut normalized = String::new();
    let mut previous_newline = false;
    for ch in output.chars() {
        if ch == '\n' {
            if !previous_newline {
                normalized.push('\n');
            }
            previous_newline = true;
        } else {
            normalized.push(ch);
            previous_newline = false;
        }
    }

    normalized.trim().to_owned()
}

fn append_block_text(block: &Block, output: &mut String) {
    match block {
        Block::Paragraph { text, children, .. } => {
            output.push_str(&html_to_text(text));
            output.push('\n');
            for child in children {
                append_block_text(child, output);
            }
        }
        Block::Image { path, children, .. } => {
            output.push_str(&format!("[image: {path}]\n"));
            for child in children {
                append_block_text(child, output);
            }
        }
    }
}

fn document_to_text(document: &Document) -> String {
    let mut output = String::new();
    for block in &document.blocks {
        append_block_text(block, &mut output);
    }
    output
}

fn normalize_text_encoding_label(requested: Option<String>) -> String {
    let raw = requested.unwrap_or_else(|| "utf-8".to_owned());
    match raw.trim().to_ascii_lowercase().as_str() {
        "utf-8" | "utf8" => "utf-8".to_owned(),
        "utf-8-bom" | "utf8-bom" | "utf8bom" => "utf-8-bom".to_owned(),
        "utf-16le" | "utf16le" | "utf-16" | "utf16" => "utf-16le".to_owned(),
        "utf-16be" | "utf16be" => "utf-16be".to_owned(),
        "euc-kr" | "cp949" | "windows-949" | "ms949" => "euc-kr".to_owned(),
        _ => "utf-8".to_owned(),
    }
}

fn decode_text_bytes(bytes: &[u8], encoding: &str) -> Result<String, String> {
    const UTF8_BOM: &[u8; 3] = b"\xEF\xBB\xBF";
    const UTF16_LE_BOM: &[u8; 2] = b"\xFF\xFE";
    const UTF16_BE_BOM: &[u8; 2] = b"\xFE\xFF";

    let (decoded, had_errors) = match encoding {
        "utf-8" => {
            let payload = if bytes.starts_with(UTF8_BOM) {
                &bytes[UTF8_BOM.len()..]
            } else {
                bytes
            };
            UTF_8.decode_without_bom_handling(payload)
        }
        "utf-8-bom" => {
            let payload = if bytes.starts_with(UTF8_BOM) {
                &bytes[UTF8_BOM.len()..]
            } else {
                bytes
            };
            UTF_8.decode_without_bom_handling(payload)
        }
        "utf-16le" => {
            let payload = if bytes.starts_with(UTF16_LE_BOM) {
                &bytes[UTF16_LE_BOM.len()..]
            } else {
                bytes
            };
            UTF_16LE.decode_without_bom_handling(payload)
        }
        "utf-16be" => {
            let payload = if bytes.starts_with(UTF16_BE_BOM) {
                &bytes[UTF16_BE_BOM.len()..]
            } else {
                bytes
            };
            UTF_16BE.decode_without_bom_handling(payload)
        }
        "euc-kr" => EUC_KR.decode_without_bom_handling(bytes),
        _ => UTF_8.decode_without_bom_handling(bytes),
    };

    if had_errors {
        return Err(format!(
            "Selected encoding '{encoding}' could not decode this text without replacement characters"
        ));
    }

    Ok(decoded.into_owned())
}

fn encode_text_content(content: &str, encoding: &str) -> Result<Vec<u8>, String> {
    const UTF8_BOM: &[u8; 3] = b"\xEF\xBB\xBF";
    const UTF16_LE_BOM: &[u8; 2] = b"\xFF\xFE";
    const UTF16_BE_BOM: &[u8; 2] = b"\xFE\xFF";

    match encoding {
        "utf-8" => Ok(content.as_bytes().to_vec()),
        "utf-8-bom" => {
            let mut output = Vec::with_capacity(UTF8_BOM.len() + content.len());
            output.extend_from_slice(UTF8_BOM);
            output.extend_from_slice(content.as_bytes());
            Ok(output)
        }
        "utf-16le" => {
            let (encoded, _used, had_errors) = UTF_16LE.encode(content);
            if had_errors {
                return Err("Text cannot be represented in UTF-16 LE".to_owned());
            }

            let mut output = Vec::with_capacity(UTF16_LE_BOM.len() + encoded.len());
            output.extend_from_slice(UTF16_LE_BOM);
            output.extend_from_slice(encoded.as_ref());
            Ok(output)
        }
        "utf-16be" => {
            let (encoded, _used, had_errors) = UTF_16BE.encode(content);
            if had_errors {
                return Err("Text cannot be represented in UTF-16 BE".to_owned());
            }

            let mut output = Vec::with_capacity(UTF16_BE_BOM.len() + encoded.len());
            output.extend_from_slice(UTF16_BE_BOM);
            output.extend_from_slice(encoded.as_ref());
            Ok(output)
        }
        "euc-kr" => {
            let (encoded, _used, had_errors) = EUC_KR.encode(content);
            if had_errors {
                return Err(
                    "Text contains characters that cannot be encoded as EUC-KR (CP949)"
                        .to_owned(),
                );
            }

            Ok(encoded.into_owned())
        }
        _ => Ok(content.as_bytes().to_vec()),
    }
}

fn slugify_title(input: &str) -> String {
    let mut out = String::new();
    let mut previous_dash = false;

    for ch in input.chars() {
        if ch.is_ascii_alphanumeric() {
            out.push(ch.to_ascii_lowercase());
            previous_dash = false;
            continue;
        }

        if ch.is_whitespace() || matches!(ch, '-' | '_' | '.') {
            if !previous_dash && !out.is_empty() {
                out.push('-');
                previous_dash = true;
            }
        }
    }

    let trimmed = out.trim_matches('-');
    if trimmed.is_empty() {
        "untitled".to_owned()
    } else {
        trimmed.to_owned()
    }
}

fn now_unix_ms() -> u64 {
    match SystemTime::now().duration_since(UNIX_EPOCH) {
        Ok(duration) => duration.as_millis() as u64,
        Err(_) => 0,
    }
}

fn app_state_dir() -> PathBuf {
    if let Ok(path) = std::env::var("APPDATA") {
        if !path.trim().is_empty() {
            return PathBuf::from(path).join("FanTextEditor");
        }
    }

    if let Ok(path) = std::env::var("HOME") {
        if !path.trim().is_empty() {
            return PathBuf::from(path).join(".fantextedit");
        }
    }

    if let Ok(path) = std::env::var("USERPROFILE") {
        if !path.trim().is_empty() {
            return PathBuf::from(path)
                .join("AppData")
                .join("Roaming")
                .join("FanTextEditor");
        }
    }

    std::env::temp_dir().join("fantextedit-state")
}

fn autosave_registry_file() -> PathBuf {
    app_state_dir().join("last-autosave.json")
}

fn write_autosave_registry(session: &AutosaveSessionState) -> Result<(), String> {
    let registry_path = autosave_registry_file();
    if let Some(parent) = registry_path.parent() {
        fs::create_dir_all(parent).map_err(|error| {
            format!(
                "Failed to prepare autosave registry directory '{}': {error}",
                parent.display()
            )
        })?;
    }

    let payload = serde_json::to_string(session)
        .map_err(|error| format!("Failed to serialize autosave registry: {error}"))?;
    fs::write(&registry_path, payload).map_err(|error| {
        format!(
            "Failed to write autosave registry '{}': {error}",
            registry_path.display()
        )
    })?;

    Ok(())
}

fn read_autosave_registry() -> Result<Option<AutosaveSessionState>, String> {
    let registry_path = autosave_registry_file();
    if !registry_path.exists() {
        return Ok(None);
    }

    let payload = fs::read_to_string(&registry_path).map_err(|error| {
        format!(
            "Failed to read autosave registry '{}': {error}",
            registry_path.display()
        )
    })?;
    let session = serde_json::from_str::<AutosaveSessionState>(&payload)
        .map_err(|error| format!("Failed to parse autosave registry: {error}"))?;

    Ok(Some(session))
}

fn autosave_path_for(document: &Document, current_path: Option<&str>) -> PathBuf {
    if let Some(current_path) = current_path {
        let project_path = PathBuf::from(current_path);
        let stem = project_path
            .file_stem()
            .and_then(|stem| stem.to_str())
            .filter(|stem| !stem.trim().is_empty())
            .unwrap_or("project");
        return project_path.with_file_name(format!("{stem}.autosave.fte"));
    }

    app_state_dir().join("autosaves").join(format!(
        "fantextedit-{}.autosave.fte",
        slugify_title(&document.title)
    ))
}

#[tauri::command(rename_all = "snake_case")]
async fn autosave_document(document: Document, current_path: Option<String>) -> Result<String, String> {
    let autosave_path = autosave_path_for(&document, current_path.as_deref());
    let path_for_write = autosave_path.clone();
    let project_path_for_registry = current_path.clone();
    let autosave_path_for_registry = autosave_path.display().to_string();

    tauri::async_runtime::spawn_blocking(move || -> Result<(), String> {
        if let Some(parent) = path_for_write.parent() {
            fs::create_dir_all(parent)
                .map_err(|error| format!("Failed to prepare autosave directory '{}': {error}", parent.display()))?;
        }

        let payload = serde_json::to_string(&document)
            .map_err(|error| format!("Failed to serialize autosave payload: {error}"))?;
        fs::write(&path_for_write, payload)
            .map_err(|error| format!("Failed to write autosave '{}': {error}", path_for_write.display()))?;

        write_autosave_registry(&AutosaveSessionState {
            autosave_path: autosave_path_for_registry,
            project_path: project_path_for_registry,
            saved_at_unix_ms: now_unix_ms(),
        })?;

        Ok(())
    })
    .await
    .map_err(|error| format!("Background task failed: {error}"))??;

    Ok(autosave_path.display().to_string())
}

#[tauri::command]
async fn load_startup_document() -> Result<Option<StartupLoadResult>, String> {
    tauri::async_runtime::spawn_blocking(move || -> Result<Option<StartupLoadResult>, String> {
        let Some(session) = read_autosave_registry()? else {
            return Ok(None);
        };

        let autosave_path = PathBuf::from(&session.autosave_path);
        if !autosave_path.exists() {
            return Ok(None);
        }

        let content = fs::read_to_string(&autosave_path).map_err(|error| {
            format!(
                "Failed to read autosave document '{}': {error}",
                autosave_path.display()
            )
        })?;

        let mut document = serde_json::from_str::<Document>(&content)
            .map_err(|error| format!("Failed to parse autosave document: {error}"))?;
        ensure_document_has_block(&mut document);
        hydrate_image_blocks(&mut document);

        Ok(Some(StartupLoadResult {
            autosave_path: session.autosave_path,
            project_path: session.project_path,
            saved_at_unix_ms: session.saved_at_unix_ms,
            document,
        }))
    })
    .await
    .map_err(|error| format!("Background task failed: {error}"))?
}

#[tauri::command]
async fn open_text_file(encoding: Option<String>) -> Result<Option<TextFileLoadResult>, String> {
    let Some(path) = FileDialog::new()
        .add_filter("Text", &["txt", "md"])
        .pick_file()
    else {
        return Ok(None);
    };

    let selected_encoding = normalize_text_encoding_label(encoding);
    let path_for_read = path.clone();
    let path_label = path.display().to_string();
    let encoding_for_read = selected_encoding.clone();
    let content = tauri::async_runtime::spawn_blocking(move || -> Result<String, String> {
        let bytes = fs::read(&path_for_read)
            .map_err(|error| format!("Failed to read text file '{}': {error}", path_label))?;
        decode_text_bytes(&bytes, &encoding_for_read).map_err(|error| {
            format!(
                "Failed to decode text file '{}' with encoding '{}': {error}",
                path_for_read.display(),
                encoding_for_read
            )
        })
    })
    .await
    .map_err(|error| format!("Background task failed: {error}"))??;

    Ok(Some(TextFileLoadResult {
        path: path.display().to_string(),
        title: file_stem_or_untitled(&path),
        content,
        encoding: selected_encoding,
    }))
}

#[tauri::command]
async fn save_text_file(document: Document, encoding: Option<String>) -> Result<Option<String>, String> {
    let Some(path) = FileDialog::new()
        .set_file_name("document.txt")
        .add_filter("Text", &["txt"])
        .save_file()
    else {
        return Ok(None);
    };

    let content = document_to_text(&document);
    let selected_encoding = normalize_text_encoding_label(encoding);
    let path_for_write = path.clone();
    let path_label = path.display().to_string();
    tauri::async_runtime::spawn_blocking(move || -> Result<(), String> {
        let bytes = encode_text_content(&content, &selected_encoding)?;
        fs::write(&path_for_write, bytes)
            .map_err(|error| format!("Failed to write text file '{}': {error}", path_label))?;
        Ok(())
    })
    .await
    .map_err(|error| format!("Background task failed: {error}"))??;

    Ok(Some(path.display().to_string()))
}

#[tauri::command]
async fn pick_image_file() -> Result<Option<Block>, String> {
    let Some(path) = FileDialog::new()
        .add_filter("Image", &["png", "jpg", "jpeg", "bmp", "gif", "webp", "svg"])
        .pick_file()
    else {
        return Ok(None);
    };

    let path_for_load = path.clone();
    let data_url = tauri::async_runtime::spawn_blocking(move || image_data_url(&path_for_load))
        .await
        .map_err(|error| format!("Background task failed: {error}"))??;

    let title = path
        .file_name()
        .and_then(|name| name.to_str())
        .map(|name| name.to_owned());

    Ok(Some(Block::Image {
        path: path.display().to_string(),
        caption: String::new(),
        data_url: Some(data_url),
        title,
        children: Vec::new(),
    }))
}

#[tauri::command(rename_all = "snake_case")]
async fn load_image_data_url(path: String) -> Result<Option<String>, String> {
    let trimmed = path.trim();
    if trimmed.is_empty() {
        return Ok(None);
    }

    let image_path = PathBuf::from(trimmed);
    if !image_path.exists() {
        return Ok(None);
    }

    let image_path_for_load = image_path.clone();
    let data_url = tauri::async_runtime::spawn_blocking(move || image_data_url(&image_path_for_load))
        .await
        .map_err(|error| format!("Background task failed: {error}"))??;

    Ok(Some(data_url))
}

#[tauri::command(rename_all = "snake_case")]
async fn save_project(document: Document, current_path: Option<String>) -> Result<Option<String>, String> {
    let path = match current_path {
        Some(path) => PathBuf::from(path),
        None => {
            let Some(path) = FileDialog::new()
                .set_file_name("project.fte")
                .add_filter("FanText project", &["fte"])
                .save_file()
            else {
                return Ok(None);
            };
            path
        }
    };

    let path_for_write = path.clone();
    let path_label = path.display().to_string();
    tauri::async_runtime::spawn_blocking(move || -> Result<(), String> {
        let serialized = serde_json::to_string_pretty(&document)
            .map_err(|error| format!("Failed to serialize project: {error}"))?;
        fs::write(&path_for_write, serialized)
            .map_err(|error| format!("Failed to write project '{}': {error}", path_label))?;
        Ok(())
    })
    .await
    .map_err(|error| format!("Background task failed: {error}"))??;

    Ok(Some(path.display().to_string()))
}

#[tauri::command]
async fn load_project() -> Result<Option<ProjectLoadResult>, String> {
    let Some(path) = FileDialog::new()
        .add_filter("FanText project", &["fte"])
        .pick_file()
    else {
        return Ok(None);
    };

    let path_for_read = path.clone();
    let document = tauri::async_runtime::spawn_blocking(move || -> Result<Document, String> {
        let content = fs::read_to_string(&path_for_read)
            .map_err(|error| format!("Failed to read project '{}': {error}", path_for_read.display()))?;
        let mut document = serde_json::from_str::<Document>(&content)
            .map_err(|error| format!("Failed to parse project: {error}"))?;
        ensure_document_has_block(&mut document);
        hydrate_image_blocks(&mut document);
        Ok(document)
    })
    .await
    .map_err(|error| format!("Background task failed: {error}"))??;

    Ok(Some(ProjectLoadResult {
        path: path.display().to_string(),
        document,
    }))
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            open_text_file,
            save_text_file,
            pick_image_file,
            load_image_data_url,
            autosave_document,
            load_startup_document,
            save_project,
            load_project
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
