use std::collections::HashMap;
use std::fs;
use std::path::{Path, PathBuf};

use eframe::egui;
use egui::{ColorImage, RichText, TextureHandle};
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
            size: 18.0,
            heading_level: 0,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct ParagraphBlock {
    text: String,
    style: TextStyleState,
}

impl Default for ParagraphBlock {
    fn default() -> Self {
        Self {
            text: String::new(),
            style: TextStyleState::default(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct ImageBlock {
    path: PathBuf,
    caption: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
enum Block {
    Paragraph(ParagraphBlock),
    Image(ImageBlock),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Document {
    title: String,
    blocks: Vec<Block>,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Language {
    Korean,
    English,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum AppTab {
    Editor,
    Settings,
}

impl Default for Document {
    fn default() -> Self {
        Self {
            title: "Untitled".to_owned(),
            blocks: vec![Block::Paragraph(ParagraphBlock::default())],
        }
    }
}

struct EditorApp {
    document: Document,
    selected_block: usize,
    project_path: Option<PathBuf>,
    status: String,
    image_cache: HashMap<PathBuf, TextureHandle>,
    language: Language,
    current_tab: AppTab,
}

impl EditorApp {
    fn new(_cc: &eframe::CreationContext<'_>) -> Self {
        Self {
            document: Document::default(),
            selected_block: 0,
            project_path: None,
            status: "준비됨".to_owned(),
            image_cache: HashMap::new(),
            language: Language::Korean,
            current_tab: AppTab::Editor,
        }
    }

    fn tr<'a>(&self, ko: &'a str, en: &'a str) -> &'a str {
        match self.language {
            Language::Korean => ko,
            Language::English => en,
        }
    }

    fn tr_for<'a>(language: Language, ko: &'a str, en: &'a str) -> &'a str {
        match language {
            Language::Korean => ko,
            Language::English => en,
        }
    }

    fn new_document(&mut self) {
        self.document = Document::default();
        self.selected_block = 0;
        self.project_path = None;
        self.status = self
            .tr("새 문서를 만들었습니다", "Created a new document")
            .to_owned();
    }

    fn insert_paragraph(&mut self) {
        self.document
            .blocks
            .push(Block::Paragraph(ParagraphBlock::default()));
        self.selected_block = self.document.blocks.len().saturating_sub(1);
        self.status = self
            .tr("문단을 추가했습니다", "Inserted a paragraph")
            .to_owned();
    }

    fn insert_image(&mut self) {
        if let Some(path) = FileDialog::new()
            .add_filter("Image", &["png", "jpg", "jpeg", "bmp", "gif", "webp"])
            .pick_file()
        {
            self.document.blocks.push(Block::Image(ImageBlock {
                path,
                caption: String::new(),
            }));
            self.selected_block = self.document.blocks.len().saturating_sub(1);
            self.status = self
                .tr("이미지를 삽입했습니다", "Inserted an image")
                .to_owned();
        }
    }

    fn open_text_file(&mut self) {
        if let Some(path) = FileDialog::new().add_filter("Text", &["txt"]).pick_file() {
            match fs::read_to_string(&path) {
                Ok(content) => {
                    self.document.title = path
                        .file_stem()
                        .and_then(|s| s.to_str())
                        .unwrap_or("Untitled")
                        .to_owned();
                    self.document.blocks = vec![Block::Paragraph(ParagraphBlock {
                        text: content,
                        style: TextStyleState::default(),
                    })];
                    self.selected_block = 0;
                    self.status = format!(
                        "{}: {}",
                        self.tr("텍스트 파일 불러옴", "Loaded text file"),
                        path.display()
                    );
                }
                Err(err) => {
                    self.status = format!(
                        "{}: {err}",
                        self.tr("텍스트 파일 불러오기 실패", "Failed to load text file")
                    );
                }
            }
        }
    }

    fn save_text_file(&mut self) {
        if let Some(path) = FileDialog::new().set_file_name("document.txt").save_file() {
            let mut out = String::new();
            for block in &self.document.blocks {
                match block {
                    Block::Paragraph(paragraph) => {
                        out.push_str(&paragraph.text);
                        out.push('\n');
                    }
                    Block::Image(image) => {
                        out.push_str(&format!("[image: {}]\n", image.path.display()));
                    }
                }
            }

            match fs::write(&path, out) {
                Ok(()) => {
                    self.status = format!(
                        "{}: {}",
                        self.tr("텍스트 저장 완료", "Saved text"),
                        path.display()
                    );
                }
                Err(err) => {
                    self.status = format!(
                        "{}: {err}",
                        self.tr("텍스트 저장 실패", "Failed to save text file")
                    );
                }
            }
        }
    }

    fn save_project(&mut self) {
        let path = match self.project_path.clone() {
            Some(path) => path,
            None => match FileDialog::new()
                .add_filter("FanText project", &["fte"])
                .set_file_name("project.fte")
                .save_file()
            {
                Some(path) => path,
                None => return,
            },
        };

        match serde_json::to_string_pretty(&self.document) {
            Ok(serialized) => match fs::write(&path, serialized) {
                Ok(()) => {
                    self.project_path = Some(path.clone());
                    self.status = format!(
                        "{}: {}",
                        self.tr("프로젝트 저장 완료", "Saved project"),
                        path.display()
                    );
                }
                Err(err) => {
                    self.status = format!(
                        "{}: {err}",
                        self.tr("프로젝트 파일 쓰기 실패", "Failed to write project")
                    );
                }
            },
            Err(err) => {
                self.status = format!(
                    "{}: {err}",
                    self.tr(
                        "프로젝트 직렬화 실패",
                        "Failed to serialize project"
                    )
                );
            }
        }
    }

    fn load_project(&mut self) {
        if let Some(path) = FileDialog::new()
            .add_filter("FanText project", &["fte"])
            .pick_file()
        {
            match fs::read_to_string(&path) {
                Ok(content) => match serde_json::from_str::<Document>(&content) {
                    Ok(document) => {
                        self.document = document;
                        if self.document.blocks.is_empty() {
                            self.document
                                .blocks
                                .push(Block::Paragraph(ParagraphBlock::default()));
                        }
                        self.selected_block = 0;
                        self.project_path = Some(path.clone());
                        self.status = format!(
                            "{}: {}",
                            self.tr("프로젝트 불러오기 완료", "Loaded project"),
                            path.display()
                        );
                    }
                    Err(err) => {
                        self.status = format!(
                            "{}: {err}",
                            self.tr("프로젝트 파싱 실패", "Failed to parse project")
                        );
                    }
                },
                Err(err) => {
                    self.status = format!(
                        "{}: {err}",
                        self.tr("프로젝트 읽기 실패", "Failed to read project")
                    );
                }
            }
        }
    }

    fn remove_selected_block(&mut self) {
        if self.document.blocks.len() <= 1 {
            self.status = self
                .tr("최소 한 개의 블록이 필요합니다", "At least one block is required")
                .to_owned();
            return;
        }

        if self.selected_block < self.document.blocks.len() {
            self.document.blocks.remove(self.selected_block);
            if self.selected_block >= self.document.blocks.len() {
                self.selected_block = self.document.blocks.len().saturating_sub(1);
            }
            self.status = self.tr("블록을 삭제했습니다", "Removed block").to_owned();
        }
    }

    fn rich_text_from_style(style: &TextStyleState, text: &str) -> RichText {
        let mut rich = RichText::new(text).size(style.size);
        if style.bold {
            rich = rich.strong();
        }
        if style.italic {
            rich = rich.italics();
        }
        if style.underline {
            rich = rich.underline();
        }
        if style.strikethrough {
            rich = rich.strikethrough();
        }
        if style.heading_level > 0 {
            rich = rich.heading();
        }
        rich
    }

    fn load_texture_for_path(
        path: &Path,
        cache: &mut HashMap<PathBuf, TextureHandle>,
        ctx: &egui::Context,
    ) -> Option<TextureHandle> {
        if let Some(texture) = cache.get(path) {
            return Some(texture.clone());
        }

        let bytes = fs::read(path).ok()?;
        let image = image::load_from_memory(&bytes).ok()?.to_rgba8();
        let size = [image.width() as usize, image.height() as usize];
        let pixels = image.as_flat_samples();
        let color_image = ColorImage::from_rgba_unmultiplied(size, pixels.as_slice());
        let texture = ctx.load_texture(
            format!("img:{}", path.display()),
            color_image,
            egui::TextureOptions::LINEAR,
        );
        cache.insert(path.to_path_buf(), texture.clone());
        Some(texture)
    }
}

impl eframe::App for EditorApp {
    fn update(&mut self, ctx: &egui::Context, _frame: &mut eframe::Frame) {
        let lang = self.language;

        egui::TopBottomPanel::top("toolbar").show(ctx, |ui| {
            ui.horizontal_wrapped(|ui| {
                let editor_tab_title = Self::tr_for(lang, "편집기", "Editor");
                let settings_tab_title = Self::tr_for(lang, "설정", "Settings");

                if ui
                    .selectable_label(self.current_tab == AppTab::Editor, editor_tab_title)
                    .clicked()
                {
                    self.current_tab = AppTab::Editor;
                }
                if ui
                    .selectable_label(self.current_tab == AppTab::Settings, settings_tab_title)
                    .clicked()
                {
                    self.current_tab = AppTab::Settings;
                }

                ui.separator();

                if ui.button(Self::tr_for(lang, "새 문서", "New")).clicked() {
                    self.new_document();
                }
                if ui
                    .button(Self::tr_for(lang, "텍스트 열기", "Open Text"))
                    .clicked()
                {
                    self.open_text_file();
                }
                if ui
                    .button(Self::tr_for(lang, "텍스트 저장", "Save Text"))
                    .clicked()
                {
                    self.save_text_file();
                }
                if ui
                    .button(Self::tr_for(lang, "프로젝트 불러오기", "Load Project"))
                    .clicked()
                {
                    self.load_project();
                }
                if ui
                    .button(Self::tr_for(lang, "프로젝트 저장", "Save Project"))
                    .clicked()
                {
                    self.save_project();
                }
                if ui
                    .button(Self::tr_for(lang, "문단 추가", "Insert Paragraph"))
                    .clicked()
                {
                    self.insert_paragraph();
                }
                if ui
                    .button(Self::tr_for(lang, "이미지 삽입", "Insert Image"))
                    .clicked()
                {
                    self.insert_image();
                }
                if ui
                    .button(Self::tr_for(lang, "블록 삭제", "Delete Block"))
                    .clicked()
                {
                    self.remove_selected_block();
                }
            });
        });

        egui::TopBottomPanel::bottom("status").show(ctx, |ui| {
            ui.horizontal(|ui| {
                ui.label(RichText::new(&self.status).small());
                if let Some(path) = &self.project_path {
                    ui.separator();
                    ui.label(
                        RichText::new(format!(
                            "{}: {}",
                            Self::tr_for(lang, "프로젝트", "Project"),
                            path.display()
                        ))
                        .small(),
                    );
                }
            });
        });

        if self.current_tab == AppTab::Settings {
            egui::CentralPanel::default().show(ctx, |ui| {
                ui.heading(Self::tr_for(lang, "설정", "Settings"));
                ui.separator();
                ui.label(Self::tr_for(lang, "표시 언어", "Display language"));

                let before = self.language;
                egui::ComboBox::from_label(Self::tr_for(lang, "언어 선택", "Select language"))
                    .selected_text(match self.language {
                        Language::Korean => "한국어",
                        Language::English => "English",
                    })
                    .show_ui(ui, |ui| {
                        ui.selectable_value(&mut self.language, Language::Korean, "한국어");
                        ui.selectable_value(&mut self.language, Language::English, "English");
                    });

                if before != self.language {
                    self.status = self
                        .tr("언어를 변경했습니다", "Language updated")
                        .to_owned();
                }

                ui.add_space(8.0);
                ui.label(Self::tr_for(
                    lang,
                    "기본 언어는 한국어입니다.",
                    "Default language is Korean.",
                ));
            });
            return;
        }

        egui::SidePanel::left("outline")
            .min_width(240.0)
            .resizable(true)
            .show(ctx, |ui| {
                ui.heading(Self::tr_for(lang, "문서 개요", "Document Outline"));
                ui.text_edit_singleline(&mut self.document.title);
                ui.separator();

                for (index, block) in self.document.blocks.iter().enumerate() {
                    let label = match block {
                        Block::Paragraph(paragraph) => {
                            let preview = paragraph.text.replace('\n', " ");
                            let preview = preview.chars().take(28).collect::<String>();
                            if preview.is_empty() {
                                format!(
                                    "{}. {}",
                                    index + 1,
                                    Self::tr_for(lang, "문단", "Paragraph")
                                )
                            } else {
                                format!("{}. {}", index + 1, preview)
                            }
                        }
                        Block::Image(image) => {
                            let name = image
                                .path
                                .file_name()
                                .and_then(|n| n.to_str())
                                .unwrap_or("image");
                            format!(
                                "{}. [{}] {}",
                                index + 1,
                                Self::tr_for(lang, "이미지", "Image"),
                                name
                            )
                        }
                    };

                    if ui
                        .selectable_label(self.selected_block == index, label)
                        .clicked()
                    {
                        self.selected_block = index;
                    }
                }
            });

        egui::CentralPanel::default().show(ctx, |ui| {
            if self.selected_block >= self.document.blocks.len() {
                self.selected_block = 0;
            }

            if let Some(block) = self.document.blocks.get_mut(self.selected_block) {
                match block {
                    Block::Paragraph(paragraph) => {
                        ui.heading(Self::tr_for(lang, "문단 편집", "Paragraph Editor"));
                        ui.separator();

                        ui.horizontal_wrapped(|ui| {
                            ui.label(Self::tr_for(lang, "서식:", "Formatting:"));
                            ui.toggle_value(
                                &mut paragraph.style.bold,
                                Self::tr_for(lang, "굵게", "Bold"),
                            );
                            ui.toggle_value(
                                &mut paragraph.style.italic,
                                Self::tr_for(lang, "기울임", "Italic"),
                            );
                            ui.toggle_value(
                                &mut paragraph.style.underline,
                                Self::tr_for(lang, "밑줄", "Underline"),
                            );
                            ui.toggle_value(
                                &mut paragraph.style.strikethrough,
                                Self::tr_for(lang, "취소선", "Strike"),
                            );
                        });
                        ui.horizontal(|ui| {
                            ui.label(Self::tr_for(lang, "제목:", "Heading:"));
                            ui.add(egui::Slider::new(&mut paragraph.style.heading_level, 0..=1));
                            ui.label(Self::tr_for(lang, "크기:", "Size:"));
                            ui.add(egui::Slider::new(&mut paragraph.style.size, 12.0..=42.0));
                        });

                        ui.separator();
                        ui.label(Self::tr_for(lang, "텍스트", "Text"));
                        ui.add(
                            egui::TextEdit::multiline(&mut paragraph.text)
                                .desired_rows(14)
                                .lock_focus(true),
                        );

                        ui.separator();
                        ui.label(Self::tr_for(lang, "미리보기", "Preview"));
                        ui.add_space(8.0);
                        let rich = Self::rich_text_from_style(&paragraph.style, &paragraph.text);
                        ui.label(rich);
                    }
                    Block::Image(image) => {
                        ui.heading(Self::tr_for(lang, "이미지 블록", "Image Block"));
                        ui.separator();

                        ui.label(format!(
                            "{}: {}",
                            Self::tr_for(lang, "경로", "Path"),
                            image.path.display()
                        ));
                        ui.text_edit_singleline(&mut image.caption);

                        ui.separator();
                        if let Some(texture) =
                            Self::load_texture_for_path(&image.path, &mut self.image_cache, ctx)
                        {
                            let size = texture.size_vec2();
                            let max_width = ui.available_width().max(200.0);
                            let scale = (max_width / size.x).min(1.0);
                            ui.image((texture.id(), size * scale));
                        } else {
                            ui.label(Self::tr_for(
                                lang,
                                "이미지를 불러올 수 없습니다. 파일이 존재하는지 확인하세요.",
                                "Could not load image. Check that the file still exists.",
                            ));
                        }

                        if !image.caption.trim().is_empty() {
                            ui.add_space(8.0);
                            ui.label(RichText::new(&image.caption).italics());
                        }
                    }
                }
            }
        });
    }
}

fn main() -> eframe::Result<()> {
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default().with_inner_size([1280.0, 820.0]),
        ..Default::default()
    };

    eframe::run_native(
        "FanText 텍스트 에디터",
        options,
        Box::new(|cc| Box::new(EditorApp::new(cc))),
    )
}
