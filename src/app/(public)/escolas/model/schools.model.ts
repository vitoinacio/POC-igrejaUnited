import type { School, SchoolValue, FaqItem } from "../types/schools.types";

export const schools: readonly School[] = [
  { title: "Primeiros Passos", description: "4 domingos para conhecer Jesus, a igreja e seus próximos passos.", image: "/images/church-building.jpg", href: "#faq" },
  { title: "Escola United", description: "Todo domingo durante 5 meses, aprofundando fundamentos da fé.", image: "/images/bible-study.jpg", href: "#faq" },
  { title: "Escola de Ministério", description: "Capacitação para quem deseja servir e desenvolver o chamado.", image: "/images/volunteer-team.jpg", href: "#faq" },
] as const;


export const schoolValues: readonly SchoolValue[] = [
  { icon: "Footprints", title: "Pertencer", text: "Conheça a casa e encontre seus próximos passos." },
  { icon: "BookOpen", title: "Aprofundar", text: "Cresça no conhecimento bíblico e na prática da fé." },
  { icon: "UsersRound", title: "Servir", text: "Descubra dons, princípios e ferramentas para o ministério." },
] as const;


export const faqItems: readonly FaqItem[] = [
  { question: "Preciso ser membro para participar?", answer: "Os detalhes de entrada variam por escola. A equipe pode orientar você no melhor próximo passo." },
  { question: "Quando as escolas acontecem?", answer: "Primeiros Passos acontece por 4 domingos; a Escola United acontece aos domingos durante cerca de 5 meses." },
  { question: "Como faço para me inscrever?", answer: "Escolha a escola desejada e procure a equipe da sua unidade para receber a próxima turma e as orientações." },
] as const;
