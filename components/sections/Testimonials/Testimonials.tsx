import Image from "next/image";
import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { CheckIcon, MapPinIcon } from "../../ui/icons";
import styles from "./Testimonials.module.css";

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The entire process was incredibly smooth. My doctor was professional and I got approved same-day. Highly recommend for any Massachusetts resident looking for legitimate medical care.",
    name: "Sarah Mitchell",
    city: "Boston, MA",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "I was skeptical about online consultations, but this was perfect. Same-day approval and great support throughout the entire process. Couldn't be happier with the service.",
    name: "Michael Chen",
    city: "Worcester, MA",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Best decision for my health. The support team was responsive and my physician really listened to my concerns. The savings on dispensary purchases alone make it worth it.",
    name: "Jennifer Lopez",
    city: "Springfield, MA",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.summary} role="group" aria-label="Customer rating summary">
          <span className={styles.stars} aria-hidden="true">
            ★★★★★
          </span>
          <span className={styles.num}>4.9/5</span>
          <span className={styles.meta}>· 1,000+ Reviews</span>
          <span className={styles.verified}>
            <CheckIcon />
            Verified
          </span>
        </div>

        <SectionHead
          title={
            <>
              What Our <em>Patients Are Saying</em>
            </>
          }
          description="Patients appreciate a structured, compliant, and easy-to-follow process that helps them move forward with confidence."
        />

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article key={t.name} className={styles.card}>
              <div className={styles.cardStars} role="img" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <Image
                    src={t.avatar}
                    alt={`Photo of ${t.name}, verified Massachusetts Medical Marijuana Card patient`}
                    title={`${t.name} — verified patient`}
                    width={48}
                    height={48}
                    className={styles.avatar}
                    loading="lazy"
                  />
                  <div>
                    <h3 className={styles.name}>{t.name}</h3>
                    <small>
                      <MapPinIcon />
                      {t.city}
                    </small>
                  </div>
                </div>
                <span className={styles.verifiedBadge}>
                  <CheckIcon />
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
