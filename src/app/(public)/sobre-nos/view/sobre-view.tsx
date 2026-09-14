import { BookOpen, Heart, Sprout, UsersRound } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { timeline, leadership, values } from "../model/about.model";

const iconMap = { BookOpen, UsersRound, Heart, Sprout } as const;

export function SobreView() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Nossa história"
        description="Uma igreja de pessoas reais, vivendo um propósito real, para um mundo que precisa de Jesus."
        image="/images/hero-about.jpg"
      />
      <section className="page-shell section-space">
        <Card>
          <CardContent className="grid gap-6 p-7 md:grid-cols-[1.3fr_.7fr]">
            <div>
              <p className="eyebrow mb-3">Nossa missão</p>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Alcançar, construir e empoderar vidas através da palavra transformadora de Jesus Cristo.
              </h2>
            </div>
            <div className="flex items-center border-t pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <blockquote className="font-serif text-2xl">
                "Porque para Deus nada será impossível."
                <span className="mt-3 block font-sans text-sm text-muted-foreground">Lucas 1:37</span>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="page-shell pb-12">
        <SectionHeading eyebrow="Nossa trajetória" title="De um chamado a um movimento" />
        <div className="grid gap-4 md:grid-cols-4">
          {timeline.map((item, i) => (
            <Card key={item.title}>
              <CardContent>
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-secondary/45">
        <div className="page-shell section-space">
          <SectionHeading eyebrow="Liderança" title="Servindo pessoas, formando uma família." />
          <div className="grid gap-4 md:grid-cols-2">
            {leadership.map((leader) => (
              <Card key={leader.role}>
                <CardContent>
                  <p className="eyebrow">{leader.role}</p>
                  <h3 className="mt-3 font-serif text-3xl">{leader.name}</h3>
                  <p className="body-copy mt-3">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="page-shell section-space">
        <SectionHeading eyebrow="Nossos valores" title="O que nos move" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap] as typeof BookOpen;
            return (
              <Card key={value.title}>
                <CardContent>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}