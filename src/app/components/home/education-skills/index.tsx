"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/app/context/LanguageContext";

const EducationSkills = () => {
    const [educationData, setEducationData] = useState<any>(null);
    const { lang } = useLang();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setEducationData(data?.educationData);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section>
            <div className="border-t border-softGray overflow-hidden">
                <div className="container relative z-10">
                    <Image
                        src="/images/home/education-skill/edu-skill-vector.svg"
                        alt="vector"
                        width={260}
                        height={170}
                        className="no-print absolute top-0 left-0 transform -translate-y-1/2 opacity-50 w-[140px] md:w-[200px] lg:w-[260px]"
                    />

                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>{lang === "en" ? "Education & Skills" : "Pendidikan & Keahlian"}</h2>
                            <p className="text-xl text-primary">( 03 )</p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">

                            {/* Education list */}
                            <div className="w-full lg:max-w-sm flex flex-col gap-4 md:gap-6">
                                {educationData?.education?.map((value: any, index: any) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="no-print mt-1.5 w-2.5 h-2.5 flex-shrink-0 rounded-full border border-black bg-white flex items-center justify-center">
                                            <div className="w-1 h-1 rounded-full bg-black" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="text-sm md:text-base font-semibold text-black">{value?.title}</h5>
                                            <p className="text-xs md:text-sm font-normal leading-relaxed">{value?.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Skills grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-5 w-full">
                                {educationData?.skills?.map((value: any, index: any) => (
                                    <div
                                        key={index}
                                        className="p-3 md:p-5 border border-softGray rounded-xl flex flex-col gap-3 md:gap-6 items-center justify-between hover:border-primary/30 transition-all duration-200 bg-white"
                                    >
                                        <div className="flex flex-col items-center gap-2 md:gap-4">
                                            <div className="w-10 h-10 md:w-14 md:h-14 relative">
                                                <Image
                                                    src={value?.icon}
                                                    alt={value?.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <p className="text-xs md:text-sm text-black font-medium text-center">{value?.name}</p>
                                        </div>
                                        <div className="flex gap-0.5 md:gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} width="8" height="8" viewBox="0 0 9 9" fill="none">
                                                    <rect width="9" height="9" rx="4.5" fill={i < value?.rating ? '#FE4300' : '#C0D8E0'} />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSkills;