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
     <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11389764557"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11389764557');
              gtag('event', 'conversion', {'send_to': 'AW-11389764557/FgCICOmGv_AYEM2HiLcq'});
            `,
          }}
        />
        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2173061336796663');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2173061336796663&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
