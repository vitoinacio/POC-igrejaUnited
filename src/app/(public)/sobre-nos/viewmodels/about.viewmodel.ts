import { BookOpen, UsersRound, Heart, Sprout } from "lucide-react";
import { getAboutContent } from "../service/about.service";

const icons = { BookOpen, UsersRound, Heart, Sprout };

export function getAboutViewModel() {
  const content = getAboutContent();
  return {
    ...content,
    values: content.values.map(item => ({ ...item, icon: icons[item.icon] })),
  };
}
