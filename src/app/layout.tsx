import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enrico Perania — Lead Backend Engineer",
  description:
    "Software Engineer with ~9 years of experience building scalable systems in fintech and SaaS. Specialized in Java, Spring Boot, Kafka, and distributed architectures.",
  keywords: [
    "Enrico Perania",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Kafka",
    "Software Engineer",
    "Lima Peru",
  ],
  openGraph: {
    title: "Enrico Perania — Lead Backend Engineer",
    description:
      "Software Engineer with ~9 years of experience building scalable systems in fintech and SaaS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#030014] text-slate-200">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
