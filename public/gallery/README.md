# Panduan Menambahkan Foto Gallery

## Cara Menambahkan Foto

1. **Simpan foto-foto karir Anda** ke folder:
   `c:\Users\Victus\Desktop\MY-PROJECT\my-portfolio\certain-chroma\public\gallery\`

2. **Format yang disarankan**:
   - Format: JPG atau WebP (untuk ukuran file lebih kecil)
   - Resolusi: Minimal 1920x1080px untuk hero images
   - Rasio: 4:3 atau 16:9 (landscape)
   - Nama file: Gunakan nama deskriptif, contoh: `client-meeting-2024.jpg`

3. **Update data gallery**: Edit file `src/data/gallery.ts`

## Cara Mengubah Data Gallery

Edit file: `src/data/gallery.ts`

### Menambah Item Baru

```typescript
{
  slug: "nama-url-friendly", // untuk URL halaman detail
  title: "Judul Foto",
  category: "Client Meeting", // atau "Presentation", "Workshop", dll
  date: "Bulan Tahun",
  location: "Kota, Negara", // opsional
  image: "https://placehold.co/.../placeholder", // Placeholder untuk grid/thumbnail
  momentImage: "/gallery/foto-asli.jpg", // Foto momen asli untuk halaman detail (opsional)
  description: "Deskripsi singkat foto ini",
  context: "Cerita lengkap di balik momen ini, apa yang terjadi, kenapa penting, dll",
  tags: ["Tag1", "Tag2", "Tag3"],
}
```

### Sistem Dual Image

- **`image`**: Placeholder atau thumbnail yang ditampilkan di grid gallery utama
- **`momentImage`**: Foto momen asli yang ditampilkan di halaman detail (hero image)
  - Jika tidak ada `momentImage`, akan menggunakan `image` sebagai fallback
  - Upload foto asli ke `public/gallery/` dan isi path `/gallery/nama-foto.jpg`

### Kategori yang Tersedia

- **Client Meeting**: Pertemuan dengan klien
- **Presentation**: Presentasi di konferensi, seminar, dll
- **Workshop**: Workshop atau training yang Anda bawakan
- **Project Meeting**: Meeting untuk project kickoff atau review
- **Team Work**: Kolaborasi dengan tim
- **Mentoring**: Sesi mentoring
- **Event**: Event khusus seperti hackathon, judging, dll

Anda bisa menambah kategori baru sesuai kebutuhan!

## Placeholder Sementara

Saat ini menggunakan placeholder dari placehold.co. Untuk menggantinya:
1. Upload foto asli Anda ke folder `public/gallery/`
2. Update field `image` di `gallery.ts` dengan path `/gallery/nama-foto.jpg`

## Tips Foto yang Baik

- **Kualitas tinggi**: Pastikan foto tidak blur atau pixelated
- **Komposisi**: Foto yang menunjukkan aktivitas dengan jelas
- **Konteks**: Foto yang bisa bercerita (presentasi, diskusi, kolaborasi, dll)
- **Profesional**: Hindari foto yang terlalu casual atau tidak relevan dengan karir
