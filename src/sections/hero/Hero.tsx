import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center px-6 pt-24"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_280px] gap-10 items-center">
          <div>
            <p className="text-sm text-gold mb-5 tracking-wide">{t("tagline")}</p>
            <h1 className="text-[clamp(2.6rem,7vw,5rem)] font-semibold text-ivory leading-[1.02]">
              {t("name")}
            </h1>
            <p className="mt-7 max-w-xl text-lg text-steel leading-relaxed">
              {t("statement")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#journey">{t("ctaPrimary")}</Button>
              <Button
                href={siteConfig.cvPath}
                variant="secondary"
                disabled={!siteConfig.cvAvailable}
              >
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>

          {/* Portrait placeholder — replace with a real professional photograph */}
          <div
            className="aspect-[3/4] w-full max-w-[280px] border border-steel/25 flex items-center justify-center text-steel/50 text-xs text-center p-4"
            aria-label="Executive portrait placeholder"
          >
            {locale === "ar" ? "صورة احترافية — Placeholder" : "Executive portrait — placeholder"}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-steel/60 text-xs">
        <span>{t("scrollHint")}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
