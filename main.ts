// STATISTIKA — program penyerahan entri (Node 22, standard library only).
//
// Situsnya adalah app/ di sebelah file ini: file statis yang dibuka browser
// di app/index.html (modul ES, CSS, tanpa build step), isinya file-file
// sendiri, tidak ada yang dimuat dari network. Program ini menyerahkan
// situs itu: menyalin app/ dan screenshots/ ke /output lalu menulis
// /output/dossier.json — ringkasan yang dibaca juri (screenshot, file dan
// byte first load, serta source) — dengan pustaka make.fun yang sudah
// divendor. vendor/makefun-frontend.ts dibiarkan apa adanya: scorer
// mengharuskan dossier.json sama persis byte demi byte dengan yang ditulis
// salinan pustaka miliknya sendiri.
//
// Jalankan situs secara lokal dengan `node serve.ts`, lalu buka
// http://localhost:8080. Di luar container grader, MAKEFUN_OUTPUT_DIR
// menggantikan /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const here = fileURLToPath(new URL(".", import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
cpSync(join(here, "app"), join(out, "app"), { recursive: true });
mkdirSync(join(out, "screenshots"), { recursive: true });
if (existsSync(join(here, "screenshots"))) {
  cpSync(join(here, "screenshots"), join(out, "screenshots"), { recursive: true });
}

// Batas milik scorer (reference/gate.json): hanya text_max_bytes yang
// membentuk byte; sisanya menolak entri yang akan ditolak scorer (lebih
// dari 4 screenshot atau satu di atas 256 KiB; lebih dari 993 file dan
// direktori di app/ atau 16 MiB file app/: app/ dihitung berdampingan
// dengan batas 1000 entri /output itu sendiri, screenshot-nya, dan
// dossier.json).
writeFileSync(
  join(out, "dossier.json"),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
