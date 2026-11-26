// STATISTIKA — data angka resmi Indonesia.
//
// Setiap angka di bawah ini angka nyata dari Badan Pusat Statistik (BPS),
// masing-masing dengan tahun dan sumbernya. Tidak ada angka karangan.
// Tahun yang dipakai: 2024 sebagai tahun lengkap terbaru untuk sebagian
// besar indikator; 2025 dipakai di mana BPS sudah merilisnya
// (kemiskinan Maret 2025, pengangguran Februari 2025, IPM 2025).
// Nilai dihitung dari angka terbitan (mis. kepadatan) diberi label
// "dihitung" di catatannya.

export const SITE = {
  name: "STATISTIKA",
  tagline: "Angka resmi Indonesia, dalam satu halaman.",
  country: "Indonesia",
  updated: "November 2026",
  intro:
    "STATISTIKA merangkum angka resmi Indonesia yang paling dicari — " +
    "penduduk, ekonomi, harga, pekerjaan, kemiskinan, perdagangan, dan " +
    "pembangunan manusia.",
};

export const TOPICS = [
  {
    id: "penduduk",
    title: "Penduduk",
    short: "281,6 juta jiwa",
    kpis: [
      { label: "Jumlah penduduk", value: "281,6 jt", sub: "2024 · BPS" },
      { label: "Perkiraan 2025", value: "284,4 jt", sub: "2025 · BPS" },
      { label: "Provinsi terbanyak", value: "Jabar 50,35 jt", sub: "2024 · BPS" },
      { label: "Kepadatan", value: "±149 /km²", sub: "dihitung, 2024" },
    ],
    chart: {
      title: "Jumlah penduduk Indonesia (juta jiwa)",
      kind: "bar",
      unit: "juta jiwa",
      points: [
        { label: "2020", value: 270.2 },
        { label: "2024", value: 281.6 },
        { label: "2025", value: 284.44 },
      ],
    },
    table: {
      headers: ["Fakta", "Angka", "Tahun", "Sumber"],
      rows: [
        ["Jumlah penduduk", "281,6 juta jiwa", "2024", "BPS"],
        ["Perkiraan penduduk", "284,44 juta jiwa", "2025", "BPS"],
        ["Sensus Penduduk", "270,20 juta jiwa", "2020", "BPS"],
        ["Provinsi terbanyak", "Jawa Barat · 50,35 juta", "2024", "BPS"],
        ["Jumlah provinsi", "38 provinsi", "2024", "BPS"],
        ["Kabupaten / kota", "514", "2024", "Kemendagri"],
        ["Jumlah pulau", "17.380 pulau", "2025", "BPS"],
        ["Bahasa daerah", "718 bahasa", "2025", "BPS"],
      ],
    },
    note:
      "Indonesia negara berpenduduk terbesar keempat di dunia, setelah India, " +
      "Tiongkok, dan Amerika Serikat. Kepadatan ±149 jiwa/km² dihitung dari " +
      "281,6 juta jiwa dibagi luas daratan 1.890.180 km² (BPS).",
    source: "Badan Pusat Statistik (BPS), 2024–2025",
  },
  {
    id: "ekonomi",
    title: "Ekonomi & PDB",
    short: "Rp22.139 triliun",
    kpis: [
      { label: "PDB 2024", value: "Rp22.139 T", sub: "harga berlaku · BPS" },
      { label: "PDB per kapita", value: "Rp78,6 jt", sub: "2024 · US$4.960" },
      { label: "Pertumbuhan 2024", value: "5,03%", sub: "2024 · BPS" },
      { label: "Pertumbuhan 2025", value: "5,11%", sub: "2025 · BPS" },
    ],
    chart: {
      title: "Pertumbuhan ekonomi Indonesia (% per tahun)",
      kind: "bar",
      unit: "%",
      points: [
        { label: "2020", value: -2.07 },
        { label: "2021", value: 3.7 },
        { label: "2022", value: 5.31 },
        { label: "2023", value: 5.05 },
        { label: "2024", value: 5.03 },
        { label: "2025", value: 5.11 },
      ],
    },
    table: {
      headers: ["Indikator", "Angka", "Tahun", "Sumber"],
      rows: [
        ["PDB harga berlaku", "Rp22.139,0 triliun", "2024", "BPS"],
        ["PDB harga berlaku", "Rp23.821,1 triliun", "2025", "BPS"],
        ["PDB per kapita", "Rp78,6 juta (US$4.960,3)", "2024", "BPS"],
        ["PDB per kapita", "Rp83,7 juta (US$5.083,4)", "2025", "BPS"],
        ["Pertumbuhan ekonomi", "5,03% (c-to-c)", "2024", "BPS"],
        ["Pertumbuhan ekonomi", "5,11% (c-to-c)", "2025", "BPS"],
      ],
    },
    note:
      "Perekonomian Indonesia 2024 tumbuh 5,03 persen, sedikit melambat dari " +
      "5,05 persen pada 2023; pada 2025 tumbuh 5,11 persen. PDB 2024 " +
      "Rp22.139,0 triliun atas dasar harga berlaku (BPS, rilis 5 Feb 2025).",
    source: "Badan Pusat Statistik (BPS), 2024–2025",
  },
  {
    id: "harga",
    title: "Harga & Inflasi",
    short: "1,57% (2024)",
    kpis: [
      { label: "Inflasi 2024", value: "1,57%", sub: "Des, yoy · BPS" },
      { label: "Sasaran BI", value: "2,5% ±1%", sub: "2024" },
      { label: "Inflasi 2022", value: "5,51%", sub: "tertinggi dekade ini" },
      { label: "Inflasi 2023", value: "2,61%", sub: "Des, yoy · BPS" },
    ],
    chart: {
      title: "Inflasi akhir tahun, Desember (yoy, %)",
      kind: "bar",
      unit: "%",
      points: [
        { label: "2020", value: 1.68 },
        { label: "2021", value: 1.87 },
        { label: "2022", value: 5.51 },
        { label: "2023", value: 2.61 },
        { label: "2024", value: 1.57 },
      ],
    },
    table: {
      headers: ["Tahun", "Inflasi (Des, yoy)", "Catatan", "Sumber"],
      rows: [
        ["2020", "1,68%", "—", "BPS"],
        ["2021", "1,87%", "—", "BPS"],
        ["2022", "5,51%", "Tertinggi dalam satu dekade", "BPS"],
        ["2023", "2,61%", "Kembali ke sasaran", "BPS"],
        ["2024", "1,57%", "Di bawah sasaran 2,5% ±1%", "BPS"],
      ],
    },
    note:
      "Inflasi 2024 sebesar 1,57 persen (rilis BPS 2 Januari 2025), berada " +
      "di bawah sasaran Bank Indonesia 2,5% ±1%. Lonjakan 2022 (5,51%) " +
      "terjadi setelah penyesuaian harga BBM bersubsidi.",
    source: "Badan Pusat Statistik (BPS), 2020–2024",
  },
  {
    id: "kerja",
    title: "Ketenagakerjaan",
    short: "TPT 4,76%",
    kpis: [
      { label: "TPT Feb 2025", value: "4,76%", sub: "terendah sejak 1998" },
      { label: "TPT Feb 2024", value: "4,82%", sub: "BPS" },
      { label: "Penganggur", value: "±7,3 jt", sub: "Feb 2025 · BPS" },
      { label: "Lapangan kerja baru", value: "3,59 jt", sub: "2025" },
    ],
    chart: {
      title: "Tingkat Pengangguran Terbuka, Februari (%)",
      kind: "bar",
      unit: "%",
      points: [
        { label: "2021", value: 6.26 },
        { label: "2022", value: 5.83 },
        { label: "2023", value: 5.45 },
        { label: "2024", value: 4.82 },
        { label: "2025", value: 4.76 },
      ],
    },
    table: {
      headers: ["Periode", "TPT", "Catatan", "Sumber"],
      rows: [
        ["Februari 2021", "6,26%", "—", "BPS"],
        ["Februari 2022", "5,83%", "—", "BPS"],
        ["Februari 2023", "5,45%", "—", "BPS"],
        ["Februari 2024", "4,82%", "—", "BPS"],
        ["Februari 2025", "4,76%", "Terendah sejak 1998", "BPS"],
      ],
    },
    note:
      "Tingkat Pengangguran Terbuka (TPT) Februari 2025 tercatat 4,76 persen, " +
      "terendah sejak krisis 1998 (BPS, rilis 5 Mei 2025). Jumlah penganggur " +
      "±7,3 juta orang; penciptaan lapangan kerja 2025 mencapai 3,59 juta.",
    source: "Badan Pusat Statistik (BPS), Sakernas 2021–2025",
  },
  {
    id: "miskin",
    title: "Kemiskinan",
    short: "8,47% (Mar 2025)",
    kpis: [
      { label: "Tingkat kemiskinan", value: "8,47%", sub: "Mar 2025 · BPS" },
      { label: "Jumlah penduduk miskin", value: "23,85 jt", sub: "Mar 2025" },
      { label: "Kota / desa", value: "6,73% / 11,03%", sub: "Mar 2025" },
      { label: "Garis kemiskinan", value: "Rp609.160", sub: "per kapita / bulan" },
    ],
    chart: {
      title: "Tingkat kemiskinan, Maret (% penduduk)",
      kind: "bar",
      unit: "%",
      points: [
        { label: "2020", value: 9.78 },
        { label: "2021", value: 10.14 },
        { label: "2022", value: 9.54 },
        { label: "2023", value: 9.36 },
        { label: "2024", value: 9.03 },
        { label: "2025", value: 8.47 },
      ],
    },
    table: {
      headers: ["Periode", "Tingkat", "Jumlah miskin", "Sumber"],
      rows: [
        ["Maret 2020", "9,78%", "—", "BPS"],
        ["Maret 2021", "10,14%", "—", "BPS"],
        ["Maret 2022", "9,54%", "—", "BPS"],
        ["Maret 2023", "9,36%", "—", "BPS"],
        ["Maret 2024", "9,03%", "25,22 juta", "BPS"],
        ["Sep 2024", "8,57%", "24,06 juta", "BPS"],
        ["Maret 2025", "8,47%", "23,85 juta", "BPS"],
      ],
    },
    note:
      "Tingkat kemiskinan Maret 2025 sebesar 8,47 persen — terendah sepanjang " +
      "sejarah, turun dari 8,57 persen (September 2024) dan 9,03 persen " +
      "(Maret 2024). Garis kemiskinan nasional Maret 2025 Rp609.160 per " +
      "kapita per bulan (BPS, Susenas).",
    source: "Badan Pusat Statistik (BPS), Susenas 2020–2025",
  },
  {
    id: "dagang",
    title: "Perdagangan",
    short: "Surplus US$31,04 M",
    kpis: [
      { label: "Ekspor 2024", value: "US$264,70 M", sub: "+2,29% · BPS" },
      { label: "Impor 2024", value: "US$233,66 M", sub: "+5,31% · BPS" },
      { label: "Surplus 2024", value: "US$31,04 M", sub: "56 bulan berturut" },
      { label: "Ekspor nonmigas", value: "US$248,83 M", sub: "2024 · BPS" },
    ],
    chart: {
      title: "Nilai ekspor Indonesia (US$ miliar)",
      kind: "bar",
      unit: "US$ M",
      points: [
        { label: "2020", value: 163.19 },
        { label: "2021", value: 231.61 },
        { label: "2022", value: 291.9 },
        { label: "2023", value: 258.82 },
        { label: "2024", value: 264.7 },
      ],
    },
    table: {
      headers: ["Tahun", "Ekspor (US$ M)", "Impor (US$ M)", "Neraca (US$ M)"],
      rows: [
        ["2021", "231,61", "196,27", "Surplus 35,34"],
        ["2022", "291,90", "237,44", "Surplus 54,46"],
        ["2023", "258,82", "221,93", "Surplus 36,89"],
        ["2024", "264,70", "233,66", "Surplus 31,04"],
      ],
    },
    note:
      "Neraca perdagangan 2024 surplus US$31,04 miliar — surplus 56 bulan " +
      "berturut-turut sejak Mei 2020. Surplus nonmigas US$51,44 miliar; " +
      "neraca migas defisit US$20,4 miliar (BPS, rilis 15 Jan 2025).",
    source: "Badan Pusat Statistik (BPS), 2021–2024",
  },
  {
    id: "manusia",
    title: "Pembangunan Manusia",
    short: "IPM 75,90 (2025)",
    // Komponen IPM 2025 dibetulkan 26 Nov 2026: angka sebelumnya adalah
    // komponen 2024 yang salah label. Yang benar (BPS, Berita Resmi
    // Statistik No. 104/11/Th. XXVIII, 5 November 2025): UHH 74,47;
    // HLS 13,30; RLS 9,07; pengeluaran riil Rp12,80 jt/thn; DKI Jakarta
    // 85,05; Papua Pegunungan 54,91. Kolom 2024 di tabel adalah angka
    // rilis IPM 2024 (BPS, 15 November 2024).
    kpis: [
      { label: "IPM 2025", value: "75,90", sub: "naik 0,88 poin · BPS" },
      { label: "IPM 2024", value: "75,02", sub: "2024 · BPS" },
      { label: "Umur harapan hidup", value: "74,47 thn", sub: "2025 · BPS" },
      { label: "Harapan lama sekolah", value: "13,30 thn", sub: "2025 · BPS" },
    ],
    chart: {
      title: "Indeks Pembangunan Manusia (IPM)",
      kind: "bar",
      unit: "poin",
      points: [
        { label: "2020", value: 72.81 },
        { label: "2023", value: 74.39 },
        { label: "2024", value: 75.02 },
        { label: "2025", value: 75.9 },
      ],
    },
    table: {
      headers: ["Komponen IPM", "2025", "2024", "Sumber"],
      rows: [
        ["IPM", "75,90", "75,02", "BPS"],
        ["Umur harapan hidup", "74,47 tahun", "74,15 tahun", "BPS"],
        ["Harapan lama sekolah", "13,30 tahun", "13,21 tahun", "BPS"],
        ["Rata-rata lama sekolah", "9,07 tahun", "8,85 tahun", "BPS"],
        ["Pengeluaran riil per kapita", "Rp12,80 jt/thn", "Rp12,34 jt/thn", "BPS"],
      ],
    },
    note:
      "IPM Indonesia 2025 mencapai 75,90, naik 0,88 poin dari 75,02 " +
      "(2024); pada 2024 naik 0,63 poin dari 74,39 (2023). IPM tertinggi " +
      "DKI Jakarta 85,05; terendah Papua Pegunungan 54,91 (2025). Sumber: " +
      "BPS, Berita Resmi Statistik No. 104/11/Th. XXVIII, 5 November 2025.",
    source: "Badan Pusat Statistik (BPS), 2020–2025",
  },
];

// Enam angka utama untuk strip beranda: satu angka dari tiap topik besar.
export const HOME_KPIS = [
  { label: "Penduduk", value: "281,6 jt", sub: "2024 · BPS", href: "#/penduduk" },
  { label: "PDB", value: "Rp22.139 T", sub: "2024 · BPS", href: "#/ekonomi" },
  { label: "Pertumbuhan", value: "5,03%", sub: "2024 · BPS", href: "#/ekonomi" },
  { label: "Inflasi", value: "1,57%", sub: "2024 · BPS", href: "#/harga" },
  { label: "Pengangguran", value: "4,76%", sub: "Feb 2025 · BPS", href: "#/kerja" },
  { label: "Kemiskinan", value: "8,47%", sub: "Mar 2025 · BPS", href: "#/miskin" },
];

export function topicById(id) {
  return TOPICS.find((t) => t.id === id) || null;
}
