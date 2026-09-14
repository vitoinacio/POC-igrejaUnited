import { getSchedules } from "@/service/schedule.service";
import { scheduleImages, otherEvents } from "../model/events.model";

export function getEventsContent() {
  return { schedules: getSchedules(), scheduleImages, otherEvents };
}
