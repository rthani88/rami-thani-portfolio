import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const { projects } = getContent(locale);

  return (
    <section id="work" className="px-6 py-28 border-t border-steel/15">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </Reveal>

        <div className="mt-16 grid gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
