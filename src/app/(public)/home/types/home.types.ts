export interface QuickLink {
  title: string;
  description: string;
  image: string;
  href: string;
  icon: "UsersRound" | "School" | "HeartHandshake" | "MapPin";
}

export interface SchoolCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface EventItem {
  label: string;
  title: string;
  description: string;
  image: string;
}
