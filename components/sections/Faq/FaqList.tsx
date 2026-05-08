"use client";

import { useState, useId } from "react";
import styles from "./Faq.module.css";

type FaqItem = { q: string; a: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number>(0);
  const baseId = useId();

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        const num = String(i + 1).padStart(2, "0");
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div
            key={item.q}
            className={`${styles.item}${isOpen ? ` ${styles.open}` : ""}`}
          >
            <button
              type="button"
              className={styles.q}
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
            >
              <span className={styles.num}>Q.{num}</span>
              <span className={styles.qText}>{item.q}</span>
              <span className={styles.toggle} aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              aria-hidden={!isOpen}
              className={styles.a}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
