import type { Metadata } from "next";
import { LoginView } from "./view/login-view";

export const metadata: Metadata = { title: "Área de líderes" };

export default function Page() {
  return <LoginView />;
}