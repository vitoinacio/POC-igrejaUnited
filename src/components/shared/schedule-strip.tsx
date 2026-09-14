import { CalendarDays } from "lucide-react";
import { schedules } from "@/lib/constants/schedules";

export function ScheduleStrip() {
  return (
    <div className="surface grid overflow-hidden md:grid-cols-3">
      {schedules.map((item, index) => (
        <div
          key={item.day}
          className={`flex gap-4 p-5 sm:p-6 ${index ? "border-t md:border-l md:border-t-0" : ""}`}
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
            <CalendarDays className="h-5 w-5" />
          </span>
          <div>
            <p className="eyebrow tracking-[.14em]!">{item.day}</p>
            <p className="mt-1 font-serif text-2xl">{item.time}</p>
            <p className="text-sm text-muted-foreground">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
