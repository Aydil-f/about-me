# Portfolio 2025 – Aidil Fitriyadi

Situs statis (HTML, CSS, JS). Tanpa build, tanpa backend.

## Struktur
- index.html, style.css, script.js
- assets/images/ : letakkan foto di sini (lihat README.txt di dalamnya)
- 404.html, favicon.svg

## Cek di komputer
Klik dua kali index.html, atau jalankan `python3 -m http.server` di folder ini lalu buka http://localhost:8000

## Hosting gratis
**Netlify (paling mudah):** buka app.netlify.com/drop, seret seluruh folder ini ke halaman itu.
**GitHub Pages:** buat repo, unggah semua file, lalu Settings > Pages > Deploy from a branch > main / (root).
**Vercel / Cloudflare Pages:** hubungkan repo GitHub, Framework preset: Other, tanpa build command, output directory: `.`

## Yang perlu diganti
- Teks dalam kurung siku, mis. [Nama Universitas], di index.html
- Link sosial media (href="#") dan email
- Judul/deskripsi di <head> bila perlu
