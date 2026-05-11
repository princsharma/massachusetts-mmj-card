import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { LockIcon, ShieldCheckIcon, StarIcon } from "../../ui/icons";
import styles from "./Why.module.css";

const GraduationIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const VideoIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);

const DollarIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const ChatIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

type Card = {
  tag: string;
  img: string;
  alt: string;
  icon: ReactNode;
  title: string;
  desc: string;
};

const cards: Card[] = [
  {
    tag: "Licensed",
    img: "/why/state-licensed-physicians.webp",
    alt: "State-licensed Massachusetts physician",
    icon: GraduationIcon,
    title: "State-Licensed Physicians",
    desc: "Get evaluated by certified doctors authorized under Massachusetts medical cannabis laws.",
  },
  {
    tag: "Online",
    img: "/why/online-evaluations.webp",
    alt: "Patient on a secure online evaluation",
    icon: VideoIcon,
    title: "Convenient Online Evaluations",
    desc: "Skip clinic visits and complete your consultation quickly from anywhere, on your schedule.",
  },
  {
    tag: "Trusted",
    img: "/why/trusted-process.webp",
    alt: "Trusted, state-compliant evaluation process",
    icon: <ShieldCheckIcon strokeWidth={2} />,
    title: "Trusted Process",
    desc: "Built around strict state standards, ensuring a smooth and legally compliant experience.",
  },
  {
    tag: "Honest",
    img: "/why/transparent-pricing.webp",
    alt: "Transparent pricing, no hidden fees",
    icon: DollarIcon,
    title: "Transparent Pricing",
    desc: "Know exactly what you'll pay before you begin — simple, honest, and upfront.",
  },
  {
    tag: "Secure",
    img: "/why/secure-confidential.webp",
    alt: "Secure and HIPAA-compliant platform",
    icon: <LockIcon strokeWidth={2} />,
    title: "Secure & Confidential",
    desc: "Your data is protected by a HIPAA-compliant system that meets the highest standards of privacy.",
  },
  {
    tag: "Support",
    img: "/why/ongoing-support.webp",
    alt: "Friendly patient support team",
    icon: ChatIcon,
    title: "Patient Support",
    desc: "Friendly support is always available to answer questions and guide you forward.",
  },
];

export function Why() {
  return (
    <section className={styles.section}>
      <div className={styles.blob} aria-hidden="true" />
      <Container>
        <SectionHead
          eyebrow="Why Choose Us"
          eyebrowIcon={<StarIcon />}
          title={
            <>
              Why Patients Choose Us for Their{" "}
              <em>Massachusetts Medical Marijuana Card</em>
            </>
          }
          description="Patients across Massachusetts rely on our structured, compliant evaluation process, supported by experienced physicians. Each consultation is conducted by a state-licensed doctor familiar with Massachusetts cannabis regulations and patient eligibility requirements."
        />

        <div className={styles.grid}>
          {cards.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className={styles.tag}>{c.tag}</div>
              </div>
              <div className={styles.body}>
                <div className={styles.icon}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
