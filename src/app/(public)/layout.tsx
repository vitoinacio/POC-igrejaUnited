import Footer from "@/src/components/layout/Footer";
import PublicHeader from "@/src/components/layout/PubllicHeader";
import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main className="px-30">{children}</main>
      <Footer />
    </>
  );
}
