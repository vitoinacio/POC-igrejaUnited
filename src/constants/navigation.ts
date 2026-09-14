import type { NavigationItem } from "@/types/navigation.types";

export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre nós", href: "/sobre-nos" },
  { label: "Unidades", href: "/unidades" },
  { label: "UGroups", href: "/ugroups" },
  { label: "Escolas", href: "/escolas" },
  { label: "Voluntariado", href: "/voluntariado" },
  { label: "Eventos", href: "/eventos" },
] as const;