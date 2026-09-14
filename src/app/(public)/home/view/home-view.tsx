import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImageCard } from "@/components/shared/image-card";
import { EventCard } from "@/components/shared/event-card";
import { getHomeViewModel } from "../viewmodels/home.viewmodel";

export function HomeView() {
  const { quickLinks, schoolCards, weeklyEvents } = getHomeViewModel();
  return (
    <>
      <PageHero
        eyebrow="Bem-vindo à"
        title="Igreja United"
        description="Alcançar, construir e empoderar vidas através da palavra transformadora de Jesus Cristo."
        image="/images/hero-home.jpg"
        primary={{ label: "Encontrar uma unidade", href: "/unidades" }}
        secondary={{ label: "Conheça mais sobre nós", href: "/sobre-nos" }}
      />
      <section className="page-shell section-space">
        <SectionHeading
          eyebrow="Faça parte"
          title="Juntos, vamos mais longe."
          description="Encontre caminhos para pertencer, crescer na fé, construir relacionamentos e servir com propósito."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map(({ icon: Icon, ...item }) => (
            <div key={item.title} className="relative">
              <span className="absolute left-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <ImageCard {...item} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary/45">
        <div className="page-shell section-space">
          <SectionHeading
            eyebrow="Próximos passos"
            title="Um caminho para crescer, pertencer e servir."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {schoolCards.map((card) => (
              <ImageCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
      <section className="page-shell section-space">
        <SectionHeading
          eyebrow="Acontecendo esta semana"
          title="Momentos para viver em comunidade."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {weeklyEvents.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </section>
    </>
  );
}