import type { Metadata } from "next";
import { UnidadesView } from "./";

export const metadata: Metadata = { title: "Unidades" };

export default function Page() {
  return <UnidadesView />;
}