import { HeartHandshake, Crown, Headphones, Music2, SmilePlus, CalendarHeart } from "lucide-react";
import { getVolunteerContent } from "../service/volunteer.service";

const icons = { HeartHandshake, Crown, Headphones, Music2, SmilePlus, CalendarHeart };

export function getVolunteerViewModel() {
  const content = getVolunteerContent();
  return {
    ...content,
    volunteerTeams: content.volunteerTeams.map(item => ({ ...item, icon: icons[item.icon] })),
  };
}
