# STATISTIKA — Angka resmi Indonesia

[![STATISTIKA](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![Rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/kitulaja7/national-statistics-site/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![Reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/kitulaja7/national-statistics-site/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

Situs statistik nasional Indonesia: angka resmi dari Badan Pusat Statistik (BPS) — penduduk, PDB, inflasi, pengangguran, kemiskinan, perdagangan, dan pembangunan manusia — lengkap dengan sumber dan tahun, dalam satu situs statis yang bekerja di desktop dan HP.

## Angka kunci

| Indikator | Angka | Tahun | Sumber |
|---|---|---|---|
| Penduduk | 281,6 juta jiwa | 2024 | BPS |
| PDB | Rp22.139 triliun | 2024 | BPS |
| Pertumbuhan ekonomi | 5,03% | 2024 | BPS |
| Inflasi | 1,57% | 2024 | BPS |
| Pengangguran terbuka | 4,76% | Feb 2025 | BPS |
| Kemiskinan | 8,47% (23,85 jt) | Mar 2025 | BPS |
| Ekspor | US$264,70 miliar | 2024 | BPS |
| IPM | 75,90 | 2025 | BPS |

## Menjalankan

```sh
node serve.ts        # app/ di http://localhost:8080
```

Tujuh topik lewat hash route: `#/penduduk`, `#/ekonomi`, `#/harga`, `#/kerja`, `#/miskin`, `#/dagang`, `#/manusia`.

## Menyerahkan

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` menyalin `app/` + `screenshots/` ke `/output` dan menulis `dossier.json` dengan `buildDossier` dari `vendor/makefun-frontend.ts` (tidak diubah).

## Struktur source

- `app/index.html` — cangkang halaman + mount point
- `app/main.js` — router hash (`#/` + tujuh topik)
- `app/views.js` — render beranda + halaman topik (kartu, grafik, tabel)
- `app/charts.js` — grafik SVG buatan sendiri (batang + garis), tanpa pustaka
- `app/data.js` — semua angka + sumber + tahun (satu-satunya tempat angka tinggal)
- `app/style.css` — gaya situs (kertas hangat, tinta, aksen terakota + teal)

## Metodologi data

Tahun 2024 dipakai sebagai tahun lengkap terbaru untuk sebagian besar indikator; angka 2025 dipakai di mana BPS sudah merilisnya (kemiskinan Maret 2025, pengangguran Februari 2025, IPM 2025, PDB 2025). Angka yang dihitung dari angka terbitan (mis. kepadatan penduduk) diberi label "dihitung" di situsnya. Situs ini independen dan bukan situs resmi BPS.
