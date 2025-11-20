export type Weekday =
  | "domingo"
  | "segunda"
  | "terça"
  | "quarta"
  | "quinta"
  | "sexta"
  | "sabado";

export interface ServiceTime {
  day: Weekday;
  times: string[];
}

export interface SeriesByDay {
  day: Weekday;
  title: string;
  banner: string;
}

export interface Pastor {
  name: string;
}

export interface UGroup {
  title: string;
  leaders: string[];
  address: string;
  schedule: {
    day: Weekday;
    time: string;
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  address: string;
}

export interface SocialLink {
  platform: "youtube" | "instagram" | "spotify";
  label: string;
  url: string;
}

export interface AnnouncementsLink {
  url: string;
}

export interface CampusVolunteerSlot {
  roleId: string;
  open: boolean;
  spots: number;
}

export interface CampusSchoolSlot {
  schoolId: string;
  open: boolean;
  spots: number;
}

export interface Campus {
  id: number;
  name: string;
  address: string;

  pastors: Pastor[];
  uGroups: UGroup[];

  services: ServiceTime[];
  series: SeriesByDay[];
  events: Event[];

  volunteerSlots: CampusVolunteerSlot[];
  schoolSlots: CampusSchoolSlot[];

  socials: SocialLink[];
  announcements: AnnouncementsLink;
}
