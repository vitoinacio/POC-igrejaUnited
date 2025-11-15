export interface VolunteerRoleDefinition {
  id: string;
  title: string;
  description: string;
}

export const volunteerRoleDefinitions: VolunteerRoleDefinition[] = [
  {
    id: "ushers",
    title: "Ushers",
    description:
      "Recepção, acolhimento e cuidado prático com quem chega à casa.",
  },
  {
    id: "vips",
    title: "VIPs",
    description:
      "Cuidando de quem chega pela primeira vez, oferecendo café, presentes e conversa.",
  },
  {
    id: "media",
    title: "Mídia & Transmissão",
    description:
      "Áudio, vídeo, foto e transmissão ao vivo. Um time criativo que conta o que Deus está fazendo.",
  },
];
