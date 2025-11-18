"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import SeriesCampusSelector from "../components/SeriesCampusSelector";
import SeriesCarrosel from "../components/SeriesCarrosel";

const HomeSeriesSection = () => {
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
            <SeriesCampusSelector />
            <SeriesCarrosel />
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  );
};

export default HomeSeriesSection;
