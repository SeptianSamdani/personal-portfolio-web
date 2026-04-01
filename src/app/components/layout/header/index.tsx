"use client";
import Logo from "../logo";
import { useLang } from "@/app/context/LanguageContext";

const Header = () => {
    const { lang, setLang } = useLang();

    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container">
                <nav className="py-4 md:py-7">
                    <div className="flex items-center gap-3 sm:gap-8">
                        <Logo />

                        <button
                            onClick={() => window.print()}
                            className="hidden sm:block relative overflow-hidden cursor-pointer w-fit py-2 md:py-3 px-4 md:px-7 border border-primary rounded-full group"
                        >
                            <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-in-out bg-primary rounded-full" />
                            <span className="relative z-10 text-sm md:text-base font-medium text-black group-hover:text-white transition-colors duration-700">
                                Download PDF Resume
                            </span>
                        </button>

                        <div className="ml-auto flex items-center gap-3">
                            {(["en", "id"] as const).map((l, i) => (
                                <span key={l} className="flex items-center gap-3">
                                    <button
                                        onClick={() => setLang(l)}
                                        className={`text-sm font-medium cursor-pointer transition-all duration-300
                                            ${lang === l ? "text-primary font-semibold" : "text-secondary hover:text-black"}`}
                                    >
                                        {l.toUpperCase()}
                                    </button>
                                    {i === 0 && <span className="text-gray-300 text-sm">|</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;