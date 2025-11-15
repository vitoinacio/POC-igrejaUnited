"use client";

import { createContext, useContext } from "react";
import useSelectedCampus, {
  SelectedCampusState,
} from "@/src/hooks/useSelectedCampus";

const CampusSelectionContext = createContext<SelectedCampusState | null>(null);

export function CampusSelectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useSelectedCampus();

  return (
    <CampusSelectionContext.Provider value={value}>
      {children}
    </CampusSelectionContext.Provider>
  );
}

export function useCampusSelection() {
  const ctx = useContext(CampusSelectionContext);
  if (!ctx) {
    throw new Error(
      "useCampusSelection precisa ser usado dentro de <CampusSelectionProvider>"
    );
  }
  return ctx;
}
