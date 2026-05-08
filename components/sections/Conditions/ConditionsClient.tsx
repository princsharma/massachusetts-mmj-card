"use client";

import { useId, useMemo, useState } from "react";
import { CheckIcon, InfoIcon } from "../../ui/icons";
import styles from "./Conditions.module.css";

const SearchIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const conditions = [
  "Cancer",
  "Glaucoma",
  "HIV / AIDS",
  "Hepatitis C",
  "ALS (Amyotrophic Lateral Sclerosis)",
  "Crohn's Disease",
  "Parkinson's Disease",
  "Multiple Sclerosis",
];

export function ConditionsClient() {
  const [query, setQuery] = useState("");
  const inputId = useId();

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return conditions;
    return conditions.filter((c) => c.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <div className={styles.search}>
        {SearchIcon}
        <label htmlFor={inputId} className="sr-only" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>
          Search qualifying conditions
        </label>
        <input
          id={inputId}
          type="search"
          placeholder="Search your condition..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className={styles.grid}>
        {visible.map((c) => (
          <div key={c} className={styles.pill}>
            <CheckIcon />
            {c}
          </div>
        ))}
      </div>

      <div className={styles.noteWrap}>
        <p className={styles.note}>
          <InfoIcon />
          <span>
            <strong>Don&apos;t see your condition?</strong> Physicians may also
            certify patients for other conditions if they determine the benefits
            of medical cannabis outweigh the potential risks.
          </span>
        </p>
      </div>
    </>
  );
}
