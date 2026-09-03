import type { LegalDocument as LegalDocumentContent } from "@/types/content";

export default function LegalDocument({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalDocumentContent) {
  return (
    <section className="page-section">
      <div className="mx-auto w-full max-w-[var(--content-max)]">
        <p className="type-caption text-right uppercase tracking-[0.08em] text-de-blue">
          Legal
        </p>
        <h1 className="type-display mt-[var(--space-2)] text-right text-balance">
          {title}
        </h1>
        <p className="type-caption mt-[var(--space-2)] text-right uppercase tracking-[0.08em] text-black/60">
          Last updated {lastUpdated}
        </p>

        <div className="section-divider mt-[var(--space-3)] mb-[var(--space-5)]" />

        <article className="ml-auto w-full max-w-[var(--reading-max)] border-2 border-black bg-white p-[var(--space-4)] sm:p-[var(--space-5)]">
          <p className="type-body-lg text-left">{intro}</p>

          {sections.map((section) => (
            <section
              key={section.heading}
              className="mt-[var(--space-5)] text-left"
            >
              <h2 className="type-subhead leading-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="type-body mt-[var(--space-3)]">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-[var(--space-3)] list-none space-y-[var(--space-2)]">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="type-body flex gap-[var(--space-2)]"
                    >
                      <span
                        className="mt-[0.55em] h-[10px] w-[10px] shrink-0 border-2 border-black bg-de-gold"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
