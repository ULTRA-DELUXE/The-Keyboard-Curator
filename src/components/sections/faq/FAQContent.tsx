import SectionHeader from "@/components/layout/SectionHeader";
import FAQPanel from "@/components/sections/faq/FAQPanel";
import { faqs } from "@/data/faq";

export default function FAQContent() {
  return (
    <>
      <section className="page-section pb-[var(--space-4)]">
        <SectionHeader title="Questions for the clacky." />
      </section>

      <section className="border-t-2 border-black" aria-label="Frequently asked questions">
        {faqs.map((faq) => (
          <FAQPanel key={faq.id} {...faq} />
        ))}
      </section>
    </>
  );
}
