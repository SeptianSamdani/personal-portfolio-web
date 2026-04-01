// layout.tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { LanguageProvider } from "./context/LanguageContext";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Septian Samdani | Junior Web Developer",
  description: "Portfolio Septian Samdani, Junior Web Developer mahasiswa Sistem Informasi Universitas Siliwangi. Berpengalaman di React, Laravel, Golang, dan PostgreSQL.",
  keywords: ["Septian Samdani", "Junior Web Developer", "React Developer", "Laravel Developer", "Portfolio"],
  authors: [{ name: "Septian Samdani" }],
  openGraph: {
    title: "Septian Samdani | Junior Software Developer",
    description: "Portfolio Septian Samdani, Junior Software Developer.",
    url: "https://septiansamdani.web.id",
    siteName: "Septian Samdani Portfolio",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://septiansamdani.web.id",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Septian Samdani",
                            url: "https://septiansamdani.web.id",
                            jobTitle: "Junior Web Developer",
                            email: "septiansamdani05@gmail.com",
                            sameAs: ["https://www.linkedin.com/in/septiansamdani"],
                        }),
                    }}
                />
            </head>
            <body className={bricolageGrotesque.className}>
                <LanguageProvider>
                    <Header />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}