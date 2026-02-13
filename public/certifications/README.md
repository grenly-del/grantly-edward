# Panduan Menambahkan Gambar Sertifikasi

## Cara Menambahkan Gambar

1. **Simpan gambar sertifikasi Anda** ke folder:
   `c:\Users\Victus\Desktop\MY-PROJECT\my-portfolio\certain-chroma\public\certifications\`

2. **Nama file** harus sesuai dengan yang ada di data sertifikasi:
   - `aws-sa.jpg` - untuk AWS Solutions Architect
   - `gcp-dev.jpg` - untuk Google Cloud Developer  
   - `meta-frontend.jpg` - untuk Meta Front-End Developer
   - `freecodecamp-js.jpg` - untuk JavaScript Algorithms
   - `freecodecamp-rwd.jpg` - untuk Responsive Web Design

3. **Format yang disarankan**:
   - Format: JPG atau WebP (untuk ukuran file lebih kecil)
   - Resolusi: Minimal 1920x1080px
   - Rasio: 16:9 (landscape)

## Cara Mengubah Data Sertifikasi

Edit file: `src/data/certifications.ts`

Anda bisa menambah, mengurangi, atau mengubah data sertifikasi sesuai kebutuhan.

## Placeholder Sementara

Jika belum ada gambar, Anda bisa:
1. Gunakan screenshot sertifikat asli
2. Gunakan placeholder online seperti: `https://placehold.co/1920x1080/amber/white?text=Certificate`
3. Update path di `certifications.ts` sesuai dengan nama file gambar yang Anda upload
