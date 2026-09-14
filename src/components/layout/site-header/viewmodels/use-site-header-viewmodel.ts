"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getNavigation } from "@/service/navigation.service";

export function useSiteHeaderViewModel() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigation = getNavigation().map(item => ({ ...item, isActive: pathname === item.href }));
  return { navigation, open, closeMenu: () => setOpen(false), toggleMenu: () => setOpen(value => !value) };
}
