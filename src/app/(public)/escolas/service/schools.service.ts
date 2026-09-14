import { schools, schoolValues, faqItems } from "../model/schools.model";

export function getSchoolsContent() {
  return { schools, schoolValues, faqItems };
}
