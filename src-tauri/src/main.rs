// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod stream;

use std::sync::atomic::{AtomicBool, Ordering};

static QA_STARTED: AtomicBool = AtomicBool::new(false);

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![stream::stream_fetch])
    .plugin(tauri_plugin_window_state::Builder::default().build())
    .on_page_load(|window, _payload| {
      let Ok(path) = std::env::var("GOATBOT_QA_JS") else { return };
      if QA_STARTED.swap(true, Ordering::SeqCst) {
        return;
      }
      let Ok(js) = std::fs::read_to_string(path) else { return };
      std::thread::spawn(move || {
        std::thread::sleep(std::time::Duration::from_secs(4));
        let _ = window.eval(&js);
      });
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
