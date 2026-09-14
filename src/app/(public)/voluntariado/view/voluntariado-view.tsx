import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { getVolunteerViewModel } from "../viewmodels/volunteer.viewmodel";

export function VoluntariadoView() {
  const { volunteerTeams, volunteerSteps } = getVolunteerViewModel();
  return (
    <>
      <PageHero
        eyebrow="Voluntariado"
        title="Sirva com propósito"
        description="Use seus dons, seu tempo e seu coração para abençoar pessoas e fazer parte do que Deus está construindo."
        image="/images/hero-volunteer.jpg"
        primary={{ label: "Conhecer as equipes", href: "#equipes" }}
      />
      <section id="equipes" className="page-shell section-space">
        <SectionHeading
          eyebrow="Faça parte"
          title="Diferentes dons. Um mesmo propósito."
          description="Há um lugar para você servir com alegria, excelência e amor pelas pessoas."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerTeams.map((team) => {
            const I = team.icon;
            return (
              <Card key={team.title}>
                <CardContent>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">
                    <I className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl">{team.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{team.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="bg-secondary/45">
        <div className="page-shell section-space">
          <SectionHeading eyebrow="Como servir" title="É simples fazer parte." />
          <div className="grid gap-4 md:grid-cols-3">
            {volunteerSteps.map((step) => (
              <Card key={step.number}>
                <CardContent>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-semibold text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}