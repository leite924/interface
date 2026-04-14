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

const SITE_URL = "https://www.interfacedigital.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Interface | Câmeras, Biometria e Controle de Acesso em Olinda e Recife",
    template: "%s | Interface Vídeos e Sistemas Digitais",
  },
  description:
    "Segurança eletrônica de alto padrão em Olinda, Recife e Região Metropolitana. CFTV inteligente, câmeras de monitoramento, biometria facial, controle de acesso e leitura de placas (LPR). Atendimento por agendamento.",
  keywords: [
    "câmeras de segurança Recife",
    "CFTV Olinda",
    "controle de acesso Pernambuco",
    "biometria facial",
    "monitoramento por câmeras",
    "leitura de placas LPR",
    "segurança eletrônica Recife",
    "instalação de câmeras",
    "catracas biométricas",
    "interface vídeos",
  ],
  authors: [{ name: "Interface Vídeos e Sistemas Digitais" }],
  creator: "Interface Vídeos e Sistemas Digitais",
  publisher: "Interface Vídeos e Sistemas Digitais",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Interface Vídeos e Sistemas Digitais",
    title: "Interface | Segurança Eletrônica de Alto Padrão em Olinda e Recife",
    description:
      "CFTV inteligente, câmeras de monitoramento, biometria facial e controle de acesso. Atendimento em Olinda, Recife e Região Metropolitana.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interface Vídeos e Sistemas Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interface | Segurança Eletrônica em Olinda e Recife",
    description:
      "CFTV inteligente, biometria e controle de acesso. Atendimento por agendamento em Olinda/PE.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Segurança Eletrônica",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Interface Vídeos e Sistemas Digitais",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+5581999642883",
  email: "contato@interfacedigital.com.br",
  priceRange: "$$",
  description:
    "Empresa especializada em segurança eletrônica: CFTV, câmeras de monitoramento, biometria facial, controle de acesso e leitura de placas (LPR).",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Olinda Dom Hélder Câmara, 234 - sala 09",
    addressLocality: "Olinda",
    addressRegion: "PE",
    postalCode: "53010-005",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.0089,
    longitude: -34.8553,
  },
  areaServed: [
    { "@type": "City", name: "Olinda" },
    { "@type": "City", name: "Recife" },
    { "@type": "City", name: "Jaboatão dos Guararapes" },
    { "@type": "City", name: "Paulista" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana do Recife" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5581999642883",
    contactType: "customer service",
    availableLanguage: ["Portuguese"],
    areaServed: "BR",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "CFTV e Câmeras de Monitoramento" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biometria Facial" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Controle de Acesso" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leitura de Placas (LPR)" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutenção de Sistemas de Segurança" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
