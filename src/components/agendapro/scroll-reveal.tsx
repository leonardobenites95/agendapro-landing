"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Atraso do início da animação, em ms — usado para escalonar itens de uma lista. */
  delay?: number;
  children: React.ReactNode;
}

/**
 * Revela o conteúdo com a mesma animação já usada no Hero (`animate-fade-up`,
 * definida em tailwind.config.ts) assim que ele entra na viewport, em vez de
 * já nascer visível. Sem biblioteca de animação: só IntersectionObserver +
 * as classes utilitárias que o projeto já tem.
 */
export function ScrollReveal({
  delay = 0,
  className,
  children,
  style,
  ...props
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ ...style, animationDelay: delay ? `${delay}ms` : undefined }}
      className={cn(!visible && "opacity-0", visible && "animate-fade-up", className)}
      {...props}
    >
      {children}
    </div>
  );
}
