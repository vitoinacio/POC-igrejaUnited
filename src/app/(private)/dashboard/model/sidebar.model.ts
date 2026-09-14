import type { SidebarNavigationItem } from "../types/sidebar.types";

export const navigation: readonly SidebarNavigationItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { name: "UGroups", href: "/dashboard/ugroups", icon: "Users" },
  { name: "Escolas", href: "/dashboard/escolas", icon: "Calendar" },
  { name: "Unidades", href: "/dashboard/unidades", icon: "Building2" },
  { name: "Configurações", href: "/dashboard/configuracoes", icon: "Settings" },
] as const;

export const adminNavigation: readonly SidebarNavigationItem[] = [
  { name: "Usuários", href: "/dashboard/usuarios", icon: "Users" },
  { name: "Permissões", href: "/dashboard/permissoes", icon: "Shield" },
] as const;
