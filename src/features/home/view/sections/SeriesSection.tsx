"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import SeriesCampusSelector from "../components/SeriesCampusSelector";
import SeriesCard from "../components/SeriesCard";

const SeriesSection = () => {
  return (
    <section>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xs tracking-[0.27em] uppercase text-united-muted">
            séries da casa
          </CardTitle>

          <div className="flex flex-col gap-2 mt-2">
            <h2 className="font-display text-xl sm:text-2xl text-united-text font-medium max-[350px]:text-sm">
              Domingos & Quintas
            </h2>

            <CardDescription>
              <div className="pt-2">
                <SeriesCampusSelector />
              </div>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="">
          <SeriesCard />
        </CardContent>
      </Card>
    </section>
  );
};

export default SeriesSection;
