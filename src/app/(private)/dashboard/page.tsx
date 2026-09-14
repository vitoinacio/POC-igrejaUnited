import type { Metadata } from "next";
import { DashboardView } from "./view/dashboard-view";

export const metadata: Metadata = { title: "Dashboard" };

export default function Page() {
  return <DashboardView />;
}