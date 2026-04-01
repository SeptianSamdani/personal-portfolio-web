import { NextResponse } from "next/server";
import { platform } from "os";
import { title } from "process";

const contactBar = {
  socialItems: [
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/septiansamdani"
    }, 
    {
      platform: "github", 
      icon: "/images/icon/github.svg", 
      link: "https://github.com/SeptianSamdani"
    }, 
    {
      platform: "instagram", 
      icon: "/images/icon/instagram.svg", 
      link: "https://www.instagram.com/septiansamdanny/"
    }, 
    {
      platform: "youtube", 
      icon: "/images/icon/youtube.svg", 
      link: "https://www.youtube.com/@septiansamdanii"
    }, 
    {
      platform: "gmail", 
      icon: "/images/icon/mail.svg", 
      link: "mailto:septiansamdani05@gmail.com"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "Universitas Siliwangi - 2022",
      description: "S1 Sistem Informasi, Agustus 2022 – Agustus 2026. Fokus pada pengembangan web dan analisis data."
    },
    {
      title: "Bitlabs Academy - 2024",
      description: "Studi Independen Data Analytics for Business Batch 7. Mempelajari SQL, Python, Tableau, dan business analytics."
    },
    {
      title: "Dicoding - ASAH - 2025",
      description: "React & Back-End with AI Cohort. Dipilih dari 2.000 peserta, mencakup React, Node.js, dan AWS Cloud."
    }
  ],
  skills: [
    { name: "React.js", icon: "/images/home/education-skill/react.svg", rating: 4 },
    { name: "Typescript", icon: "/images/home/education-skill/typescript.svg", rating: 4 },
    { name: "Next.js", icon: "/images/home/education-skill/nextjs.svg", rating: 4 },
    { name: "Laravel", icon: "/images/home/education-skill/laravel.svg", rating: 4 },
    { name: "PostgreSQL", icon: "/images/home/education-skill/postgresql.svg", rating: 4 },
    { name: "Node.js", icon: "/images/home/education-skill/nodejs.svg", rating: 3 },
    { name: "Tailwind", icon: "/images/home/education-skill/tailwind.svg", rating: 3 },
    { name: "JavaScript", icon: "/images/home/education-skill/js.svg", rating: 4 }, 
    { name: "MongoDB", icon: "/images/home/education-skill/mongodb.svg", rating: 4 },
  ]
};

const contactLinks = {
  socialLinks: [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/septiansamdani" }
  ],
  contactInfo: [
    {
      type: "email",
      label: "septiansamdani05@gmail.com",
      link: "mailto:septiansamdani05@gmail.com"
    }
  ]
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
