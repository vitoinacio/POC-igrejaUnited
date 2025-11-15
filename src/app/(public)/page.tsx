"use client";

import useSelectedCampus from "@/src/hooks/useSelectedCampus";
import HomeHeroSection from "./components/HomeHeroSection";
import HomeSeriesSection from "./components/HomeSeriesSection";

const HomePublicPage = () => {
  const {
    activeIndex,
    direction,
    prevIndex,
    nextIndex,
    handlePrev,
    handleNext,
  } = useSelectedCampus();

  return (
    <div>
      <HomeHeroSection />
      <HomeSeriesSection
        activeIndex={activeIndex}
        direction={direction}
        prevIndex={prevIndex}
        nextIndex={nextIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default HomePublicPage;
