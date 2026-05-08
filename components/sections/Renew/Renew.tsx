import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { ArrowRightIcon } from "../../ui/icons";
import styles from "./Renew.module.css";

const RefreshIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
  </svg>
);

const renewSteps = [
  {
    title: "Get a New Certification",
    desc: "Obtain a new certification from a registered healthcare provider under the state's medical marijuana program.",
  },
  {
    title: "Submit Through MassCIP",
    desc: "Complete and submit your renewal through the official Massachusetts Medical Use of Marijuana Online System (MassCIP).",
  },
  {
    title: "Registration Updated",
    desc: "After submission, your registration is processed and updated in the state system.",
  },
];

export function Renew() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHead
          eyebrow="Renewals"
          eyebrowIcon={RefreshIcon}
          title={
            <>
              How to <em>Renew</em> Your Massachusetts Medical Marijuana Card
            </>
          }
          description="Maintaining an active registration ensures uninterrupted access to medical cannabis."
        />

        <div className={styles.content}>
          <ol className={styles.list}>
            {renewSteps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <div className={styles.num} aria-hidden="true">
                  {i + 1}
                </div>
                <div className={styles.body}>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
                <div className={styles.arrow} aria-hidden="true">
                  <ArrowRightIcon />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
