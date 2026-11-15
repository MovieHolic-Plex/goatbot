<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><b>English</b> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">Free stealth models, right on your desktop.</h3>

GoatBot is a fast, lightweight desktop chat app. It talks to **stealth-1** out of the box: download, paste a free key, chat. Point it at any other OpenAI-compatible API whenever you like.

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Real reply from stealth-1 in the Linux build</sub></p>

## Features

- **stealth-1 by default** - no setup beyond a free API key
- **Streaming replies** with Markdown, code highlighting, LaTeX and Mermaid
- **Local history** - conversations and keys stay on your device
- **Tiny and fast** - native Tauri shell, installers around 10 MB
- **Any OpenAI-compatible API** - change the endpoint, key and model in Settings
- **Prompt masks, export to Markdown or image, 20+ UI languages**
- **macOS, Windows and Linux**

## Download

All files are on the [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest) page. Builds are not code-signed yet.

| Platform | File |
|---|---|
| macOS (Apple Silicon + Intel) | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11 (x64) | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux (x86_64) | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## Quick start

1. Download and install GoatBot for your platform.
2. Create a free key at [stealthalpha.dev](https://stealthalpha.dev/signup/).
3. Open **Settings** -> **API Key**, paste the key.
4. Start chatting. The model is already set to `stealth-1`.

> **First launch of an unsigned build** - macOS: right-click GoatBot.app -> Open (or run `xattr -dr com.apple.quarantine /Applications/GoatBot.app`). Windows: SmartScreen -> More info -> Run anyway.

## Use another OpenAI-compatible API

- **Settings -> API Endpoint**: the base URL **without** `/v1`, e.g. `https://api.example.com` (GoatBot calls `<endpoint>/v1/chat/completions`).
- **Settings -> API Key**: that service's key.
- **Settings -> Custom Models**: e.g. `-all,+my-model` to show only `my-model`, then pick it in the model selector.

## Build from source

```sh
yarn install
yarn app:build
```

## Credits & license

GoatBot is a fork of [NextChat](https://github.com/ChatGPTNextWeb/NextChat) by the NextChat contributors, released under the MIT License. The original copyright notice (`Copyright (c) 2023-2025 NextChat`) is kept in [LICENSE](LICENSE) and shown in the app under **Settings -> About GoatBot**. GoatBot's own changes are released under the same MIT License.
