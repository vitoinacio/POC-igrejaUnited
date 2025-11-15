"use client";

import { useState } from "react";
import { campuses } from "../models/campuses";
import { Campus } from "../types/campus/campus.types";

export type Direction = 1 | -1;

export interface SelectedCampusState {
  activeIndex: number;
  direction: Direction;
  prevIndex: number;
  nextIndex: number;
  currentCampus: Campus;
  handlePrev: () => void;
  handleNext: () => void;
}

const useSelectedCampus = (): SelectedCampusState => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const total = campuses.length;

  const getPrevIndex = (index: number) => (index - 1 + total) % total;
  const getNextIndex = (index: number) => (index + 1) % total;

  const prevIndex = getPrevIndex(activeIndex);
  const nextIndex = getNextIndex(activeIndex);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => getPrevIndex(prev));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => getNextIndex(prev));
  };

  const currentCampus = campuses[activeIndex];

  return {
    activeIndex,
    direction,
    prevIndex,
    nextIndex,
    currentCampus,
    handlePrev,
    handleNext,
  };
};

export default useSelectedCampus;
