import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Pedro Vieira - Psicólogo e Psicanalista",
  description: "Consultas presenciais e online",
  keywords: [
    "Psicólogo Salvador",
    "Psicanalista Salvador",
    "Terapia online",
    "Psicologia clínica",
    "Pedro Vieira",
    "Atendimento psicológico",
    "Psicanálise lacaniana",
    "Terapia",
    "Pedro psicólogo",
    "Psicólogo online",
    "pedro",
    "vieira",
    "psi"
  ],
  authors: [{ name: "Pedro Vieira" }],
  openGraph: {
    title: "Pedro Vieira - Psicólogo e Psicanalista",
    description: "Consultas presenciais e online em Salvador e para todo o Brasil.",
    url: "https://pedrovieirapsi.com/",
    siteName: "Pedro Vieira Psicólogo",
    images: [
      {
        url: "https://pedrovieirapsi.com/images/pedro-vieira.png",
        width: 1464,
        height: 2174,
        alt: "Pedro Vieira Psicólogo"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
