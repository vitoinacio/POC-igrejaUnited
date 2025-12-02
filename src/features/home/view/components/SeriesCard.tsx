"use client";

import { useState } from "react";
import { Badge } from "@/src/shared/components/ui/badge";
import { Card, CardContent } from "@/src/shared/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useCampusSelection } from "../../view-model/CampusSelectionContext";

const SeriesCard = () => {
  const [active, setActive] = useState<"left" | "right">("left");
  const { currentCampus } = useCampusSelection();

  const isLeftActive = active === "left";
  const isRightActive = active === "right";

  return (
    <Card className="overflow-hidden rounded-3xl border-none text-white shadow-xl">
      <CardContent className="flex flex-col md:flex-row gap-4 p-0">
        <div
          onMouseEnter={() => setActive("left")}
          className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ease-out
          h-[220px] md:h-[260px] lg:h-[300px]
          flex-1 
          ${isLeftActive ? "md:flex-[0.75]" : "md:flex-[0.25]"}`}
        >
          <Image
            src="/banner.jpg"
            alt="Banner Casa de Milagres"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/75 to-black/40" />

          {currentCampus.series &&  isLeftActive ? (
            <div className="relative z-10 flex h-full flex-col justify-center p-6 max-md:p-4 sm:px-10 lg:px-14">
              <Badge className="mb-4 w-fit rounded-full px-4 py-1 text-[8px] font-bold tracking-[0.2em] uppercase">
                {currentCampus.series[1].day}
              </Badge>

              <div className="space-y-3">
                <h2 className="text-sm sm:text-2xl lg:text-3xl font-semibold leading-snug">
                  {currentCampus.series[1].title}
                </h2>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <span className="h-6 w-px bg-zinc-500" />
                  <p>Vivendo o sobrenatural.</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-6 text-[9px] sm:text-[11px] font-semibold tracking-[0.16em]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentCampus.services[1].times.join(' & ')}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6">
              <Badge className="w-fit rounded-full px-4 py-1 text-[8px] font-bold tracking-[0.2em] uppercase">
                {currentCampus.series[1].day}
              </Badge>

              <h2 className="mb-4 text-sm font-semibold leading-snug">
                {currentCampus.series[1].title}
              </h2>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setActive("right")}
          className={`relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 ease-out
          h-[220px] md:h-[260px] lg:h-[300px]
          flex-1
          ${isRightActive ? "md:flex-[0.75]" : "md:flex-[0.25]"}`}
        >
          <Image
            src="/banner2.jpg"
            alt="Banner Fundamentos"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/30" />

          {currentCampus.series && isRightActive ? (
            <div className="relative z-10 flex h-full flex-col justify-center p-6 max-md:p-4 sm:px-10 lg:px-14">
              <Badge className="mb-4 w-fit rounded-full px-4 py-1 text-[8px] font-bold tracking-[0.2em] uppercase">
                {currentCampus.series[0].day}
              </Badge>

              <div className="space-y-3">
                <h2 className="text-sm sm:text-2xl lg:text-3xl font-semibold leading-snug">
                  {currentCampus.series[1].title}
                </h2>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <span className="h-6 w-px bg-zinc-500" />
                  <p>A base da nossa fé.</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-6 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentCampus.services[0].times.join(' & ')}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-10 flex h-full flex-col justify-between px-6 py-6">
              <Badge className="w-fit rounded-full px-4 py-1 text-[8px] font-bold tracking-[0.2em] uppercase">
                {currentCampus.series[0].day}
              </Badge>

              <h2 className="mb-4 text-sm font-semibold leading-snug">
                {currentCampus.series[1].title}
              </h2>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SeriesCard;
