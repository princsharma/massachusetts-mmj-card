import Image from "next/image";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";
import { Eyebrow } from "../../ui/SectionHead";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  LockIcon,
  MedalIcon,
  ShieldCheckIcon,
  StarIcon,
} from "../../ui/icons";
import styles from "./Expert.module.css";

const HeartIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export function Expert() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <div className={styles.image}>
              <Image
                src="/expert/licensed-ma-professionals.webp"
                alt="Licensed Massachusetts physician evaluating a Medical Marijuana Card applicant"
                title="Licensed Massachusetts MMJ physicians"
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                loading="lazy"
              />
              <div className={styles.imageBadge}>
                <CheckIcon /> Verified Network
              </div>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statNum}>5K+</div>
                  <div className={styles.statLabel}>Patients Served</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>4.9/5</div>
                  <div className={styles.statLabel}>Avg Rating</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNum}>24hr</div>
                  <div className={styles.statLabel}>Appointment</div>
                </div>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <StarIcon strokeWidth={2} />
              </div>
              <div>
                <strong>98% Satisfaction</strong>
                <small>From verified patients</small>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <Eyebrow icon={HeartIcon}>Expert Care</Eyebrow>
            <h2>
              Expert Care from{" "}
              <em>Licensed Massachusetts Medical Professionals</em>
            </h2>
            <p>
              You are evaluated by Massachusetts-licensed physicians who bring
              deep clinical expertise in the state&apos;s medical cannabis
              program. Each doctor is trained to assess qualifying conditions
              with precision, ensuring your certification is both medically
              sound and fully compliant with state regulations.
            </p>
            <p>
              Your consultation is a focused, one-on-one medical review where
              your symptoms and history are carefully considered. Physicians
              apply evidence-based judgment to determine eligibility and provide
              clear, responsible guidance aligned with Massachusetts program
              standards.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <MedalIcon strokeWidth={2} />
                </div>
                <div>
                  <strong>Board-Certified</strong>
                  <small>All MA-licensed physicians</small>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <LockIcon strokeWidth={2} />
                </div>
                <div>
                  <strong>HIPAA Compliant</strong>
                  <small>Full data privacy</small>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <ShieldCheckIcon strokeWidth={2} />
                </div>
                <div>
                  <strong>100% Legal</strong>
                  <small>Fully compliant evaluations</small>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>
                  <ClockIcon strokeWidth={2} />
                </div>
                <div>
                  <strong>Same-Day Service</strong>
                  <small>Quick evaluations</small>
                </div>
              </div>
            </div>

            <Button
              href="#consult-form"
              variant="primary"
              title="Start your Massachusetts Medical Marijuana Card journey today"
            >
              Start Your Journey Today
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
