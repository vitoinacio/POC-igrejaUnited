import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ImageCard } from "@/components/shared/image-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSchoolsViewModel } from "../viewmodels/schools.viewmodel";

export function EscolasView() {
  const { schools, schoolValues, faqItems } = getSchoolsViewModel();
  return (
    <>
      <PageHero
        eyebrow="Escolas United"
        title="Cresça na fé"
        description="Conhecimento que transforma. Relacionamentos que constroem. Uma vida que serve."
        image="/images/hero-schools.jpg"
        primary={{ label: "Conhecer as escolas", href: "#escolas" }}
      />
      <section id="escolas" className="page-shell section-space">
        <SectionHeading
          eyebrow="Caminhos para uma vida plena"
          title="Escolas que formam pessoas para viver o propósito de Deus."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {schools.map((school) => (
            <ImageCard key={school.title} {...school} />
          ))}
        </div>
      </section>
      <section className="bg-secondary/45">
        <div className="page-shell section-space">
          <SectionHeading eyebrow="O que cada escola constrói" title="Seu próximo capítulo pode começar hoje." />
          <div className="grid gap-4 md:grid-cols-3">
            {schoolValues.map((value) => {
              const I = value.icon;
              return (
                <div key={value.title} className="surface p-6">
                  <I className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-serif text-2xl">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="faq" className="page-shell section-space">
        <SectionHeading eyebrow="Como começar" title="Perguntas frequentes" />
        <div className="surface px-5">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={String(index + 1)}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}