<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <b>Español</b> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">Modelos stealth gratis, directamente en tu escritorio.</h3>

GoatBot es una app de chat de escritorio rápida y ligera. Funciona con **stealth-1** desde el primer momento: descarga, pega una clave gratuita y chatea. Puedes apuntarla a cualquier otra API compatible con OpenAI cuando quieras.

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Respuesta real de stealth-1 en la versión de Linux</sub></p>

## Funciones

- **stealth-1 por defecto**: solo necesitas una clave API gratuita
- **Respuestas en streaming** con Markdown, resaltado de código, LaTeX y Mermaid
- **Historial local**: conversaciones y claves se quedan en tu equipo
- **Pequeña y rápida**: shell nativo Tauri, instaladores de unos 10 MB
- **Cualquier API compatible con OpenAI**: cambia endpoint, clave y modelo en Ajustes
- **Máscaras de prompt, exportación a Markdown o imagen, más de 20 idiomas**
- **macOS, Windows y Linux**

## Descarga

Todos los archivos están en [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest). Las compilaciones aún no están firmadas.

| Plataforma | Archivo |
|---|---|
| macOS (Apple Silicon + Intel) | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11 (x64) | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux (x86_64) | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## Inicio rápido

1. Descarga e instala GoatBot para tu plataforma.
2. Crea una clave gratuita en [stealthalpha.dev](https://stealthalpha.dev/signup/).
3. Abre **Ajustes** -> **API Key** y pega la clave.
4. A chatear. El modelo ya es `stealth-1`.

> **Primer arranque de una compilación sin firmar**: en macOS, clic derecho en GoatBot.app -> Abrir (o `xattr -dr com.apple.quarantine /Applications/GoatBot.app`). En Windows: SmartScreen -> Más información -> Ejecutar de todas formas.

## Usar otra API compatible con OpenAI

- **Ajustes -> API Endpoint**: la URL base **sin** `/v1`, p. ej. `https://api.example.com` (GoatBot envía las peticiones a `<endpoint>/v1/chat/completions`).
- **Ajustes -> API Key**: la clave de ese servicio.
- **Ajustes -> Modelos personalizados**: p. ej. `-all,+my-model` para mostrar solo `my-model` y elegirlo en el selector.

## Compilar desde el código

```sh
yarn install
yarn app:build
```

## Créditos y licencia

GoatBot es un fork de [NextChat](https://github.com/ChatGPTNextWeb/NextChat), de los colaboradores de NextChat, publicado bajo la licencia MIT. El aviso de copyright original (`Copyright (c) 2023-2025 NextChat`) se conserva en [LICENSE](LICENSE) y aparece en la app en **Ajustes -> About GoatBot**. Los cambios propios de GoatBot se publican bajo la misma licencia MIT.
