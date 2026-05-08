import type { ReactNode } from "react";
import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { CheckIcon, StarIcon } from "../../ui/icons";
import styles from "./Benefits.module.css";

const HomeIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
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

const PackageIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ShieldIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const benefits: Array<{
  num: string;
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
}> = [
  {
    num: "01",
    icon: HomeIcon,
    title: "Home Cultivation",
    desc: "Legally grow up to 6 plants per patient (12 per household maximum) in a secure, enclosed space for personal medical use.",
    tag: "Up to 6 plants",
  },
  {
    num: "02",
    icon: DollarIcon,
    title: "Tax Savings",
    desc: "Save the entire state cannabis excise and sales tax (about 15–20%) on every purchase — medical patients are exempt under Massachusetts law.",
    tag: "Save 15–20%",
  },
  {
    num: "03",
    icon: PackageIcon,
    title: "Possession Limit",
    desc: "Legally possess up to a 60-day supply, defined as 10 ounces of usable cannabis, as allowed under state medical regulations.",
    tag: "10oz / 60 days",
  },
  {
    num: "04",
    icon: ShieldIcon,
    title: "Legal Protection",
    desc: "Protected under the Massachusetts Medical Use of Marijuana Program. Purchase from licensed dispensaries with regulated, lab-tested products.",
    tag: "State protected",
  },
];

export function Benefits() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHead
          eyebrow="Patient Benefits"
          eyebrowIcon={<StarIcon />}
          title={
            <>
              Benefits of Your <em>Medical Cannabis Card</em> in Massachusetts
            </>
          }
          description="Holding a valid medical marijuana card provides patients with regulated access to cannabis under Massachusetts law."
        />

        <div className={styles.grid}>
          {benefits.map((b) => (
            <article key={b.title} className={styles.card}>
              <div className={styles.number} aria-hidden="true">
                {b.num}
              </div>
              <div className={styles.iconWrap}>{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
              <div className={styles.tag}>
                <CheckIcon strokeWidth={2.5} />
                {b.tag}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
