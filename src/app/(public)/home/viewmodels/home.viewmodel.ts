import { UsersRound, School, HeartHandshake, MapPin } from "lucide-react";
import { getHomeContent } from "../service/home.service";

const icons = { UsersRound, School, HeartHandshake, MapPin };

export function getHomeViewModel() {
  const content = getHomeContent();
  return {
    ...content,
    quickLinks: content.quickLinks.map(item => ({ ...item, icon: icons[item.icon] })),
  };
}
