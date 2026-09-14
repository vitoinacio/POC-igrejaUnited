import { CalendarPlus } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { EventCard } from "@/components/shared/event-card";
import { Button } from "@/components/ui/button";
import { schedules, scheduleImages, otherEvents } from "../model/events.model";

export function EventosView() {
  return (
    <>
      <PageHero
        eyebrow="Eventos"
        title="O que está acontecendo"
        description="Momentos que conectam pessoas, fortalecem a igreja e nos mantêm juntos no propósito de ver vidas transformadas por Jesus."
        image="/images/hero-events.jpg"
      />
      <section className="page-shell section-space">
        <SectionHeading eyebrow="Nossa agenda" title="Encontros que constroem" />
        <div className="grid gap-4 md:grid-cols-3">
          {schedules.map((item, index) => (
            <EventCard
              key={item.day}
              label={`${item.day} · ${item.time}`}
              title={item.title}
              description="Venha viver esse momento com a gente."
              image={scheduleImages[index]}
              action={
                <Button asChild className="w-full">
                  <a href={item.calendar} download>
                    <CalendarPlus className="h-4 w-4" />
                    Adicionar à agenda
                  </a>
                </Button>
              }
            />
          ))}
        </div>
      </section>
      <section className="bg-secondary/45">
        <div className="page-shell section-space">
          <SectionHeading eyebrow="Outros eventos" title="Mais para você se conectar" />
          <div className="grid gap-4 md:grid-cols-3">
            {otherEvents.map((event) => (
              <EventCard
                key={event.title}
                label={event.label}
                title={event.title}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}