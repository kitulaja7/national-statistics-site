// STATISTIKA — tampilan halaman: beranda + satu halaman per topik.
//
// Setiap halaman dirender dari data.js: kartu angka, grafik SVG, tabel,
// dan catatan sumber. Tidak ada konten yang ditulis di luar data.js,
// supaya angka di grafik, tabel, dan kartu selalu sama.

import { SITE, TOPICS, HOME_KPIS, topicById } from "./data.js";
import { barChart, lineChart } from "./charts.js";

function el(tag, attrs, children) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") n.className = v;
    else if (k === "href") n.setAttribute("href", v);
    else n.setAttribute(k, v);
  }
  for (const c of children || []) {
    if (c === null || c === undefined) continue;
    n.append(c.nodeType ? c : document.createTextNode(String(c)));
  }
  return n;
}

function kpiCard(k) {
  const a = el("a", { class: "kpi", href: k.href || "#" });
  a.append(
    el("span", { class: "kpi-label" }, [k.label]),
    el("span", { class: "kpi-value" }, [k.value]),
    el("span", { class: "kpi-sub" }, [k.sub]),
  );
  return a;
}

function dataTable(t) {
  const table = el("table", { class: "data" });
  const thead = el("thead", {}, [
    el("tr", {}, t.headers.map((h) => el("th", {}, [h]))),
  ]);
  const tbody = el("tbody", {}, t.rows.map((r) => el("tr", {}, r.map((c) => el("td", {}, [c])))));
  table.append(thead, tbody);
  return table;
}

function sourceLine(text) {
  return el("p", { class: "source" }, ["Sumber: ", text, "."]);
}

function navBar(activeId) {
  const nav = el("nav", { class: "topics", "aria-label": "Topik" });
  nav.append(el("a", { class: activeId === null ? "on" : "", href: "#/" }, ["Beranda"]));
  for (const t of TOPICS) {
    nav.append(
      el("a", { class: t.id === activeId ? "on" : "", href: "#/" + t.id }, [t.title]),
    );
  }
  return nav;
}

function pageHead(activeId) {
  const head = el("header", { class: "mast" });
  head.append(
    el("div", { class: "mast-top" }, [
      el("a", { class: "brand", href: "#/" }, [SITE.name]),
      el("span", { class: "mast-tag" }, [SITE.tagline]),
      el("span", { class: "mast-date" }, ["Diperbarui " + SITE.updated]),
    ]),
    navBar(activeId),
  );
  return head;
}

function pageFoot() {
  const foot = el("footer", { class: "foot" });
  foot.append(
    el("p", {}, [
      "STATISTIKA adalah situs independen yang merangkum angka resmi. Semua angka berasal dari " +
      "publikasi Badan Pusat Statistik (BPS) dan dicantumkan beserta tahun serta sumbernya. " +
      "Situs ini bukan situs resmi BPS dan tidak berafiliasi dengannya.",
    ]),
    el("p", {}, [
      "Angka yang dihitung dari angka terbitan diberi label “dihitung”. " +
      "Rilis BPS dapat dibaca di bps.go.id.",
    ]),
  );
  return foot;
}

// ---- Beranda ----
export function renderHome() {
  const root = el("div", {});
  root.append(pageHead(null));
  const hero = el("section", { class: "hero" });
  hero.append(
    el("p", { class: "eyebrow" }, ["INDONESIA · DATA RESMI · 2020–2025"]),
    el("h1", {}, ["Indonesia dalam angka."]),
    el("p", { class: "lede" }, [SITE.intro]),
  );
  root.append(hero);
  const strip = el("section", { class: "kpis" });
  for (const k of HOME_KPIS) strip.append(kpiCard(k));
  root.append(strip);
  // Sorotan: pertumbuhan ekonomi sebagai grafik garis.
  const growth = topicById("ekonomi");
  const feat = el("section", { class: "feature" });
  // Tanpa paragraf pengantar: judul + grafik + keterangan sumber sudah
  // cukup, dan ruang vertikal dipakai supaya grafik muat utuh di 800px.
  feat.append(el("h2", {}, ["Sorotan: ekonomi tumbuh di atas 5%"]));
  const fig = el("figure", { class: "chartbox" });
  fig.append(
    // Grafik sorotan dibuat pendek (120) supaya muat utuh di tangkapan
    // layar 1280×800 bersama keenam kartu KPI di atasnya, termasuk
    // keterangan sumber di bawah grafik.
    lineChart(growth.chart.points, { title: growth.chart.title, unit: "%", height: 120 }),
    el("figcaption", {}, [growth.chart.title + " — Sumber: BPS, 2020–2025."]),
  );
  feat.append(fig);
  root.append(feat);
  // Indeks topik: tujuh kartu, masing-masing satu angka kunci.
  const idx = el("section", { class: "index" });
  idx.append(el("h2", {}, ["Jelajahi berdasarkan topik"]));
  const grid = el("div", { class: "cards" });
  for (const t of TOPICS) {
    const card = el("a", { class: "card", href: "#/" + t.id });
    card.append(
      el("span", { class: "card-title" }, [t.title]),
      el("span", { class: "card-fig" }, [t.short]),
      el("span", { class: "card-go" }, ["Lihat data →"]),
    );
    grid.append(card);
  }
  idx.append(grid);
  root.append(idx);
  const how = el("section", { class: "how" });
  how.append(
    el("h2", {}, ["Cara membaca angka di situs ini"]),
    el("p", {}, [
      "Setiap angka di STATISTIKA membawa sumber dan tahunnya — di kartu, di grafik, " +
      "dan di tabel. Angka tahun 2024 dipakai sebagai tahun lengkap terbaru untuk " +
      "sebagian besar indikator; angka 2025 dipakai di mana BPS sudah merilisnya. " +
      "Klik sebuah topik untuk melihat grafik, tabel lengkap, dan catatan penjelasnya.",
    ]),
  );
  root.append(how);
  root.append(pageFoot());
  return root;
}

// ---- Halaman topik ----
export function renderTopic(topic) {
  const root = el("div", {});
  root.append(pageHead(topic.id));
  const crumb = el("p", { class: "crumb" });
  crumb.append(el("a", { href: "#/" }, ["Beranda"]), " / ", topic.title);
  root.append(crumb);
  const head = el("section", { class: "thead" });
  head.append(
    el("h1", {}, [topic.title]),
    el("p", { class: "lede" }, [topic.short + ". Semua angka di halaman ini dari " + topic.source + "."]),
  );
  root.append(head);
  const strip = el("section", { class: "kpis four" });
  for (const k of topic.kpis) strip.append(kpiCard({ ...k, href: "#/" + topic.id }));
  root.append(strip);
  const fig = el("figure", { class: "chartbox" });
  fig.append(
    barChart(topic.chart.points, { title: topic.chart.title, unit: topic.chart.unit }),
    el("figcaption", {}, [topic.chart.title + " — Sumber: " + topic.source + "."]),
  );
  const chartSec = el("section", { class: "feature" });
  chartSec.append(el("h2", {}, [topic.chart.title]), fig);
  root.append(chartSec);
  const tabSec = el("section", { class: "feature" });
  tabSec.append(el("h2", {}, ["Tabel lengkap"]), dataTable(topic.table));
  root.append(tabSec);
  const note = el("section", { class: "how" });
  note.append(el("h2", {}, ["Apa artinya"]), el("p", {}, [topic.note]));
  root.append(note);
  root.append(sourceLine(topic.source));
  const i = TOPICS.indexOf(topic);
  const prev = TOPICS[(i - 1 + TOPICS.length) % TOPICS.length];
  const next = TOPICS[(i + 1) % TOPICS.length];
  const pager = el("nav", { class: "pager" });
  pager.append(
    el("a", { href: "#/" + prev.id }, ["← " + prev.title]),
    el("a", { href: "#/" + next.id }, [next.title + " →"]),
  );
  root.append(pager);
  root.append(pageFoot());
  return root;
}

export function renderNotFound() {
  const root = el("div", {});
  root.append(pageHead(null));
  root.append(
    el("section", { class: "hero" }, [
      el("h1", {}, ["Halaman tidak ditemukan."]),
      el("p", { class: "lede" }, [
        "Topik yang Anda cari tidak ada. Kembali ke beranda atau pilih salah satu dari tujuh topik di atas.",
      ]),
    ]),
  );
  root.append(pageFoot());
  return root;
}
