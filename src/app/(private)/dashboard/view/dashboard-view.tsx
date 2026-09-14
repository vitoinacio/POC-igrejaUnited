import { getDashboardViewModel } from "../viewmodels/dashboard.viewmodel";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardView() {
  const { cards } = getDashboardViewModel();

  return (
    <section className="page-shell section-space">
      <p className="eyebrow">Dashboard</p>
      <h1 className="mt-3 display-title">Olá, liderança.</h1>
      <p className="body-copy mt-4 max-w-2xl">
        Uma visão simples para organizar os próximos passos da igreja.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: I, title, text }) => {
          return (
            <Card key={title}>
              <CardContent>
                <I className="h-6 w-6 text-primary" />
                <h2 className="mt-5 font-serif text-2xl">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}