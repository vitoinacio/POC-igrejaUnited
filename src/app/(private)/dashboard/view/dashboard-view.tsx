import { CalendarDays, GraduationCap, Home, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardView() {
  const cards = [
    [UsersRound, "UGroups", "Acompanhe grupos, líderes e participantes."],
    [GraduationCap, "Escolas", "Turmas, inscrições e progresso."],
    [CalendarDays, "Agenda", "Cultos e eventos da unidade."],
    [Home, "Unidades", "Visão das informações de cada campus."],
  ] as const;

  return (
    <section className="page-shell section-space">
      <p className="eyebrow">Dashboard</p>
      <h1 className="mt-3 display-title">Olá, liderança.</h1>
      <p className="body-copy mt-4 max-w-2xl">
        Uma visão simples para organizar os próximos passos da igreja.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([Icon, title, text]) => {
          const I = Icon as typeof Home;
          return (
            <Card key={String(title)}>
              <CardContent>
                <I className="h-6 w-6 text-primary" />
                <h2 className="mt-5 font-serif text-2xl">{String(title)}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(text)}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}