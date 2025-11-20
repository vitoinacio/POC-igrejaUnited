import { Campus, SeriesByDay, Weekday } from "../types/campus/campus.types";
import { getClosestDayOrToday, WEEK_DAYS } from "../utils/getClosestDayOrToday";

export interface NextCampusService {
  displayDay: string;
  day: Weekday;
  times: string[];
  series?: SeriesByDay;
}

export function getNextSeriesByDay(campus: Campus): NextCampusService | null {
  const { services, series } = campus;

  if (!services || services.length === 0) return null;

  const serviceDays = Array.from(
    new Set(services.map((s) => s.day))
  ) as Weekday[];

  if (serviceDays.length === 0) return null;

  const closest = getClosestDayOrToday(serviceDays);

  let targetDay: Weekday;

  if (closest === "Hoje") {
    const todayIndex = new Date().getDay();
    targetDay = WEEK_DAYS[todayIndex];
  } else {
    targetDay = closest as Weekday;
  }

  const service = services.find((s) => s.day === targetDay);
  if (!service) return null;

  const seriesForDay = series?.find((ser) => ser.day === targetDay);

  const displayDay = targetDay;

  return {
    displayDay,
    day: targetDay,
    times: service.times,
    series: seriesForDay,
  };
}
