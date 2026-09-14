import type { OtherEvent } from "../types/events.types";

export const scheduleImages = ["/images/worship.jpg", "/images/prayer.jpg", "/images/preaching.jpg"] as const;


export const otherEvents: readonly OtherEvent[] = [
  { label: "Sábado · 19h", title: "Encontro de Jovens", description: "Comunhão, adoração, Palavra e novas amizades.", image: "/images/youth.jpg" },
  { label: "Domingo · 17h30", title: "Café com Novos", description: "Um tempo para conhecer pessoas e descobrir seu lugar na United.", image: "/images/coffee.jpg" },
  { label: "Em breve", title: "Conferência United", description: "Dias para renovar a visão, aprofundar a fé e viver algo extraordinário.", image: "/images/worship.jpg" },
] as const;
