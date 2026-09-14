"use client";

import { useMemo, useState } from "react";
import { getUGroupsContent } from "../service/ugroups.service";
import type { UGroupCategory } from "../types/ugroups.types";

export function useUGroupsViewModel() {
  const [type, setType] = useState<UGroupCategory | "Todos">("Todos");
  const { ugroups, ugroupCategories } = getUGroupsContent();
  const filtered = useMemo(
    () => type === "Todos" ? ugroups : ugroups.filter(group => group.type === type),
    [type, ugroups],
  );
  return { type, setType, filtered, ugroupCategories };
}
