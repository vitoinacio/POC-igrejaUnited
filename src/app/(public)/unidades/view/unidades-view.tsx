import Image from "next/image";
import { Clock3, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { getUnitsViewModel } from "../viewmodels/units.viewmodel";

export function UnidadesView() {
  const { units } = getUnitsViewModel();
  return (
    <>
      <PageHero
        eyebrow="Unidades"
        title="Encontre uma unidade perto de você"
        description="Uma igreja, em muitos lugares. O mesmo propósito: alcançar, construir e empoderar vidas através de Jesus Cristo."
        image="/images/hero-units.jpg"
      />
      <section className="page-shell section-space">
        <SectionHeading
          eyebrow="Nossas unidades"
          title="Uma casa para chamar de família."
          description="Conheça algumas das nossas unidades e encontre uma comunidade perto de você."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <Card key={unit.name} className="overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image src={unit.image} alt={unit.name} fill className="object-cover" />
              </div>
              <CardContent>
                <h2 className="font-serif text-2xl">{unit.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{unit.region}</p>
                <div className="mt-5 grid gap-3 text-sm">
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {unit.address}
                  </p>
                  <p className="flex gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Domingo 18h · Quarta 20h · Quinta 20h
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="page-shell pb-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-7 text-white sm:p-10">
          <p className="eyebrow !text-white/70">Novas unidades</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl">Seguimos expandindo.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
            Hoje são 14 unidades e a história continua. Novas cidades, novas famílias e o mesmo
            propósito de levar Jesus a mais pessoas.
          </p>
        </div>
      </section>
    </>
  );
}