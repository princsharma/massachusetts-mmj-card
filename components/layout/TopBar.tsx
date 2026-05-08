import { Container } from "../ui/Container";
import { BoltIcon } from "../ui/icons";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.bar} role="region" aria-label="Promotional offer">
      <Container>
        <span>
          <BoltIcon width={14} height={14} />
          <strong>Limited Time Offer</strong>
          <span className={styles.pipe} aria-hidden="true">
            •
          </span>
          Save with code <span className={styles.accent}>WELCOME25</span>
          <span className={styles.pipe} aria-hidden="true">
            •
          </span>
          <span className={styles.accent}>98% Approval</span>
        </span>
      </Container>
    </div>
  );
}
