import Image from "next/image";
import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { Button, CenterCta } from "../../ui/Button";
import {
  ArrowRightIcon,
  ClockIcon,
  LockIcon,
  MedalIcon,
  ShieldCheckIcon,
} from "../../ui/icons";
import styles from "./Trust.module.css";

const PhotoUserIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
  </svg>
);

const PhotoVideoIcon = (
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

export function Trust() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHead
          eyebrow="Start Your Journey Today"
          eyebrowIcon={<ShieldCheckIcon />}
          title={
            <>
              Connect With a Doctor for Your{" "}
              <em>Medical Marijuana Card</em> in Massachusetts
            </>
          }
          description="Licensed physicians are available to guide patients through each step of the evaluation process with professionalism and clarity."
        />

        <div className={styles.photos}>
          <article className={styles.photo}>
            <Image
              src="/trust/licensed-ma-physicians.webp"
              alt="Licensed Massachusetts physician consultation"
              fill
              sizes="(max-width: 980px) 100vw, 40vw"
              loading="lazy"
            />
            <div className={styles.overlay}>
              <div className={styles.icon}>{PhotoUserIcon}</div>
              <h4>Licensed MA Physicians</h4>
              <p>
                Massachusetts-certified doctors specialized in medical cannabis
                evaluations.
              </p>
              <span className={styles.cta}>
                Learn more <ArrowRightIcon width={14} height={14} />
              </span>
            </div>
          </article>

          <article className={styles.photo}>
            <Image
              src="/trust/online-consultations.webp"
              alt="Patient on a secure online consultation"
              fill
              sizes="(max-width: 980px) 100vw, 30vw"
              loading="lazy"
            />
            <div className={styles.overlay}>
              <div className={styles.icon}>{PhotoVideoIcon}</div>
              <h4>Online Consultations</h4>
              <p>Secure HIPAA-compliant appointments from your home.</p>
            </div>
          </article>

          <article className={styles.photo}>
            <Image
              src="/trust/confidential.webp"
              alt="Confidential and secure platform"
              fill
              sizes="(max-width: 980px) 100vw, 30vw"
              loading="lazy"
            />
            <div className={styles.overlay}>
              <div className={styles.icon}>
                <LockIcon strokeWidth={2} />
              </div>
              <h4>100% Confidential</h4>
              <p>Secure platform that protects every detail.</p>
            </div>
          </article>
        </div>

        <div className={styles.badges}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <ClockIcon strokeWidth={2} />
            </div>
            <h5>24-Hour Appointments</h5>
            <p>Flexible scheduling</p>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <LockIcon strokeWidth={2} />
            </div>
            <h5>100% Confidential</h5>
            <p>Secure platform</p>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <MedalIcon />
            </div>
            <h5>Licensed Doctors</h5>
            <p>Massachusetts-certified physicians</p>
          </div>
        </div>

        <CenterCta>
          <div className={styles.ctaRow}>
            <Button href="#consult-form" variant="primary">
              Schedule Consultation
              <ArrowRightIcon />
            </Button>
            <Button href="#process" variant="secondary">
              Learn More
            </Button>
          </div>
        </CenterCta>
      </Container>
    </section>
  );
}
