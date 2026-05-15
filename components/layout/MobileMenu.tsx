"use client";

import { useEffect, useId, useState } from "react";
import { ArrowRightIcon } from "../ui/icons";
import styles from "./MobileMenu.module.css";

type LinkItem = {
  href: string;
  label: string;
  title: string;
  icon?: React.ReactNode;
};

const ProcessIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M9 12h6m-6 4h6M9 8h6M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
const PriceIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);
const FaqIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

const links: LinkItem[] = [
  {
    href: "#process",
    label: "How It Works",
    title: "How the Massachusetts Medical Marijuana Card process works",
    icon: ProcessIcon,
  },
  {
    href: "#pricing",
    label: "Pricing",
    title: "Massachusetts Medical Marijuana Card pricing",
    icon: PriceIcon,
  },
  {
    href: "#faq",
    label: "FAQ",
    title: "Frequently asked questions about the Massachusetts MMJ card",
    icon: FaqIcon,
  },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div
        className={`${styles.scrim}${open ? ` ${styles.open}` : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <aside
        id={panelId}
        className={`${styles.panel}${open ? ` ${styles.open}` : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className={styles.panelHeader}>
          <strong>Menu</strong>
          <button
            type="button"
            className={styles.close}
            onClick={close}
            aria-label="Close menu"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.link}
            title={l.title}
            onClick={close}
          >
            {l.icon}
            {l.label}
          </a>
        ))}

        <a
          href="#consult-form"
          className={styles.cta}
          title="Start your Massachusetts Medical Marijuana Card application"
          onClick={close}
        >
          Get Started <ArrowRightIcon width={16} height={16} />
        </a>
      </aside>
    </>
  );
}
