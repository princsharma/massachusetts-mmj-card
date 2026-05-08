import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-fraunces",
});

const SITE_URL = "https://massachusettsmedicalmarijuanascard.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Massachusetts MMJ — Premium Medical Marijuana Card Service",
    template: "%s · MassMMJ",
  },
  description:
    "Get your Massachusetts medical marijuana card online. Connect with licensed MA physicians for a 100% online evaluation — same-day appointments, 98% approval rate, fully HIPAA-compliant.",
  applicationName: "MassMMJ",
  keywords: [
    "Massachusetts medical marijuana card",
    "MMJ card MA",
    "medical cannabis Massachusetts",
    "online MMJ evaluation",
    "telehealth marijuana doctor",
    "MassCIP",
  ],
  authors: [{ name: "MassMMJ" }],
  creator: "MassMMJ",
  publisher: "MassMMJ",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MassMMJ",
    title: "Massachusetts MMJ — Premium Medical Marijuana Card Service",
    description:
      "Connect with licensed Massachusetts physicians for a 100% online evaluation. Same-day appointments, 98% approval rate, complete confidentiality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MassMMJ — Massachusetts Medical Marijuana Card Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Massachusetts MMJ — Premium Medical Marijuana Card Service",
    description:
      "Get your Massachusetts medical marijuana card online with licensed physicians. 98% approval, same-day appointments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6faf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1f17" },
  ],
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "MassMMJ",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Licensed Massachusetts medical marijuana card service offering online physician evaluations.",
      areaServed: { "@type": "State", name: "Massachusetts" },
      telephone: "+1-617-000-0000",
      email: "hello@massachusettsmedicalmarijuanascard.com",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1000",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "MassMMJ",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Massachusetts medical marijuana card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is a registration issued through the state's Medical Use of Marijuana Program that allows patients to legally access cannabis from licensed dispensaries.",
          },
        },
        {
          "@type": "Question",
          name: "Who qualifies for medical marijuana in Massachusetts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Patients must have a debilitating medical condition and be certified by a licensed physician under the state program.",
          },
        },
        {
          "@type": "Question",
          name: "Can I apply online in Massachusetts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Patients can complete their evaluation through secure telehealth and then register with the state program online.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Patients pay for the physician evaluation. Massachusetts does not currently charge a state registration fee.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the Massachusetts MMJ card valid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical marijuana registrations in Massachusetts are valid for one year and must be renewed annually.",
          },
        },
        {
          "@type": "Question",
          name: "Do patients pay taxes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical cannabis is exempt from the state's recreational cannabis excise tax, reducing overall costs.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
