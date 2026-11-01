import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="px-6 py-28 bg-ink border-t border-steel/15">
      <div className="max-w-content mx-auto text-center">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} align="center" />
          <p className="mt-6 max-w-lg mx-auto text-steel leading-relaxed">
            {t("statement")}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={`mailto:${siteConfig.email}`}>{t("email")}</Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}`}
              variant="secondary"
              external
            >
              {t("whatsapp")}
            </Button>
            <Button href={siteConfig.linkedin} variant="secondary" external>
              {t("linkedin")}
            </Button>
          </div>

          <div className="mt-6">
            <Button
              href={siteConfig.cvPath}
              variant="secondary"
              disabled={!siteConfig.cvAvailable}
            >
              {t("downloadCv")}
            </Button>
            {!siteConfig.cvAvailable && (
              <p className="mt-2 text-xs text-steel/50">{t("cvUnavailable")}</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
