"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ContactBar = () => {
    const [contactBarData, setContactBarData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setContactBarData(data?.contactBar);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section>
            <div className="border-y border-softGray bg-softGray/40">
                <div className="container">
                    <div className="flex items-center justify-center sm:justify-between gap-4 py-4 md:py-5">

                        <span className="hidden sm:block text-sm text-secondary">Let's connect</span>

                        <div className="flex items-center gap-2 sm:gap-3">
                            {contactBarData?.socialItems?.map((value: any, index: number) => (
                                <Link
                                    key={index}
                                    href={value?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full border border-softGray bg-white hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                                >
                                    <Image
                                        src={value?.icon}
                                        alt={value?.platform}
                                        width={16}
                                        height={16}
                                        className="opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBar;