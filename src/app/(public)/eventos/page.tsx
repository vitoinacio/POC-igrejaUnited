import type { Metadata } from "next";
import { EventosView } from "./";

export const metadata: Metadata = { title: "Eventos" };

export default function Page() {
  return <EventosView />;
}