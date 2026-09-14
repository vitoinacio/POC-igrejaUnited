"use client";

import { CalendarDays, MapPin, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useUGroupsViewModel } from "../viewmodels/use-ugroups-viewmodel";
import { cn } from "@/lib/utils";

export function UGroupExplorer() {
  const { type, setType, filtered, ugroupCategories } = useUGroupsViewModel();
  return (
    <div id="encontrar">
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setType("Todos")}
          className={cn("whitespace-nowrap rounded-full border bg-white px-4 py-2 text-sm", type === "Todos" && "bg-primary text-white")}
        >
          Todos
        </button>
        {ugroupCategories.map((category) => (
          <button
            key={category}
            onClick={() => setType(category)}
            className={cn("whitespace-nowrap rounded-full border bg-white px-4 py-2 text-sm", type === category && "bg-primary text-white")}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((group) => (
          <Card key={group.name}>
            <CardContent>
              <Badge>{group.type}</Badge>
              <h3 className="mt-4 font-serif text-2xl">{group.name}</h3>
              <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
                <p className="flex gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {group.region}
                </p>
                <p className="flex gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {group.day}, {group.time}
                </p>
                <p className="flex gap-2">
                  <UsersRound className="h-4 w-4 text-primary" />
                  {group.type}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}