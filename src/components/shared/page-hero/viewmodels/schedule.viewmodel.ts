import { getSchedules } from "@/service/schedule.service";

export function getScheduleViewModel() {
  return { schedules: getSchedules() };
}
