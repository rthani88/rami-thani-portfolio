import { useTranslations } from "next-intl";
import type { Project } from "@/data/content";

const statusStyles: Record<Project["status"], string> = {
  completed: "border-gold text-gold",
  beta: "border-steel text-steel",
  ongoing: "border-steel text-steel"
};

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");

  return (
    <article className="border border-steel/20 bg-navy/40">
      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span
            className={`text-xs border rounded-full px-3 py-1 ${statusStyles[project.status]}`}
          >
            {t(`status.${project.status}`)}
          </span>
          {project.meta && (
            <span className="text-xs text-steel/70">{project.meta}</span>
          )}
        </div>

        <h3 className="text-2xl text-ivory font-medium mb-5">{project.title}</h3>

        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
          <div>
            <dt className="text-gold mb-1">{t("labels.overview")}</dt>
            <dd className="text-steel leading-relaxed">{project.overview}</dd>
          </div>
          <div>
            <dt className="text-gold mb-1">{t("labels.context")}</dt>
            <dd className="text-steel leading-relaxed">{project.context}</dd>
          </div>
          <div>
            <dt className="text-gold mb-1">{t("labels.challenge")}</dt>
            <dd className="text-steel leading-relaxed">{project.challenge}</dd>
          </div>
          <div>
            <dt className="text-gold mb-1">{t("labels.role")}</dt>
            <dd className="text-steel leading-relaxed">{project.role}</dd>
          </div>
          <div>
            <dt className="text-gold mb-1">{t("labels.strategy")}</dt>
            <dd className="text-steel leading-relaxed">{project.strategy}</dd>
          </div>
          <div>
            <dt className="text-gold mb-1">{t("labels.achievements")}</dt>
            <dd className="text-steel leading-relaxed">{project.achievements}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-gold mb-1">{t("labels.results")}</dt>
            <dd className="text-ivory leading-relaxed">{project.results}</dd>
          </div>
        </dl>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm text-gold border-b border-gold/60 hover:border-gold"
          >
            {t("labels.visit")}
          </a>
        )}
      </div>
    </article>
  );
}
