"use client";
import { useLang } from "@/app/context/LanguageContext";

const experiences = {
    en: [
        {
            year: "Sep 2024",
            title: "Activity Secretary",
            company: "SMART BOOTCAMP – HMSI Unsil",
            type: "Organization · Hybrid",
            description: "Secretary of Data Analysis training program using Microsoft Excel, held by the Education Division of HMSI over 5 sessions for Information Systems students."
        },
        {
            year: "Jan 2025",
            title: "Backend Developer",
            company: "Evermos × Rakamin Academy",
            type: "Virtual Intern · Remote",
            description: "Built an e-commerce API using Golang, Fiber, and GORM with JWT authentication, product management, transactions, and file upload features."
        },
        {
            year: "Jan 2025",
            title: "Laravel Developer",
            company: "PT. Winnicode Garuda Indonesia",
            type: "Internship · Remote",
            description: "Developed systems using PHP, Laravel, CSS, and JavaScript. Implemented role & permission management, performance optimization, and system design."
        },
        {
            year: "Jan 2026",
            title: "Intern Back End Developer",
            company: "Profile Image Studio",
            type: "Internship · Remote",
            description: "Back-end web development using PostgreSQL tailored to company requirements."
        },
        {
            year: "Feb 2026",
            title: "Full Stack Web Developer",
            company: "PT Aksamedia Mulia Digital",
            type: "Internship · Remote",
            description: "Contributing to full stack web product development based on company needs."
        }
    ],
    id: [
        {
            year: "Sep 2024",
            title: "Sekretaris Kegiatan",
            company: "SMART BOOTCAMP – HMSI Unsil",
            type: "Organisasi · Hybrid",
            description: "Sekretaris program pelatihan Data Analisis menggunakan Microsoft Excel, diselenggarakan Divisi Pendidikan HMSI selama 5 pertemuan untuk mahasiswa Sistem Informasi."
        },
        {
            year: "Jan 2025",
            title: "Backend Developer",
            company: "Evermos × Rakamin Academy",
            type: "Virtual Intern · Remote",
            description: "Membangun API e-commerce menggunakan Golang, Fiber, dan GORM dengan fitur autentikasi JWT, manajemen produk, transaksi, dan unggah file."
        },
        {
            year: "Jan 2025",
            title: "Laravel Developer",
            company: "PT. Winnicode Garuda Indonesia",
            type: "Internship · Remote",
            description: "Mengembangkan sistem menggunakan PHP, Laravel, CSS, dan JavaScript. Implementasi role & permission, optimasi performa, dan desain sistem."
        },
        {
            year: "Jan 2026",
            title: "Intern Back End Developer",
            company: "Profile Image Studio",
            type: "Internship · Remote",
            description: "Pengembangan Back-End Web menggunakan PostgreSQL sesuai kebutuhan perusahaan."
        },
        {
            year: "Feb 2026",
            title: "Full Stack Web Developer",
            company: "PT Aksamedia Mulia Digital",
            type: "Internship · Remote",
            description: "Berkontribusi dalam pengembangan produk web full stack sesuai kebutuhan perusahaan."
        }
    ]
};

const ExperienceSec = () => {
    const { lang } = useLang();
    const list = experiences[lang];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>{lang === "en" ? "Experience" : "Pengalaman"}</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="relative">
                        {/* Garis timeline — hanya desktop */}
                        <div className="hidden md:block absolute left-[140px] top-0 bottom-0 w-px bg-softGray no-print" />

                        <div className="flex flex-col gap-5 md:gap-8">
                            {list.map((exp, index) => (
                                <div key={index} className="relative flex flex-col md:flex-row md:gap-0 gap-0">

                                    {/* Mobile: header card (tahun + type) */}
                                    <div className="md:hidden flex items-center justify-between mb-2 px-1">
                                        <span className="text-xs font-semibold text-primary">{exp.year}</span>
                                        <span className="text-xs text-secondary bg-softGray px-2.5 py-1 rounded-full">{exp.type}</span>
                                    </div>

                                    {/* Desktop: kolom tahun kiri */}
                                    <div className="hidden md:flex md:w-[140px] md:pr-6 flex-shrink-0 flex-col items-end justify-start pt-4">
                                        <span className="text-sm font-semibold text-primary">{exp.year}</span>
                                    </div>

                                    {/* Dot — hanya desktop */}
                                    <div className="no-print hidden md:flex absolute left-[135px] top-4 w-3 h-3 rounded-full border-2 border-primary bg-white flex-shrink-0" />

                                    {/* Card konten */}
                                    <div className="md:pl-10 flex-1">
                                        <div className="bg-white border border-softGray rounded-xl p-4 md:p-5 hover:border-primary/30 transition-all duration-200">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <div>
                                                    <h5 className="text-black font-semibold text-base md:text-lg leading-snug">{exp.title}</h5>
                                                    <p className="text-xs md:text-sm text-primary font-medium mt-0.5">{exp.company}</p>
                                                </div>
                                                <span className="hidden md:inline-flex text-xs text-secondary bg-softGray px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                                    {exp.type}
                                                </span>
                                            </div>
                                            <p className="text-xs md:text-sm text-secondary leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;