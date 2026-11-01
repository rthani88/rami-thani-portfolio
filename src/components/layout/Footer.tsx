import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-steel/15 py-10 text-center text-xs text-steel/70"
      style={{ paddingBottom: "calc(24px + env(safe-area-inset-bottom, 0px))" }}
    >
      © {year} Rami Thani — {t("rights")}
    </footer>
  );
}
