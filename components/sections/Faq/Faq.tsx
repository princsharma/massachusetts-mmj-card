import { Container } from "../../ui/Container";
import { SectionHead } from "../../ui/SectionHead";
import { HelpCircleIcon } from "../../ui/icons";
import { FaqList } from "./FaqList";
import styles from "./Faq.module.css";

const faqs = [
  {
    q: "What is a Massachusetts medical marijuana card?",
    a: "It is a registration issued through the state's Medical Use of Marijuana Program that allows patients to legally access cannabis from licensed dispensaries.",
  },
  {
    q: "Who qualifies for medical marijuana in Massachusetts?",
    a: "Patients must have a debilitating medical condition and be certified by a licensed physician under the state program.",
  },
  {
    q: "Can I apply online in Massachusetts?",
    a: "Yes. Patients can complete their evaluation through secure telehealth and then register with the state program online.",
  },
  {
    q: "How much does it cost?",
    a: "Patients pay for the physician evaluation. Massachusetts does not currently charge a state registration fee.",
  },
  {
    q: "How long does approval take?",
    a: "After certification, patients can typically obtain a temporary registration quickly and begin purchasing while completing the process.",
  },
  {
    q: "How long is the Massachusetts MMJ card valid?",
    a: "Medical marijuana registrations in Massachusetts are valid for one year and must be renewed annually.",
  },
  {
    q: "Where can I use my card?",
    a: "You can purchase medical cannabis from licensed dispensaries across Massachusetts.",
  },
  {
    q: "What products are available?",
    a: "Dispensaries offer oils, tinctures, edibles, flower, and other regulated cannabis products.",
  },
  {
    q: "Do patients pay taxes?",
    a: "Medical cannabis is exempt from the state's recreational cannabis excise tax, reducing overall costs.",
  },
  {
    q: "Can I have a caregiver?",
    a: "Yes. Patients may designate a caregiver through the state program to assist with obtaining medical cannabis.",
  },
];

export function Faq() {
  return (
    <section className={styles.section} id="faq">
      <Container>
        <SectionHead
          eyebrow="FAQ"
          eyebrowIcon={<HelpCircleIcon />}
          title={
            <>
              Frequently Asked <em>Questions</em>
            </>
          }
          description="Everything you need to know about getting your Massachusetts medical marijuana card."
        />
        <FaqList items={faqs} />
      </Container>
    </section>
  );
}
