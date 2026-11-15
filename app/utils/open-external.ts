export function openExternal(url: string) {
  const tauri = (window as any).__TAURI__;
  if (tauri?.shell?.open) {
    tauri.shell.open(url);
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
