<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ru.md">Русский</a> · <b>한국어</b></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">무료 stealth 모델을 데스크톱에서 바로.</h3>

GoatBot 은 빠르고 가벼운 데스크톱 채팅 앱입니다. 처음부터 **stealth-1** 에 연결되어 있어서, 내려받고 무료 키만 붙여 넣으면 바로 대화할 수 있습니다. 다른 OpenAI 호환 API 로도 언제든 바꿀 수 있습니다.

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Linux 빌드에서 받은 stealth-1 의 실제 답변</sub></p>

## 기능

- **기본 모델 stealth-1**: 무료 API 키 하나면 끝
- **스트리밍 답변**, Markdown·코드 하이라이트·LaTeX·Mermaid 지원
- **로컬 기록**: 대화와 키는 내 기기에만 저장
- **작고 빠름**: 네이티브 Tauri, Windows 6 MB · macOS 13 MB
- **모든 OpenAI 호환 API**: 설정에서 엔드포인트·키·모델 변경
- **프롬프트 마스크, Markdown/이미지 내보내기, 20개 이상 UI 언어**
- **macOS, Windows, Linux**

## 다운로드

모든 파일은 [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest) 페이지에 있습니다. 아직 코드 서명은 되어 있지 않습니다.

| 플랫폼 | 파일 |
|---|---|
| macOS (Apple Silicon + Intel) | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11 (x64) | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux (x86_64) | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## 빠른 시작

1. 내 플랫폼용 GoatBot 을 내려받아 설치합니다.
2. [stealthalpha.dev](https://stealthalpha.dev/signup/) 에서 무료 키를 만듭니다.
3. **설정** -> **API Key** 에 키를 붙여 넣습니다.
4. 대화를 시작합니다. 모델은 이미 `stealth-1` 입니다.

> **서명되지 않은 빌드 첫 실행**: macOS 는 GoatBot.app 우클릭 -> 열기 (또는 `xattr -dr com.apple.quarantine /Applications/GoatBot.app`). Windows 는 SmartScreen -> 추가 정보 -> 실행.

## 다른 OpenAI 호환 API 쓰기

- **설정 -> API Endpoint**: `/v1` 을 **빼고** 기본 URL 만, 예: `https://api.example.com` (GoatBot 은 `<endpoint>/v1/chat/completions` 를 호출합니다).
- **설정 -> API Key**: 그 서비스의 키.
- **설정 -> 사용자 정의 모델**: 예 `-all,+my-model` 로 `my-model` 만 보이게 한 뒤 모델 선택기에서 고릅니다.

## 소스에서 빌드

```sh
yarn install
yarn app:build
```

## 크레딧 및 라이선스

GoatBot 은 NextChat 기여자들이 만든 [NextChat](https://github.com/ChatGPTNextWeb/NextChat) (MIT 라이선스) 의 포크입니다. 원본 저작권 고지 (`Copyright (c) 2023-2025 NextChat`) 는 [LICENSE](LICENSE) 에 그대로 남아 있고, 앱의 **설정 -> About GoatBot** 에도 표시됩니다. GoatBot 자체 변경분도 같은 MIT 라이선스로 공개합니다.
