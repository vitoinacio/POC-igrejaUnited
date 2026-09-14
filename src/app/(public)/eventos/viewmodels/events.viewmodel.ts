import { getEventsContent } from "../service/events.service";

export function getEventsViewModel() {
  const { schedules, scheduleImages, otherEvents } = getEventsContent();
  return {
    otherEvents,
    schedules: schedules.map((schedule, index) => ({
      ...schedule,
      label: `${schedule.day} · ${schedule.time}`,
      image: scheduleImages[index],
    })),
  };
}
