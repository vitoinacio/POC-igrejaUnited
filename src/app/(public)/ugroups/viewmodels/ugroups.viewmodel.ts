import { Search, UsersRound, UserRoundCheck } from "lucide-react";
import { getUGroupsContent } from "../service/ugroups.service";

const icons = { Search, UsersRound, UserRoundCheck };

export function getUGroupsViewModel() {
  const { steps } = getUGroupsContent();
  return { steps: steps.map(step => ({ ...step, icon: icons[step.icon] })) };
}
