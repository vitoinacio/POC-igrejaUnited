import type { QuickLink, SchoolCard, EventItem } from "../types/home.types";

export const quickLinks: readonly QuickLink[] = [
  { title: "UGroups", description: "Vida em comunidade", image: "/images/community-home.jpg", href: "/ugroups", icon: "UsersRound" },
  { title: "Escolas", description: "Cresça na sua fé", image: "/images/bible-study.jpg", href: "/escolas", icon: "School" },
  { title: "Voluntariado", description: "Sirva com propósito", image: "/images/volunteer-team.jpg", href: "/voluntariado", icon: "HeartHandshake" },
  { title: "Unidades", description: "Encontre uma perto de você", image: "/images/church-building.jpg", href: "/unidades", icon: "MapPin" },
] as const;


export const schoolCards: readonly SchoolCard[] = [
  { title: "Primeiros Passos", description: "4 domingos para conhecer a igreja e avançar.", image: "/images/church-building.jpg", href: "/escolas" },
  { title: "Escola United", description: "Todo domingo durante 5 meses.", image: "/images/bible-study.jpg", href: "/escolas" },
  { title: "Escola de Ministério", description: "Descubra e desenvolva seu chamado.", image: "/images/volunteer-team.jpg", href: "/escolas" },
] as const;


export const weeklyEvents: readonly EventItem[] = [
  { label: "Quinta · 20h", title: "Série mensal", description: "Ensino, Palavra e vida prática para caminhar com Jesus.", image: "/images/preaching.jpg" },
  { label: "Sábado · 19h", title: "Encontro de Jovens", description: "Comunhão, adoração e novas amizades.", image: "/images/youth.jpg" },
  { label: "Domingo · 17h30", title: "Café com Novos", description: "Um tempo leve para conhecer pessoas e a casa.", image: "/images/coffee.jpg" },
] as const;
