export type UGroupCategory = "Casais" | "Jovens" | "Homens" | "Mulheres" | "Mulheres 30+" | "Mistos";

export interface UGroup {
  name: string;
  type: UGroupCategory;
  region: string;
  day: string;
  time: string;
}

export interface UGroupStep {
  icon: "Search" | "UsersRound" | "UserRoundCheck";
  title: string;
  text: string;
}
