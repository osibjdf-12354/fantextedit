const translations = {
  ko: {
    tabEditor: "편집기",
    tabSettings: "설정",
    menuFile: "파일",
    menuEdit: "편집",
    menuFind: "찾기",
    menuInsert: "삽입",
    menuView: "보기",
    menuEncoding: "인코딩",
    menuLanguage: "언어",
    menuSettings: "설정",
    menuTools: "도구",
    menuMacro: "매크로",
    menuRun: "실행",
    menuPlugin: "플러그인",
    menuWindow: "창관리",
    menuHelp: "?",
    newDocument: "새 문서",
    openText: "텍스트 열기",
    saveText: "텍스트 저장",
    loadProject: "프로젝트 불러오기",
    saveProject: "프로젝트 저장",
    undo: "실행 취소",
    redo: "다시 실행",
    findText: "찾기...",
    findNext: "다음 찾기",
    findPrompt: "찾을 텍스트를 입력하세요",
    insertImage: "이미지 삽입",
    openEditor: "편집기 화면",
    openSettings: "설정 화면",
    encodingUtf8: "UTF-8",
    encodingUtf8Bom: "UTF-8 (BOM)",
    encodingUtf16Le: "UTF-16 LE",
    encodingUtf16Be: "UTF-16 BE",
    encodingEucKr: "EUC-KR (CP949)",
    helpPlaceholder: "도움말 준비 중",
    deleteBlock: "블록 삭제",
    outlineTitle: "문서 개요",
    documentTitle: "문서 제목",
    paragraph: "문단",
    image: "이미지",
    file: "파일",
    untitledEntry: "새 문서",
    untitledParagraph: "문단",
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
    menuShortcutSettings: "메뉴 단축키",
    menuShortcutHint: "입력칸을 클릭한 뒤 원하는 키 조합을 누르세요. 삭제 버튼으로 비울 수 있습니다.",
    shortcutInputHint: "단축키 입력",
    shortcutClear: "삭제",
    shortcutResetAll: "기본값 복원",
    projectLabel: "프로젝트",
    runtimeMissing:
      "Tauri 런타임을 찾을 수 없습니다. 'cargo tauri dev' 또는 'cargo run --manifest-path src-tauri/Cargo.toml'로 실행하세요.",
    statusReady: "준비됨",
    statusNewDocument: "새 문서를 추가했습니다",
    statusParagraphInserted: "문단을 추가했습니다",
    statusImageInserted: "이미지를 삽입했습니다",
    statusChildAdded: "하위 문서를 추가했습니다",
    statusDeletedBlock: "블록을 삭제했습니다",
    statusNeedOneBlock: "최소 한 개의 블록이 필요합니다",
    statusLoadedText: "텍스트 파일 불러옴",
    statusSavedText: "텍스트 저장 완료",
    statusLoadedProject: "프로젝트 불러오기 완료",
    statusSavedProject: "프로젝트 저장 완료",
    statusUndo: "실행 취소",
    statusRedo: "다시 실행",
    statusFindFound: "찾기 결과",
    statusFindNotFound: "일치하는 텍스트가 없습니다",
    statusShortcutUpdated: "단축키를 변경했습니다",
    statusShortcutReset: "단축키를 기본값으로 복원했습니다",
    statusShortcutReserved: "편집기 기본 단축키와 겹칠 수 없습니다",
    statusShortcutDuplicate: "이미 사용 중인 단축키입니다",
    statusEncodingUpdated: "인코딩을 변경했습니다",
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
    outlineDeleteAction: "블록 삭제",
    outlineAddChildAction: "하위 문서 추가",
    outlineRenameAction: "이름 바꾸기",
    outlineRightClickHint: "우클릭으로 메뉴 열기",
    outlineRenamePrompt: "문서 제목을 입력하세요",
    statusLanguageUpdated: "언어를 변경했습니다",
    errorPrefix: "오류"
  },
  en: {
    tabEditor: "Editor",
    tabSettings: "Settings",
    menuFile: "File",
    menuEdit: "Edit",
    menuFind: "Find",
    menuInsert: "Insert",
    menuView: "View",
    menuEncoding: "Encoding",
    menuLanguage: "Language",
    menuSettings: "Settings",
    menuTools: "Tools",
    menuMacro: "Macro",
    menuRun: "Run",
    menuPlugin: "Plugin",
    menuWindow: "Window",
    menuHelp: "?",
    newDocument: "New",
    openText: "Open Text",
    saveText: "Save Text",
    loadProject: "Load Project",
    saveProject: "Save Project",
    undo: "Undo",
    redo: "Redo",
    findText: "Find...",
    findNext: "Find Next",
    findPrompt: "Enter text to find",
    insertImage: "Insert Image",
    openEditor: "Editor View",
    openSettings: "Settings View",
    encodingUtf8: "UTF-8",
    encodingUtf8Bom: "UTF-8 (BOM)",
    encodingUtf16Le: "UTF-16 LE",
    encodingUtf16Be: "UTF-16 BE",
    encodingEucKr: "EUC-KR (CP949)",
    helpPlaceholder: "Help menu coming soon",
    deleteBlock: "Delete Block",
    outlineTitle: "Document Outline",
    documentTitle: "Document Title",
    paragraph: "Paragraph",
    image: "Image",
    file: "File",
    untitledEntry: "New Document",
    untitledParagraph: "Paragraph",
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
    menuShortcutSettings: "Menu shortcuts",
    menuShortcutHint:
      "Click a field and press a key combination. Use Clear to remove a shortcut.",
    shortcutInputHint: "Press shortcut",
    shortcutClear: "Clear",
    shortcutResetAll: "Reset defaults",
    projectLabel: "Project",
    runtimeMissing:
      "Tauri runtime not found. Run with 'cargo tauri dev' or 'cargo run --manifest-path src-tauri/Cargo.toml'.",
    statusReady: "Ready",
    statusNewDocument: "Added a new document entry",
    statusParagraphInserted: "Inserted a paragraph",
    statusImageInserted: "Inserted an image",
    statusChildAdded: "Added child document",
    statusDeletedBlock: "Removed block",
    statusNeedOneBlock: "At least one block is required",
    statusLoadedText: "Loaded text file",
    statusSavedText: "Saved text",
    statusLoadedProject: "Loaded project",
    statusSavedProject: "Saved project",
    statusUndo: "Undo",
    statusRedo: "Redo",
    statusFindFound: "Found",
    statusFindNotFound: "No matches found",
    statusShortcutUpdated: "Updated shortcut",
    statusShortcutReset: "Reset shortcuts to defaults",
    statusShortcutReserved: "This conflicts with fixed editor shortcuts",
    statusShortcutDuplicate: "Shortcut already in use",
    statusEncodingUpdated: "Text encoding changed",
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
    outlineDeleteAction: "Delete Block",
    outlineAddChildAction: "Add Child Document",
    outlineRenameAction: "Rename",
    outlineRightClickHint: "Right-click for menu",
    outlineRenamePrompt: "Enter document title",
    statusLanguageUpdated: "Language updated",
    errorPrefix: "Error"
  }
};

const AUTOSAVE_DEBOUNCE_MS = 1600;
const TOP_MENU_NAMES = ["file", "edit", "find", "insert", "encoding", "settings", "window", "help"];
const DROPDOWN_MENU_NAMES = ["file", "edit", "find", "insert", "encoding", "window", "help"];
const TEXT_ENCODING_STORAGE_KEY = "fantext.text-encoding.v1";
const TEXT_ENCODING_OPTIONS = [
  { id: "utf-8", labelKey: "encodingUtf8" },
  { id: "utf-8-bom", labelKey: "encodingUtf8Bom" },
  { id: "utf-16le", labelKey: "encodingUtf16Le" },
  { id: "utf-16be", labelKey: "encodingUtf16Be" },
  { id: "euc-kr", labelKey: "encodingEucKr" }
];
const TEXT_ENCODING_IDS = new Set(TEXT_ENCODING_OPTIONS.map(({ id }) => id));

const SHORTCUT_STORAGE_KEY = "fantext.shortcuts.v1";
const MENU_SHORTCUT_CONFIG = [
  { id: "newDocument", labelKey: "newDocument", defaultShortcut: "Mod+N" },
  { id: "openText", labelKey: "openText", defaultShortcut: "Mod+O" },
  { id: "saveText", labelKey: "saveText", defaultShortcut: "Mod+Shift+S" },
  { id: "loadProject", labelKey: "loadProject", defaultShortcut: "Mod+Shift+O" },
  { id: "saveProject", labelKey: "saveProject", defaultShortcut: "Mod+S" },
  { id: "undo", labelKey: "undo", defaultShortcut: "Mod+Z" },
  { id: "redo", labelKey: "redo", defaultShortcut: "Mod+Y" },
  { id: "findText", labelKey: "findText", defaultShortcut: "Mod+F" },
  { id: "findNext", labelKey: "findNext", defaultShortcut: "F3" },
  { id: "insertImage", labelKey: "insertImage", defaultShortcut: "Mod+Shift+I" }
];
const MENU_SHORTCUT_IDS = MENU_SHORTCUT_CONFIG.map((item) => item.id);
const RESERVED_EDITOR_SHORTCUTS = new Set([
  "Mod+B",
  "Mod+I",
  "Mod+U",
  "Mod+Shift+X",
  "Mod+Shift+1"
]);

const state = {
  language: "ko",
  tab: "editor",
  document: {
    title: "Untitled",
    blocks: [makeParagraph("")]
  },
  selectedPath: [0],
  projectPath: null,
  status: "준비됨",
  statusError: false,
  menu: {
    active: null
  },
  outlineMenu: {
    visible: false,
    path: null,
    x: 0,
    y: 0
  },
  find: {
    query: "",
    lastPath: null
  },
  textEncoding: loadTextEncoding(),
  shortcuts: loadShortcutBindings(),
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
  menuGroups: Object.fromEntries(
    TOP_MENU_NAMES
      .map((name) => [name, document.getElementById(`menu-${name}-group`)])
      .filter(([, element]) => Boolean(element))
  ),
  menuTriggers: Object.fromEntries(
    TOP_MENU_NAMES
      .map((name) => [name, document.getElementById(`menu-${name}-trigger`)])
      .filter(([, element]) => Boolean(element))
  ),
  newDocument: document.getElementById("action-new"),
  openText: document.getElementById("action-open-text"),
  saveText: document.getElementById("action-save-text"),
  loadProject: document.getElementById("action-load-project"),
  saveProject: document.getElementById("action-save-project"),
  undo: document.getElementById("action-undo"),
  redo: document.getElementById("action-redo"),
  findText: document.getElementById("action-find"),
  findNext: document.getElementById("action-find-next"),
  insertImage: document.getElementById("action-insert-image"),
  openEditor: document.getElementById("action-open-editor"),
  openSettings: document.getElementById("action-open-settings"),
  encodingUtf8: document.getElementById("action-encoding-utf8"),
  encodingUtf8Bom: document.getElementById("action-encoding-utf8-bom"),
  encodingUtf16Le: document.getElementById("action-encoding-utf16le"),
  encodingUtf16Be: document.getElementById("action-encoding-utf16be"),
  encodingEucKr: document.getElementById("action-encoding-euckr"),
  helpPlaceholder: document.getElementById("action-help-placeholder"),
  layout: document.getElementById("layout"),
  outlinePanel: document.getElementById("outline-panel"),
  contentPanel: document.getElementById("content-panel"),
  statusBar: document.getElementById("status-bar")
};

function t(key) {
  return translations[state.language][key] || key;
}

function setShortcutTooltip(element, shortcut) {
  if (!element) {
    return;
  }

  if (!shortcut) {
    element.removeAttribute("title");
    return;
  }

  element.title = shortcut;
}

function normalizeTextEncoding(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (TEXT_ENCODING_IDS.has(normalized)) {
    return normalized;
  }
  return "utf-8";
}

function loadTextEncoding() {
  try {
    return normalizeTextEncoding(window.localStorage.getItem(TEXT_ENCODING_STORAGE_KEY));
  } catch (_error) {
    return "utf-8";
  }
}

function persistTextEncoding() {
  try {
    window.localStorage.setItem(TEXT_ENCODING_STORAGE_KEY, state.textEncoding);
  } catch (_error) {
    // Ignore localStorage write errors.
  }
}

function encodingLabel(encodingId) {
  const normalized = normalizeTextEncoding(encodingId);
  const option = TEXT_ENCODING_OPTIONS.find(({ id }) => id === normalized);
  return option ? t(option.labelKey) : normalized;
}

function setTextEncoding(nextEncoding) {
  const normalized = normalizeTextEncoding(nextEncoding);
  const changed = state.textEncoding !== normalized;
  state.textEncoding = normalized;
  persistTextEncoding();

  if (changed) {
    setStatus(`${t("statusEncodingUpdated")}: ${encodingLabel(normalized)}`);
  }

  render();
}

function normalizeShortcutKeyToken(rawToken) {
  if (typeof rawToken !== "string") {
    return null;
  }

  const token = rawToken.trim();
  if (!token) {
    return null;
  }

  const upper = token.toUpperCase();
  if (/^[A-Z0-9]$/.test(upper)) {
    return upper;
  }

  if (/^F([1-9]|1[0-9]|2[0-4])$/.test(upper)) {
    return upper;
  }

  const named = {
    backspace: "Backspace",
    delete: "Delete",
    enter: "Enter",
    tab: "Tab",
    space: "Space",
    esc: "Escape",
    escape: "Escape",
    arrowup: "ArrowUp",
    arrowdown: "ArrowDown",
    arrowleft: "ArrowLeft",
    arrowright: "ArrowRight",
    home: "Home",
    end: "End",
    pageup: "PageUp",
    pagedown: "PageDown"
  };

  return named[token.toLowerCase()] || null;
}

function normalizeShortcutText(shortcut) {
  if (typeof shortcut !== "string") {
    return "";
  }

  const tokens = shortcut
    .split("+")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  if (tokens.length === 0) {
    return "";
  }

  let mod = false;
  let alt = false;
  let shift = false;
  let key = null;

  for (const token of tokens) {
    const upper = token.toUpperCase();

    if (
      upper === "MOD" ||
      upper === "CTRL" ||
      upper === "CONTROL" ||
      upper === "CMD" ||
      upper === "COMMAND" ||
      upper === "META" ||
      upper === "CTRL/CMD" ||
      upper === "CMD/CTRL" ||
      upper === "CMDORCTRL" ||
      upper === "COMMANDORCONTROL"
    ) {
      mod = true;
      continue;
    }

    if (upper === "ALT" || upper === "OPTION") {
      alt = true;
      continue;
    }

    if (upper === "SHIFT") {
      shift = true;
      continue;
    }

    if (key) {
      return "";
    }

    key = normalizeShortcutKeyToken(token);
    if (!key) {
      return "";
    }
  }

  if (!key) {
    return "";
  }

  const allowsNoModifier = /^F([1-9]|1[0-9]|2[0-4])$/.test(key);
  if (!mod && !alt && !shift && !allowsNoModifier) {
    return "";
  }

  const normalized = [];
  if (mod) {
    normalized.push("Mod");
  }
  if (alt) {
    normalized.push("Alt");
  }
  if (shift) {
    normalized.push("Shift");
  }
  normalized.push(key);
  return normalized.join("+");
}

function shortcutKeyFromEvent(event) {
  if (!event) {
    return null;
  }

  if (event.code === "Space" || event.key === " ") {
    return "Space";
  }

  if (typeof event.code === "string") {
    if (/^Key[A-Z]$/.test(event.code)) {
      return event.code.slice(3);
    }

    if (/^Digit[0-9]$/.test(event.code)) {
      return event.code.slice(5);
    }

    if (/^F([1-9]|1[0-9]|2[0-4])$/.test(event.code)) {
      return event.code.toUpperCase();
    }
  }

  return normalizeShortcutKeyToken(String(event.key || ""));
}

function shortcutFromKeyboardEvent(event) {
  const modifierOnly =
    event.key === "Shift" ||
    event.key === "Control" ||
    event.key === "Alt" ||
    event.key === "Meta";
  if (modifierOnly) {
    return "";
  }

  const key = shortcutKeyFromEvent(event);
  if (!key) {
    return "";
  }

  const mod = event.ctrlKey || event.metaKey;
  const alt = event.altKey;
  const shift = event.shiftKey;
  const allowsNoModifier = /^F([1-9]|1[0-9]|2[0-4])$/.test(key);
  if (!mod && !alt && !shift && !allowsNoModifier) {
    return "";
  }

  const normalized = [];
  if (mod) {
    normalized.push("Mod");
  }
  if (alt) {
    normalized.push("Alt");
  }
  if (shift) {
    normalized.push("Shift");
  }
  normalized.push(key);
  return normalized.join("+");
}

function shortcutParts(shortcut) {
  const normalized = normalizeShortcutText(shortcut);
  if (!normalized) {
    return null;
  }

  const parts = normalized.split("+");
  const key = parts[parts.length - 1];
  return {
    key,
    mod: parts.includes("Mod"),
    alt: parts.includes("Alt"),
    shift: parts.includes("Shift")
  };
}

function eventMatchesShortcut(event, shortcut) {
  const parsed = shortcutParts(shortcut);
  if (!parsed) {
    return false;
  }

  const eventKey = shortcutKeyFromEvent(event);
  if (!eventKey || eventKey !== parsed.key) {
    return false;
  }

  const modPressed = event.ctrlKey || event.metaKey;
  if (modPressed !== parsed.mod) {
    return false;
  }

  if (Boolean(event.altKey) !== parsed.alt) {
    return false;
  }

  if (Boolean(event.shiftKey) !== parsed.shift) {
    return false;
  }

  return true;
}

function formatShortcutForDisplay(shortcut) {
  const normalized = normalizeShortcutText(shortcut);
  if (!normalized) {
    return t("shortcutNone");
  }

  return normalized
    .split("+")
    .map((token) => (token === "Mod" ? "Ctrl/Cmd" : token))
    .join("+");
}

function defaultShortcutBindings() {
  return Object.fromEntries(
    MENU_SHORTCUT_CONFIG.map(({ id, defaultShortcut }) => [id, normalizeShortcutText(defaultShortcut)])
  );
}

function persistShortcutBindings() {
  try {
    window.localStorage.setItem(SHORTCUT_STORAGE_KEY, JSON.stringify(state.shortcuts));
  } catch (_error) {
    // Ignore localStorage write errors.
  }
}

function loadShortcutBindings() {
  const defaults = defaultShortcutBindings();
  let stored = null;

  try {
    const raw = window.localStorage.getItem(SHORTCUT_STORAGE_KEY);
    if (raw) {
      stored = JSON.parse(raw);
    }
  } catch (_error) {
    stored = null;
  }

  const bindings = {};
  const used = new Set();

  for (const { id } of MENU_SHORTCUT_CONFIG) {
    const savedValue = normalizeShortcutText(stored?.[id]);
    const fallback = defaults[id] || "";

    let chosen = "";
    if (savedValue && !used.has(savedValue) && !RESERVED_EDITOR_SHORTCUTS.has(savedValue)) {
      chosen = savedValue;
    } else if (fallback && !used.has(fallback)) {
      chosen = fallback;
    }

    bindings[id] = chosen;
    if (chosen) {
      used.add(chosen);
    }
  }

  return bindings;
}

function shortcutFor(actionId) {
  return normalizeShortcutText(state.shortcuts?.[actionId] || "");
}

function tooltipShortcutFor(actionId) {
  const shortcut = shortcutFor(actionId);
  return shortcut ? formatShortcutForDisplay(shortcut) : null;
}

function isShortcutCaptureField(target) {
  return target instanceof Element && Boolean(target.closest(".shortcut-input"));
}

function updateShortcutBinding(actionId, nextShortcut) {
  if (!MENU_SHORTCUT_IDS.includes(actionId)) {
    return false;
  }

  const normalized = normalizeShortcutText(nextShortcut);
  if (normalized && RESERVED_EDITOR_SHORTCUTS.has(normalized)) {
    setStatus(t("statusShortcutReserved"), true);
    return false;
  }

  if (normalized) {
    const duplicated = MENU_SHORTCUT_IDS.some(
      (otherId) => otherId !== actionId && shortcutFor(otherId) === normalized
    );
    if (duplicated) {
      setStatus(`${t("statusShortcutDuplicate")}: ${formatShortcutForDisplay(normalized)}`, true);
      return false;
    }
  }

  state.shortcuts[actionId] = normalized;
  persistShortcutBindings();
  setStatus(t("statusShortcutUpdated"));
  render();
  return true;
}

function resetShortcutBindings() {
  state.shortcuts = defaultShortcutBindings();
  persistShortcutBindings();
  setStatus(t("statusShortcutReset"));
  render();
}

function runShortcutAction(actionId) {
  const actionMap = {
    newDocument: actionNewDocument,
    openText: actionOpenText,
    saveText: actionSaveText,
    loadProject: actionLoadProject,
    saveProject: actionSaveProject,
    undo: actionUndo,
    redo: actionRedo,
    findText: actionFindText,
    findNext: actionFindNext,
    insertImage: actionInsertImage
  };

  const action = actionMap[actionId];
  if (!action) {
    return false;
  }

  runActionSafely(action);
  return true;
}

function findShortcutAction(event, { allowUndoRedo = true } = {}) {
  for (const actionId of MENU_SHORTCUT_IDS) {
    if (!allowUndoRedo && (actionId === "undo" || actionId === "redo")) {
      continue;
    }

    if (eventMatchesShortcut(event, shortcutFor(actionId))) {
      return actionId;
    }
  }

  return null;
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
    size: 10,
    heading_level: 0
  };
}

function makeParagraph(text, sourceName = null, title = null) {
  return {
    kind: "paragraph",
    text: normalizeParagraphHtml(text),
    style: defaultStyle(),
    source_name: sourceName,
    title,
    children: []
  };
}

function makeImageBlock(path, caption = "", dataUrl = null, title = null) {
  const imagePath = typeof path === "string" ? path : "";
  const resolvedTitle =
    typeof title === "string" && title.trim().length > 0 ? title.trim() : fileNameFromPath(imagePath) || null;

  return {
    kind: "image",
    path: imagePath,
    caption: typeof caption === "string" ? caption : "",
    data_url: typeof dataUrl === "string" ? dataUrl : null,
    title: resolvedTitle,
    children: []
  };
}

function normalizeStyle(style) {
  return {
    bold: Boolean(style?.bold),
    italic: Boolean(style?.italic),
    underline: Boolean(style?.underline),
    strikethrough: Boolean(style?.strikethrough),
    size: clampNumber(style?.size, 6, 72, 10),
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
      source_name: typeof block.source_name === "string" ? block.source_name : null,
      title: typeof block.title === "string" ? block.title : null,
      children: Array.isArray(block.children) ? block.children.map(normalizeBlock) : []
    };
  }

  if (block?.kind === "image") {
    return {
      kind: "image",
      path: typeof block.path === "string" ? block.path : "",
      caption: typeof block.caption === "string" ? block.caption : "",
      data_url: typeof block.data_url === "string" ? block.data_url : null,
      title: typeof block.title === "string" ? block.title : null,
      children: Array.isArray(block.children) ? block.children.map(normalizeBlock) : []
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

function serializePath(path) {
  return path.join(".");
}

function parsePath(pathText) {
  if (!pathText) {
    return [];
  }
  return pathText
    .split(".")
    .map((part) => Number(part))
    .filter((part) => Number.isInteger(part) && part >= 0);
}

function pathsEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
    return false;
  }
  for (let index = 0; index < a.length; index += 1) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}

function ensureChildrenArray(block) {
  if (!Array.isArray(block.children)) {
    block.children = [];
  }
  return block.children;
}

function getBlockByPath(path) {
  if (!Array.isArray(path) || path.length === 0) {
    return null;
  }

  let list = state.document.blocks;
  let current = null;
  for (const index of path) {
    if (!Array.isArray(list) || index < 0 || index >= list.length) {
      return null;
    }
    current = list[index];
    list = ensureChildrenArray(current);
  }

  return current;
}

function getChildListByParentPath(parentPath) {
  if (!Array.isArray(parentPath) || parentPath.length === 0) {
    return state.document.blocks;
  }

  const parent = getBlockByPath(parentPath);
  if (!parent) {
    return null;
  }

  return ensureChildrenArray(parent);
}

function ensureSelectedPath() {
  if (!Array.isArray(state.selectedPath)) {
    state.selectedPath = [0];
  }

  if (state.document.blocks.length === 0) {
    state.document.blocks.push(makeParagraph(""));
    state.selectedPath = [0];
    return;
  }

  let list = state.document.blocks;
  const normalized = [];
  for (const rawIndex of state.selectedPath) {
    if (!Array.isArray(list) || list.length === 0) {
      break;
    }

    const safeIndex = Math.max(0, Math.min(rawIndex, list.length - 1));
    normalized.push(safeIndex);
    list = ensureChildrenArray(list[safeIndex]);
  }

  if (normalized.length === 0) {
    normalized.push(0);
  }

  state.selectedPath = normalized;
}

function setStatus(message, isError = false) {
  state.status = message;
  state.statusError = isError;
  renderStatus();
}

function setLanguage(nextLanguage) {
  const normalized = nextLanguage === "en" ? "en" : "ko";
  const changed = state.language !== normalized;
  state.language = normalized;
  if (changed) {
    setStatus(t("statusLanguageUpdated"));
  }
  render();
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

function isAbsolutePathLike(path) {
  return /^[a-zA-Z]:[\\/]/.test(path) || path.startsWith("/") || path.startsWith("\\\\");
}

function directoryPath(path) {
  if (!path) {
    return "";
  }

  const lastSlash = Math.max(path.lastIndexOf("/"), path.lastIndexOf("\\"));
  if (lastSlash < 0) {
    return "";
  }

  return path.slice(0, lastSlash + 1);
}

function resolveImagePath(rawPath, sourcePath) {
  const trimmed = String(rawPath || "").trim();
  if (!trimmed) {
    return "";
  }

  if (isAbsolutePathLike(trimmed)) {
    return trimmed;
  }

  const baseDir = directoryPath(String(sourcePath || ""));
  if (!baseDir) {
    return trimmed;
  }

  const separator = baseDir.includes("\\") ? "\\" : "/";
  const normalizedPath = trimmed.replace(/[\\/]+/g, separator);
  return `${baseDir}${normalizedPath}`;
}

function parseTextToBlocks(content, sourceName = null, sourcePath = null) {
  const text = String(content || "").replace(/\r\n?/g, "\n");
  const lines = text.split("\n");
  const blocks = [];
  let paragraphLines = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return;
    }

    const paragraphText = paragraphLines.join("\n");
    if (paragraphText.length > 0) {
      blocks.push(makeParagraph(paragraphText, sourceName, null));
    }
    paragraphLines = [];
  };

  for (const line of lines) {
    const imageMatch = line.match(/^\[image:\s*(.+?)\]\s*$/i);
    if (!imageMatch) {
      paragraphLines.push(line);
      continue;
    }

    flushParagraph();

    const imagePath = resolveImagePath(imageMatch[1], sourcePath);
    if (!imagePath) {
      continue;
    }

    blocks.push(makeImageBlock(imagePath));
  }

  flushParagraph();

  if (blocks.length === 0) {
    blocks.push(makeParagraph("", sourceName, sourceName));
  }

  return blocks;
}

function collectImageBlocks(blocks, output = []) {
  blocks.forEach((block) => {
    if (block.kind === "image") {
      output.push(block);
    }

    const children = Array.isArray(block.children) ? block.children : [];
    if (children.length > 0) {
      collectImageBlocks(children, output);
    }
  });

  return output;
}

async function hydrateImagesForBlocks(blocks) {
  const imageBlocks = collectImageBlocks(blocks);
  await Promise.all(
    imageBlocks.map(async (block) => {
      if (block.data_url || !block.path) {
        return;
      }

      try {
        const dataUrl = await invokeTauri("load_image_data_url", {
          path: block.path
        });
        if (typeof dataUrl === "string" && dataUrl.length > 0) {
          block.data_url = dataUrl;
        }
      } catch (_error) {
        // Ignore hydration failures to keep opening text resilient.
      }
    })
  );
}

function defaultBlockTitle(block, index) {
  if (block.kind === "paragraph") {
    if (block.source_name) {
      return block.source_name;
    }
    return `${t("untitledEntry")} ${index + 1}`;
  }

  const fileName = fileNameFromPath(block.path);
  if (fileName) {
    return fileName;
  }
  return `${t("image")} ${index + 1}`;
}

function blockTitle(block, index) {
  const manualTitle = typeof block.title === "string" ? block.title.trim() : "";
  if (manualTitle) {
    return manualTitle;
  }

  return defaultBlockTitle(block, index);
}

function blockLabel(block, index) {
  const title = blockTitle(block, index);
  if (block.kind === "image") {
    return `${index + 1}. [${t("image")}] ${title}`;
  }

  return `${index + 1}. ${title}`;
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

function collectParagraphEntries(blocks, parentPath = [], entries = []) {
  blocks.forEach((block, index) => {
    const path = [...parentPath, index];
    if (block.kind === "paragraph") {
      entries.push({
        path,
        text: htmlToPlainText(block.text)
      });
    }

    const children = Array.isArray(block.children) ? block.children : [];
    if (children.length > 0) {
      collectParagraphEntries(children, path, entries);
    }
  });

  return entries;
}

function findParagraphEntry(query, { afterPath = null, fromSelected = false } = {}) {
  const normalizedQuery = String(query || "").trim().toLocaleLowerCase();
  if (!normalizedQuery) {
    return null;
  }

  const entries = collectParagraphEntries(state.document.blocks);
  if (entries.length === 0) {
    return null;
  }

  let startIndex = 0;
  const basePath = Array.isArray(afterPath) ? afterPath : fromSelected ? state.selectedPath : null;
  if (Array.isArray(basePath) && basePath.length > 0) {
    const baseIndex = entries.findIndex((entry) => pathsEqual(entry.path, basePath));
    if (baseIndex >= 0) {
      startIndex = Array.isArray(afterPath) ? (baseIndex + 1) % entries.length : baseIndex;
    }
  }

  for (let offset = 0; offset < entries.length; offset += 1) {
    const entry = entries[(startIndex + offset) % entries.length];
    if (entry.text.toLocaleLowerCase().includes(normalizedQuery)) {
      return entry;
    }
  }

  return null;
}

function findTextRangeInEditor(editor, query) {
  const normalizedQuery = String(query || "").trim();
  if (!normalizedQuery) {
    return null;
  }

  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let fullText = "";

  let node = walker.nextNode();
  while (node) {
    const value = node.nodeValue || "";
    if (value.length > 0) {
      const start = fullText.length;
      fullText += value;
      nodes.push({
        node,
        start,
        end: fullText.length
      });
    }
    node = walker.nextNode();
  }

  if (fullText.length === 0) {
    return null;
  }

  const lowerText = fullText.toLocaleLowerCase();
  const lowerQuery = normalizedQuery.toLocaleLowerCase();
  const matchStart = lowerText.indexOf(lowerQuery);
  if (matchStart < 0) {
    return null;
  }

  const matchEnd = matchStart + normalizedQuery.length;
  const startInfo = nodes.find((entry) => matchStart >= entry.start && matchStart < entry.end);
  const endInfo = nodes.find((entry) => matchEnd >= entry.start && matchEnd <= entry.end);
  if (!startInfo || !endInfo) {
    return null;
  }

  const range = document.createRange();
  range.setStart(startInfo.node, matchStart - startInfo.start);
  range.setEnd(endInfo.node, matchEnd - endInfo.start);
  return range;
}

function highlightQueryInEditor(editor, query) {
  const range = findTextRangeInEditor(editor, query);
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

  const anchor = range.startContainer.parentElement;
  if (anchor) {
    anchor.scrollIntoView({ block: "center", inline: "nearest" });
  }

  return true;
}

function applyFindResult(entry, query) {
  state.tab = "editor";
  hideOutlineContextMenu();
  state.selectedPath = [...entry.path];
  state.find.lastPath = [...entry.path];
  render();

  const editor = document.getElementById("paragraph-preview");
  if (editor instanceof HTMLElement) {
    highlightQueryInEditor(editor, query);
  }

  setStatus(`${t("statusFindFound")}: ${query}`);
}

function convertPxFontSizeToPt(html) {
  return String(html || "").replace(/font-size\s*:\s*([0-9]*\.?[0-9]+)\s*px/gi, (_, pxValue) => {
    const px = Number(pxValue);
    if (!Number.isFinite(px)) {
      return "font-size: 10pt";
    }

    const pt = Math.round(px * 0.75 * 100) / 100;
    return `font-size: ${pt}pt`;
  });
}

function normalizeParagraphHtml(value) {
  const raw = String(value || "");
  const hasMarkup = /<\/?[a-z][\s\S]*?>/i.test(raw);
  return hasMarkup ? convertPxFontSizeToPt(raw) : plainTextToHtml(raw);
}

async function invokeTauri(command, payload = {}) {
  const invoker = window.__TAURI__?.core?.invoke;
  if (!invoker) {
    throw new Error(t("runtimeMissing"));
  }
  return invoker(command, payload);
}

function renderToolbar() {
  const menuLabels = {
    file: t("menuFile"),
    edit: t("menuEdit"),
    find: t("menuFind"),
    insert: t("menuInsert"),
    encoding: t("menuEncoding"),
    settings: t("menuSettings"),
    window: t("menuWindow"),
    help: t("menuHelp")
  };

  Object.entries(menuLabels).forEach(([name, label]) => {
    const trigger = refs.menuTriggers[name];
    if (!trigger) {
      return;
    }
    trigger.textContent = label;
    setShortcutTooltip(trigger, null);
  });

  refs.newDocument.textContent = t("newDocument");
  refs.openText.textContent = t("openText");
  refs.saveText.textContent = t("saveText");
  refs.loadProject.textContent = t("loadProject");
  refs.saveProject.textContent = t("saveProject");
  refs.undo.textContent = t("undo");
  refs.redo.textContent = t("redo");
  refs.findText.textContent = t("findText");
  refs.findNext.textContent = t("findNext");
  refs.insertImage.textContent = t("insertImage");
  refs.openEditor.textContent = t("openEditor");
  refs.openSettings.textContent = t("openSettings");
  refs.encodingUtf8.textContent = t("encodingUtf8");
  refs.encodingUtf8Bom.textContent = t("encodingUtf8Bom");
  refs.encodingUtf16Le.textContent = t("encodingUtf16Le");
  refs.encodingUtf16Be.textContent = t("encodingUtf16Be");
  refs.encodingEucKr.textContent = t("encodingEucKr");
  refs.helpPlaceholder.textContent = t("helpPlaceholder");

  setShortcutTooltip(refs.newDocument, tooltipShortcutFor("newDocument"));
  setShortcutTooltip(refs.openText, tooltipShortcutFor("openText"));
  setShortcutTooltip(refs.saveText, tooltipShortcutFor("saveText"));
  setShortcutTooltip(refs.loadProject, tooltipShortcutFor("loadProject"));
  setShortcutTooltip(refs.saveProject, tooltipShortcutFor("saveProject"));
  setShortcutTooltip(refs.undo, tooltipShortcutFor("undo"));
  setShortcutTooltip(refs.redo, tooltipShortcutFor("redo"));
  setShortcutTooltip(refs.findText, tooltipShortcutFor("findText"));
  setShortcutTooltip(refs.findNext, tooltipShortcutFor("findNext"));
  setShortcutTooltip(refs.insertImage, tooltipShortcutFor("insertImage"));
  setShortcutTooltip(refs.openEditor, null);
  setShortcutTooltip(refs.openSettings, null);
  setShortcutTooltip(refs.encodingUtf8, null);
  setShortcutTooltip(refs.encodingUtf8Bom, null);
  setShortcutTooltip(refs.encodingUtf16Le, null);
  setShortcutTooltip(refs.encodingUtf16Be, null);
  setShortcutTooltip(refs.encodingEucKr, null);

  DROPDOWN_MENU_NAMES.forEach((name) => {
    const group = refs.menuGroups[name];
    if (!group) {
      return;
    }
    group.classList.toggle("open", state.menu.active === name);
  });

  refs.encodingUtf8.classList.toggle("active", state.textEncoding === "utf-8");
  refs.encodingUtf8Bom.classList.toggle("active", state.textEncoding === "utf-8-bom");
  refs.encodingUtf16Le.classList.toggle("active", state.textEncoding === "utf-16le");
  refs.encodingUtf16Be.classList.toggle("active", state.textEncoding === "utf-16be");
  refs.encodingEucKr.classList.toggle("active", state.textEncoding === "euc-kr");

  refs.openEditor.classList.toggle("active", state.tab === "editor");
  refs.openSettings.classList.toggle("active", state.tab === "settings");
  const settingsTrigger = refs.menuTriggers.settings;
  if (settingsTrigger) {
    settingsTrigger.classList.toggle("active", state.tab === "settings");
  }
}

function closeTopMenu() {
  if (state.menu.active === null) {
    return;
  }

  state.menu.active = null;
  renderToolbar();
}

function toggleTopMenu(name) {
  if (!DROPDOWN_MENU_NAMES.includes(name)) {
    return;
  }

  state.menu.active = state.menu.active === name ? null : name;
  renderToolbar();
}

function switchTab(nextTab) {
  closeTopMenu();
  hideOutlineContextMenu();
  state.tab = nextTab;
  render();
}

function getActiveParagraphEditorContext() {
  if (state.tab !== "editor") {
    return null;
  }

  const block = getBlockByPath(state.selectedPath);
  if (!block || block.kind !== "paragraph") {
    return null;
  }

  const editor = document.getElementById("paragraph-preview");
  if (!(editor instanceof HTMLElement)) {
    return null;
  }

  return { block, editor };
}

function runParagraphEditCommand(command) {
  const context = getActiveParagraphEditorContext();
  if (!context) {
    return false;
  }

  const { block, editor } = context;
  editor.focus();
  document.execCommand("styleWithCSS", false, true);
  document.execCommand(command, false, null);
  syncParagraphHtml(editor, block);
  return true;
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

function hideOutlineContextMenu() {
  state.outlineMenu.visible = false;
  state.outlineMenu.path = null;
}

function openOutlineContextMenu(path, clientX, clientY) {
  const panel = refs.outlinePanel;
  const panelRect = panel.getBoundingClientRect();

  const menuWidth = 170;
  const menuHeight = 122;
  const rawX = clientX - panelRect.left + panel.scrollLeft;
  const rawY = clientY - panelRect.top + panel.scrollTop;

  const minX = panel.scrollLeft + 6;
  const minY = panel.scrollTop + 6;
  const maxX = Math.max(minX, panel.scrollLeft + panel.clientWidth - menuWidth - 6);
  const maxY = Math.max(minY, panel.scrollTop + panel.clientHeight - menuHeight - 6);

  state.outlineMenu.visible = true;
  state.outlineMenu.path = Array.isArray(path) ? [...path] : null;
  state.outlineMenu.x = Math.max(minX, Math.min(rawX, maxX));
  state.outlineMenu.y = Math.max(minY, Math.min(rawY, maxY));
}

function renameBlockAtPath(path) {
  const block = getBlockByPath(path);
  if (!block) {
    return;
  }

  const currentTitle = blockTitle(block, path[path.length - 1] ?? 0);
  const nextTitle = window.prompt(t("outlineRenamePrompt"), currentTitle);
  if (nextTitle === null) {
    return;
  }

  const trimmed = nextTitle.trim();
  block.title = trimmed.length > 0 ? trimmed : null;
  hideOutlineContextMenu();
  markDocumentDirty();
  renderOutline();
}

function renderOutlineItems(blocks, parentPath = [], depth = 0) {
  return blocks
    .map((block, index) => {
      const path = [...parentPath, index];
      const pathText = serializePath(path);
      const label = blockLabel(block, index);
      const children = Array.isArray(block.children) ? block.children : [];

      return `
        <button
          type="button"
          class="outline-item ${pathsEqual(state.selectedPath, path) ? "active" : ""}"
          data-path="${pathText}"
          data-depth="${depth}"
          style="--depth:${depth}"
        >${escapeHtml(label)}</button>
        ${children.length > 0 ? renderOutlineItems(children, path, depth + 1) : ""}
      `;
    })
    .join("");
}

function renderOutline() {
  const contextPath = Array.isArray(state.outlineMenu.path) ? state.outlineMenu.path : null;
  const contextBlock = contextPath ? getBlockByPath(contextPath) : null;
  if (state.outlineMenu.visible && !contextBlock) {
    hideOutlineContextMenu();
  }
  const showContextMenu = state.outlineMenu.visible && contextBlock;

  refs.outlinePanel.innerHTML = `
    <h2 class="panel-title">${t("outlineTitle")}</h2>
    <label class="field">
      <span class="field-label">${t("documentTitle")}</span>
      <input id="document-title" type="text" value="${escapeHtml(state.document.title)}" />
    </label>
    <div class="outline-list">
      ${renderOutlineItems(state.document.blocks)}
    </div>
    ${
      showContextMenu
        ? `<div id="outline-context-menu" class="outline-context-menu" style="left:${state.outlineMenu.x}px; top:${state.outlineMenu.y}px;">
            <button id="outline-context-add-child" type="button" class="outline-context-delete">${escapeHtml(
              t("outlineAddChildAction")
            )}</button>
            <button id="outline-context-rename" type="button" class="outline-context-delete">${escapeHtml(
              t("outlineRenameAction")
            )}</button>
            <button id="outline-context-delete" type="button" class="outline-context-delete danger">${escapeHtml(
              t("outlineDeleteAction")
            )}</button>
          </div>`
        : ""
    }
  `;

  const titleInput = document.getElementById("document-title");
  titleInput.addEventListener("input", (event) => {
    state.document.title = event.target.value;
    markDocumentDirty();
  });

  refs.outlinePanel.querySelectorAll(".outline-item").forEach((button) => {
    button.title = t("outlineRightClickHint");

    button.addEventListener("click", () => {
      closeTopMenu();
      hideOutlineContextMenu();
      state.selectedPath = parsePath(button.dataset.path);
      renderEditor();
      renderOutline();
    });

    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      closeTopMenu();
      const path = parsePath(button.dataset.path);
      state.selectedPath = path;
      openOutlineContextMenu(path, event.clientX, event.clientY);
      renderEditor();
      renderOutline();
    });

    button.addEventListener("dblclick", (event) => {
      event.preventDefault();
      renameBlockAtPath(parsePath(button.dataset.path));
    });
  });

  const contextAddChildButton = document.getElementById("outline-context-add-child");
  if (contextAddChildButton) {
    contextAddChildButton.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
    contextAddChildButton.addEventListener("click", () => {
      const targetPath = Array.isArray(state.outlineMenu.path)
        ? [...state.outlineMenu.path]
        : [...state.selectedPath];
      runActionSafely(() => actionAddChildDocument(targetPath));
    });
  }

  const contextRenameButton = document.getElementById("outline-context-rename");
  if (contextRenameButton) {
    contextRenameButton.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
    contextRenameButton.addEventListener("click", () => {
      const targetPath = Array.isArray(state.outlineMenu.path)
        ? [...state.outlineMenu.path]
        : [...state.selectedPath];
      renameBlockAtPath(targetPath);
    });
  }

  const contextDeleteButton = document.getElementById("outline-context-delete");
  if (contextDeleteButton) {
    setShortcutTooltip(contextDeleteButton, "Ctrl/Cmd+Shift+Backspace");
    contextDeleteButton.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
    contextDeleteButton.addEventListener("click", () => {
      const targetPath = Array.isArray(state.outlineMenu.path)
        ? [...state.outlineMenu.path]
        : [...state.selectedPath];
      runActionSafely(() => actionDeleteBlock(targetPath));
    });
  }
}

function syncParagraphHtml(editor, block) {
  block.text = convertPxFontSizeToPt(editor.innerHTML);
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
            <option value="8">8pt</option>
            <option value="9">9pt</option>
            <option value="10" selected>10pt</option>
            <option value="11">11pt</option>
            <option value="12">12pt</option>
            <option value="14">14pt</option>
            <option value="16">16pt</option>
            <option value="18">18pt</option>
            <option value="20">20pt</option>
            <option value="24">24pt</option>
            <option value="28">28pt</option>
            <option value="36">36pt</option>
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
  let isComposing = false;

  const saveRangeFromEditor = () => {
    if (isComposing) {
      return;
    }
    const range = cloneSelectionRangeWithin(previewEditable);
    if (range) {
      savedRange = range;
    }
  };

  const runAndSync = (command, value = null) => {
    if (isComposing) {
      return;
    }
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
      fontSize: "14pt",
      fontWeight: "700",
      lineHeight: "1.25"
    }, range);
    syncParagraphHtml(previewEditable, block);
    saveRangeFromEditor();
  };
  document.getElementById("format-heading").addEventListener("click", applyHeadingStyle);

  const applySelectedSize = () => {
    const selectedSize = clampNumber(document.getElementById("format-size").value, 6, 72, 10);
    const range = cloneSelectionRangeWithin(previewEditable) || savedRange;
    wrapSelectionWithStyle(previewEditable, {
      fontSize: `${selectedSize}pt`
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

  previewEditable.addEventListener("keydown", (event) => {
    if (isComposing) {
      return;
    }

    if (eventMatchesShortcut(event, shortcutFor("undo"))) {
      event.preventDefault();
      runAndSync("undo");
      return;
    }

    if (eventMatchesShortcut(event, shortcutFor("redo"))) {
      event.preventDefault();
      runAndSync("redo");
      return;
    }

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

  previewEditable.addEventListener("compositionstart", () => {
    isComposing = true;
  });

  previewEditable.addEventListener("compositionend", () => {
    isComposing = false;
    syncParagraphHtml(previewEditable, block);
    saveRangeFromEditor();
  });

  previewEditable.addEventListener("input", () => {
    if (isComposing) {
      return;
    }
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
  ensureSelectedPath();
  const selected = getBlockByPath(state.selectedPath);

  if (!selected || selected.kind === "paragraph") {
    renderParagraphEditor(selected || makeParagraph(""));
    return;
  }

  renderImageEditor(selected);
}

function renderShortcutRows() {
  return MENU_SHORTCUT_CONFIG.map(({ id, labelKey }) => {
    const displayValue = formatShortcutForDisplay(shortcutFor(id));
    return `
      <div class="shortcut-row">
        <label class="shortcut-label" for="shortcut-${id}">${t(labelKey)}</label>
        <input
          id="shortcut-${id}"
          class="shortcut-input"
          type="text"
          readonly
          value="${escapeHtml(displayValue)}"
          aria-label="${escapeHtml(`${t(labelKey)} ${t("shortcutInputHint")}`)}"
          data-shortcut-action="${id}"
        />
        <button type="button" class="shortcut-clear" data-shortcut-clear="${id}">${t(
          "shortcutClear"
        )}</button>
      </div>
    `;
  }).join("");
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

      <div class="shortcut-settings">
        <h3 class="panel-title shortcut-title">${t("menuShortcutSettings")}</h3>
        <p class="hint">${t("menuShortcutHint")}</p>
        <div class="shortcut-list">
          ${renderShortcutRows()}
        </div>
        <button id="shortcut-reset-defaults" type="button" class="shortcut-reset">${t(
          "shortcutResetAll"
        )}</button>
      </div>
    </div>
  `;

  const languageSelect = document.getElementById("language-select");
  languageSelect.value = state.language;
  languageSelect.addEventListener("change", () => {
    setLanguage(languageSelect.value);
  });

  const resetButton = document.getElementById("shortcut-reset-defaults");
  resetButton.addEventListener("click", () => {
    resetShortcutBindings();
  });

  document.querySelectorAll("[data-shortcut-clear]").forEach((button) => {
    button.addEventListener("click", () => {
      const actionId = button.getAttribute("data-shortcut-clear");
      if (actionId) {
        updateShortcutBinding(actionId, "");
      }
    });
  });

  document.querySelectorAll(".shortcut-input").forEach((input) => {
    input.addEventListener("focus", () => {
      input.select();
    });

    input.addEventListener("keydown", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const actionId = input.getAttribute("data-shortcut-action");
      if (!actionId) {
        return;
      }

      if (event.key === "Escape") {
        input.blur();
        return;
      }

      if (
        (event.key === "Backspace" || event.key === "Delete") &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        updateShortcutBinding(actionId, "");
        return;
      }

      const captured = shortcutFromKeyboardEvent(event);
      if (!captured) {
        return;
      }

      updateShortcutBinding(actionId, captured);
    });
  });
}

function renderMainPanel() {
  if (state.tab === "settings") {
    hideOutlineContextMenu();
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
    state.selectedPath = [0];

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
  closeTopMenu();
  const entryName = `${t("untitledEntry")} ${state.document.blocks.length + 1}`;
  state.document.blocks.push(makeParagraph("", null, entryName));
  state.selectedPath = [state.document.blocks.length - 1];
  markDocumentDirty();
  setStatus(t("statusNewDocument"));
  render();
}

async function actionOpenText() {
  closeTopMenu();
  setStatus(t("statusOpeningText"));
  const result = await invokeTauri("open_text_file", {
    encoding: state.textEncoding
  });
  if (!result) {
    setStatus(t("statusReady"));
    return;
  }

  const content = typeof result.content === "string" ? result.content : "";
  const sourceName = fileNameFromPath(result.path) || null;
  const incomingBlocks = parseTextToBlocks(content, sourceName, result.path);

  const firstBlock = state.document.blocks[0];
  const firstPlainText =
    firstBlock && firstBlock.kind === "paragraph" ? htmlToPlainText(firstBlock.text).trim() : "";

  const hasOnlyInitialEmptyBlock =
    state.document.blocks.length === 1 &&
    firstBlock.kind === "paragraph" &&
    firstPlainText.length === 0 &&
    !firstBlock.source_name &&
    (!Array.isArray(firstBlock.children) || firstBlock.children.length === 0);

  if (hasOnlyInitialEmptyBlock) {
    state.document.blocks = incomingBlocks;
    state.selectedPath = [0];
  } else {
    const insertIndex = state.document.blocks.length;
    state.document.blocks.push(...incomingBlocks);
    state.selectedPath = [insertIndex];
  }

  if (state.document.title === "Untitled" && typeof result.title === "string") {
    state.document.title = result.title;
  }

  if (typeof result.encoding === "string") {
    state.textEncoding = normalizeTextEncoding(result.encoding);
    persistTextEncoding();
  }

  await hydrateImagesForBlocks(incomingBlocks);

  markDocumentDirty();
  setStatus(`${t("statusLoadedText")}: ${result.path} (${encodingLabel(state.textEncoding)})`);
  render();
}

async function actionSaveText() {
  closeTopMenu();
  const path = await invokeTauri("save_text_file", {
    document: state.document,
    encoding: state.textEncoding
  });
  if (!path) {
    return;
  }
  setStatus(`${t("statusSavedText")}: ${path} (${encodingLabel(state.textEncoding)})`);
}

async function actionLoadProject() {
  closeTopMenu();
  setStatus(t("statusOpeningProject"));
  const result = await invokeTauri("load_project");
  if (!result) {
    setStatus(t("statusReady"));
    return;
  }

  state.document = normalizeDocument(result.document);
  state.projectPath = typeof result.path === "string" ? result.path : null;
  state.selectedPath = [0];
  resetAutosaveTracking();
  setStatus(`${t("statusLoadedProject")}: ${result.path}`);
  render();
}

async function actionSaveProject() {
  closeTopMenu();
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

async function actionUndo() {
  closeTopMenu();
  if (runParagraphEditCommand("undo")) {
    setStatus(t("statusUndo"));
    renderStatus();
  }
}

async function actionRedo() {
  closeTopMenu();
  if (runParagraphEditCommand("redo")) {
    setStatus(t("statusRedo"));
    renderStatus();
  }
}

async function actionFindText() {
  closeTopMenu();
  const nextQuery = window.prompt(t("findPrompt"), state.find.query || "");
  if (nextQuery === null) {
    return;
  }

  const query = nextQuery.trim();
  if (!query) {
    state.find.query = "";
    state.find.lastPath = null;
    setStatus(t("statusReady"));
    return;
  }

  state.find.query = query;
  state.find.lastPath = null;

  const foundEntry = findParagraphEntry(query, { fromSelected: true });
  if (!foundEntry) {
    setStatus(`${t("statusFindNotFound")}: ${query}`);
    return;
  }

  applyFindResult(foundEntry, query);
}

async function actionFindNext() {
  closeTopMenu();
  const query = String(state.find.query || "").trim();
  if (!query) {
    await actionFindText();
    return;
  }

  const foundEntry = findParagraphEntry(query, {
    afterPath: state.find.lastPath || state.selectedPath
  });
  if (!foundEntry) {
    setStatus(`${t("statusFindNotFound")}: ${query}`);
    return;
  }

  applyFindResult(foundEntry, query);
}

async function actionSetTextEncoding(nextEncoding) {
  closeTopMenu();
  setTextEncoding(nextEncoding);
}

async function actionInsertImage() {
  closeTopMenu();
  const block = await invokeTauri("pick_image_file");
  if (!block) {
    return;
  }

  const normalized = normalizeBlock(block);
  if (normalized.kind !== "image") {
    throw new Error("Invalid image block payload");
  }

  state.document.blocks.push(normalized);
  state.selectedPath = [state.document.blocks.length - 1];
  markDocumentDirty();
  setStatus(t("statusImageInserted"));
  render();
}

async function actionAddChildDocument(targetPath = state.selectedPath) {
  closeTopMenu();
  const parent = getBlockByPath(targetPath);
  if (!parent) {
    return;
  }

  const children = ensureChildrenArray(parent);
  const childTitle = `${t("untitledEntry")} ${children.length + 1}`;
  children.push(makeParagraph("", null, childTitle));
  state.selectedPath = [...targetPath, children.length - 1];
  hideOutlineContextMenu();
  markDocumentDirty();
  setStatus(t("statusChildAdded"));
  render();
}

async function actionDeleteBlock(targetPath = state.selectedPath) {
  closeTopMenu();
  const path = Array.isArray(targetPath) ? [...targetPath] : [...state.selectedPath];
  if (path.length === 0) {
    return;
  }

  const parentPath = path.slice(0, -1);
  const deleteIndex = path[path.length - 1];
  const siblings = getChildListByParentPath(parentPath);
  if (!siblings || deleteIndex < 0 || deleteIndex >= siblings.length) {
    return;
  }

  siblings.splice(deleteIndex, 1);

  if (siblings.length > 0) {
    state.selectedPath = [...parentPath, Math.min(deleteIndex, siblings.length - 1)];
  } else if (parentPath.length > 0) {
    state.selectedPath = parentPath;
  } else {
    state.document.blocks.push(makeParagraph(""));
    state.selectedPath = [0];
  }

  hideOutlineContextMenu();
  ensureSelectedPath();
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

function handleGlobalPointerDown(event) {
  if (!(event.target instanceof Element)) {
    if (state.menu.active) {
      closeTopMenu();
    }
    if (state.outlineMenu.visible && state.tab === "editor") {
      hideOutlineContextMenu();
      renderOutline();
    }
    return;
  }

  if (state.menu.active && !event.target.closest(".menu-group")) {
    closeTopMenu();
  }

  if (!state.outlineMenu.visible || state.tab !== "editor") {
    return;
  }

  if (event.target.closest("#outline-context-menu") || event.target.closest(".outline-item")) {
    return;
  }

  hideOutlineContextMenu();
  renderOutline();
}

function handleGlobalShortcuts(event) {
  if (event.defaultPrevented) {
    return;
  }

  if (event.key === "Escape") {
    if (state.menu.active) {
      closeTopMenu();
    }
    if (state.outlineMenu.visible && state.tab === "editor") {
      hideOutlineContextMenu();
      renderOutline();
    }
    return;
  }

  if (isShortcutCaptureField(event.target)) {
    return;
  }

  const editingTarget = isEditableTarget(event.target);

  const shortcutActionId = findShortcutAction(event, {
    allowUndoRedo: !editingTarget
  });
  if (shortcutActionId) {
    event.preventDefault();
    runShortcutAction(shortcutActionId);
    return;
  }

  const key = event.key.toLowerCase();

  if ((key === "backspace" || key === "delete") && event.shiftKey && !editingTarget) {
    event.preventDefault();
    runActionSafely(actionDeleteBlock);
  }
}

function bindStaticEvents() {
  document.addEventListener("keydown", handleGlobalShortcuts);
  document.addEventListener("pointerdown", handleGlobalPointerDown, true);

  TOP_MENU_NAMES.forEach((name) => {
    const trigger = refs.menuTriggers[name];
    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      if (name === "settings") {
        switchTab("settings");
        return;
      }

      toggleTopMenu(name);
    });
  });

  refs.openEditor.addEventListener("click", () => {
    switchTab("editor");
  });

  refs.openSettings.addEventListener("click", () => {
    switchTab("settings");
  });

  refs.encodingUtf8.addEventListener("click", withErrorHandling(() => actionSetTextEncoding("utf-8")));
  refs.encodingUtf8Bom.addEventListener(
    "click",
    withErrorHandling(() => actionSetTextEncoding("utf-8-bom"))
  );
  refs.encodingUtf16Le.addEventListener(
    "click",
    withErrorHandling(() => actionSetTextEncoding("utf-16le"))
  );
  refs.encodingUtf16Be.addEventListener(
    "click",
    withErrorHandling(() => actionSetTextEncoding("utf-16be"))
  );
  refs.encodingEucKr.addEventListener(
    "click",
    withErrorHandling(() => actionSetTextEncoding("euc-kr"))
  );

  refs.newDocument.addEventListener("click", withErrorHandling(actionNewDocument));
  refs.openText.addEventListener("click", withErrorHandling(actionOpenText));
  refs.saveText.addEventListener("click", withErrorHandling(actionSaveText));
  refs.loadProject.addEventListener("click", withErrorHandling(actionLoadProject));
  refs.saveProject.addEventListener("click", withErrorHandling(actionSaveProject));
  refs.undo.addEventListener("click", withErrorHandling(actionUndo));
  refs.redo.addEventListener("click", withErrorHandling(actionRedo));
  refs.findText.addEventListener("click", withErrorHandling(actionFindText));
  refs.findNext.addEventListener("click", withErrorHandling(actionFindNext));
  refs.insertImage.addEventListener("click", withErrorHandling(actionInsertImage));
}

bindStaticEvents();
void initializeApp();
