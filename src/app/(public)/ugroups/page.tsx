import type { Metadata } from "next";
import { UGroupsView } from "./";

export const metadata: Metadata = { title: "UGroups" };

export default function Page() {
  return <UGroupsView />;
}