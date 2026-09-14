export interface School {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface SchoolValue {
  icon: "Footprints" | "BookOpen" | "UsersRound";
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
