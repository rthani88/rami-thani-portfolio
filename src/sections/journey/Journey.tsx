import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export function Journey() {
  const t = useTranslations("journey");
  const locale = useLocale() as Locale;
  const { journey } = getContent(locale);

  return (
    <section id="journey" className="px-6 py-28 border-t border-steel/15">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </Reveal>

        <ol className="mt-16 flex flex-col">
          {journey.map((stage, i) => (
            <Reveal key={stage.index} delay={i * 0.08} as="li">
              <div className="grid sm:grid-cols-[88px_1fr] gap-4 sm:gap-8 py-7 border-t border-steel/15 last:border-b">
                <span className="text-gold text-sm font-medium pt-1">
                  {stage.index}
                </span>
                <div>
                  <h3 className="text-xl text-ivory font-medium mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-steel max-w-xl leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
