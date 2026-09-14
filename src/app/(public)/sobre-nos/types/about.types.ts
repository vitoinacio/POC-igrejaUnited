export interface TimelineItem {
  title: string;
  text: string;
}

export interface Leadership {
  role: string;
  name: string;
  description: string;
}

export interface Value {
  icon: "BookOpen" | "UsersRound" | "Heart" | "Sprout";
  title: string;
  text: string;
}
