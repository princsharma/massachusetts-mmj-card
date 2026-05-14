import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { HashLinkScroll } from "../components/HashLinkScroll";
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
    default: "Apply Your Medical Marijuana Card Massachusetts",
    template: "%s · MassMMJ",
  },
  description:
    "Apply for a Massachusetts medical marijuana card online with licensed physicians, private evaluations, and reliable support.",
  applicationName: "MassMMJ",
  keywords: [
    "Medical Marijuana Card Massachusetts",
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
    title: "Apply Your Medical Marijuana Card Massachusetts",
    description:
      "Apply for a Massachusetts medical marijuana card online with licensed physicians, private evaluations, and reliable support.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Massachusetts Medical Marijuana Card — apply online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Your Medical Marijuana Card Massachusetts",
    description:
      "Apply for a Massachusetts medical marijuana card online with licensed physicians, private evaluations, and reliable support.",
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
  verification: {
    google: "4W6PhPEcf_7MB9oT5l7xnrBvl2qHI1vPZiIS-R33pWU",
  },
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
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Massachusetts Medical Marijuana Card",
      alternateName: "MassMMJ",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/massachutts.webp`,
        width: 1532,
        height: 426,
      },
      image: `${SITE_URL}/massachutts.webp`,
      description:
        "Licensed Massachusetts medical marijuana card service offering 100% online physician evaluations under the Massachusetts Medical Use of Marijuana Program.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "MA",
        addressCountry: "US",
      },
      areaServed: { "@type": "State", name: "Massachusetts" },
      telephone: "+1-617-000-0000",
      email: "contact@medicalmarijuanacardmassachusetts.com",
      priceRange: "$129 - $149",
      medicalSpecialty: "MedicalSpecialty",
      availableService: [
        { "@id": `${SITE_URL}/#service-new` },
        { "@id": `${SITE_URL}/#service-renewal` },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1000",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        // Replace with real handles when available
        "https://twitter.com/massmmj",
        "https://www.facebook.com/massmmj",
        "https://www.instagram.com/massmmj",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Massachusetts Medical Marijuana Card",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-new`,
      serviceType: "Medical Marijuana Evaluation",
      name: "New MMJ Card Evaluation",
      description:
        "First-time applicant evaluation by a licensed Massachusetts physician with same-day appointments and a 100% money-back guarantee if not approved.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Massachusetts" },
      audience: { "@type": "PatientAudience" },
      offers: {
        "@type": "Offer",
        price: "149",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#consult-form`,
        category: "Medical Evaluation",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service-renewal`,
      serviceType: "Medical Marijuana Renewal",
      name: "MMJ Card Renewal",
      description:
        "Annual renewal evaluation for existing Massachusetts medical marijuana card holders, completed online with a state-licensed physician.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Massachusetts" },
      audience: { "@type": "PatientAudience" },
      offers: {
        "@type": "Offer",
        price: "129",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#consult-form`,
        category: "Medical Evaluation",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
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
          name: "How long does approval take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After certification, patients can typically obtain a temporary registration quickly and begin purchasing while completing the process.",
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
          name: "Where can I use my card?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can purchase medical cannabis from licensed dispensaries across Massachusetts.",
          },
        },
        {
          "@type": "Question",
          name: "What products are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dispensaries offer oils, tinctures, edibles, flower, and other regulated cannabis products.",
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
        {
          "@type": "Question",
          name: "Can I have a caregiver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Patients may designate a caregiver through the state program to assist with obtaining medical cannabis.",
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
      <GoogleTagManager gtmId="GTM-TZ9JZJCG" />
      <body>
        <HashLinkScroll />
        {children}
      </body>
    </html>
  );
}
