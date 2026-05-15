import type { ReactNode } from "react";
import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { Button, CenterCta } from "../../ui/Button";
import { ArrowRightIcon, BoltIcon } from "../../ui/icons";
import styles from "./Steps.module.css";

const StepUserPlus = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6M23 11h-6" />
  </svg>
);

const StepCalendar = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="15" r="2" fill="currentColor" />
  </svg>
);

const StepCheckCircle = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const StepCard = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="10" y2="15" />
  </svg>
);

const steps: Array<{ num: string; icon: ReactNode; title: string; desc: string }> = [
  {
    num: "i",
    icon: StepUserPlus,
    title: "Create Your Account",
    desc: "Fill out your basic details and state ID in our HIPAA-compliant form.",
  },
  {
    num: "ii",
    icon: StepCalendar,
    title: "Schedule Your Evaluation",
    desc: "Select a convenient time to connect with a licensed physician.",
  },
  {
    num: "iii",
    icon: StepCheckCircle,
    title: "Attend Your Consultation",
    desc: "Discuss your medical condition with a licensed MMJ doctor who will determine eligibility under Massachusetts guidelines.",
  },
  {
    num: "iv",
    icon: StepCard,
    title: "Register with the State",
    desc: "If approved, complete your registration through the Massachusetts Medical Use of Marijuana Online System (MassCIP).",
  },
];

export function Steps() {
  return (
    <section className={styles.section} id="process" aria-labelledby="steps-heading">
      <Container>
        <SectionHead
          eyebrow="The Process"
          eyebrowIcon={<BoltIcon />}
          title={
            <>
              How to Get a <em>Massachusetts Medical Marijuana Card</em> Online
            </>
          }
          description="Your consultation is conducted by a state-licensed doctor with in-depth knowledge of Massachusetts cannabis laws and patient eligibility, ensuring your assessment is accurate, confidential, and in compliance with all regulatory standards."
        />

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <article key={s.title} className={styles.card}>
              <div className={styles.num} aria-label={`Step ${i + 1}`}>
                {s.num}
              </div>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>

        <CenterCta>
          <Button
            href="#consult-form"
            variant="primary"
            title="Consult a Massachusetts MMJ doctor and apply for your Medical Marijuana Card"
          >
            Consult With a Massachusetts MMJ Doctor
            <ArrowRightIcon />
          </Button>
        </CenterCta>
      </Container>
    </section>
  );
}
