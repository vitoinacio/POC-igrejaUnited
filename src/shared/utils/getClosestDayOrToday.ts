import { Weekday } from "../types/campus/campus.types";

export const WEEK_DAYS: Weekday[] = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

export function getClosestDayOrToday(days: Weekday[]): string {
  if (days.length === 0) {
    throw new Error("Days array cannot be empty");
  }

  const today = new Date();
  const todayIndex = today.getDay();
  const todayName = WEEK_DAYS[todayIndex];

  if (days.includes(todayName)) {
    return "Hoje";
  }

  let closestDay: Weekday = days[0];
  let minDiff = 7;

  for (const day of days) {
    const targetIndex = WEEK_DAYS.indexOf(day);
    if (targetIndex === -1) continue; 

    const diff = (targetIndex - todayIndex + 7) % 7;

    if (diff > 0 && diff < minDiff) {
      minDiff = diff;
      closestDay = day;
    }
  }

  return closestDay;
}
