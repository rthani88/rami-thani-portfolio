import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export function Expertise() {
  const t = useTranslations("expertise");
  const locale = useLocale() as Locale;
  const { expertise } = getContent(locale);

  return (
    <section id="expertise" className="px-6 py-28 bg-ink border-t border-steel/15">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertise.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.06}>
              <h3 className="text-ivory font-medium mb-4 pb-3 border-b border-steel/20">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-steel text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
