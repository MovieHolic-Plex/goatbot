<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <b>Deutsch</b> · <a href="README.pt-BR.md">Português</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">Kostenlose Stealth-Modelle, direkt auf deinem Desktop.</h3>

GoatBot ist eine schnelle, schlanke Desktop-Chat-App. Sie spricht von Haus aus mit **stealth-1**: herunterladen, kostenlosen Schlüssel einfügen, loschatten. Jede andere OpenAI-kompatible API lässt sich jederzeit eintragen.

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Echte Antwort von stealth-1 im Linux-Build</sub></p>

## Funktionen

- **stealth-1 als Standard**: nur ein kostenloser API-Schlüssel nötig
- **Streaming-Antworten** mit Markdown, Syntax-Highlighting, LaTeX und Mermaid
- **Lokaler Verlauf**: Unterhaltungen und Schlüssel bleiben auf deinem Gerät
- **Klein und schnell**: native Tauri-Shell, Installer um 10 MB
- **Jede OpenAI-kompatible API**: Endpoint, Schlüssel und Modell in den Einstellungen ändern
- **Prompt-Masken, Export als Markdown oder Bild, über 20 Sprachen**
- **macOS, Windows und Linux**

## Download

Alle Dateien liegen unter [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest). Die Builds sind noch nicht signiert.

| Plattform | Datei |
|---|---|
| macOS (Apple Silicon + Intel) | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11 (x64) | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux (x86_64) | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## Schnellstart

1. GoatBot für deine Plattform herunterladen und installieren.
2. Kostenlosen Schlüssel auf [stealthalpha.dev](https://stealthalpha.dev/signup/) erstellen.
3. **Einstellungen** -> **API Key** öffnen und den Schlüssel einfügen.
4. Loslegen. Das Modell ist bereits `stealth-1`.

> **Erster Start eines unsignierten Builds**: macOS: Rechtsklick auf GoatBot.app -> Öffnen (oder `xattr -dr com.apple.quarantine /Applications/GoatBot.app`). Windows: SmartScreen -> Weitere Informationen -> Trotzdem ausführen.

## Eine andere OpenAI-kompatible API nutzen

- **Einstellungen -> API Endpoint**: die Basis-URL **ohne** `/v1`, z. B. `https://api.example.com` (GoatBot ruft `<endpoint>/v1/chat/completions` auf).
- **Einstellungen -> API Key**: der Schlüssel dieses Dienstes.
- **Einstellungen -> Benutzerdefinierte Modelle**: z. B. `-all,+my-model`, um nur `my-model` anzuzeigen, dann im Modellwähler auswählen.

## Aus dem Quellcode bauen

```sh
yarn install
yarn app:build
```

## Danksagung & Lizenz

GoatBot ist ein Fork von [NextChat](https://github.com/ChatGPTNextWeb/NextChat) der NextChat-Mitwirkenden, veröffentlicht unter der MIT-Lizenz. Der ursprüngliche Copyright-Hinweis (`Copyright (c) 2023-2025 NextChat`) bleibt in [LICENSE](LICENSE) erhalten und wird in der App unter **Einstellungen -> About GoatBot** angezeigt. GoatBots eigene Änderungen stehen unter derselben MIT-Lizenz.
