import type { Unit } from "../types/units.types";

export const units: readonly Unit[] = [
  { name: "United Andaraí", region: "Rio de Janeiro — RJ", address: "Rua Pontes Corrêa, 39 — Andaraí", image: "/images/church-building.jpg" },
  { name: "United Campo Grande", region: "Rio de Janeiro — RJ", address: "Mais informações em breve", image: "/images/hero-units.jpg" },
  { name: "United Barra da Tijuca", region: "Rio de Janeiro — RJ", address: "Mais informações em breve", image: "/images/hero-units.jpg" },
  { name: "United Caxias", region: "Duque de Caxias — RJ", address: "Mais informações em breve", image: "/images/church-building.jpg" },
  { name: "United Campos dos Goytacazes", region: "Campos dos Goytacazes — RJ", address: "Mais informações em breve", image: "/images/hero-units.jpg" },
] as const;
