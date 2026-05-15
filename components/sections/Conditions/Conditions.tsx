import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { Button } from "../../ui/Button";
import { ArrowRightIcon } from "../../ui/icons";
import { ConditionsClient } from "./ConditionsClient";
import styles from "./Conditions.module.css";

const ListIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export function Conditions() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHead
          eyebrow="Qualifying Conditions"
          eyebrowIcon={ListIcon}
          title={
            <>
              Qualifying Conditions for a{" "}
              <em>Medical Marijuana Card</em> in Massachusetts
            </>
          }
          description='Under Massachusetts law, patients must be diagnosed with a "debilitating medical condition." Unlike many states, Massachusetts does not rely on a strict fixed list — physicians have authority to certify patients based on their clinical judgment. Commonly treated conditions include:'
        />

        <ConditionsClient />

        <div className={styles.cta}>
          <Button
            href="#consult-form"
            variant="primary"
            title="Check your eligibility for a Massachusetts Medical Marijuana Card"
          >
            Check Your Eligibility
            <ArrowRightIcon />
          </Button>
        </div>
      </Container>
    </section>
  );
}
