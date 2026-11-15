<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <b>Português</b> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">Modelos stealth grátis, direto no seu desktop.</h3>

GoatBot é um app de chat para desktop rápido e leve. Já vem conectado ao **stealth-1**: baixe, cole uma chave grátis e converse. Dá para apontar para qualquer outra API compatível com OpenAI quando quiser.

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Resposta real do stealth-1 na versão Linux</sub></p>

## Recursos

- **stealth-1 por padrão**: basta uma chave de API grátis
- **Respostas em streaming** com Markdown, destaque de código, LaTeX e Mermaid
- **Histórico local**: conversas e chaves ficam no seu dispositivo
- **Pequeno e rápido**: shell nativo Tauri, 6 MB no Windows e 13 MB no macOS
- **Qualquer API compatível com OpenAI**: troque endpoint, chave e modelo nas Configurações
- **Máscaras de prompt, exportação em Markdown ou imagem, mais de 20 idiomas**
- **macOS, Windows e Linux**

## Download

Todos os arquivos estão em [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest). As builds ainda não são assinadas.

| Plataforma | Arquivo |
|---|---|
| macOS (Apple Silicon + Intel) | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11 (x64) | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux (x86_64) | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## Início rápido

1. Baixe e instale o GoatBot para sua plataforma.
2. Crie uma chave grátis em [stealthalpha.dev](https://stealthalpha.dev/signup/).
3. Abra **Configurações** -> **API Key** e cole a chave.
4. Converse. O modelo já está em `stealth-1`.

> **Primeira execução de uma build não assinada**: no macOS, clique com o botão direito em GoatBot.app -> Abrir (ou `xattr -dr com.apple.quarantine /Applications/GoatBot.app`). No Windows: SmartScreen -> Mais informações -> Executar assim mesmo.

## Usar outra API compatível com OpenAI

- **Configurações -> API Endpoint**: a URL base **sem** `/v1`, ex. `https://api.example.com` (o GoatBot chama `<endpoint>/v1/chat/completions`).
- **Configurações -> API Key**: a chave desse serviço.
- **Configurações -> Modelos personalizados**: ex. `-all,+my-model` para mostrar só `my-model` e escolhê-lo no seletor.

## Compilar a partir do código

```sh
yarn install
yarn app:build
```

## Créditos e licença

GoatBot é um fork do [NextChat](https://github.com/ChatGPTNextWeb/NextChat), dos colaboradores do NextChat, publicado sob a licença MIT. O aviso de copyright original (`Copyright (c) 2023-2025 NextChat`) está mantido em [LICENSE](LICENSE) e aparece no app em **Configurações -> About GoatBot**. As alterações do GoatBot são publicadas sob a mesma licença MIT.
