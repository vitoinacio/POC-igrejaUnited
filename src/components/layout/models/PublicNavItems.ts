export interface NavItem {
  label: string;
  href: string;
  ariaLabel: string;
}

export const PublicNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Ir para a página inicial",
  },
  {
    label: "Sobre nós",
    href: "/about",
    ariaLabel: "Saiba mais sobre nós",
  },
  {
    label: "Unidades",
    href: "/locations",
    ariaLabel: "Ver todas as unidades da igreja",
  },
  {
    label: "Escolas",
    href: "/schools",
    ariaLabel: "Ver informações sobre as escolas",
  },
  {
    label: "Voluntariado",
    href: "/volunteering",
    ariaLabel: "Ver oportunidades de voluntariado",
  },
  {
    label: "Eventos",
    href: "/events",
    ariaLabel: "Ver lista de eventos",
  },
];
