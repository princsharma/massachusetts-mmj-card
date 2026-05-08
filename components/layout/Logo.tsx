import styles from "./Logo.module.css";

export function Logo({
  href = "#",
  variant = "light",
  ariaLabel = "MassMMJ home",
}: {
  href?: string;
  variant?: "light" | "dark";
  ariaLabel?: string;
}) {
  const textCls =
    variant === "dark" ? `${styles.text} ${styles.darkText}` : styles.text;
  const accentCls =
    variant === "dark" ? styles.darkBrandAccent : styles.brandAccent;
  return (
    <a href={href} className={styles.logo} aria-label={ariaLabel}>
      <span className={styles.icon} aria-hidden="true">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5-3 1-5 4-5 7v1h20v-1c0-3-2-6-5-7 1-1 2-3 2-5 0-4-3-7-7-7zm0 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      </span>
      <span className={textCls}>
        <strong>
          Mass<span className={accentCls}>MMJ</span>
        </strong>
        <small>Licensed Medical Evaluation</small>
      </span>
    </a>
  );
}
