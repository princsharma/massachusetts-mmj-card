"use client";

import { useId, useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowRightIcon,
  ClockIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
} from "../../ui/icons";
import styles from "./ConsultForm.module.css";

const STATE = {
  stateAbbr: "MA",
  stateName: "Massachusetts",
  city: "Boston",
  timezone: "EST",
} as const;

const UTM_SOURCE = "massachusettsmedicalmarijuanascard";

const HEALLY_PREFILL_URL = "https://mymmj.getheally.com/patient_admin/prefill";

const ErrorIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const consultSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(120, "Too long")
    .regex(/^\S+(\s+\S+)+$/, "Please enter your first and last name"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(
      /^[2-9]\d{2}-[2-9]\d{2}-\d{4}$/,
      "Enter a valid US phone number (e.g. 617-555-0123)"
    ),
  terms: z.string().min(1, "Please accept the Terms and Privacy Policy"),
});

type FormFields = z.infer<typeof consultSchema>;
type FieldName = keyof FormFields;
type FormErrors = Partial<Record<FieldName, string>>;

export function ConsultForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const baseId = useId();

  const errId = (name: FieldName) => `${baseId}-${name}-err`;
  const fieldClass = (name: FieldName) =>
    errors[name] ? `${styles.field} ${styles.invalid}` : styles.field;

  const clearError = (name: FieldName) => {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = e.target as unknown as HTMLInputElement;
    const name = target.name as FieldName;
    if (name && errors[name]) clearError(name);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd) as Record<string, string>;
    if (!raw.terms) raw.terms = "";

    const result = consultSchema.safeParse(raw);
    if (!result.success) {
      const newErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FieldName;
        if (!newErrors[field]) newErrors[field] = issue.message;
      }
      setErrors(newErrors);
      console.warn("[ConsultForm] validation failed:", newErrors);
      const firstInvalid = result.error.issues[0]?.path[0];
      if (firstInvalid) {
        const el = form.querySelector<HTMLElement>(
          `[name="${String(firstInvalid)}"]`
        );
        el?.focus();
      }
      return;
    }

    setErrors({});
    setSubmitted(true);

    const { name, email, phone } = result.data;
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      state: STATE.stateAbbr,
      state_of_evaluation: STATE.stateAbbr,
      timezone: STATE.timezone,
      city: STATE.city,
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: UTM_SOURCE,
      },
    };

    const preset = btoa(JSON.stringify(payload))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const w = window as Window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "heallyValidatedSubmit",
      utm_source: UTM_SOURCE,
    });

    window.location.assign(
      `${HEALLY_PREFILL_URL}?redirect=sched&preset=${preset}&utm_source=${UTM_SOURCE}`
    );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.form} id="consult-form">
        <div className={styles.floatingIcon} aria-hidden="true">
          <ShieldCheckIcon strokeWidth={2} />
        </div>

        <h2 className={styles.title}>
          Get Started <em>Today</em>
        </h2>
        <p className={styles.sub}>
          Begin your evaluation by completing the form below.
        </p>

        <form onSubmit={handleSubmit} onChange={handleChange} noValidate>
          <div className={fieldClass("name")}>
            <label htmlFor="name">
              <UserIcon /> Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? errId("name") : undefined}
            />
            {errors.name ? (
              <p id={errId("name")} className={styles.errorMsg} role="alert">
                {ErrorIcon}
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className={fieldClass("email")}>
            <label htmlFor="email">
              <MailIcon /> Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              autoComplete="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? errId("email") : undefined}
            />
            {errors.email ? (
              <p id={errId("email")} className={styles.errorMsg} role="alert">
                {ErrorIcon}
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className={fieldClass("phone")}>
            <label htmlFor="phone">
              <PhoneIcon /> Phone
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="999-999-9999"
              autoComplete="tel"
              maxLength={12}
              inputMode="numeric"
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                let formatted = digits;
                if (digits.length >= 7) {
                  formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
                } else if (digits.length >= 4) {
                  formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
                }
                e.target.value = formatted;
              }}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? errId("phone") : undefined}
            />
            {errors.phone ? (
              <p id={errId("phone")} className={styles.errorMsg} role="alert">
                {ErrorIcon}
                {errors.phone}
              </p>
            ) : null}
          </div>

          <label
            className={
              errors.terms
                ? `${styles.checkbox} ${styles.invalid}`
                : styles.checkbox
            }
          >
            <input
              type="checkbox"
              name="terms"
              aria-invalid={errors.terms ? true : undefined}
              aria-describedby={errors.terms ? errId("terms") : undefined}
            />
            <span>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>. All consultations are HIPAA
              compliant.
            </span>
          </label>
          {errors.terms ? (
            <p id={errId("terms")} className={styles.errorMsg} role="alert">
              {ErrorIcon}
              {errors.terms}
            </p>
          ) : null}

          <button
            type="submit"
            className={styles.submit}
            disabled={submitted}
            aria-live="polite"
          >
            {submitted ? (
              "Redirecting…"
            ) : (
              <>
                Continue to Evaluation
                <ArrowRightIcon />
              </>
            )}
          </button>
        </form>

        <div className={styles.trust}>
          <span>
            <LockIcon /> HIPAA-Compliant
          </span>
          <span>
            <ShieldCheckIcon /> Licensed Physicians
          </span>
          <span>
            <ClockIcon /> Secure Online
          </span>
        </div>
      </div>
    </div>
  );
}
