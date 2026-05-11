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
  const isDark = variant === "dark";
  const imgClass = isDark ? styles.imageDark : styles.image;
  const src = isDark ? "/massachutts-white.webp" : "/massachutts.webp";
  return (
    <a href={href} className={styles.logo} aria-label={ariaLabel}>
      <Image
        src={src}
        alt="Massachusetts Medical Marijuana Card"
        width={1532}
        height={426}
        priority={priority}
        className={imgClass}
        sizes="(max-width: 640px) 140px, 180px"
      />
    </a>
  );
}
