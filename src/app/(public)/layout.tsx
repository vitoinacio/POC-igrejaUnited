import Footer from "@/src/components/layout/Footer";
import PublicHeader from "@/src/components/layout/PubllicHeader";
import { CampusSelectionProvider } from "@/src/features/home/view-model/CampusSelectionContext";
import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicHeader />
      <CampusSelectionProvider>
        <main className="px-30 max-sm:px-10">{children}</main>
      </CampusSelectionProvider>
      <Footer />
    </>
  );
}
