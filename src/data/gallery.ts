export interface GalleryItem {
    slug: string;
    title: string;
    category: string;
    date: string;
    location?: string;
    image: string; // Placeholder untuk grid/thumbnail
    momentImage?: string; // Gambar momen asli untuk detail page (opsional)
    description: string;
    context: string;
    tags: string[];
}

export const galleryItems: GalleryItem[] = [
    {
        slug: "client-meeting-startup",
        title: "Meeting dengan Tim Startup E-Commerce",
        category: "Client Meeting",
        date: "Agustus 2024",
        location: "Bitung, Sulawesi Utara",
        image: "https://placehold.co/1920x1080/0a0a23/ffffff?text=Client+Meeting",
        momentImage: "/gallery/meeting_ecommerce.webp", // Ganti dengan foto asli Anda
        description:
            `Pertemuan diskusi teknis bersama tim startup e-commerce untuk membahas strategi pemasaran, strategi penjualan, arsitektur sistem, roadmap pengembangan platform, hingga aspek keamanan sistem.

Sesi ini mencakup pembahasan strategi scaling, pemilihan tech stack yang optimal, perencanaan pengembangan fitur, serta implementasi best practices untuk membangun aplikasi e-commerce modern yang aman, stabil, dan siap bertumbuh dalam jangka panjang. Fokus utama adalah membantu tim membuat keputusan teknologi yang tepat dan terarah demi mendukung ekspansi bisnis mereka.`,
        context:
            `Saya dihubungi langsung oleh tim mereka untuk ketemu dan diskusi lebih dalam tentang e-commerce yang sedang mereka bangun. Kami sepakat bertemu di Starbucks - Bitung — suasananya santai, tapi obrolannya serius dan penuh energi.

Begitu duduk, laptop langsung terbuka. Mereka mulai cerita tentang visi besar yang ingin dicapai, tantangan yang sedang dihadapi, dan target pertumbuhan yang cukup agresif. Dari situ diskusi berkembang cepat — mulai dari strategi pemasaran digital, optimasi funnel penjualan, sampai cara meningkatkan konversi dan retensi pelanggan.

Kami lalu masuk ke sisi teknis. Saya bantu mereka mengkaji ulang arsitektur sistem, mempertimbangkan ulang pilihan tech stack, dan menyusun roadmap pengembangan yang lebih terstruktur. Kami bahas bagaimana platform ini bisa scalable, bagaimana mengantisipasi lonjakan traffic, serta bagaimana memastikan performa tetap stabil.

Topik keamanan juga jadi bagian penting. Kami diskusikan proteksi data pengguna, keamanan transaksi, dan standar best practices untuk aplikasi e-commerce modern. Karena bagi saya, membangun sistem itu bukan cuma soal cepat dan canggih — tapi juga aman dan berkelanjutan.

Yang paling terasa dari pertemuan itu adalah semangat timnya. Diskusinya hidup, penuh ide, dan terasa seperti membangun sesuatu bersama. Bukan sekadar sesi konsultasi, tapi momen kolaborasi untuk menentukan arah masa depan platform mereka.`,
        tags: ["Consulting", "E-Commerce", "Startup", "Technical Discussion"],
    },
    {
        slug: "presentation-techno-expo",
        title: "Presentasi di Sulawesi Education & Techno Expo 2026",
        category: "Presentation",
        date: "January 2026",
        location: "Manado, Sulawesi Utara",
        image: "https://placehold.co/1920x1080/4285f4/ffffff?text=Presentation+Expo 2026",
        momentImage: "/gallery/presentasi_kidneystone.webp",
        description:
            `Partisipasi sebagai presenter dalam ajang Sulawesi Education & Techno Expo 2026 yang diselenggarakan di Manado Town Square.

Dalam sesi ini, saya mempresentasikan teknologi Artificial Intelligence yang saya dan tim kembangkan untuk mendeteksi batu ginjal melalui analisis citra medis.

Sistem yang kami bangun memanfaatkan pendekatan deep learning dengan metode transfer learning untuk meningkatkan akurasi model, mempercepat proses training, serta mengoptimalkan performa meskipun dengan dataset yang terbatas. Presentasi mencakup penjelasan arsitektur model, proses training, evaluasi performa, hingga potensi implementasi teknologi ini dalam mendukung diagnosa medis secara lebih cepat dan efisien.`,
        context:
            `Ajang Sulawesi Education & Techno Expo 2026 menjadi platform penting untuk berbagi inovasi teknologi yang kami kembangkan. Suasananya sangat positif — penuh energi dari mahasiswa, akademisi, hingga praktisi industri yang antusias ingin belajar dan berdiskusi.

Saya mendapat kesempatan untuk mempresentasikan sistem deteksi batu ginjal berbasis AI yang kami bangun. Pembahasan mencakup bagaimana kami memanfaatkan deep learning dengan transfer learning untuk mengatasi keterbatasan dataset, bagaimana kami mengoptimalkan arsitektur model, serta bagaimana sistem ini bisa diintegrasikan dalam alur kerja klinis untuk mendukung diagnosa yang lebih cepat dan akurat.

Yang paling berkesan adalah sesi tanya jawab setelah presentasi. Banyak pertanyaan mendalam tentang validasi klinis, potensi false positive/negative, skalabilitas sistem, hingga bagaimana teknologi ini bisa diakses oleh fasilitas kesehatan di daerah. Diskusi yang hidup seperti ini menunjukkan betapa pentingnya kolaborasi antara teknologi, kedokteran, dan masyarakat untuk mendorong inovasi yang berdampak nyata.

Kesempatan berbagi di acara sebesar ini bukan hanya tentang mempresentasikan proyek, tapi juga tentang menginspirasi generasi muda untuk terus berinovasi dan berkontribusi dalam pengembangan teknologi yang bermanfaat bagi masyarakat.`,
        tags: ["Public Speaking", "Conference"],
    },
    {
        slug: "workshop-rencana-pembelajaran",
        title: "Workshop Penyusunan Rencana Pembelajaran Semester (RPS)",
        category: "Workshop",
        date: "September 2024",
        location: "Manado, Indonesia",
        image: "https://placehold.co/1920x1080/f59e0b/ffffff?text=Workshop RPS",
        momentImage: "/gallery/pelatihan_guru.webp",
        description:
            `Partisipasi dalam kegiatan workshop pengembangan kurikulum yang dilaksanakan pada September 2025 di Hotel Sutan Raja.

Workshop ini dihadiri langsung oleh Ketua Kurikulum Pendidikan Minahasa Utara yang juga bertindak sebagai pembicara utama.

Dalam kegiatan ini, peserta dibimbing untuk memahami proses penyusunan kurikulum yang sistematis dan terstruktur, mulai dari perumusan capaian pembelajaran, penyusunan modul ajar, hingga pembuatan rencana belajar yang efektif dan terukur. Fokus utama pelatihan adalah memastikan kurikulum yang dirancang selaras dengan kebutuhan peserta didik dan perkembangan zaman.`,
        context:
            `September 2025 jadi salah satu momen yang cukup penting dalam perjalanan pengembangan diri saya. Bertempat di Hotel Sutan Raja, saya mengikuti workshop yang membahas secara mendalam tentang penyusunan kurikulum dan rencana belajar.

Yang membuat kegiatan ini terasa spesial adalah kehadiran langsung Ketua Kurikulum Pendidikan Minahasa Utara sebagai pembicara utama. Beliau membagikan pengalaman, pendekatan strategis, serta pandangan praktis tentang bagaimana kurikulum seharusnya dirancang — bukan sekadar dokumen administratif, tapi sebagai fondasi arah pembelajaran.

Kami tidak hanya mendengar materi, tapi benar-benar praktik. Mulai dari menyusun capaian pembelajaran, menentukan kompetensi inti, menyelaraskan indikator penilaian, sampai merancang rencana belajar yang realistis dan aplikatif. Diskusinya cukup intens, karena setiap peserta diminta aktif menganalisis dan menyusun draft kurikulum masing-masing.

Bagi saya pribadi, workshop ini membuka cara pandang baru. Saya jadi lebih memahami bahwa merancang pembelajaran itu butuh struktur yang jelas, tujuan yang terukur, dan strategi penyampaian yang relevan dengan kebutuhan peserta didik saat ini.

Kegiatan ini bukan sekadar pelatihan formal, tapi proses pembelajaran yang memperkuat fondasi saya dalam merancang program edukasi yang lebih terarah dan berdampak.`,
        tags: ["Education", "Workshop", "Teaching", "PKBM Denny Smart"],
    },
    {
        slug: "project-training-government",
        title: "Project Training Sistem Pemerintahan",
        category: "Project Meeting",
        date: "Oktober 2025",
        location: "Manado, Indonesia",
        image: "https://placehold.co/1920x1080/0668e1/ffffff?text=Government+Project",
        momentImage: "/gallery/pelatihan_penggunaan_fpk.webp",
        description:
            `Pertemuan dan pelatihan sistem internal yang dilaksanakan pada Oktober 2025 bersama organisasi masyarakat Forum Pembauran Kebangsaan Kota Manado.

Kegiatan ini bertujuan untuk memberikan pelatihan penggunaan sistem internal yang kami kembangkan guna mempermudah proses pengiriman dan pengelolaan laporan secara digital.

Materi pelatihan mencakup pengenalan fitur sistem, alur penginputan data, proses validasi laporan, manajemen dokumen, hingga monitoring laporan secara terpusat. Fokus utamanya adalah meningkatkan efisiensi kerja, akurasi data, serta transparansi dalam proses administrasi organisasi.`,
        context:
            `Kegiatan ini menjadi momen penting untuk memperkuat pemahaman tentang kurikulum modern dan bagaimana mengimplementasikannya secara efektif dalam proses pembelajaran. Diskusi yang interaktif dengan Ketua Kurikulum memberikan wawasan mendalam tentang tantangan dan peluang dalam pengembangan pendidikan saat ini.

Suasana workshop sangat kolaboratif — para peserta saling berbagi pengalaman, mendiskusikan best practices, dan bersama-sama merumuskan strategi untuk meningkatkan kualitas pengajaran. Pembahasan mencakup bagaimana mengintegrasikan teknologi dalam pembelajaran, bagaimana merancang asesmen yang valid, serta bagaimana memastikan setiap materi pembelajaran relevan dengan kebutuhan industri dan perkembangan zaman.

Momen ini menegaskan kembali pentingnya kolaborasi antara akademisi, praktisi pendidikan, dan pembuat kebijakan untuk bersama-sama membangun sistem pendidikan yang lebih baik, adaptif, dan berorientasi pada masa depan.`,
        tags: ["Government", "Project Management", "Digital Transformation", "FPK Manado"],
    },
    {
        slug: "team-work",
        title: "Strategic Partnership Meeting: POS System & Software House",
        category: "Team Work",
        date: "Desember 2025 - Sekarang",
        location: "Minahasa Utara, Indonesia",
        image: "https://placehold.co/1920x1080/10b981/ffffff?text=Strategic+Partnership",
        momentImage: "/gallery/investor.webp",
        description:
            `Pertemuan strategis bersama stakeholder/investor terkait pengembangan dan komersialisasi sistem Point of Sale (POS) yang kami bangun.

Agenda diskusi mencakup pembahasan fitur dan kesiapan sistem POS, strategi pemasaran dan positioning produk, pembagian tugas dalam operasional bisnis, skema pembagian keuntungan, serta rencana ekspansi jangka panjang.

Dalam pertemuan ini juga dibahas peluang kerja sama untuk membentuk sebuah software house, di mana saya dan tim berperan sebagai developer sekaligus pengelola teknis, sementara stakeholder bertindak sebagai penyedia pendanaan serta membuka akses jaringan dan peluang pasar.`,
        context:
            `Meeting ini jadi salah satu titik penting dalam perjalanan kami membangun produk sendiri. Saya dan tim duduk bersama stakeholder yang siap membiayai dan mendukung pengembangan sistem POS yang sudah kami rancang.

Diskusinya cukup serius, tapi penuh visi. Kami mulai dengan mempresentasikan sistem POS yang kami buat — mulai dari fitur, keunggulan, target market, sampai potensi skalabilitasnya. Kami membahas bagaimana sistem ini bisa menjawab kebutuhan UMKM dan bisnis retail yang ingin lebih tertata secara digital.

Setelah masuk ke sisi produk, pembicaraan berkembang ke strategi pemasaran. Kami diskusikan bagaimana cara memasarkan produk ini, apakah fokus ke pendekatan direct sales, kerja sama dengan merchant, atau membangun branding digital yang kuat. Kami juga membagi peran dengan jelas — saya dan tim fokus pada pengembangan, maintenance, dan inovasi sistem, sementara beliau siap mendukung dari sisi pembiayaan dan membuka jalur relasi bisnis.

Topik yang cukup krusial adalah pembagian keuntungan dan struktur kerja sama. Kami membicarakan skema yang adil dan berkelanjutan, memastikan semua pihak punya komitmen dan visi yang sama untuk jangka panjang.

Yang paling menarik, diskusi ini tidak berhenti di sistem POS saja. Kami mulai membicarakan rencana yang lebih besar: membangun software house bersama. Konsepnya jelas — saya dan tim menjadi motor teknis dan pengelola pengembangan produk, sementara stakeholder menjadi partner strategis yang mendukung dari sisi modal dan akses pasar.

Bagi saya, ini bukan sekadar meeting bisnis. Ini adalah momen ketika ide yang selama ini kami bangun sebagai tim developer mulai diarahkan menjadi entitas bisnis yang lebih besar dan terstruktur. Ada rasa optimis, tapi juga tanggung jawab besar untuk membawa visi ini menjadi nyata.`,
        tags: ["Team Work", "Strategic Partnership", "Software House", "Business Development"],
    },

];
