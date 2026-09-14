import type { TimelineItem, Leadership, Value } from "../types/about.types";

export const timeline: readonly TimelineItem[] = [
  { title: "O chamado", text: "Joshua Adams e Hannah Adams vieram ao Brasil obedecendo a uma direção do Senhor para alcançar vidas." },
  { title: "O início", text: "A primeira United nasceu na região da Tijuca, no Rio de Janeiro." },
  { title: "Crescimento", text: "Depois de mais de 13 anos, a igreja chegou a 14 unidades e continua avançando." },
  { title: "Hoje", text: "Uma igreja em movimento, formando pessoas e alcançando novas cidades." },
] as const;


export const leadership: readonly Leadership[] = [
  { role: "Apóstolos", name: "Joshua Adams e Hannah Adams", description: "À frente da visão apostólica da United, conduzindo a igreja em sua missão de alcançar vidas através de Jesus." },
  { role: "Unidade sede", name: "Felipe Pimentel e Carina Pimentel", description: "Pastores da unidade sede, cuidando da igreja local com amor, Palavra e serviço." },
] as const;


export const values: readonly Value[] = [
  { icon: "BookOpen", title: "Fé", text: "Vivemos pela Palavra e confiamos em Deus." },
  { icon: "UsersRound", title: "Comunhão", text: "Caminhamos como família, em relacionamentos reais." },
  { icon: "Heart", title: "Serviço", text: "Servimos com generosidade e coração disponível." },
  { icon: "Sprout", title: "Discipulado", text: "Ajudamos pessoas a crescer e amadurecer em Cristo." },
] as const;
