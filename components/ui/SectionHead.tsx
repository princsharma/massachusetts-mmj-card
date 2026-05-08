import type { ReactNode } from "react";
import styles from "./SectionHead.module.css";

export function Eyebrow({
  icon,
  children,
  className,
}: {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const cls = className ? `${styles.eyebrow} ${className}` : styles.eyebrow;
  return (
    <div className={cls}>
      {icon}
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  const cls = className ? `${styles.head} ${className}` : styles.head;
  return (
    <header className={cls}>
      {eyebrow ? <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
