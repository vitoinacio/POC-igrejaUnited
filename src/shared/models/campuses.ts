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
    series: [
       {
        day: "quinta",
        title: "Crentes Carnais",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Escola de Oração",
        banner: "/banner2.jpg",
      },
    ],
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
  {
    id: 2,
    name: "Campo Grande",
    address: "Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Rodrigo" }, { name: "Pastora Fernanda" }],
    uGroups: [
      {
        title: "Ugroup Família",
        leaders: ["Sérgio", "Patrícia"],
        address: "Rua Matriz, Campo Grande - RJ",
        schedule: { day: "terça", time: "19h30" },
      },
      {
        title: "Ugroup Jovens",
        leaders: ["Gustavo"],
        address: "Rua do Carmo, Campo Grande - RJ",
        schedule: { day: "quinta", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["9h", "11h", "18h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Reino Inabalável",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Vida em Comunhão",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "campogrande-familias-2025-07-12",
        title: "Dia da Família",
        description: "Programação especial para toda a família.",
        date: "2025-07-12",
        address: "Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ",
      },
      {
        id: "campogrande-youth-2025-09-22",
        title: "Youth Experience",
        description: "Experiência intensa de adoração com os jovens.",
        date: "2025-09-22",
        address: "Estr. do Monteiro, 1200 - Campo Grande, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 6 },
      { roleId: "vips", open: true, spots: 4 },
      { roleId: "media", open: false, spots: 0 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 30 },
      { schoolId: "escola-united", open: true, spots: 20 },
      { schoolId: "escola-ministerio", open: true, spots: 15 },
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
  {
    id: 3,
    name: "Duque de Caxias",
    address: "Av. Presidente Kennedy, 1500 - Duque de Caxias - RJ",
    pastors: [{ name: "Pastor André" }, { name: "Pastora Bruna" }],
    uGroups: [
      {
        title: "Ugroup Casais Jovens",
        leaders: ["João", "Débora"],
        address: "Vila São Luís, Duque de Caxias - RJ",
        schedule: { day: "sabado", time: "19h" },
      },
      {
        title: "Ugroup Homens",
        leaders: ["Marcelo"],
        address: "Centro, Duque de Caxias - RJ",
        schedule: { day: "segunda", time: "20h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["9h30", "18h30"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Identidade em Cristo",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Casa de Milagres",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "caxias-mulheres-2025-08-17",
        title: "Encontro Elas",
        description: "Conferência especial para as mulheres.",
        date: "2025-08-17",
        address: "Av. Presidente Kennedy, 1500 - Duque de Caxias - RJ",
      },
      {
        id: "caxias-youth-2025-10-30",
        title: "United Youth Night",
        description: "Noite evangelística com a juventude de Caxias.",
        date: "2025-10-30",
        address: "Av. Presidente Kennedy, 1500 - Duque de Caxias - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 5 },
      { roleId: "vips", open: false, spots: 0 },
      { roleId: "media", open: true, spots: 2 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 25 },
      { schoolId: "escola-united", open: false, spots: 0 },
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
  {
    id: 4,
    name: "Jacarepaguá",
    address: "Estr. dos Bandeirantes, 4000 - Jacarepaguá, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Carlos" }, { name: "Pastora Renata" }],
    uGroups: [
      {
        title: "Ugroup Jovens Casais",
        leaders: ["Rafael", "Lívia"],
        address: "Taquara, Jacarepaguá - RJ",
        schedule: { day: "quarta", time: "20h" },
      },
      {
        title: "Ugroup Teens",
        leaders: ["Joana"],
        address: "Curicica, Jacarepaguá - RJ",
        schedule: { day: "sexta", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Graça que Transforma",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Família no Altar",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "jacarepagua-conferencia-2025-09-14",
        title: "Conferência Jacarepaguá",
        description: "Dias intensos de palavra e adoração.",
        date: "2025-09-14",
        address:
          "Estr. dos Bandeirantes, 4000 - Jacarepaguá, Rio de Janeiro - RJ",
      },
      {
        id: "jacarepagua-youth-2025-11-01",
        title: "Youth Night",
        description: "Culto especial para adolescentes e jovens.",
        date: "2025-11-01",
        address:
          "Estr. dos Bandeirantes, 4000 - Jacarepaguá, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 4 },
      { roleId: "vips", open: true, spots: 3 },
      { roleId: "media", open: true, spots: 2 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 20 },
      { schoolId: "escola-united", open: true, spots: 15 },
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
  {
    id: 5,
    name: "Vila da Penha",
    address: "Av. Meriti, 1500 - Vila da Penha, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Eduardo" }, { name: "Pastora Patrícia" }],
    uGroups: [
      {
        title: "Ugroup Mulheres",
        leaders: ["Camila"],
        address: "Vila da Penha, Rio de Janeiro - RJ",
        schedule: { day: "terça", time: "19h30" },
      },
      {
        title: "Ugroup Jovens",
        leaders: ["Lucas"],
        address: "Vista Alegre, Rio de Janeiro - RJ",
        schedule: { day: "quinta", time: "20h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["9h", "18h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Chamados para Servir",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Jesus no Centro",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "viladapenha-elas-2025-06-08",
        title: "Elas Vila",
        description: "Encontro de mulheres da Vila da Penha.",
        date: "2025-06-08",
        address: "Av. Meriti, 1500 - Vila da Penha, Rio de Janeiro - RJ",
      },
      {
        id: "viladapenha-youth-2025-09-19",
        title: "United Youth Vila",
        description: "Noite jovem com muita música e palavra.",
        date: "2025-09-19",
        address: "Av. Meriti, 1500 - Vila da Penha, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: false, spots: 0 },
      { roleId: "vips", open: true, spots: 2 },
      { roleId: "media", open: true, spots: 2 },
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
  {
    id: 6,
    name: "São Paulo",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
    pastors: [{ name: "Pastor Felipe" }, { name: "Pastora Marina" }],
    uGroups: [
      {
        title: "Ugroup Paulista",
        leaders: ["Thiago"],
        address: "Região da Av. Paulista, São Paulo - SP",
        schedule: { day: "quarta", time: "20h" },
      },
      {
        title: "Ugroup Jovens Profissionais",
        leaders: ["Natália"],
        address: "Jardins, São Paulo - SP",
        schedule: { day: "terça", time: "20h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Influência em São Paulo",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Cidade no Altar",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "saopaulo-business-2025-08-03",
        title: "Business United SP",
        description: "Encontro de negócios e fé na capital paulista.",
        date: "2025-08-03",
        address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      },
      {
        id: "saopaulo-conferencia-2025-11-20",
        title: "Conferência SP",
        description: "Conferência da Igreja United em São Paulo.",
        date: "2025-11-20",
        address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 5 },
      { roleId: "vips", open: true, spots: 3 },
      { roleId: "media", open: true, spots: 3 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 25 },
      { schoolId: "escola-united", open: true, spots: 25 },
      { schoolId: "escola-ministerio", open: true, spots: 15 },
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
  {
    id: 7,
    name: "Zona Sul",
    address: "Rua Voluntários da Pátria, 500 - Botafogo, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Henrique" }, { name: "Pastora Lúcia" }],
    uGroups: [
      {
        title: "Ugroup Zona Sul",
        leaders: ["Rodrigo", "Elisa"],
        address: "Botafogo, Rio de Janeiro - RJ",
        schedule: { day: "quinta", time: "20h" },
      },
      {
        title: "Ugroup Universitários",
        leaders: ["Bruno"],
        address: "Flamengo, Rio de Janeiro - RJ",
        schedule: { day: "terça", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "19h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Luz para a Cidade",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Amor que Alcança",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "zonasul-adoracao-2025-05-30",
        title: "Noite de Adoração Zona Sul",
        description: "Tempo de adoração intensa na Zona Sul.",
        date: "2025-05-30",
        address:
          "Rua Voluntários da Pátria, 500 - Botafogo, Rio de Janeiro - RJ",
      },
      {
        id: "zonasul-jovens-2025-09-13",
        title: "Encontro de Jovens Zona Sul",
        description: "Reunião dos jovens da região da Zona Sul.",
        date: "2025-09-13",
        address:
          "Rua Voluntários da Pátria, 500 - Botafogo, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 3 },
      { roleId: "vips", open: false, spots: 0 },
      { roleId: "media", open: true, spots: 2 },
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
  {
    id: 8,
    name: "São João de Meriti",
    address:
      "Av. Automóvel Clube, 2000 - São João de Meriti, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Wallace" }, { name: "Pastora Aline" }],
    uGroups: [
      {
        title: "Ugroup Família Meriti",
        leaders: ["Diego", "Larissa"],
        address: "Grande Rio, São João de Meriti - RJ",
        schedule: { day: "quarta", time: "20h" },
      },
      {
        title: "Ugroup Jovens Meriti",
        leaders: ["Igor"],
        address: "Centro, São João de Meriti - RJ",
        schedule: { day: "sexta", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["9h30", "18h30"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Esperança para Baixada",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Casa de Oração",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "meriti-conexao-2025-06-21",
        title: "Conexão Meriti",
        description: "Encontro de integração na Baixada.",
        date: "2025-06-21",
        address:
          "Av. Automóvel Clube, 2000 - São João de Meriti, Rio de Janeiro - RJ",
      },
      {
        id: "meriti-youth-2025-10-04",
        title: "Youth Meriti",
        description: "Noite jovem na igreja de Meriti.",
        date: "2025-10-04",
        address:
          "Av. Automóvel Clube, 2000 - São João de Meriti, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 4 },
      { roleId: "vips", open: true, spots: 2 },
      { roleId: "media", open: false, spots: 0 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 20 },
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
  {
    id: 9,
    name: "São Gonçalo",
    address: "Rua Dr. Alfredo Backer, 800 - São Gonçalo - RJ",
    pastors: [{ name: "Pastor Paulo" }, { name: "Pastora Denise" }],
    uGroups: [
      {
        title: "Ugroup Família São Gonçalo",
        leaders: ["Fábio", "Érica"],
        address: "Centro, São Gonçalo - RJ",
        schedule: { day: "terça", time: "20h" },
      },
      {
        title: "Ugroup Jovens São Gonçalo",
        leaders: ["Mirela"],
        address: "Neves, São Gonçalo - RJ",
        schedule: { day: "quinta", time: "20h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["9h", "18h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Firmes na Esperança",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Graça para Todos",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "saogoncalo-evangelismo-2025-07-05",
        title: "Dia de Evangelismo SG",
        description: "Saída evangelística pelas ruas de São Gonçalo.",
        date: "2025-07-05",
        address: "Rua Dr. Alfredo Backer, 800 - São Gonçalo - RJ",
      },
      {
        id: "saogoncalo-youth-2025-09-27",
        title: "Youth São Gonçalo",
        description: "Culto especial de jovens em São Gonçalo.",
        date: "2025-09-27",
        address: "Rua Dr. Alfredo Backer, 800 - São Gonçalo - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: false, spots: 0 },
      { roleId: "vips", open: true, spots: 3 },
      { roleId: "media", open: true, spots: 2 },
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
  {
    id: 10,
    name: "Barra da Tijuca",
    address: "Av. das Américas, 5000 - Barra da Tijuca, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Daniel" }, { name: "Pastora Priscila" }],
    uGroups: [
      {
        title: "Ugroup Business",
        leaders: ["Leonardo"],
        address: "Av. das Américas, Barra da Tijuca - RJ",
        schedule: { day: "terça", time: "7h30" },
      },
      {
        title: "Ugroup Jovens Profissionais",
        leaders: ["Isabela"],
        address: "Jardim Oceânico, Barra da Tijuca - RJ",
        schedule: { day: "quinta", time: "20h" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["10h", "18h30"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Influência no Mercado",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Famílias Saudáveis",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "barra-business-2025-09-01",
        title: "Business United",
        description: "Encontro de empreendedores e profissionais.",
        date: "2025-09-01",
        address:
          "Av. das Américas, 5000 - Barra da Tijuca, Rio de Janeiro - RJ",
      },
      {
        id: "barra-conferencia-2025-11-11",
        title: "Conferência Barra",
        description: "Conferência regional da Barra da Tijuca.",
        date: "2025-11-11",
        address:
          "Av. das Américas, 5000 - Barra da Tijuca, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 8 },
      { roleId: "vips", open: true, spots: 5 },
      { roleId: "media", open: true, spots: 3 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 20 },
      { schoolId: "escola-united", open: true, spots: 25 },
      { schoolId: "escola-ministerio", open: true, spots: 15 },
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
  {
    id: 11,
    name: "Campos dos Goytacazes",
    address:
      "Av. 28 de Março, 300 - Campos dos Goytacazes, Rio de Janeiro - RJ",
    pastors: [{ name: "Pastor Marcelo" }, { name: "Pastora Juliana" }],
    uGroups: [
      {
        title: "Ugroup Campos Centro",
        leaders: ["André", "Tatiane"],
        address: "Centro, Campos dos Goytacazes - RJ",
        schedule: { day: "quarta", time: "20h" },
      },
      {
        title: "Ugroup Jovens Campos",
        leaders: ["Letícia"],
        address: "Parque Tamandaré, Campos dos Goytacazes - RJ",
        schedule: { day: "sexta", time: "19h30" },
      },
    ],
    services: [
      { day: "quinta", times: ["20h"] },
      { day: "domingo", times: ["9h", "18h"] },
    ],
    series: [
       {
        day: "quinta",
        title: "Campos em Chamas",
        banner: "/banner.jpg",
      },
      {
        day: "domingo",
        title: "Colheita em Campos",
        banner: "/banner2.jpg",
      },
    ],
    events: [
      {
        id: "campos-conferencia-2025-08-09",
        title: "Conferência Campos",
        description: "Conferência da Igreja United em Campos.",
        date: "2025-08-09",
        address:
          "Av. 28 de Março, 300 - Campos dos Goytacazes, Rio de Janeiro - RJ",
      },
      {
        id: "campos-youth-2025-10-18",
        title: "Youth Campos",
        description: "Noite jovem em Campos dos Goytacazes.",
        date: "2025-10-18",
        address:
          "Av. 28 de Março, 300 - Campos dos Goytacazes, Rio de Janeiro - RJ",
      },
    ],
    volunteerSlots: [
      { roleId: "ushers", open: true, spots: 4 },
      { roleId: "vips", open: true, spots: 2 },
      { roleId: "media", open: true, spots: 2 },
    ],
    schoolSlots: [
      { schoolId: "primeiros-passos", open: true, spots: 20 },
      { schoolId: "escola-united", open: true, spots: 20 },
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
];
