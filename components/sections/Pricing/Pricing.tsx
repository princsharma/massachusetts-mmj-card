import { Container } from "../../ui/Container";
import { Eyebrow } from "../../ui/SectionHead";
import {
  ArrowRightIcon,
  CheckIcon,
  InfoIcon,
} from "../../ui/icons";
import sectionHeadStyles from "../../ui/SectionHead.module.css";
import styles from "./Pricing.module.css";

const DollarIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

const SolidStar = (
  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

type Plan = {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "New MMJ Card",
    desc: "First-time applicant evaluation",
    price: "149",
    period: "/once",
    features: [
      "Same-Day Appointments",
      "Digital MMJ Recommendation",
      "HIPAA-Compliant Process",
      "100% Money-Back Guarantee",
      "24/7 Patient Support",
    ],
    cta: "Apply for Your Card",
    featured: true,
  },
  {
    name: "Card Renewal",
    desc: "Annual renewal evaluation",
    price: "129",
    period: "/year",
    features: [
      "Annual Renewal Consultation",
      "Updated MMJ Certification",
      "Same-Day Appointments",
      "HIPAA-Compliant",
      "24/7 Patient Support",
    ],
    cta: "Renew Your Card",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const cls = plan.featured
    ? `${styles.card} ${styles.featured}`
    : styles.card;
  return (
    <article className={cls}>
      {plan.featured ? (
        <span className={styles.tag}>
          {SolidStar} Most Popular
        </span>
      ) : null}
      <h3>{plan.name}</h3>
      <p className={styles.desc}>{plan.desc}</p>
      <div className={styles.amount}>
        <sup>$</sup>
        {plan.price}
        <small>{plan.period}</small>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f}>
            <span className={styles.check}>
              <CheckIcon />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a href="#consult-form" className={styles.cta}>
        {plan.cta}
        <ArrowRightIcon width={16} height={16} />
      </a>
    </article>
  );
}

export function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <Container className={styles.inner}>
        <header className={`${sectionHeadStyles.head} ${styles.darkHead}`}>
          <Eyebrow icon={DollarIcon} className={styles.darkEyebrow}>
            Transparent Pricing
          </Eyebrow>
          <h2>
            Transparent <em>Pricing</em> You Can Trust
          </h2>
          <p>
            Our pricing is structured to remain clear and accessible for
            Massachusetts patients.
          </p>
        </header>

        <div className={styles.grid}>
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        <p className={styles.note}>
          <InfoIcon />
          Massachusetts does not charge a state registration fee for patients.
        </p>
      </Container>
    </section>
  );
}
