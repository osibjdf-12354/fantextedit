# FanText Editor (Tauri)

Scrivener-like desktop text editor prototype built with **Tauri + Rust**.

## Current feature set

- Text file load (`.txt`, `.md`)
- Image insertion (`png`, `jpg`, `jpeg`, `bmp`, `gif`, `webp`, `svg`)
- Paragraph-level formatting (bold, italic, underline, strike, heading, size)
- Text export (`.txt`)
- Project save/load (`.fte`, JSON)
- Debounced autosave while editing with restore on next launch (`*.autosave.fte`)
- Settings tab with Korean/English switch (default: Korean)
- Windows-ready desktop packaging with Tauri bundle

## Project layout

- `src-tauri/`: Tauri Rust backend and app config
- `ui/`: HTML/CSS/JS frontend

## Prerequisites

1. Rust toolchain
2. Tauri CLI

```bash
cargo install tauri-cli --version "^2"
```

If `cargo` command is not found in your shell:

```bash
source "$HOME/.cargo/env"
```

Linux dev dependencies (Ubuntu/Debian example):

```bash
sudo apt update
sudo apt install -y pkg-config libgtk-3-dev libwebkit2gtk-4.1-dev librsvg2-dev
```

## Run (dev)

```bash
cargo tauri dev
```

If you want to run without the Tauri CLI:

```bash
cargo run --manifest-path src-tauri/Cargo.toml
```

## Build distributables

```bash
cargo tauri build
```

Bundle output path:

- `src-tauri/target/release/bundle/`

## Windows packaging notes

- Build on Windows for the most stable installer output (`.msi` / `.exe`)
- Install Visual Studio Build Tools (Desktop development with C++)
- `webviewInstallMode` is set to `downloadBootstrapper` so WebView2 bootstrap install is supported on Windows 10/11
- CI workflow (`.github/workflows/windows-compat.yml`) builds installers on both `windows-2019` and `windows-2022`
