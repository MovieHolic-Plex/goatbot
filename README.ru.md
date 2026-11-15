<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.pt-BR.md">Português</a> · <b>Русский</b> · <a href="README.ko.md">한국어</a></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">Бесплатные stealth-модели прямо на вашем рабочем столе.</h3>

GoatBot — быстрое и лёгкое десктопное приложение для чата. Сразу работает со **stealth-1**: скачайте, вставьте бесплатный ключ и общайтесь. В любой момент можно подключить любой другой OpenAI-совместимый API.

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Настоящий ответ stealth-1 в сборке для Linux</sub></p>

## Возможности

- **stealth-1 по умолчанию**: нужен только бесплатный API-ключ
- **Потоковые ответы** с Markdown, подсветкой кода, LaTeX и Mermaid
- **Локальная история**: переписка и ключи остаются на вашем устройстве
- **Маленький и быстрый**: нативная оболочка Tauri, 6 МБ для Windows и 13 МБ для macOS
- **Любой OpenAI-совместимый API**: endpoint, ключ и модель меняются в настройках
- **Маски промптов, экспорт в Markdown или картинку, более 20 языков**
- **macOS, Windows и Linux**

## Скачать

Все файлы — на странице [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest). Сборки пока не подписаны.

| Платформа | Файл |
|---|---|
| macOS (Apple Silicon + Intel) | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11 (x64) | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux (x86_64) | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## Быстрый старт

1. Скачайте и установите GoatBot для своей платформы.
2. Создайте бесплатный ключ на [stealthalpha.dev](https://stealthalpha.dev/signup/).
3. Откройте **Настройки** -> **API Key** и вставьте ключ.
4. Общайтесь. Модель уже выбрана: `stealth-1`.

> **Первый запуск неподписанной сборки**: macOS — правый клик по GoatBot.app -> Открыть (или `xattr -dr com.apple.quarantine /Applications/GoatBot.app`). Windows — SmartScreen -> Подробнее -> Выполнить в любом случае.

## Другой OpenAI-совместимый API

- **Настройки -> API Endpoint**: базовый URL **без** `/v1`, например `https://api.example.com` (GoatBot вызывает `<endpoint>/v1/chat/completions`).
- **Настройки -> API Key**: ключ этого сервиса.
- **Настройки -> Пользовательские модели**: например `-all,+my-model`, чтобы показать только `my-model`, затем выберите её в списке моделей.

## Сборка из исходников

```sh
yarn install
yarn app:build
```

## Благодарности и лицензия

GoatBot — форк [NextChat](https://github.com/ChatGPTNextWeb/NextChat) от участников NextChat, распространяется по лицензии MIT. Исходное уведомление об авторских правах (`Copyright (c) 2023-2025 NextChat`) сохранено в [LICENSE](LICENSE) и показано в приложении в разделе **Настройки -> About GoatBot**. Собственные изменения GoatBot распространяются по той же лицензии MIT.
