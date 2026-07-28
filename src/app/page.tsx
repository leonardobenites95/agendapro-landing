import type { Metadata } from "next";
import { AgendaProHeader } from "@/components/agendapro/header";
import { HeroSection } from "@/components/agendapro/hero-section";
import { ProblemSection } from "@/components/agendapro/problem-section";
import { SolutionSection } from "@/components/agendapro/solution-section";
import { FeaturesSection } from "@/components/agendapro/features-section";
import { HowItWorksSection } from "@/components/agendapro/how-it-works-section";
import { ComparisonSection } from "@/components/agendapro/comparison-section";
import { ProofSection } from "@/components/agendapro/proof-section";
import { BenefitsSection } from "@/components/agendapro/benefits-section";
import { DifferentiatorsSection } from "@/components/agendapro/differentiators-section";
import { TryItSection } from "@/components/agendapro/try-it-section";
import { FaqSection } from "@/components/agendapro/faq-section";
import { FinalCtaSection } from "@/components/agendapro/final-cta-section";
import { AgendaProFooter } from "@/components/agendapro/footer";

/**
 * Landing comercial do produto AgendaPro. Site próprio, separado da
 * instalação de qualquer cliente — usa a instalação real do Espaço Karla
 * Marques só como prova/demonstração ao vivo (ver constants.ts).
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "AgendaPro — Agendamento online para negócios de beleza",
  description:
    "Sistema de agendamento online e site institucional para salões, clínicas de estética, barbearias e estúdios de beleza. Você aprova cada horário — o sistema nunca decide sozinho.",
  keywords: [
    "AgendaPro",
    "agendamento online",
    "sistema para salão de beleza",
    "sistema para clínica de estética",
    "sistema para barbearia",
    "agenda online para estética",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "AgendaPro",
    title: "AgendaPro — Agendamento online para negócios de beleza",
    description:
      "Sua agenda, sempre sob o seu controle. Conheça o sistema de agendamento pensado para salões, clínicas, barbearias e estúdios de beleza.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "AgendaPro — agendamento online para negócios de beleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgendaPro — Agendamento online para negócios de beleza",
    description: "Sua agenda, sempre sob o seu controle.",
  },
  robots: { index: true, follow: true },
};

export default function AgendaProPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AgendaPro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Sistema de agendamento online e site institucional para negócios da área da beleza — salões, clínicas de estética, barbearias e estúdios.",
    url: siteUrl,
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AgendaProHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <ProofSection />
      <BenefitsSection />
      <DifferentiatorsSection />
      <TryItSection />
      <FaqSection />
      <FinalCtaSection />
      <AgendaProFooter />
    </div>
  );
}
