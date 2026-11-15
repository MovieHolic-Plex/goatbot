(async () => {
  const KEY = "__GOATBOT_QA_KEY__";
  const MESSAGE = "__GOATBOT_QA_MESSAGE__";
  const REPORT = "http://127.0.0.1:8765/result";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const log = [];
  const note = (m) => log.push(`${new Date().toISOString()} ${m}`);
  const report = async (body) => {
    const http = window.__TAURI__ && window.__TAURI__.http;
    const payload = { ...body, log, href: location.href, title: document.title };
    try {
      await http.fetch(REPORT, { method: "POST", body: http.Body.json(payload) });
    } catch (e) {
      console.error("report failed", e);
    }
  };
  const setValue = (el, value) => {
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, "value").set.call(el, value);
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  };
  const near = (el, text) => {
    let n = el;
    for (let i = 0; i < 6 && n; i++, n = n.parentElement) if (n.textContent.includes(text)) return true;
    return false;
  };
  const waitFor = async (fn, ms = 30000) => {
    for (let t = 0; t < ms; t += 500) {
      const v = fn();
      if (v) return v;
      await sleep(500);
    }
    return null;
  };
  try {
    location.hash = "#/settings";
    const keyInput = await waitFor(() =>
      [...document.querySelectorAll("input")].find((i) => i.type === "password" && near(i, "API Key")),
    );
    const endpointInput = [...document.querySelectorAll("input")].find((i) => i.type !== "password" && near(i, "Endpoint"));
    if (!keyInput) throw new Error("API key input not found in settings");
    note(`endpoint field = ${endpointInput ? endpointInput.value : "missing"}`);
    setValue(keyInput, KEY);
    await sleep(800);
    location.hash = "#/chat";
    const ta = await waitFor(() => document.querySelector("#chat-input") || document.querySelector("textarea"));
    if (!ta) throw new Error("chat input not found");
    ta.focus();
    setValue(ta, MESSAGE);
    await sleep(300);
    ta.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true }));
    note("sent");
    const items = () => [...document.querySelectorAll('[class*="chat-message-item"]')];
    let last = "";
    let stable = 0;
    for (let t = 0; t < 180; t++) {
      await sleep(1000);
      const all = items();
      const reply = all.length ? all[all.length - 1].innerText.trim() : "";
      if (reply && reply === last && !reply.includes(MESSAGE)) stable++;
      else stable = 0;
      last = reply;
      if (stable >= 4) break;
    }
    const header = document.body.innerText.match(/stealth-1/g);
    await report({
      ok: Boolean(last) && !last.includes(MESSAGE),
      endpoint: endpointInput ? endpointInput.value : null,
      reply: last,
      messageCount: items().length,
      stealthMentions: header ? header.length : 0,
    });
  } catch (e) {
    note(`error ${e && e.message}`);
    await report({ ok: false, error: String(e && e.message), page: document.body.innerText.slice(0, 600) });
  }
})();
