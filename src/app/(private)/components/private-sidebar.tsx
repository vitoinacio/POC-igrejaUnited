"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  UsersRound,
  GraduationCap,
  CalendarDays,
  Home,
  Settings,
  ChevronLeft,
  ChevronRight,
  Church,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/ugroups", label: "UGroups", icon: UsersRound },
  { href: "/dashboard/escolas", label: "Escolas", icon: GraduationCap },
  { href: "/dashboard/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/dashboard/unidades", label: "Unidades", icon: Home },
  { href: "/dashboard/configuracoes", label: "Configurações", icon: Settings },
] as const;

export function PrivateSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] border-r border-primary/10 bg-white transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <nav className="flex h-full flex-col p-3">
        <ul className="flex-1 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-primary",
                    collapsed && "justify-center"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="border-t border-primary/10 pt-3">
<Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("w-full justify-center", collapsed && "rotate-180")}
          aria-label={collapsed ? "Expandir menu" : "Colapsar menu"}
        >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </aside>
  );
}