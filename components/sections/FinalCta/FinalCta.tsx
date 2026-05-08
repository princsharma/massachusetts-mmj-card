import Image from "next/image";
import { Container } from "../../ui/Container";
import { Eyebrow } from "../../ui/SectionHead";
import {
  ArrowRightIcon,
  BoltIcon,
  ClockIcon,
  MedalIcon,
  ShieldCheckIcon,
} from "../../ui/icons";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.section} id="consult">
      <div className={styles.bgImage} aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1600&auto=format&fit=crop&q=80"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />

      <Container>
        <div className={styles.inner}>
          <Eyebrow icon={<BoltIcon />} className={styles.eyebrow}>
            Get Started Today
          </Eyebrow>
          <h2 className={styles.heading}>
            Consult with Your <em>Doctor</em> Today
          </h2>
          <p className={styles.lead}>
            Schedule a secure online consultation with a licensed physician and
            begin your evaluation with confidence.
          </p>
          <a href="#consult-form" className={styles.cta}>
            Book Your Appointment Now
            <ArrowRightIcon />
          </a>
          <div className={styles.features}>
            <div className={styles.feature}>
              <ClockIcon />
              <div className={styles.featureText}>
                <strong>Same-Day Appointments</strong>
                <small>Flexible scheduling</small>
              </div>
            </div>
            <div className={styles.feature}>
              <ShieldCheckIcon />
              <div className={styles.featureText}>
                <strong>100% Online Process</strong>
                <small>No in-person visits required</small>
              </div>
            </div>
            <div className={styles.feature}>
              <MedalIcon />
              <div className={styles.featureText}>
                <strong>Licensed MA Physicians</strong>
                <small>Certified and experienced</small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
