import type { ReactNode } from "react";

export interface EventCardProps {
  label: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  action?: ReactNode;
}
