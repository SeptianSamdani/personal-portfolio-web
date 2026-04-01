"use client";
import Image from "next/image";
import { useLang, heroContent } from "@/app/context/LanguageContext";

const HeroSection = () => {
    const { lang } = useLang();
    const content = heroContent[lang];

    return (
        <section className="relative hero-section overflow-hidden pt-24 md:pt-28 xl:pt-32 pb-10 md:pb-12">
            {/* Dekorasi grid kotak */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(254,67,0,0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(254,67,0,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                    WebkitMaskImage: "radial-gradient(ellipse at bottom right, rgba(0,0,0,0.8) 0%, transparent 55%)",
                    maskImage: "radial-gradient(ellipse at bottom right, rgba(0,0,0,0.8) 0%, transparent 55%)",
                }}
            />

            {/* Fade bawah */}
            <div
                className="absolute bottom-0 left-0 w-full h-24 z-0 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent, white)" }}
            />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">

                    {/* Konten Teks */}
                    <div className="flex flex-col gap-3 md:gap-6 w-full lg:w-1/2 text-center lg:text-left">
                        <div>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl">{content.greeting}</h1>
                                <div className="wave">
                                    <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={40} height={40} className="w-8 h-8 md:w-12 md:h-12" />
                                </div>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl">{content.title}</h1>

                            {/* Opsi 1 — Accent line */}
                            <div className="w-25 h-[3px] bg-primary rounded-full mt-3 mx-auto lg:mx-0" />
                        </div>

                        <p className="text-secondary font-normal text-sm md:text-base max-w-sm mx-auto lg:mx-0 lg:max-w-xl">
                            {content.description}
                        </p>

                        {/* Tombol PDF khusus mobile */}
                        <div className="flex justify-center lg:hidden mt-2">
                            <button
                                onClick={() => window.print()}
                                className="relative overflow-hidden cursor-pointer py-2 px-6 border border-primary rounded-full group"
                            >
                                <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 ease-in-out bg-primary rounded-full" />
                                <span className="relative z-10 text-sm font-medium text-black group-hover:text-white transition-colors duration-700">
                                    Download PDF Resume
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="relative w-full lg:w-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none mx-auto">
                        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[520px] xl:h-[620px]">
                            <Image
                                src={"/images/home/banner/avatar.jpg"}
                                alt="Septian Samdani"
                                fill
                                priority
                                className="rounded-3xl z-10 object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;