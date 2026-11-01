import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  disabled = false,
  external = false
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-gold text-ink hover:bg-gold/90"
      : "border border-steel/50 text-ivory hover:border-gold hover:text-gold";

  if (disabled) {
    return (
      <span className={`${base} ${styles} cursor-not-allowed opacity-40`}>
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
