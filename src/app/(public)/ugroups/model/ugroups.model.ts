import type { UGroupStep, UGroupCategory, UGroup } from "../types/ugroups.types";

export const ugroupCategories: readonly UGroupCategory[] = ["Casais", "Jovens", "Homens", "Mulheres", "Mulheres 30+", "Mistos"] as const;


export const ugroups: readonly UGroup[] = [
  { name: "UG Casais Zona Sul", type: "Casais", region: "Zona Sul", day: "Quinta-feira", time: "20h" },
  { name: "UG Jovens Barra", type: "Jovens", region: "Barra da Tijuca", day: "Sábado", time: "19h" },
  { name: "UG Mulheres 30+ Centro", type: "Mulheres 30+", region: "Centro", day: "Terça-feira", time: "19h" },
  { name: "UG Homens Andaraí", type: "Homens", region: "Andaraí", day: "Quarta-feira", time: "19h" },
  { name: "UG Misto Campo Grande", type: "Mistos", region: "Campo Grande", day: "Sexta-feira", time: "20h" },
  { name: "UG Mulheres Caxias", type: "Mulheres", region: "Duque de Caxias", day: "Terça-feira", time: "20h" },
] as const;

export const steps: readonly UGroupStep[] = [
  { icon: "Search", title: "Encontrar", text: "Use os filtros para achar um UGroup que combine com você." },
  { icon: "UsersRound", title: "Conectar", text: "Conheça a proposta, o dia e a região do grupo." },
  { icon: "UserRoundCheck", title: "Participar", text: "Chegue como você está e construa relacionamentos reais." },
];
