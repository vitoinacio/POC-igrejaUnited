import { Footprints, BookOpen, UsersRound } from "lucide-react";
import { getSchoolsContent } from "../service/schools.service";

const icons = { Footprints, BookOpen, UsersRound };

export function getSchoolsViewModel() {
  const content = getSchoolsContent();
  return {
    ...content,
    schoolValues: content.schoolValues.map(item => ({ ...item, icon: icons[item.icon] })),
  };
}
