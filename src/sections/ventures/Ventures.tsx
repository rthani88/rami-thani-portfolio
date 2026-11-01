import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export function Ventures() {
  const t = useTranslations("ventures");
  const locale = useLocale() as Locale;
  const { ventures } = getContent(locale);

  return (
    <section id="ventures" className="px-6 py-28 border-t border-steel/15">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="mt-5 max-w-xl text-steel leading-relaxed">{t("statement")}</p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          {ventures.map((venture, i) => (
            <Reveal key={venture.name} delay={i * 0.08}>
              <div className="border border-steel/20 p-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl text-ivory font-medium">{venture.name}</h3>
                  <span className="text-xs text-gold border border-gold/40 rounded-full px-3 py-1">
                    {venture.status}
                  </span>
                </div>
                <p className="text-xs text-steel/70 mb-3">{venture.role}</p>
                <p className="text-steel leading-relaxed mb-4">{venture.description}</p>
                {venture.url && (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold border-b border-gold/60 hover:border-gold"
                  >
                    {venture.url.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>
            </Reveal>
          ))}

          {/* Placeholder slot — new ventures append here without a redesign */}
          <Reveal delay={ventures.length * 0.08}>
            <div className="border border-dashed border-steel/25 p-7 flex items-center justify-center text-steel/50 text-sm text-center min-h-[180px]">
              {t("moreSoon")}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
