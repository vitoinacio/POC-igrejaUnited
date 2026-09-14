import type { Metadata } from "next";
import { SobreView } from "./";

export const metadata: Metadata = { title: "Sobre nós" };

export default function Page() {
  return <SobreView />;
}