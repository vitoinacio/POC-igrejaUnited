import { Campus } from "../types/campus/campus.types";

export const campuses: Campus[] = [
  {
    id: 1,
    name: "Tijuca",
    address: "R. Barão de Mesquita, 736 - Andaraí, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Fellipe" }, { name: "Pastora Carina" }],
    uGroups: [
      {
        title: "Ugroup Casais",
        leaders: ["Natan", "Julia"],
        address: "Rua dos Lagos, Rio de Janeiro - RJ",
        schedule: { day: "quinta", time: "19h" },
      },
      {
        title: "Ugroup Universitários",
        leaders: ["Maria"],
        address: "Fundão, Rio de Janeiro - RJ",
        schedule: { day: "quarta", time: "19h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Crentes Carnais",
      domingo: "Escola de Oração",
    },
    events: [
      {
        id: "tijuca-youth-2025-12-10",
        title: "Culto Youth",
        description: "Culto para os jovens da Tijuca.",
        date: "2025-12-10",
        address: "Rua das Flores, Rio de Janeiro - RJ",
      },
      {
        id: "tijuca-kings-2025-12-25",
        title: "Kings Conference",
        description: "Conferência dos homens da casa.",
        date: "2025-12-25",
        address: "Rua das Pedras, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: false, spots: 0 },
      { roleId: "vips", open: false, spots: 0 },
      { roleId: "media", open: true, spots: 2 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 20 },
      { schoolId: "escola-united", open: true, spots: 20 },
      { schoolId: "escola-ministerio", open: true, spots: 20 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },

  // 2) Campo Grande
  {
    id: 2,
    name: "Campo Grande",
    address: "Av. Cesário de Melo, 5000 - Campo Grande, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Rodrigo" }, { name: "Pastora Ana" }],
    uGroups: [
      {
        title: "Ugroup Famílias",
        leaders: ["Carlos", "Patrícia"],
        address: "Rua do Cedro, Campo Grande - RJ",
        schedule: { day: "terça", time: "20h" },
      },
      {
        title: "Ugroup Jovens Trabalhadores",
        leaders: ["Bruno"],
        address: "Rua Esperança, Campo Grande - RJ",
        schedule: { day: "quinta", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Graça em Movimento",
      domingo: "Jesus na Cidade",
    },
    events: [
      {
        id: "campogrande-family-2025-09-15",
        title: "Noite da Família",
        description: "Celebração especial com foco em famílias.",
        date: "2025-09-15",
        address: "Av. Cesário de Melo, 5000 - Campo Grande, RJ",
      },
      {
        id: "campogrande-youth-2025-11-05",
        title: "United Young Night",
        description: "Encontro especial com a juventude de Campo Grande.",
        date: "2025-11-05",
        address: "Rua da Paz, Campo Grande - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 3 },
      { roleId: "vips", open: true, spots: 2 },
      { roleId: "media", open: false, spots: 0 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 15 },
      { schoolId: "escola-united", open: true, spots: 10 },
      { schoolId: "escola-ministerio", open: false, spots: 0 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },

  // 3) Caxias
  {
    id: 3,
    name: "Caxias",
    address: "Av. Presidente Kennedy, 1200 - Duque de Caxias - RJ",
    pastors: [{ name: "Pastor Diego" }, { name: "Pastora Larissa" }],
    uGroups: [
      {
        title: "Ugroup Jovens",
        leaders: ["Rafael", "Luana"],
        address: "Rua Central, Duque de Caxias - RJ",
        schedule: { day: "sexta", time: "19h30" },
      },
      {
        title: "Ugroup Mulheres",
        leaders: ["Fernanda"],
        address: "Rua Jardim, Duque de Caxias - RJ",
        schedule: { day: "terça", time: "19h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Restauração da Alma",
      domingo: "Famílias no Centro de Deus",
    },
    events: [
      {
        id: "caxias-casais-2025-08-20",
        title: "Encontro de Casais",
        description: "Noite especial para casais da Caxias.",
        date: "2025-08-20",
        address: "Av. Presidente Kennedy, 1200 - Duque de Caxias - RJ",
      },
      {
        id: "caxias-batismo-2025-10-02",
        title: "Domingo de Batismos",
        description: "Celebração de batismos em águas.",
        date: "2025-10-02",
        address: "Rua Rio Branco, Duque de Caxias - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 4 },
      { roleId: "vips", open: false, spots: 0 },
      { roleId: "media", open: true, spots: 1 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 25 },
      { schoolId: "escola-united", open: false, spots: 0 },
      { schoolId: "escola-ministerio", open: true, spots: 12 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },

  // 4) Grajaú
  {
    id: 4,
    name: "Grajaú",
    address: "Rua Barão do Bom Retiro, 900 - Grajaú, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Henrique" }, { name: "Pastora Bruna" }],
    uGroups: [
      {
        title: "Ugroup Jovens Universitários",
        leaders: ["Caio", "Isabela"],
        address: "Rua do Bosque, Grajaú - RJ",
        schedule: { day: "quarta", time: "20h" },
      },
      {
        title: "Ugroup Intercessão",
        leaders: ["João"],
        address: "Rua Vista Alegre, Grajaú - RJ",
        schedule: { day: "segunda", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Vida no Espírito",
      domingo: "Casa e Mesa",
    },
    events: [
      {
        id: "grajau-louvor-2025-07-18",
        title: "Noite de Louvor",
        description: "Adoração e ministrações voltadas à presença de Deus.",
        date: "2025-07-18",
        address: "Rua Barão do Bom Retiro, 900 - Grajaú, RJ",
      },
      {
        id: "grajau-conferencia-2025-11-23",
        title: "Conferência United Grajaú",
        description: "Conferência com convidados e ministrações especiais.",
        date: "2025-11-23",
        address: "Rua Jardim Suspenso, Grajaú - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 2 },
      { roleId: "vips", open: true, spots: 3 },
      { roleId: "media", open: true, spots: 1 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 18 },
      { schoolId: "escola-united", open: true, spots: 18 },
      { schoolId: "escola-ministerio", open: false, spots: 0 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },

  // 5) Engenho Novo
  {
    id: 5,
    name: "Engenho Novo",
    address:
      "Rua Vinte e Quatro de Maio, 300 - Engenho Novo, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor André" }, { name: "Pastora Luciana" }],
    uGroups: [
      {
        title: "Ugroup Teen",
        leaders: ["Lucas", "Giovana"],
        address: "Rua das Laranjeiras, Engenho Novo - RJ",
        schedule: { day: "sexta", time: "19h" },
      },
      {
        title: "Ugroup Homens",
        leaders: ["Marcelo"],
        address: "Rua Central, Engenho Novo - RJ",
        schedule: { day: "quinta", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Chamados para Servir",
      domingo: "Cristo em Nós",
    },
    events: [
      {
        id: "engenhonovo-homens-2025-06-14",
        title: "Manhã de Homens",
        description: "Reunião especial para homens da igreja.",
        date: "2025-06-14",
        address: "Rua Vinte e Quatro de Maio, 300 - Engenho Novo, RJ",
      },
      {
        id: "engenhonovo-teen-2025-09-30",
        title: "Teen United Day",
        description: "Dia inteiro de programação para adolescentes.",
        date: "2025-09-30",
        address: "Rua das Laranjeiras, Engenho Novo - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 5 },
      { roleId: "vips", open: false, spots: 0 },
      { roleId: "media", open: true, spots: 2 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 30 },
      { schoolId: "escola-united", open: true, spots: 15 },
      { schoolId: "escola-ministerio", open: true, spots: 10 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },

  // 6) Campos dos Goytacazes
  {
    id: 6,
    name: "Campos dos Goytacazes",
    address: "Av. Alberto Torres, 800 - Campos dos Goytacazes - RJ",
    pastors: [{ name: "Pastor Gustavo" }, { name: "Pastora Elaine" }],
    uGroups: [
      {
        title: "Ugroup Sertão",
        leaders: ["Thiago", "Karina"],
        address: "Rua das Palmeiras, Campos - RJ",
        schedule: { day: "terça", time: "20h" },
      },
      {
        title: "Ugroup Empresários",
        leaders: ["Rogério"],
        address: "Av. Beira Rio, Campos - RJ",
        schedule: { day: "quinta", time: "7h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Chamados para a Missão",
      domingo: "O Reino em Movimento",
    },
    events: [
      {
        id: "campos-missoes-2025-05-12",
        title: "Noite de Missões",
        description: "Testemunhos e foco em missões nacionais.",
        date: "2025-05-12",
        address: "Av. Alberto Torres, 800 - Campos dos Goytacazes - RJ",
      },
      {
        id: "campos-congresso-2025-10-19",
        title: "Congresso Campos em Chamas",
        description: "Dias de consagração e ministrações intensas.",
        date: "2025-10-19",
        address: "Rua do Farol, Campos - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 2 },
      { roleId: "vips", open: true, spots: 4 },
      { roleId: "media", open: false, spots: 0 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 12 },
      { schoolId: "escola-united", open: true, spots: 12 },
      { schoolId: "escola-ministerio", open: false, spots: 0 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },

  // 7) Meinher (mantive o nome como você escreveu)
  {
    id: 7,
    name: "Meinher",
    address: "Rua Principal, 100 - Meinher, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Paulo" }, { name: "Pastora Débora" }],
    uGroups: [
      {
        title: "Ugroup Pais & Filhos",
        leaders: ["Leandro", "Camila"],
        address: "Rua das Mangueiras, Meinher - RJ",
        schedule: { day: "quarta", time: "19h30" },
      },
      {
        title: "Ugroup Criativos",
        leaders: ["Joana"],
        address: "Rua dos Artistas, Meinher - RJ",
        schedule: { day: "segunda", time: "20h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: {
      quinta: "Expressando o Reino",
      domingo: "Casa de Graça",
    },
    events: [
      {
        id: "meinher-criativos-2025-03-27",
        title: "Night of Creatives",
        description: "Encontro da galera criativa da igreja.",
        date: "2025-03-27",
        address: "Rua dos Artistas, Meinher - RJ",
      },
      {
        id: "meinher-familia-2025-09-08",
        title: "Dia da Família United",
        description: "Atividades e culto especial para famílias.",
        date: "2025-09-08",
        address: "Praça Central, Meinher - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 3 },
      { roleId: "vips", open: true, spots: 1 },
      { roleId: "media", open: true, spots: 1 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 16 },
      { schoolId: "escola-united", open: false, spots: 0 },
      { schoolId: "escola-ministerio", open: true, spots: 8 },
    ],
    socials: [
      {
        platform: "youtube",
        label: "YouTube",
        url: "https://www.youtube.com/igrejaunited",
      },
      {
        platform: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/igrejaunited",
      },
      {
        platform: "spotify",
        label: "Spotify",
        url: "https://www.spotify.com/igrejaunited",
      },
    ],
    announcements: {
      url: "https://www.youtube.com/igrejaunited/anuncios",
    },
  },
];
