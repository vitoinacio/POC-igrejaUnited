import { quickLinks, schoolCards, weeklyEvents } from "../model/home.model";

export function getHomeContent() {
  return { quickLinks, schoolCards, weeklyEvents };
}
