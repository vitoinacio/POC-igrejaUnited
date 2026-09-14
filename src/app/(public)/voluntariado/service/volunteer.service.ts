import { volunteerTeams, volunteerSteps } from "../model/volunteer.model";

export function getVolunteerContent() {
  return { volunteerTeams, volunteerSteps };
}
