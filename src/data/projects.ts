export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    features: string[];
    techStack: { name: string; role: string }[];
    year: string;
    role: string;
    duration: string;
    links: {
        demo: string;
        repo: string;
    };
}

export const projects: Project[] = [
    {
        slug: "pkbm",
        title: "PKBM Denny Smart - Internal Portal",
        description:
            "Website internal PKBM Denny Smart untuk mengelola data siswa dan guru, juga mengelolah informasi Sekolah",
        longDescription:
            "Di website ini terdapat fitur untuk mengelola data siswa dan guru, serta mengelola informasi sekolah. Ada juga fitur untuk melakukan pendaftaran siswa baru secara online, dan juga fitur validasi dokumen.",
        image:
            "/project/pkbm.webp",
        tags: ["React", "Tailwind", "MongoDB", "Express", "Node.js"],
        features: [
            "Pendaftaran Online via Website",
            "Sistem Validasi Dokumen Resmi Sekolah",
            "Pengelolahan Berita Sekolah",
            "Pengelolahan Data Siswa",
            "Pengelolahan Pengumuman Sekolah",
        ],
        techStack: [
            { name: "React", role: "UI components interaktif dan state management" },
            {
                name: "TailwindCSS",
                role: "Utility-first CSS framework untuk styling",
            },
            { name: "MongoDB", role: "Database untuk menyimpan data siswa dan guru" },
            { name: "Express", role: "Framework untuk membangun API" },
            { name: "Node.js", role: "Runtime environment untuk menjalankan server" },
        ],
        year: "2024",
        role: "Full-Stack Developer",
        duration: "1 Bulan",
        links: {
            demo: "https://pkbmdennysmart.com",
            repo: "#",
        },
    },
    {
        slug: "kassentix-pos",
        title: "KassenTix POS",
        description:
            "Sistem POS untuk membantu UMKM sampai perusahan dalam mengelola data penjualan dan inventaris",
        longDescription:
            "KassenTix POS adalah sistem Point of Sale (POS) yang dirancang untuk membantu UMKM hingga perusahaan dalam mengelola data penjualan dan inventaris. Sistem ini dibangun dengan teknologi modern untuk memberikan pengalaman yang cepat, responsif, dan mudah digunakan. Dengan KassenTix POS, pengguna dapat dengan mudah mencatat transaksi, melacak stok barang, dan mendapatkan laporan penjualan secara real-time. Kassentix juga menyediakan fitur pemesanan online via QR Code juga memiliki tracking status pesanan dengan desain yang sangat cocok untuk GenZ. Dan Kassentix juga menyediakan fitur AI yang siap membantu pengelolahan bisnis dan mampu memberikan saran bisnis anda. Sistem kami memiliki 3 Role utama yaitu Owner, Kasir dan Kitchen dimana setiap role memiliki peran masing masing. Kami juga menyediakan aplikasi desktop untuk lebih memberikan opsi kepada pengguna.",
        image:
            "/project/kassentix.webp",
        tags: ["Next.js", "TypeScript", "Socket.IO", "Nodejs", "MySQL", "TailwindCSS"],
        features: [
            "Pemesanan Online via QR Code",
            "Tracking Status Pesanan",
            "Manegement pesanan",
            "Manegement Karyawan",
            "Manegement Meja",
            "Manegement Promo",
            "AI Assistent",
            "Dan masih banyak lagi"
        ],
        techStack: [
            {
                name: "Next.js 14",
                role: "Full-stack React framework dengan App Router",
            },
            {
                name: "TypeScript",
                role: "Type safety dan developer experience yang lebih baik",
            },

            { name: "Prisma", role: "Type-safe database ORM" },
            {
                name: "MySQL",
                role: "Relational database untuk data persistence",
            },
            {
                name: "Socket.IO",
                role: "Real-time communication untuk tracking status pesanan",
            },
            {
                name: "TailwindCSS",
                role: "Utility-first CSS framework untuk styling",
            },
            {
                name: "Node.js",
                role: "Runtime environment untuk menjalankan server",
            },
            {
                name: "Express",
                role: "Framework untuk membangun API",
            },
            {
                name: "MySQL",
                role: "Relational database untuk data persistence",
            },
            {
                name: "Electron JS",
                role: "Desktop application untuk menjalankan server",
            },
            {
                name: "AI Assistent",
                role: "AI Assistent untuk membantu pengelolahan bisnis",
            }
        ],
        year: "2025",
        role: "Founder",
        duration: "4 Bulan",
        links: {
            demo: "https://kassentix.cloud",
            repo: "#",
        },
    },
    {
        slug: "klabat-dev",
        title: "Klabat Dev",
        description:
            "Software house yang menyediakan jasa pembuatan website dan aplikasi",
        longDescription:
            "Klabat Dev adalah software house yang menyediakan jasa pembuatan website dan aplikasi. Kami juga menyediakan jasa pembuatan website dan aplikasi untuk UMKM hingga perusahaan. Kami juga bisa membantu bagi orang yang ingin membuat project project mereka. Kami juga siap memberikan bantuan konsultasi. Kami bermimpi ingin mendigitalisasi wilayah Sulawesi Utara.",
        image:
            "/project/klabat-dev.png",
        tags: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MySQL"],
        features: [
            "Membangun aplikasi mobile",
            "Membangun aplikasi web",
            "Membangun aplikasi desktop",
            "Membangun aplikasi Machine Learning",
            "Membantu melakukan desain UI/UX",
            "Membantu melakukan konsultasi",
        ],
        techStack: [
            {
                name: "Next.js",
                role: "Frontend framework untuk reactive UI",
            },
            {
                name: "Firebase",
                role: "Backend-as-a-Service untuk auth dan realtime DB",
            },

        ],
        year: "2025",
        role: "Founder",
        duration: "2 Bulan",
        links: {
            demo: "https://klabatdev.my.id",
            repo: "#",
        },
    },
    {
        slug: "fpk-manado",
        title: "FPK MANADO",
        description:
            "Sistem portal internal FPK kota Manado",
        longDescription:
            "FPK MANADO atau Forum Pembauran Kebangsaan kota Manado adalah wadah komunikasi, konsultasi, dan kerja sama antarwarga masyarakat dari berbagai suku, etnis, budaya, dan ras untuk memperkuat persatuan dan kesatuan bangsa. FPK dibentuk untuk memelihara pembauran kebangsaan dan menciptakan kehidupan masyarakat yang harmonis di daerah. FPK Manado adalah website yang kami bangun khusus untuk Organisasi dalam memberikan transparansi kepada masyarakat luas dan juga membantu komunikasi internal.",
        image:
            "/project/fpkmanado.webp",
        tags: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MySQL"],
        features: [
            "Sistem portal laporan internal",
            "Pengelolahan anggota",
            "Pengelolahan berita",
            "Filterisasi data",
        ],
        techStack: [
            {
                name: "Next.js",
                role: "Frontend framework untuk reactive UI",
            },
            {
                name: "Express",
                role: "Backend-as-a-Service untuk auth",
            },
            {
                name: "MySQL",
                role: "Database untuk menyimpan data",
            },
            {
                name: "TailwindCSS",
                role: "Styling untuk UI",
            },
            {
                name: "Node.js",
                role: "Runtime environment untuk menjalankan server",
            },

        ],
        year: "2025",
        role: "Project Manager",
        duration: "2 Bulan",
        links: {
            demo: "https://fpkmanado.org",
            repo: "#",
        },
    },
];
