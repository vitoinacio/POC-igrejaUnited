"use client";

import { LayoutDashboard, Users, Calendar, Building2, Settings, Shield } from "lucide-react";
import { usePathname } from "next/navigation";
import { getSidebarNavigation } from "../service/sidebar.service";
import type { SidebarNavigationItem } from "../types/sidebar.types";

const icons = { LayoutDashboard, Users, Calendar, Building2, Settings, Shield };

export function useSidebarViewModel() {
  const pathname = usePathname();
  const content = getSidebarNavigation();
  const present = (item: SidebarNavigationItem) => ({
    ...item, icon: icons[item.icon],
    isActive: pathname === item.href || pathname.startsWith(item.href + "/"),
  });
  return { navigation: content.navigation.map(present), adminNavigation: content.adminNavigation.map(present) };
}
