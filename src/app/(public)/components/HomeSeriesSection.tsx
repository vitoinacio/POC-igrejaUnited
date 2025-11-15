"use client";

import SeriesCampusSelector from "@/src/components/SeriesCampusSelector";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Direction } from "@/src/hooks/useSelectedCampus";

interface SeriesCampusSelectorProps {
  activeIndex: number;
  direction: Direction;
  prevIndex: number;
  nextIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const HomeSeriesSection = ({
  activeIndex,
  direction,
  prevIndex,
  nextIndex,
  handlePrev,
  handleNext,
}: SeriesCampusSelectorProps) => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="text-xs tracking-[0.27em] uppercase text-united-muted">
            séries da casa
          </CardTitle>
          <CardDescription>
            <h2 className="font-display text-xl sm:text-2xl text-united-text font-medium max-[350px]:text-sm">
              Domingos &amp; Quintas
            </h2>
            <SeriesCampusSelector
              activeIndex={activeIndex}
              direction={direction}
              prevIndex={prevIndex}
              nextIndex={nextIndex}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
};

export default HomeSeriesSection;
