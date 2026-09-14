export interface Schedule {
  day: string;
  time: string;
  title: string;
  calendar: string;
}

export const schedules: readonly Schedule[] = [
  { day: "Domingo", time: "18h", title: "Culto de Domingo", calendar: "/calendar/domingo.ics" },
  { day: "Quarta", time: "20h", title: "Sala de Oração e Cura", calendar: "/calendar/quarta.ics" },
  { day: "Quinta", time: "20h", title: "Séries mensais sobre um tema", calendar: "/calendar/quinta.ics" },
] as const;

export const scheduleImages = ["/images/worship.jpg", "/images/prayer.jpg", "/images/preaching.jpg"] as const;

export interface OtherEvent {
  label: string;
  title: string;
  description: string;
  image: string;
}

export const otherEvents: readonly OtherEvent[] = [
  { label: "Sábado · 19h", title: "Encontro de Jovens", description: "Comunhão, adoração, Palavra e novas amizades.", image: "/images/youth.jpg" },
  { label: "Domingo · 17h30", title: "Café com Novos", description: "Um tempo para conhecer pessoas e descobrir seu lugar na United.", image: "/images/coffee.jpg" },
  { label: "Em breve", title: "Conferência United", description: "Dias para renovar a visão, aprofundar a fé e viver algo extraordinário.", image: "/images/worship.jpg" },
] as const;