"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { campuses } from "../models/campuses";
import { Direction } from "../hooks/useSelectedCampus";

interface SeriesCampusSelectorProps {
  activeIndex: number;
  direction: Direction;
  prevIndex: number;
  nextIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const SeriesCampusSelector = ({
  activeIndex,
  direction,
  prevIndex,
  nextIndex,
  handlePrev,
  handleNext,
}: SeriesCampusSelectorProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="ghost"
        className="rounded-full h-10 w-10 cursor-pointer"
        onClick={handlePrev}
        aria-label="Campus anterior"
      >
        <ChevronLeft />
      </Button>

      <div className="overflow-hidden w-[260px]">
        <motion.div
          key={activeIndex}
          initial={{ x: direction * 40 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="flex items-center justify-center gap-3"
        >
          <p className="text-xs text-united-muted opacity-70 min-w-[70px] text-right shrink-0">
            {campuses[prevIndex].name}
          </p>

          <p className="min-w-[120px] text-center shrink-0 scale-110 mb-1 font-bold text-united-primary text-base">
            {campuses[activeIndex].name}
          </p>

          <p className="text-xs text-united-muted opacity-70 min-w-[70px] text-left shrink-0">
            {campuses[nextIndex].name}
          </p>
        </motion.div>
      </div>

      <Button
        variant="ghost"
        className="rounded-full h-10 w-10 cursor-pointer"
        onClick={handleNext}
        aria-label="Próximo campus"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default SeriesCampusSelector;
