import type { Schedule } from "@/types/schedule.types";

export const schedules: readonly Schedule[] = [
  { day: "Domingo", time: "18h", title: "Culto de Domingo", calendar: "/calendar/domingo.ics" },
  { day: "Quarta", time: "20h", title: "Sala de Oração e Cura", calendar: "/calendar/quarta.ics" },
  { day: "Quinta", time: "20h", title: "Séries mensais sobre um tema", calendar: "/calendar/quinta.ics" },
] as const;