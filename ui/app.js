const translations = {
  ko: {
    tabEditor: "편집기",
    tabSettings: "설정",
    newDocument: "새 문서",
    openText: "텍스트 열기",
    saveText: "텍스트 저장",
    loadProject: "프로젝트 불러오기",
    saveProject: "프로젝트 저장",
    insertParagraph: "문단 추가",
    insertImage: "이미지 삽입",
    deleteBlock: "블록 삭제",
    outlineTitle: "문서 개요",
    documentTitle: "문서 제목",
    paragraph: "문단",
    image: "이미지",
    file: "파일",
    paragraphEditor: "문단 편집",
    formatting: "서식",
    bold: "굵게",
    italic: "기울임",
    underline: "밑줄",
    strike: "취소선",
    heading: "제목",
    paragraphMode: "본문",
    size: "크기",
    text: "텍스트",
    preview: "미리보기",
    clearFormat: "서식 지우기",
    editorArea: "편집 영역",
    imageEditor: "이미지 블록",
    path: "경로",
    caption: "캡션",
    imageUnavailable: "이미지 미리보기를 불러올 수 없습니다.",
    settingsTitle: "설정",
    displayLanguage: "표시 언어",
    selectLanguage: "언어 선택",
    defaultLanguageHint: "기본 언어는 한국어입니다.",
    projectLabel: "프로젝트",
    runtimeMissing:
      "Tauri 런타임을 찾을 수 없습니다. 'cargo tauri dev' 또는 'cargo run --manifest-path src-tauri/Cargo.toml'로 실행하세요.",
    statusReady: "준비됨",
    statusNewDocument: "새 문서를 만들었습니다",
    statusParagraphInserted: "문단을 추가했습니다",
    statusImageInserted: "이미지를 삽입했습니다",
    statusDeletedBlock: "블록을 삭제했습니다",
    statusNeedOneBlock: "최소 한 개의 블록이 필요합니다",
    statusLoadedText: "텍스트 파일 불러옴",
    statusSavedText: "텍스트 저장 완료",
    statusLoadedProject: "프로젝트 불러오기 완료",
    statusSavedProject: "프로젝트 저장 완료",
    statusOpeningText: "텍스트 파일을 여는 중...",
    statusOpeningProject: "프로젝트를 여는 중...",
    statusRecoveredAutosave: "자동저장본을 복구했습니다",
    autosaveLabel: "자동저장",
    autosaveSaving: "저장 중...",
    autosavePending: "대기 중",
    autosaveSaved: "최근 저장",
    autosaveIdle: "유휴",
    shortcutPrefix: "단축키",
    shortcutNone: "없음",
    statusLanguageUpdated: "언어를 변경했습니다",
    errorPrefix: "오류"
  },
  en: {
    tabEditor: "Editor",
    tabSettings: "Settings",
    newDocument: "New",
    openText: "Open Text",
    saveText: "Save Text",
    loadProject: "Load Project",
    saveProject: "Save Project",
    insertParagraph: "Insert Paragraph",
    insertImage: "Insert Image",
    deleteBlock: "Delete Block",
    outlineTitle: "Document Outline",
    documentTitle: "Document Title",
    paragraph: "Paragraph",
    image: "Image",
    file: "File",
    paragraphEditor: "Paragraph Editor",
    formatting: "Formatting",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strike: "Strike",
    heading: "Heading",
    paragraphMode: "Paragraph",
    size: "Size",
    text: "Text",
    preview: "Preview",
    clearFormat: "Clear Format",
    editorArea: "Editor Area",
    imageEditor: "Image Block",
    path: "Path",
    caption: "Caption",
    imageUnavailable: "Could not load image preview.",
    settingsTitle: "Settings",
    displayLanguage: "Display language",
    selectLanguage: "Select language",
    defaultLanguageHint: "Default language is Korean.",
    projectLabel: "Project",
    runtimeMissing:
      "Tauri runtime not found. Run with 'cargo tauri dev' or 'cargo run --manifest-path src-tauri/Cargo.toml'.",
    statusReady: "Ready",
    statusNewDocument: "Created a new document",
    statusParagraphInserted: "Inserted a paragraph",
    statusImageInserted: "Inserted an image",
    statusDeletedBlock: "Removed block",
    statusNeedOneBlock: "At least one block is required",
    statusLoadedText: "Loaded text file",
    statusSavedText: "Saved text",
    statusLoadedProject: "Loaded project",
    statusSavedProject: "Saved project",
    statusOpeningText: "Opening text file...",
    statusOpeningProject: "Opening project...",
    statusRecoveredAutosave: "Recovered autosaved session",
    autosaveLabel: "Autosave",
    autosaveSaving: "Saving...",
    autosavePending: "Pending",
    autosaveSaved: "Last saved",
    autosaveIdle: "Idle",
    shortcutPrefix: "Shortcut",
    shortcutNone: "None",
    statusLanguageUpdated: "Language updated",
    errorPrefix: "Error"
  }
};

const AUTOSAVE_DEBOUNCE_MS = 1600;

const state = {
  language: "ko",
  tab: "editor",
  document: {
    title: "Untitled",
    blocks: [makeParagraph("")]
  },
  selectedBlock: 0,
  projectPath: null,
  status: "준비됨",
  statusError: false,
  autosave: {
    timerId: null,
    saving: false,
    revision: 0,
    savedRevision: 0,
    lastSavedAt: null,
    lastPath: null
  }
};

const refs = {
  tabEditor: document.getElementById("tab-editor"),
  tabSettings: document.getElementById("tab-settings"),
  newDocument: document.getElementById("action-new"),
  openText: document.getElementById("action-open-text"),
  saveText: document.getElementById("action-save-text"),
  loadProject: document.getElementById("action-load-project"),
  saveProject: document.getElementById("action-save-project"),
  insertParagraph: document.getElementById("action-insert-paragraph"),
  insertImage: document.getElementById("action-insert-image"),
  deleteBlock: document.getElementById("action-delete-block"),
  layout: document.getElementById("layout"),
  outlinePanel: document.getElementById("outline-panel"),
  contentPanel: document.getElementById("content-panel"),
  statusBar: document.getElementById("status-bar")
};

function t(key) {
  return translations[state.language][key] || key;
}

function shortcutHint(shortcut) {
  return `${t("shortcutPrefix")}: ${shortcut || t("shortcutNone")}`;
}

function setShortcutTooltip(element, shortcut) {
  if (!element) {
    return;
  }
  element.title = shortcutHint(shortcut);
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, parsed));
}

function defaultStyle() {
  return {
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    size: 18,
    heading_level: 0
  };
}

function makeParagraph(text, sourceName = null) {
  return {
    kind: "paragraph",
    text: normalizeParagraphHtml(text),
    style: defaultStyle(),
    source_name: sourceName
  };
}

function normalizeStyle(style) {
  return {
    bold: Boolean(style?.bold),
    italic: Boolean(style?.italic),
    underline: Boolean(style?.underline),
    strikethrough: Boolean(style?.strikethrough),
    size: clampNumber(style?.size, 12, 42, 18),
    heading_level: clampNumber(style?.heading_level, 0, 1, 0)
  };
}

function normalizeBlock(block) {
  if (block?.kind === "paragraph") {
    const rawContent =
      typeof block.html === "string"
        ? block.html
        : typeof block.text === "string"
          ? block.text
          : "";

    return {
      kind: "paragraph",
      text: normalizeParagraphHtml(rawContent),
      style: normalizeStyle(block.style),
      source_name: typeof block.source_name === "string" ? block.source_name : null
    };
  }

  if (block?.kind === "image") {
    return {
      kind: "image",
      path: typeof block.path === "string" ? block.path : "",
      caption: typeof block.caption === "string" ? block.caption : "",
      data_url: typeof block.data_url === "string" ? block.data_url : null
    };
  }

  return makeParagraph("");
}

function normalizeDocument(document) {
  const normalized = {
    title: typeof document?.title === "string" ? document.title : "Untitled",
    blocks: Array.isArray(document?.blocks)
      ? document.blocks.map(normalizeBlock)
      : []
  };
  if (normalized.blocks.length === 0) {
    normalized.blocks.push(makeParagraph(""));
  }
  return normalized;
}

function ensureSelectedBlock() {
  if (state.selectedBlock < 0) {
    state.selectedBlock = 0;
  }
  if (state.selectedBlock >= state.document.blocks.length) {
    state.selectedBlock = state.document.blocks.length - 1;
  }
}

function setStatus(message, isError = false) {
  state.status = message;
  state.statusError = isError;
  renderStatus();
}

function clearAutosaveTimer() {
  if (state.autosave.timerId !== null) {
    clearTimeout(state.autosave.timerId);
    state.autosave.timerId = null;
  }
}

function resetAutosaveTracking() {
  clearAutosaveTimer();
  state.autosave.saving = false;
  state.autosave.revision = 0;
  state.autosave.savedRevision = 0;
  state.autosave.lastSavedAt = null;
  state.autosave.lastPath = null;
}

function autosaveDirty() {
  return state.autosave.revision > state.autosave.savedRevision;
}

function markDocumentDirty() {
  state.autosave.revision += 1;
  scheduleAutosave();
}

function scheduleAutosave() {
  if (!autosaveDirty()) {
    renderStatus();
    return;
  }

  clearAutosaveTimer();
  state.autosave.timerId = setTimeout(() => {
    state.autosave.timerId = null;
    void runAutosave();
  }, AUTOSAVE_DEBOUNCE_MS);

  renderStatus();
}

async function runAutosave() {
  if (!autosaveDirty()) {
    return;
  }
  if (state.autosave.saving) {
    return;
  }

  const revisionToSave = state.autosave.revision;
  state.autosave.saving = true;
  renderStatus();

  try {
    const autosavePath = await invokeTauri("autosave_document", {
      document: state.document,
      current_path: state.projectPath
    });

    state.autosave.savedRevision = Math.max(state.autosave.savedRevision, revisionToSave);
    state.autosave.lastSavedAt = Date.now();
    state.autosave.lastPath = autosavePath;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`${t("errorPrefix")}: ${message}`, true);
  } finally {
    state.autosave.saving = false;
    renderStatus();

    if (autosaveDirty()) {
      scheduleAutosave();
    }
  }
}

function autosaveStatusText() {
  if (state.autosave.saving) {
    return t("autosaveSaving");
  }
  if (autosaveDirty()) {
    return t("autosavePending");
  }
  if (state.autosave.lastSavedAt) {
    const timeText = new Date(state.autosave.lastSavedAt).toLocaleTimeString();
    return `${t("autosaveSaved")}: ${timeText}`;
  }
  return t("autosaveIdle");
}

function fileNameFromPath(path) {
  if (!path) {
    return "";
  }
  const parts = path.split(/[/\\]/);
  return parts[parts.length - 1] || path;
}

function blockLabel(block, index) {
  if (block.kind === "paragraph") {
    if (block.source_name) {
      return `${index + 1}. [${t("file")}] ${block.source_name}`;
    }

    const sample = htmlToPlainText(block.text).slice(0, 400);
    const preview = sample.replace(/\s+/g, " ").trim().slice(0, 28);
    if (preview.length === 0) {
      return `${index + 1}. ${t("paragraph")}`;
    }
    return `${index + 1}. ${preview}`;
  }

  return `${index + 1}. [${t("image")}] ${fileNameFromPath(block.path) || "image"}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function plainTextToHtml(value) {
  return escapeHtml(String(value).replace(/\r/g, "")).replace(/\n/g, "<br>");
}

function htmlToPlainText(value) {
  const container = document.createElement("div");
  container.innerHTML = String(value || "");
  return (container.innerText || "").replace(/\r/g, "");
}

function normalizeParagraphHtml(value) {
  const raw = String(value || "");
  const hasMarkup = /<\/?[a-z][\s\S]*?>/i.test(raw);
  return hasMarkup ? raw : plainTextToHtml(raw);
}

async function invokeTauri(command, payload = {}) {
  const invoker = window.__TAURI__?.core?.invoke;
  if (!invoker) {
    throw new Error(t("runtimeMissing"));
  }
  return invoker(command, payload);
}

function renderToolbar() {
  refs.tabEditor.textContent = t("tabEditor");
  refs.tabSettings.textContent = t("tabSettings");
  refs.newDocument.textContent = t("newDocument");
  refs.openText.textContent = t("openText");
  refs.saveText.textContent = t("saveText");
  refs.loadProject.textContent = t("loadProject");
  refs.saveProject.textContent = t("saveProject");
  refs.insertParagraph.textContent = t("insertParagraph");
  refs.insertImage.textContent = t("insertImage");
  refs.deleteBlock.textContent = t("deleteBlock");
  refs.deleteBlock.classList.add("danger");

  setShortcutTooltip(refs.tabEditor, null);
  setShortcutTooltip(refs.tabSettings, null);
  setShortcutTooltip(refs.newDocument, "Ctrl/Cmd+N");
  setShortcutTooltip(refs.openText, "Ctrl/Cmd+O");
  setShortcutTooltip(refs.saveText, "Ctrl/Cmd+Shift+S");
  setShortcutTooltip(refs.loadProject, "Ctrl/Cmd+Shift+O");
  setShortcutTooltip(refs.saveProject, "Ctrl/Cmd+S");
  setShortcutTooltip(refs.insertParagraph, "Ctrl/Cmd+Shift+Enter");
  setShortcutTooltip(refs.insertImage, "Ctrl/Cmd+Shift+I");
  setShortcutTooltip(refs.deleteBlock, "Ctrl/Cmd+Shift+Backspace");

  refs.tabEditor.classList.toggle("active", state.tab === "editor");
  refs.tabSettings.classList.toggle("active", state.tab === "settings");
}

function renderStatus() {
  const projectText = state.projectPath
    ? `${t("projectLabel")}: ${escapeHtml(state.projectPath)}`
    : "";
  const autosaveText = `${t("autosaveLabel")}: ${autosaveStatusText()}`;

  refs.statusBar.innerHTML = `
    <span class="status-message ${state.statusError ? "error" : ""}">${escapeHtml(state.status)}</span>
    ${projectText ? '<span class="status-divider">|</span>' : ""}
    ${projectText ? `<span>${projectText}</span>` : ""}
    <span class="status-divider">|</span>
    <span>${escapeHtml(autosaveText)}</span>
  `;
}

function renderOutline() {
  refs.outlinePanel.innerHTML = `
    <h2 class="panel-title">${t("outlineTitle")}</h2>
    <label class="field">
      <span class="field-label">${t("documentTitle")}</span>
      <input id="document-title" type="text" value="${escapeHtml(state.document.title)}" />
    </label>
    <div class="outline-list">
      ${state.document.blocks
        .map(
          (block, index) =>
            `<button type="button" class="outline-item ${
              index === state.selectedBlock ? "active" : ""
            }" data-index="${index}">${escapeHtml(blockLabel(block, index))}</button>`
        )
        .join("")}
    </div>
  `;

  const titleInput = document.getElementById("document-title");
  titleInput.addEventListener("input", (event) => {
    state.document.title = event.target.value;
    markDocumentDirty();
  });

  refs.outlinePanel.querySelectorAll(".outline-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedBlock = Number(button.dataset.index);
      renderEditor();
      renderOutline();
    });
  });
}

function syncParagraphHtml(editor, block) {
  block.text = editor.innerHTML;
  renderOutline();
  markDocumentDirty();
}

function cloneSelectionRangeWithin(editor) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  const range = selection.getRangeAt(0);
  if (!editor.contains(range.commonAncestorContainer)) {
    return null;
  }

  return range.cloneRange();
}

function restoreSelectionRange(editor, range) {
  if (!range) {
    return false;
  }

  const selection = window.getSelection();
  if (!selection) {
    return false;
  }

  editor.focus();
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

function ensureSelectionInEditor(editor, preferredRange = null) {
  if (!restoreSelectionRange(editor, preferredRange)) {
    editor.focus();
  }

  const selection = window.getSelection();
  if (!selection) {
    return null;
  }

  if (
    selection.rangeCount === 0 ||
    !editor.contains(selection.anchorNode) ||
    !editor.contains(selection.focusNode)
  ) {
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  return selection;
}

function applyInlineCommand(editor, command, value = null, preferredRange = null) {
  const selection = ensureSelectionInEditor(editor, preferredRange);
  if (!selection) {
    return;
  }

  document.execCommand("styleWithCSS", false, true);
  document.execCommand(command, false, value);
}

function wrapSelectionWithStyle(editor, styleObject, preferredRange = null) {
  const selection = ensureSelectionInEditor(editor, preferredRange);
  if (!selection || selection.rangeCount === 0) {
    return false;
  }

  const range = selection.getRangeAt(0);
  if (range.collapsed || !editor.contains(range.commonAncestorContainer)) {
    return false;
  }

  const fragment = range.extractContents();
  const span = document.createElement("span");
  Object.entries(styleObject).forEach(([key, value]) => {
    span.style[key] = value;
  });
  span.appendChild(fragment);
  range.insertNode(span);

  selection.removeAllRanges();
  const newRange = document.createRange();
  newRange.selectNodeContents(span);
  selection.addRange(newRange);
  return true;
}

function renderParagraphEditor(block) {
  refs.contentPanel.innerHTML = `
    <div class="editor-grid">
      <h2 class="panel-title">${t("paragraphEditor")}</h2>

      <div class="field">
        <span class="field-label">${t("formatting")}</span>
        <div class="format-row">
          <button id="format-bold" type="button">${t("bold")}</button>
          <button id="format-italic" type="button">${t("italic")}</button>
          <button id="format-underline" type="button">${t("underline")}</button>
          <button id="format-strike" type="button">${t("strike")}</button>
          <button id="format-heading" type="button">${t("heading")}</button>
          <select id="format-size" aria-label="${t("size")}">
            <option value="14">14px</option>
            <option value="16">16px</option>
            <option value="18" selected>18px</option>
            <option value="20">20px</option>
            <option value="24">24px</option>
            <option value="28">28px</option>
            <option value="34">34px</option>
            <option value="42">42px</option>
          </select>
          <button id="format-clear" type="button">${t("clearFormat")}</button>
        </div>
      </div>

      <div class="preview-card">
        <div class="field-label">${t("editorArea")}</div>
        <div id="paragraph-preview" class="preview-content preview-editable" contenteditable="true" spellcheck="false"></div>
      </div>
    </div>
  `;

  const previewEditable = document.getElementById("paragraph-preview");
  previewEditable.innerHTML = block.text;
  let savedRange = null;

  const saveRangeFromEditor = () => {
    const range = cloneSelectionRangeWithin(previewEditable);
    if (range) {
      savedRange = range;
    }
  };

  const runAndSync = (command, value = null) => {
    const range = cloneSelectionRangeWithin(previewEditable) || savedRange;
    applyInlineCommand(previewEditable, command, value, range);
    syncParagraphHtml(previewEditable, block);
    saveRangeFromEditor();
  };

  refs.contentPanel.querySelectorAll(".format-row button").forEach((button) => {
    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  document.getElementById("format-bold").addEventListener("click", () => {
    runAndSync("bold");
  });
  document.getElementById("format-italic").addEventListener("click", () => {
    runAndSync("italic");
  });
  document.getElementById("format-underline").addEventListener("click", () => {
    runAndSync("underline");
  });
  document.getElementById("format-strike").addEventListener("click", () => {
    runAndSync("strikeThrough");
  });

  const applyHeadingStyle = () => {
    const range = cloneSelectionRangeWithin(previewEditable) || savedRange;
    wrapSelectionWithStyle(previewEditable, {
      fontSize: "1.35em",
      fontWeight: "700",
      lineHeight: "1.25"
    }, range);
    syncParagraphHtml(previewEditable, block);
    saveRangeFromEditor();
  };
  document.getElementById("format-heading").addEventListener("click", applyHeadingStyle);

  const applySelectedSize = () => {
    const selectedSize = clampNumber(document.getElementById("format-size").value, 12, 42, 18);
    const range = cloneSelectionRangeWithin(previewEditable) || savedRange;
    wrapSelectionWithStyle(previewEditable, {
      fontSize: `${selectedSize}px`
    }, range);
    syncParagraphHtml(previewEditable, block);
    saveRangeFromEditor();
  };
  document.getElementById("format-size").addEventListener("change", applySelectedSize);
  document.getElementById("format-clear").addEventListener("click", () => {
    runAndSync("removeFormat");
  });

  setShortcutTooltip(document.getElementById("format-bold"), "Ctrl/Cmd+B");
  setShortcutTooltip(document.getElementById("format-italic"), "Ctrl/Cmd+I");
  setShortcutTooltip(document.getElementById("format-underline"), "Ctrl/Cmd+U");
  setShortcutTooltip(document.getElementById("format-strike"), "Ctrl/Cmd+Shift+X");
  setShortcutTooltip(document.getElementById("format-heading"), "Ctrl/Cmd+Shift+1");
  setShortcutTooltip(document.getElementById("format-size"), null);
  setShortcutTooltip(document.getElementById("format-clear"), null);

  const runSaveProjectShortcut = async () => {
    try {
      await actionSaveProject();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setStatus(`${t("errorPrefix")}: ${message}`, true);
    }
  };

  previewEditable.addEventListener("keydown", (event) => {
    const primaryModifier = event.ctrlKey || event.metaKey;
    if (!primaryModifier || event.altKey) {
      return;
    }

    const key = event.key.toLowerCase();

    if (key === "b") {
      event.preventDefault();
      runAndSync("bold");
      return;
    }
    if (key === "i") {
      event.preventDefault();
      runAndSync("italic");
      return;
    }
    if (key === "u") {
      event.preventDefault();
      runAndSync("underline");
      return;
    }
    if (key === "z") {
      event.preventDefault();
      runAndSync(event.shiftKey ? "redo" : "undo");
      return;
    }
    if (key === "y") {
      event.preventDefault();
      runAndSync("redo");
      return;
    }
    if (key === "s") {
      event.preventDefault();
      void runSaveProjectShortcut();
      return;
    }
    if (key === "x" && event.shiftKey) {
      event.preventDefault();
      runAndSync("strikeThrough");
      return;
    }
    if (key === "1" && event.shiftKey) {
      event.preventDefault();
      applyHeadingStyle();
    }
  });

  previewEditable.addEventListener("input", () => {
    syncParagraphHtml(previewEditable, block);
    saveRangeFromEditor();
  });

  ["mouseup", "keyup", "touchend", "focus"].forEach((eventName) => {
    previewEditable.addEventListener(eventName, () => {
      saveRangeFromEditor();
    });
  });

  saveRangeFromEditor();
}

function renderImageEditor(block) {
  refs.contentPanel.innerHTML = `
    <div class="editor-grid">
      <h2 class="panel-title">${t("imageEditor")}</h2>

      <label class="field">
        <span class="field-label">${t("path")}</span>
        <input id="image-path" type="text" readonly />
      </label>

      <label class="field">
        <span class="field-label">${t("caption")}</span>
        <input id="image-caption" type="text" />
      </label>

      <div class="image-preview-wrap">
        ${
          block.data_url
            ? '<img id="image-preview" class="image-preview" alt="" />'
            : `<p class="hint">${t("imageUnavailable")}</p>`
        }
      </div>
    </div>
  `;

  const pathInput = document.getElementById("image-path");
  const captionInput = document.getElementById("image-caption");
  pathInput.value = block.path;
  captionInput.value = block.caption;

  captionInput.addEventListener("input", () => {
    block.caption = captionInput.value;
    markDocumentDirty();
    renderOutline();
  });

  if (block.data_url) {
    const image = document.getElementById("image-preview");
    image.src = block.data_url;
  }
}

function renderEditor() {
  ensureSelectedBlock();
  const selected = state.document.blocks[state.selectedBlock];

  if (!selected || selected.kind === "paragraph") {
    renderParagraphEditor(selected || makeParagraph(""));
    return;
  }

  renderImageEditor(selected);
}

function renderSettings() {
  refs.contentPanel.innerHTML = `
    <div class="editor-grid">
      <h2 class="panel-title">${t("settingsTitle")}</h2>
      <label class="field">
        <span class="field-label">${t("displayLanguage")}</span>
        <select id="language-select" aria-label="${t("selectLanguage")}">
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </label>
      <p class="hint">${t("defaultLanguageHint")}</p>
    </div>
  `;

  const languageSelect = document.getElementById("language-select");
  languageSelect.value = state.language;
  languageSelect.addEventListener("change", () => {
    state.language = languageSelect.value === "en" ? "en" : "ko";
    setStatus(t("statusLanguageUpdated"));
    render();
  });
}

function renderMainPanel() {
  if (state.tab === "settings") {
    refs.layout.classList.add("settings-mode");
    refs.outlinePanel.innerHTML = "";
    renderSettings();
    return;
  }

  refs.layout.classList.remove("settings-mode");
  renderOutline();
  renderEditor();
}

function render() {
  renderToolbar();
  renderMainPanel();
  renderStatus();
}

async function restoreStartupAutosave() {
  try {
    const restored = await invokeTauri("load_startup_document");
    if (!restored) {
      return false;
    }

    state.document = normalizeDocument(restored.document);
    state.projectPath = typeof restored.project_path === "string" ? restored.project_path : null;
    state.selectedBlock = 0;

    resetAutosaveTracking();
    state.autosave.lastPath =
      typeof restored.autosave_path === "string" ? restored.autosave_path : null;
    if (Number.isFinite(Number(restored.saved_at_unix_ms))) {
      state.autosave.lastSavedAt = Number(restored.saved_at_unix_ms);
    }

    setStatus(t("statusRecoveredAutosave"));
    return true;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    setStatus(`${t("errorPrefix")}: ${message}`, true);
    return false;
  }
}

async function initializeApp() {
  render();
  const restored = await restoreStartupAutosave();
  if (restored) {
    render();
  }
}

function withErrorHandling(action) {
  return async () => {
    try {
      await action();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setStatus(`${t("errorPrefix")}: ${message}`, true);
    }
  };
}

async function actionNewDocument() {
  state.document = {
    title: "Untitled",
    blocks: [makeParagraph("")]
  };
  state.selectedBlock = 0;
  state.projectPath = null;
  resetAutosaveTracking();
  markDocumentDirty();
  setStatus(t("statusNewDocument"));
  render();
}

async function actionOpenText() {
  setStatus(t("statusOpeningText"));
  const result = await invokeTauri("open_text_file");
  if (!result) {
    setStatus(t("statusReady"));
    return;
  }

  const content = typeof result.content === "string" ? result.content : "";
  const sourceName = fileNameFromPath(result.path) || null;
  const incomingBlock = makeParagraph(content, sourceName);

  const hasOnlyInitialEmptyBlock =
    state.document.blocks.length === 1 &&
    state.document.blocks[0].kind === "paragraph" &&
    state.document.blocks[0].text.trim().length === 0 &&
    !state.document.blocks[0].source_name;

  if (hasOnlyInitialEmptyBlock) {
    state.document.blocks[0] = incomingBlock;
    state.selectedBlock = 0;
  } else {
    state.document.blocks.push(incomingBlock);
    state.selectedBlock = state.document.blocks.length - 1;
  }

  if (state.document.title === "Untitled" && typeof result.title === "string") {
    state.document.title = result.title;
  }

  markDocumentDirty();
  setStatus(`${t("statusLoadedText")}: ${result.path}`);
  render();
}

async function actionSaveText() {
  const path = await invokeTauri("save_text_file", { document: state.document });
  if (!path) {
    return;
  }
  setStatus(`${t("statusSavedText")}: ${path}`);
}

async function actionLoadProject() {
  setStatus(t("statusOpeningProject"));
  const result = await invokeTauri("load_project");
  if (!result) {
    setStatus(t("statusReady"));
    return;
  }

  state.document = normalizeDocument(result.document);
  state.projectPath = typeof result.path === "string" ? result.path : null;
  state.selectedBlock = 0;
  resetAutosaveTracking();
  setStatus(`${t("statusLoadedProject")}: ${result.path}`);
  render();
}

async function actionSaveProject() {
  const path = await invokeTauri("save_project", {
    document: state.document,
    current_path: state.projectPath
  });
  if (!path) {
    return;
  }
  state.projectPath = path;
  state.autosave.savedRevision = state.autosave.revision;
  setStatus(`${t("statusSavedProject")}: ${path}`);
  renderStatus();
}

async function actionInsertParagraph() {
  state.document.blocks.push(makeParagraph(""));
  state.selectedBlock = state.document.blocks.length - 1;
  markDocumentDirty();
  setStatus(t("statusParagraphInserted"));
  render();
}

async function actionInsertImage() {
  const block = await invokeTauri("pick_image_file");
  if (!block) {
    return;
  }

  const normalized = normalizeBlock(block);
  if (normalized.kind !== "image") {
    throw new Error("Invalid image block payload");
  }

  state.document.blocks.push(normalized);
  state.selectedBlock = state.document.blocks.length - 1;
  markDocumentDirty();
  setStatus(t("statusImageInserted"));
  render();
}

async function actionDeleteBlock() {
  if (state.document.blocks.length <= 1) {
    setStatus(t("statusNeedOneBlock"), true);
    return;
  }

  state.document.blocks.splice(state.selectedBlock, 1);
  ensureSelectedBlock();
  markDocumentDirty();
  setStatus(t("statusDeletedBlock"));
  render();
}

function isEditableTarget(target) {
  if (!(target instanceof Element)) {
    return false;
  }

  if (target.isContentEditable) {
    return true;
  }

  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select";
}

function runActionSafely(action) {
  void (async () => {
    try {
      await action();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setStatus(`${t("errorPrefix")}: ${message}`, true);
    }
  })();
}

function handleGlobalShortcuts(event) {
  if (event.defaultPrevented) {
    return;
  }

  const primaryModifier = event.ctrlKey || event.metaKey;
  if (!primaryModifier || event.altKey) {
    return;
  }

  const key = event.key.toLowerCase();
  const editingTarget = isEditableTarget(event.target);

  if (key === "n" && !event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionNewDocument);
    return;
  }

  if (key === "o" && !event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionOpenText);
    return;
  }

  if (key === "o" && event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionLoadProject);
    return;
  }

  if (key === "s" && !event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionSaveProject);
    return;
  }

  if (key === "s" && event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionSaveText);
    return;
  }

  if (key === "i" && event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionInsertImage);
    return;
  }

  if (key === "enter" && event.shiftKey) {
    event.preventDefault();
    runActionSafely(actionInsertParagraph);
    return;
  }

  if ((key === "backspace" || key === "delete") && event.shiftKey && !editingTarget) {
    event.preventDefault();
    runActionSafely(actionDeleteBlock);
  }
}

function bindStaticEvents() {
  document.addEventListener("keydown", handleGlobalShortcuts);

  refs.tabEditor.addEventListener("click", () => {
    state.tab = "editor";
    render();
  });

  refs.tabSettings.addEventListener("click", () => {
    state.tab = "settings";
    render();
  });

  refs.newDocument.addEventListener("click", withErrorHandling(actionNewDocument));
  refs.openText.addEventListener("click", withErrorHandling(actionOpenText));
  refs.saveText.addEventListener("click", withErrorHandling(actionSaveText));
  refs.loadProject.addEventListener("click", withErrorHandling(actionLoadProject));
  refs.saveProject.addEventListener("click", withErrorHandling(actionSaveProject));
  refs.insertParagraph.addEventListener("click", withErrorHandling(actionInsertParagraph));
  refs.insertImage.addEventListener("click", withErrorHandling(actionInsertImage));
  refs.deleteBlock.addEventListener("click", withErrorHandling(actionDeleteBlock));
}

bindStaticEvents();
void initializeApp();
