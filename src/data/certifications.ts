export interface Certification {
    slug: string;
    name: string;
    issuer: string;
    date: string;
    credential: string;
    image: string;
    description: string;
    skills: string[];
    validUntil?: string;
    verificationUrl?: string;
}

export const certifications: Certification[] = [
    {
        slug: "aws-solutions-architect",
        name: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        date: "Januari 2024",
        credential: "AWS-SAA-2024-001",
        image: "https://placehold.co/1920x1080/f59e0b/ffffff?text=AWS+Solutions+Architect",
        description:
            "Sertifikasi ini memvalidasi kemampuan saya dalam merancang dan mengimplementasikan sistem terdistribusi yang scalable, highly available, dan fault-tolerant di AWS. Mencakup penguasaan berbagai layanan AWS seperti EC2, S3, RDS, Lambda, dan banyak lagi.",
        skills: [
            "AWS Cloud Architecture",
            "EC2 & Auto Scaling",
            "S3 & Storage Solutions",
            "RDS & Database Management",
            "VPC & Networking",
            "IAM & Security",
            "Lambda & Serverless",
            "CloudFormation",
        ],
        validUntil: "Januari 2027",
        verificationUrl: "https://aws.amazon.com/verification",
    },
    {
        slug: "google-cloud-developer",
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "Maret 2023",
        credential: "GCP-DEV-2023-456",
        image: "https://placehold.co/1920x1080/4285f4/ffffff?text=Google+Cloud+Developer",
        description:
            "Sertifikasi profesional yang menunjukkan keahlian dalam mengembangkan aplikasi cloud-native yang scalable di Google Cloud Platform. Menguasai berbagai layanan GCP termasuk Compute Engine, Cloud Functions, Cloud Storage, dan Cloud SQL.",
        skills: [
            "Google Cloud Platform",
            "Cloud Functions",
            "Compute Engine",
            "Cloud Storage",
            "Cloud SQL",
            "Kubernetes Engine",
            "Cloud Build",
            "Monitoring & Logging",
        ],
        validUntil: "Maret 2026",
        verificationUrl: "https://cloud.google.com/certification/verify",
    },
    {
        slug: "meta-frontend-developer",
        name: "Meta Front-End Developer Professional Certificate",
        issuer: "Meta (Facebook)",
        date: "November 2022",
        credential: "META-FE-2022-789",
        image: "https://placehold.co/1920x1080/0668e1/ffffff?text=Meta+Frontend+Developer",
        description:
            "Program sertifikasi komprehensif dari Meta yang mencakup pengembangan front-end modern menggunakan React, responsive design, best practices, dan prinsip-prinsip UX/UI. Meliputi pembelajaran end-to-end dari HTML/CSS hingga advanced React patterns.",
        skills: [
            "React.js",
            "HTML5 & CSS3",
            "JavaScript ES6+",
            "Responsive Design",
            "UI/UX Principles",
            "Version Control (Git)",
            "RESTful APIs",
            "Testing & Debugging",
        ],
    },
    {
        slug: "javascript-algorithms",
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "Agustus 2022",
        credential: "FCC-JS-2022-001",
        image: "https://placehold.co/1920x1080/0a0a23/ffffff?text=JavaScript+Algorithms",
        description:
            "Sertifikasi yang membuktikan penguasaan mendalam terhadap JavaScript fundamentals, algoritma, dan struktur data. Mencakup functional programming, object-oriented programming, dan pemecahan masalah algoritmik yang kompleks.",
        skills: [
            "JavaScript Fundamentals",
            "Algorithms",
            "Data Structures",
            "Functional Programming",
            "Object-Oriented Programming",
            "ES6+ Features",
            "Regular Expressions",
            "Debugging",
        ],
    },
    {
        slug: "responsive-web-design",
        name: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Juni 2022",
        credential: "FCC-RWD-2022-002",
        image: "https://placehold.co/1920x1080/0a0a23/ffffff?text=Responsive+Web+Design",
        description:
            "Sertifikasi yang mendemonstrasikan kemampuan dalam membuat website yang responsive dan accessible. Mencakup HTML5, CSS3, Flexbox, CSS Grid, dan prinsip-prinsip desain visual yang baik untuk berbagai ukuran perangkat.",
        skills: [
            "HTML5 Semantic",
            "CSS3 Advanced",
            "Flexbox",
            "CSS Grid",
            "Responsive Design",
            "Accessibility (a11y)",
            "CSS Variables",
            "Media Queries",
        ],
    },
];
