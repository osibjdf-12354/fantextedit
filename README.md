# FanText Editor (Tauri)

**Tauri + Rust** 기반의 데스크톱 텍스트 에디터 프로토타입입니다.

## 현재 기능

- 텍스트 파일 불러오기 (`.txt`, `.md`)
- 이미지 삽입 (`png`, `jpg`, `jpeg`, `bmp`, `gif`, `webp`, `svg`)
- 문단 단위 서식 (굵게, 기울임, 밑줄, 취소선, 제목, 글자 크기)
- 텍스트 내보내기 (`.txt`)
- 프로젝트 저장/불러오기 (`.fte`, JSON)
- 편집 중 디바운스 자동저장 + 다음 실행 시 복구 (`*.autosave.fte`)
- 설정 탭 한국어/영어 전환 (기본값: 한국어)
- 메뉴 단축키 사용자 지정
- 텍스트 인코딩 선택 (UTF-8, UTF-8 BOM, UTF-16 LE/BE, EUC-KR)
- Tauri 번들을 통한 Windows 패키징 지원

## 프로젝트 구조

- `src-tauri/`: Tauri Rust 백엔드 및 앱 설정
- `ui/`: HTML/CSS/JS 프런트엔드

## 사전 준비

1. Rust 툴체인
2. Tauri CLI

```bash
cargo install tauri-cli --version "^2"
```

셸에서 `cargo` 명령을 찾지 못하면:

```bash
source "$HOME/.cargo/env"
```

Linux 개발 의존성 (Ubuntu/Debian 예시):

```bash
sudo apt update
sudo apt install -y pkg-config libgtk-3-dev libwebkit2gtk-4.1-dev librsvg2-dev
```

## 실행 (개발)

```bash
cargo tauri dev
```

Tauri CLI 없이 실행하려면:

```bash
cargo run --manifest-path src-tauri/Cargo.toml
```

## 배포 빌드

```bash
cargo tauri build
```

번들 출력 경로:

- `src-tauri/target/release/bundle/`

## Windows 패키징 참고

- 가장 안정적인 설치 파일(`.msi` / `.exe`) 생성을 위해 Windows에서 빌드 권장
- Visual Studio Build Tools(Desktop development with C++) 설치 필요
- `webviewInstallMode`를 `downloadBootstrapper`로 설정하여 Windows 10/11에서 WebView2 부트스트랩 설치 지원
- CI 워크플로우 (`.github/workflows/windows-compat.yml`)에서 `windows-2019`, `windows-2022` 모두 설치 파일 빌드 검증
