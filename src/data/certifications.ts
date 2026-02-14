export interface Certification {
    slug: string;
    name: string;
    issuer: string;
    date: string;
    credential: string;
    image: string;
    certificateImage?: string; // Gambar sertifikat asli untuk popup
    description: string;
    skills: string[];
    validUntil?: string;
    verificationUrl?: string;
}

export const certifications: Certification[] = [
    {
        slug: "uvics-website-development-associate",
        name: "Certificate of Appreciation – Associate of Website Development",
        issuer: "UNKLAB Virtue in Computer Science (UVICS)",
        date: "23 Januari 2025",
        credential: "No. 029/COA/I/2025/UVICS",
        image: "https://placehold.co/1920x1080/1e3a8a/ffffff?text=UVICS+Certificate",
        certificateImage: "/certifications/sertifikat_uvics.webp",
        description:
            "Sertifikat apresiasi ini diberikan atas kontribusi sebagai Associate pada Department of Website Development di UNKLAB Virtue in Computer Science (UVICS) selama periode Agustus 2024 hingga Januari 2025, dengan skor kontribusi sebesar 3.97. Sertifikat ini mencerminkan dedikasi, konsistensi, dan kompetensi dalam pengembangan website berbasis tim dan proyek nyata.",
        skills: [
            "Website Development",
            "Frontend Development",
            "Backend Development",
            "Team Collaboration",
            "Project-Based Learning",
            "Web System Implementation",
            "Problem Solving",
            "Technical Contribution",
        ],
        validUntil: undefined,
        verificationUrl: undefined,
    },
    {
        slug: "indoneris-it-competition-2024-participant",
        name: "Piagam Penghargaan – Peserta Indoneris IT Competition 2024",
        issuer: "Indoneris IT Competition & Universitas Amikom Purwokerto",
        date: "14 Desember 2024",
        credential: "No. 015/INDONERIS/2024",
        image: "https://placehold.co/1920x1080/312e81/ffffff?text=Indoneris+IT+Competition+2024",
        certificateImage: "/certifications/sertifikat_lomba.webp",
        description:
            "Piagam penghargaan ini diberikan sebagai bentuk apresiasi atas partisipasi sebagai peserta dalam Lomba Indoneris IT Competition Tahun 2024 yang diselenggarakan oleh Universitas Amikom Purwokerto pada periode 15 September hingga 14 Desember 2024. Kegiatan ini bertujuan untuk mengembangkan kompetensi, daya saing, dan pemahaman peserta di bidang teknologi informasi.",
        skills: [
            "Information Technology Competition",
            "Problem Solving",
            "Critical Thinking",
            "IT Fundamentals",
            "Competitive Programming Mindset",
            "Technology Innovation Awareness",
            "Academic Competition Experience",
            "Professional Development",
        ],
        validUntil: undefined,
        verificationUrl: undefined,
    },
    {
        slug: "indoneris-it-competition-2024-uiux-champion",
        name: "Piagam Penghargaan – Juara I UI/UX Indoneris IT Competition 2024",
        issuer: "Indoneris IT Competition & Universitas Amikom Purwokerto",
        date: "14 Desember 2024",
        credential: "No. 319/INDONERIS/2024",
        image: "https://placehold.co/1920x1080/1e40af/ffffff?text=Juara+I+UI%2FUX+Indoneris+2024",
        certificateImage: "/certifications/juara_1_ui.webp",
        description:
            "Piagam penghargaan ini diberikan atas pencapaian sebagai Juara I pada kategori UI/UX dalam Lomba Indoneris IT Competition Tahun 2024. Prestasi ini diraih melalui kerja tim dalam merancang solusi antarmuka dan pengalaman pengguna yang inovatif, fungsional, dan berorientasi pada kebutuhan pengguna, serta dinilai oleh dewan juri dari kalangan akademisi dan praktisi.",
        skills: [
            "UI Design",
            "UX Research",
            "User-Centered Design",
            "Wireframing & Prototyping",
            "Design Thinking",
            "Usability Testing",
            "Team Collaboration",
            "Problem Solving",
        ],
        validUntil: undefined,
        verificationUrl: undefined,
    }

];
