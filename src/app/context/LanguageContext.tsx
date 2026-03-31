// app/context/LanguageContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

type Lang = "en" | "id";

export const heroContent = {
    en: {
        greeting: "I'm Sruthi",
        title: "UI/UX Designer",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
    },
    id: {
        greeting: "Saya Sruthi",
        title: "Desainer UI/UX",
        description: "Lorem Ipsum adalah teks dummy sederhana dari industri percetakan dan penerbitan. Berbagai variasi dari Lorem Ipsum tersedia, namun sebagian besar telah mengalami perubahan.",
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