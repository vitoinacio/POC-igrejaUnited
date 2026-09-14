import { CalendarHeart, Crown, Headphones, HeartHandshake, Music2, SmilePlus } from "lucide-react";

export interface VolunteerTeam {
  icon: typeof HeartHandshake;
  title: string;
  text: string;
}

export const volunteerTeams: readonly VolunteerTeam[] = [
  { icon: HeartHandshake, title: "Ushers", text: "Acolhe, orienta e cria uma ótima experiência." },
  { icon: Crown, title: "VIP", text: "Cuida de convidados e novas pessoas." },
  { icon: Headphones, title: "Produção", text: "Serve nos bastidores para tudo acontecer." },
  { icon: Music2, title: "Louvor", text: "Usa a música para conduzir pessoas a Jesus." },
  { icon: SmilePlus, title: "UKids", text: "Investe na próxima geração." },
  { icon: CalendarHeart, title: "Eventos", text: "Planeja e serve em encontros especiais." },
] as const;

export interface VolunteerStep {
  number: string;
  title: string;
  text: string;
}

export const volunteerSteps: readonly VolunteerStep[] = [
  { number: "1", title: "Conheça", text: "Descubra as equipes e identifique onde seus dons se encaixam." },
  { number: "2", title: "Converse", text: "Procure a liderança responsável na sua unidade." },
  { number: "3", title: "Participe", text: "Receba as orientações e comece a servir com a equipe." },
] as const;