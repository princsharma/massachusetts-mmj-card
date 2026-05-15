import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Logo priority />
        <div className={styles.links}>
          <a href="#process" title="How the Massachusetts Medical Marijuana Card process works">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 12h6m-6 4h6M9 8h6M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            How It Works
          </a>
          <a href="#pricing" title="Massachusetts Medical Marijuana Card pricing">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
            Pricing
          </a>
          <a href="#faq" title="Frequently asked questions about the Massachusetts MMJ card">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
            FAQ
          </a>
          <a
            href="#consult-form"
            className={styles.cta}
            title="Start your Massachusetts Medical Marijuana Card application"
          >
            <span>Get Started →</span>
          </a>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
