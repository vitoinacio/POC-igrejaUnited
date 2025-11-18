"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";
import { campuses } from "../../../../shared/models/campuses";
import { useCampusSelection } from "../../view-model/CampusSelectionContext";

const SeriesCampusSelector = () => {
  const {
    activeIndex,
    direction,
    prevIndex,
    nextIndex,
    handlePrev,
    handleNext,
  } = useCampusSelection();

  return (
    <div className="flex items-center gap-2 w-full max-w-full">
      <Button
        variant="ghost"
        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 cursor-pointer shrink-0"
        onClick={handlePrev}
        aria-label="Campus anterior"
      >
        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>

      <div className="flex-1 min-w-0 overflow-hidden">
        <motion.div
          key={activeIndex}
          initial={{ x: direction * 40 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="flex items-center justify-center gap-2 w-full"
        >
          <p className="hidden sm:block sm:flex-1 text-xs text-united-muted opacity-70 text-right truncate">
            {campuses[prevIndex].name}
          </p>

          <p
            className="
              flex-1 text-center font-bold text-united-primary
              text-sm sm:text-base
              whitespace-normal sm:whitespace-nowrap
              wrap-break-word sm:truncate
            "
          >
            {campuses[activeIndex].name}
          </p>

          <p className="hidden sm:block sm:flex-1 text-xs text-united-muted opacity-70 text-left truncate">
            {campuses[nextIndex].name}
          </p>
        </motion.div>
      </div>

      <Button
        variant="ghost"
        className="rounded-full h-8 w-8 sm:h-10 sm:w-10 cursor-pointer shrink-0"
        onClick={handleNext}
        aria-label="Próximo campus"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  );
};

export default SeriesCampusSelector;
