import { CalendarDays, GraduationCap, Home, UsersRound } from "lucide-react";
import { getDashboardCards } from "../service/dashboard.service";

const icons = { CalendarDays, GraduationCap, Home, UsersRound };

export function getDashboardViewModel() {
  return { cards: getDashboardCards().map(card => ({ ...card, icon: icons[card.icon] })) };
}
