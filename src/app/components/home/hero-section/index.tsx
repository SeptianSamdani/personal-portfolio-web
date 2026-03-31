// app/components/home/hero-section/index.tsx
"use client";
import Image from "next/image";
import { useLang, heroContent } from "@/app/context/LanguageContext";

const HeroSection = () => {
    const { lang } = useLang();
    const content = heroContent[lang];

    return (
        <section className="relative hero-section overflow-hidden pt-15 md:pt-20 pb-12 lg:pb-15 xl:pt-22">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-7 md:gap-4 items-center">

                    {/* Konten Teks */}
                    <div className="flex flex-col gap-4 md:gap-7 max-w-2xl w-full lg:w-1/2">
                        <div>
                            <div className="flex items-center gap-8">
                                <h1>{content.greeting}</h1>
                                <div className="wave">
                                    <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} />
                                </div>
                            </div>
                            <h1>{content.title}</h1>
                        </div>
                        <p className="text-secondary font-normal max-w-md xl:max-w-xl">
                            {content.description}
                        </p>
                    </div>

                    {/* Avatar */}
                    <div className="relative w-full lg:w-1/2">
                        {/* Dot Grid */}
                        <div
                            className="absolute -left-16 top-10 w-28 h-28 z-0 opacity-60"
                            style={{
                                backgroundImage: `radial-gradient(circle, #f97316 1.5px, transparent 1.5px)`,
                                backgroundSize: `12px 12px`,
                            }}
                        />
                        <div
                            className="absolute -right-12 -bottom-6 w-24 h-24 z-0 opacity-60"
                            style={{
                                backgroundImage: `radial-gradient(circle, #160a01ff 1.5px, transparent 1.5px)`,
                                backgroundSize: `12px 12px`,
                            }}
                        />

                        {/* Gambar Avatar */}
                        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[650px]">
                            <Image
                                src={"/images/home/banner/avatar.jpg"}
                                alt="banner-img"
                                fill
                                className="rounded-4xl z-10 object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;