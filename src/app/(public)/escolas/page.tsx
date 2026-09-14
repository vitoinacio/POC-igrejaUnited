import type { Metadata } from "next";
import { EscolasView } from "./";

export const metadata: Metadata = { title: "Escolas" };

export default function Page() {
  return <EscolasView />;
}