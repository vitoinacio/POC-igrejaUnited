import type { Metadata } from "next";
import { VoluntariadoView } from "./";

export const metadata: Metadata = { title: "Voluntariado" };

export default function Page() {
  return <VoluntariadoView />;
}