"use client";

import { useId, useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowRightIcon,
  ClockIcon,
  LockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
} from "../../ui/icons";
import styles from "./ConsultForm.module.css";

const ACTIVITY_ICON = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

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

const conditions = [
  "Chronic Pain",
  "Anxiety / PTSD",
  "Cancer",
  "Glaucoma",
  "Crohn's Disease",
  "Multiple Sclerosis",
  "Migraines",
  "Other",
];

const consultSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60, "Too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(60, "Too long"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(12, "Phone must be 12 characters or fewer")
    .regex(/^[0-9+\-()\s.]+$/, "Use digits, spaces, and ( ) + - . only"),
  state: z.enum(["MA", "other"]),
  condition: z.string().min(1, "Please select a condition"),
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
    const submission = { ...result.data, submittedAt: new Date().toISOString() };
    console.log("[ConsultForm] submitted:", submission);

    setSubmitted(true);
    window.setTimeout(() => {
      form.reset();
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.form} id="consult-form">
        <div className={styles.floatingIcon} aria-hidden="true">
          <ShieldCheckIcon strokeWidth={2} />
        </div>

        <h3 className={styles.title}>
          Get Started <em>Today</em>
        </h3>
        <p className={styles.sub}>
          Begin your evaluation by completing the form below.
        </p>

        <form onSubmit={handleSubmit} onChange={handleChange} noValidate>
          <div className={styles.row}>
            <div className={fieldClass("firstName")}>
              <label htmlFor="firstName">
                <UserIcon /> First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="John"
                autoComplete="given-name"
                aria-invalid={errors.firstName ? true : undefined}
                aria-describedby={errors.firstName ? errId("firstName") : undefined}
              />
              {errors.firstName ? (
                <p id={errId("firstName")} className={styles.errorMsg} role="alert">
                  {ErrorIcon}
                  {errors.firstName}
                </p>
              ) : null}
            </div>
            <div className={fieldClass("lastName")}>
              <label htmlFor="lastName">
                <UserIcon /> Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Doe"
                autoComplete="family-name"
                aria-invalid={errors.lastName ? true : undefined}
                aria-describedby={errors.lastName ? errId("lastName") : undefined}
              />
              {errors.lastName ? (
                <p id={errId("lastName")} className={styles.errorMsg} role="alert">
                  {ErrorIcon}
                  {errors.lastName}
                </p>
              ) : null}
            </div>
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

          <div className={styles.row}>
            <div className={fieldClass("phone")}>
              <label htmlFor="phone">
                <PhoneIcon /> Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="617-555-0000"
                autoComplete="tel"
                maxLength={12}
                inputMode="tel"
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
            <div className={fieldClass("state")}>
              <label htmlFor="state">
                <MapPinIcon /> State
              </label>
              <select
                id="state"
                name="state"
                defaultValue="MA"
                aria-invalid={errors.state ? true : undefined}
                aria-describedby={errors.state ? errId("state") : undefined}
              >
                <option value="MA">Massachusetts</option>
                <option value="other">Other State</option>
              </select>
              {errors.state ? (
                <p id={errId("state")} className={styles.errorMsg} role="alert">
                  {ErrorIcon}
                  {errors.state}
                </p>
              ) : null}
            </div>
          </div>

          <div className={fieldClass("condition")}>
            <label htmlFor="condition">
              {ACTIVITY_ICON} Primary Condition
            </label>
            <select
              id="condition"
              name="condition"
              defaultValue=""
              aria-invalid={errors.condition ? true : undefined}
              aria-describedby={errors.condition ? errId("condition") : undefined}
            >
              <option value="" disabled>
                — Select your condition —
              </option>
              {conditions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.condition ? (
              <p id={errId("condition")} className={styles.errorMsg} role="alert">
                {ErrorIcon}
                {errors.condition}
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
              "✓ Submitted Successfully"
            ) : (
              <>
                Continue to Evaluation
                <ArrowRightIcon />
              </>
            )}
          </button>

          <div
            className={`${styles.success}${submitted ? ` ${styles.show}` : ""}`}
            role="status"
            aria-live="polite"
          >
            ✓ Thank you! Form data has been logged to the console.
          </div>
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
