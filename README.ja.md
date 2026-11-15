<p align="center"><img src="docs/images/banner.png" alt="GoatBot" width="100%"></p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-CN.md">简体中文</a> · <b>日本語</b> · <a href="README.es.md">Español</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a></p>

<p align="center"><a href="https://github.com/MovieHolic-Plex/goatbot/releases/latest"><img src="https://img.shields.io/github/v/release/MovieHolic-Plex/goatbot?style=for-the-badge&color=111111&label=release" alt="release"></a> <a href="https://github.com/MovieHolic-Plex/goatbot/releases"><img src="https://img.shields.io/github/downloads/MovieHolic-Plex/goatbot/total?style=for-the-badge&color=111111" alt="downloads"></a> <img src="https://img.shields.io/badge/model-stealth--1-111111?style=for-the-badge" alt="stealth-1"> <img src="https://img.shields.io/badge/macOS%20%7C%20Windows%20%7C%20Linux-111111?style=for-the-badge" alt="platforms"> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-111111?style=for-the-badge" alt="MIT"></a></p>

<h3 align="center">無料の stealth モデルを、デスクトップで。</h3>

GoatBot は高速で軽量なデスクトップチャットアプリです。最初から **stealth-1** に接続済み：ダウンロードして無料キーを貼り付けるだけ。ほかの OpenAI 互換 API にもいつでも切り替えられます。

<p align="center"><img src="docs/images/goatbot-chat.png" alt="GoatBot" width="88%"><br><sub>Linux 版での stealth-1 の実際の返信</sub></p>

## 機能

- **デフォルトで stealth-1**：必要なのは無料の API キーだけ
- **ストリーミング返信**、Markdown・コードハイライト・LaTeX・Mermaid 対応
- **履歴はローカル保存**：会話とキーは端末の外に出ません
- **小さくて速い**：ネイティブ Tauri、Windows 版 6 MB・macOS 版 13 MB
- **OpenAI 互換 API なら何でも**：設定でエンドポイント・キー・モデルを変更
- **プロンプトマスク、Markdown／画像エクスポート、20 以上の UI 言語**
- **macOS・Windows・Linux**

## ダウンロード

すべてのファイルは [Releases](https://github.com/MovieHolic-Plex/goatbot/releases/latest) にあります。現在のビルドはコード署名されていません。

| プラットフォーム | ファイル |
|---|---|
| macOS（Apple Silicon + Intel） | [`GoatBot-0.1.0-mac-universal.dmg`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.dmg) · [`GoatBot-0.1.0-mac-universal.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-mac-universal.zip) |
| Windows 10/11（x64） | [`GoatBot-0.1.0-win-x64-setup.exe`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-setup.exe) · [`GoatBot-0.1.0-win-x64.msi`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64.msi) · [`GoatBot-0.1.0-win-x64-portable.zip`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-win-x64-portable.zip) |
| Linux（x86_64） | [`GoatBot-0.1.0-linux-x86_64.AppImage`](https://github.com/MovieHolic-Plex/goatbot/releases/latest/download/GoatBot-0.1.0-linux-x86_64.AppImage) |

## クイックスタート

1. お使いのプラットフォーム向けの GoatBot をインストール。
2. [stealthalpha.dev](https://stealthalpha.dev/signup/) で無料キーを作成。
3. **設定** -> **API Key** にキーを貼り付け。
4. チャット開始。モデルは `stealth-1` に設定済みです。

> **未署名ビルドの初回起動**：macOS は GoatBot.app を右クリック -> 開く（または `xattr -dr com.apple.quarantine /Applications/GoatBot.app`）。Windows は SmartScreen -> 詳細情報 -> 実行。

## ほかの OpenAI 互換 API を使う

- **設定 -> API Endpoint**：`/v1` を**含まない**ベース URL（例 `https://api.example.com`）。GoatBot は `<endpoint>/v1/chat/completions` を呼び出します。
- **設定 -> API Key**：そのサービスのキー。
- **設定 -> カスタムモデル**：例 `-all,+my-model` で `my-model` のみ表示し、モデル選択で選びます。

## ソースからビルド

```sh
yarn install
yarn app:build
```

## クレジットとライセンス

GoatBot は NextChat コントリビューターによる [NextChat](https://github.com/ChatGPTNextWeb/NextChat)（MIT ライセンス）のフォークです。元の著作権表示（`Copyright (c) 2023-2025 NextChat`）は [LICENSE](LICENSE) に保持され、アプリの **設定 -> About GoatBot** にも表示されます。GoatBot 独自の変更も同じ MIT ライセンスで公開しています。
