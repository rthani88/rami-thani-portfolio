import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/animations/Counter";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export function Impact() {
  const t = useTranslations("impact");
  const locale = useLocale() as Locale;
  const { impact } = getContent(locale);

  return (
    <section id="impact" className="px-6 py-28 bg-ink border-t border-steel/15">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {impact.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <Counter
                value={stat.value}
                className="block text-4xl sm:text-5xl font-semibold text-gold"
              />
              <p className="mt-3 text-steel leading-snug">{stat.label}</p>
              {stat.note && (
                <p className="mt-1 text-xs text-steel/60">{stat.note}</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
