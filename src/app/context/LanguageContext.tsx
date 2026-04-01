// app/context/LanguageContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

type Lang = "en" | "id";

export const heroContent = {
  en: {
    greeting: "I'm Septian",
    title: "Junior Software Developer",
    description: "Final year Information Systems student at Universitas Siliwangi. Passionate about software development and data, with experience in React, Laravel, Golang, and cloud technologies.",
  },
  id: {
    greeting: "Saya Septian",
    title: "Junior Software Developer",
    description: "Mahasiswa tingkat akhir Sistem Informasi Universitas Siliwangi. Fokus pada pengembangan software dan data, berpengalaman dengan React, Laravel, Golang, dan teknologi cloud.",
  },
};

export const aboutContent = {
    en: {
        description: "I'm a final year Information Systems student at Universitas Siliwangi with a passion for software development and data. I have experience in full stack development through various internship programs and independent study, working with technologies like React, Laravel, Golang, and AWS Cloud.",
        stats: [
            { count: "3+", label: "Years Learning" },
            { count: "5+", label: "Programs Completed" },
            { count: "4+", label: "Internship Experience" },
        ],
        languages: ["English", "Indonesia"],
    },
    id: {
        description: "Saya mahasiswa tingkat akhir Sistem Informasi di Universitas Siliwangi dengan ketertarikan pada pengembangan software dan data. Berpengalaman dalam full stack development melalui berbagai program magang dan studi independen, menggunakan teknologi seperti React, Laravel, Node.js, dan AWS Cloud.",
        stats: [
            { count: "3+", label: "Tahun Belajar" },
            { count: "5+", label: "Program Diikuti" },
            { count: "4+", label: "Pengalaman Magang" },
        ],
        languages: ["Indonesia", "English"],
    },
};

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
    lang: "en",
    setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Lang>("en");
    return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);