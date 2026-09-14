import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScheduleStrip } from "../components/schedule-strip";

import type { PageHeroProps } from "../types/page-hero.types";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  primary,
  secondary,
}: PageHeroProps) {
  return (
    <section className="">
      <div className="relative min-h-125 rounded-4xl bg-primary px-9 lg:min-h-140">
        <Image
          src={image}
          alt="Comunidade Igreja United"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1152px"
        />
        <div className="image-overlay absolute inset-0" />
        <div className="relative z-10 flex min-h-100 max-w-xl flex-col justify-end p-6 pb-2 text-white lg:min-h-115 lg:px-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
            {eyebrow}
          </p>
          <h1 className="font-serif text-5xl leading-[.92] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/85 sm:text-base">
            {description}
          </p>
          {(primary || secondary) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primary && (
                <Button asChild size="lg">
                  <Link href={primary.href}>
                    {primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondary && (
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 px-[6%] left-0 right-0 z-10 h-20">
          <ScheduleStrip />
        </div>
      </div>
    </section>
  );
}
