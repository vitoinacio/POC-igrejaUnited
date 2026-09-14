import { getUGroupsViewModel } from "../viewmodels/ugroups.viewmodel";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { UGroupExplorer } from "../components/ugroup-explorer";

export function UGroupsView() {
  const { steps } = getUGroupsViewModel();
  return (
    <>
      <PageHero
        eyebrow="UGroups"
        title="Vida em comunidade"
        description="Grupos que acontecem nas casas de membros, criando espaços de comunhão, estudo da Palavra, cuidado e relacionamentos reais."
        image="/images/hero-ugroups.jpg"
        primary={{ label: "Encontrar um UGroup", href: "#encontrar" }}
      />
      <section className="page-shell section-space">
        <SectionHeading
          eyebrow="Encontre um UGroup para você"
          title="Mais que um grupo, uma família."
          description="Temos UGroups de casais, jovens, homens, mulheres, mulheres 30+ e grupos mistos."
        />
        <UGroupExplorer />
      </section>
      <section className="bg-secondary/45">
        <div className="page-shell section-space">
          <SectionHeading eyebrow="Como funciona" title="Conectar ficou simples." />
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ icon: I, title, text }, i) => {
              return (
                <Card key={title}>
                  <CardContent>
                    <span className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
                      {i + 1}
                    </span>
                    <I className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 font-serif text-2xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}