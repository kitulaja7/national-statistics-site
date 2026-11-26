// STATISTIKA — grafik SVG buatan sendiri, tanpa pustaka.
//
// Bar chart vertikal dengan nilai di atas tiap batang; batang tahun
// terakhir disorot warna aksen. Semua angka datang dari data.js, jadi
// grafik dan tabel di satu halaman selalu cocok.

const NS = "http://www.w3.org/2000/svg";

function el(tag, attrs, text) {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs || {})) n.setAttribute(k, v);
  if (text !== undefined && text !== null) n.textContent = text;
  return n;
}

// Format angka Indonesia: koma desimal, titik ribuan.
export function fmtNum(v) {
  const s = String(v);
  const [a, b] = s.split(".");
  const int = a.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return b === undefined ? int : int + "," + b;
}

export function fmtVal(v, unit) {
  if (unit === "%") return fmtNum(v) + "%";
  return fmtNum(v);
}

// Bar chart vertikal. points: [{label, value}]. Mengembalikan <svg>.
export function barChart(points, opts) {
  const o = Object.assign(
    // Tinggi 170: grafik batang muat utuh di tangkapan layar 1280×800
    // bersama masthead, judul, dan kartu KPI di atasnya.
    { width: 760, height: 170, unit: "", color: "#0e6b5c", hi: "#c2402a" },
    opts || {},
  );
  const W = o.width;
  const H = o.height;
  const padL = 46;
  const padR = 10;
  const padT = 30;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const minV = Math.min(0, ...points.map((p) => p.value));
  const maxV = Math.max(...points.map((p) => p.value));
  const span = maxV - minV || 1;
  const y = (v) => padT + plotH * (1 - (v - minV) / span);
  const zeroY = y(0);
  const n = points.length;
  const slot = plotW / n;
  const barW = Math.min(64, slot * 0.58);
  const svg = el("svg", {
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": o.title || "Grafik batang",
    class: "chart",
  });
  // Garis nol + garis grid atas.
  svg.appendChild(el("line", { x1: padL, y1: y(maxV), x2: W - padR, y2: y(maxV), class: "grid" }));
  svg.appendChild(el("line", { x1: padL, y1: zeroY, x2: W - padR, y2: zeroY, class: "axis" }));
  // Label nilai maksimum di kiri (garis atas) dan nilai minimum di kiri
  // (garis bawah plot — bukan garis nol, supaya garis nol tidak salah
  // berlabel nilai minimum ketika ada batang negatif).
  svg.appendChild(el("text", { x: padL - 8, y: y(maxV) + 4, class: "ylab", "text-anchor": "end" }, fmtVal(maxV, o.unit)));
  svg.appendChild(el("text", { x: padL - 8, y: y(minV) + 4, class: "ylab", "text-anchor": "end" }, fmtVal(minV, o.unit)));
  points.forEach((p, i) => {
    const cx = padL + slot * i + slot / 2;
    const top = y(Math.max(p.value, 0));
    const bot = y(Math.min(p.value, 0));
    const last = i === n - 1;
    svg.appendChild(
      el("rect", {
        x: cx - barW / 2,
        y: top,
        width: barW,
        height: Math.max(1, bot - top),
        rx: 3,
        class: last ? "bar hi" : "bar",
        fill: last ? o.hi : o.color,
      }),
    );
    svg.appendChild(
      el("text", { x: cx, y: top - 8, class: "vlab", "text-anchor": "middle" }, fmtVal(p.value, o.unit)),
    );
    svg.appendChild(
      el("text", { x: cx, y: H - 12, class: "xlab", "text-anchor": "middle" }, p.label),
    );
  });
  return svg;
}

// Line chart dengan titik dan nilai. Dipakai untuk sorotan di beranda.
export function lineChart(points, opts) {
  const o = Object.assign(
    { width: 760, height: 240, unit: "", color: "#0e6b5c", hi: "#c2402a" },
    opts || {},
  );
  const W = o.width;
  const H = o.height;
  const padL = 46;
  const padR = 16;
  const padT = 28;
  const padB = 32;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const minV = Math.min(0, ...points.map((p) => p.value));
  const maxV = Math.max(...points.map((p) => p.value));
  const span = maxV - minV || 1;
  const x = (i) => padL + (plotW * i) / (points.length - 1 || 1);
  const y = (v) => padT + plotH * (1 - (v - minV) / span);
  const svg = el("svg", {
    viewBox: `0 0 ${W} ${H}`,
    role: "img",
    "aria-label": o.title || "Grafik garis",
    class: "chart",
  });
  svg.appendChild(el("line", { x1: padL, y1: y(maxV), x2: W - padR, y2: y(maxV), class: "grid" }));
  svg.appendChild(el("line", { x1: padL, y1: y(0), x2: W - padR, y2: y(0), class: "axis" }));
  svg.appendChild(el("text", { x: padL - 8, y: y(maxV) + 4, class: "ylab", "text-anchor": "end" }, fmtVal(maxV, o.unit)));
  svg.appendChild(el("text", { x: padL - 8, y: y(minV) + 4, class: "ylab", "text-anchor": "end" }, fmtVal(minV, o.unit)));
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(" ");
  svg.appendChild(el("path", { d, class: "line", fill: "none", stroke: o.color, "stroke-width": 3 }));
  points.forEach((p, i) => {
    const last = i === points.length - 1;
    svg.appendChild(el("circle", { cx: x(i), cy: y(p.value), r: last ? 5.5 : 4, class: last ? "dot hi" : "dot", fill: last ? o.hi : o.color }));
    svg.appendChild(
      el("text", { x: x(i), y: y(p.value) - 10, class: "vlab", "text-anchor": "middle" }, fmtVal(p.value, o.unit)),
    );
    svg.appendChild(el("text", { x: x(i), y: H - 10, class: "xlab", "text-anchor": "middle" }, p.label));
  });
  return svg;
}
