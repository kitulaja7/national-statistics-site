// STATISTIKA — router hash + mount.
//
// Rute: "#/" beranda, "#/penduduk", "#/ekonomi", "#/harga", "#/kerja",
// "#/miskin", "#/dagang", "#/manusia". Setiap rute dirender dari data.js;
// tidak ada fetch, tidak ada network.

import { topicById } from "./data.js";
import { renderHome, renderTopic, renderNotFound } from "./views.js";

const mount = document.getElementById("app");

function route() {
  const hash = window.location.hash || "#/";
  const id = hash.replace(/^#\/?/, "").split("/")[0];
  let node;
  let title = "STATISTIKA — Angka resmi Indonesia";
  if (!id) {
    node = renderHome();
  } else {
    const topic = topicById(id);
    if (topic) {
      node = renderTopic(topic);
      title = topic.title + " — STATISTIKA";
    } else {
      node = renderNotFound();
      title = "Tidak ditemukan — STATISTIKA";
    }
  }
  mount.replaceChildren(node);
  document.title = title;
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);

// Klik tautan ke rute yang sedang aktif tidak memicu hashchange; render
// ulang supaya halaman selalu segar.
document.addEventListener("click", (e) => {
  const a = e.target.closest ? e.target.closest('a[href^="#/"]') : null;
  if (a && a.getAttribute("href") === window.location.hash) route();
});

route();
