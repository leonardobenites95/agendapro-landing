import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

/** Cabeçalho padrão de seção (selo + h2 + descrição opcional), centralizado e com revelação de scroll. */
export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn("mx-auto max-w-2xl text-center", className)}>
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </ScrollReveal>
  );
}
