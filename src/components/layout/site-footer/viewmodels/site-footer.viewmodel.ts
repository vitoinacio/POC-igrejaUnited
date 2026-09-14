import { getNavigation } from "@/service/navigation.service";

export function getSiteFooterViewModel() {
  return { navigation: getNavigation() };
}
