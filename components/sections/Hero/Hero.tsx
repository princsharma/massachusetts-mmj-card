import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { ArrowRightIcon, PlayIcon } from "../../ui/icons";
import { ConsultForm } from "./ConsultForm";
import styles from "./Hero.module.css";

const stats = [
  { num: "98", suffix: "%", label: "Success Rate" },
  { num: "24", suffix: "hr", label: "Fast Response" },
  { num: "5K", suffix: "+", label: "Happy Patients" },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />

      <Container className={styles.grid}>
        <div>
          <div className={styles.badge}>
            <span className={styles.ping} aria-hidden="true" />
            Now seeing patients in Massachusetts
          </div>

          <div className={styles.reviewsPill}>
            <div className={styles.avatars} aria-hidden="true">
              <span />
              <span />
              <span />
              <span>+5K</span>
            </div>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            <span>4.9</span>
            <span className={styles.count}>· Trusted by patients</span>
          </div>

          <h1 id="hero-heading" className={styles.heading}>
            Apply for a{" "}
            <span className={styles.underlineDecorate}>Massachusetts</span>{" "}
            <span className={styles.highlight}>Medical Marijuana</span> Card
            Online Today
          </h1>

          <p className={styles.desc}>
            Complete your medical marijuana evaluation through a secure, fully
            compliant online process aligned with the{" "}
            <strong>Massachusetts Medical Use of Marijuana Program</strong>.
            Every evaluation follows the standards set by the{" "}
            <strong>Massachusetts Cannabis Control Commission</strong>, ensuring
            your application meets all legal and clinical requirements.
          </p>

          <div className={styles.buttons}>
            <Button
              href="#consult-form"
              variant="primary"
              title="Start your Massachusetts Medical Marijuana Card application"
            >
              Start Application
              <ArrowRightIcon />
            </Button>
            <Button
              href="#process"
              variant="secondary"
              title="See how the Massachusetts Medical Marijuana Card process works"
            >
              <PlayIcon />
              How It Works
            </Button>
          </div>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>
                  <em>{s.num}</em>
                  {s.suffix}
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <ConsultForm />
      </Container>
    </section>
  );
}
