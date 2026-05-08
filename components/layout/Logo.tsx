import Image from "next/image";
import styles from "./Logo.module.css";

export function Logo({
  href = "#",
  variant = "light",
  ariaLabel = "Massachusetts Medical Marijuana Card — home",
  priority = false,
}: {
  href?: string;
  variant?: "light" | "dark";
  ariaLabel?: string;
  priority?: boolean;
}) {
  const imgClass = variant === "dark" ? styles.imageDark : styles.image;
  return (
    <a href={href} className={styles.logo} aria-label={ariaLabel}>
      <Image
        src="/logo.jpg"
        alt="Massachusetts Medical Marijuana Card"
        width={800}
        height={250}
        priority={priority}
        className={imgClass}
        sizes="220px"
      />
    </a>
  );
}
