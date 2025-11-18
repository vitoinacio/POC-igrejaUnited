"use client";

import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

const HomeHeroSection = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll py-12">
      <div className="space-y-6">
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-united-muted">
          bem-vindo à
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-7">
          <span className="block text-united-primary-light font-semibold text-sm sm:text-xl">
            IGREJA
          </span>
          <span className="block font-body font-extrabold tracking-[0.35em] text-united-text mt-2">
            UNITED
          </span>
        </h1>
        <p className="text-sm sm:text-base text-united-muted max-w-xl">
          Uma casa para quem ama a presença de Deus, a mesa com amigos e uma fé
          que transforma a cidade. Descubra nossos cultos, séries e o que Deus
          está construindo em cada campus.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button className="rounded-full text-sm bg-united-primary cursor-pointer hover:scale-105 duration-300 transition">
            Encontrar um campus
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full bg-united-bg hover:bg-united-secondary cursor-pointer"
          >
            Próximas escolas
          </Button>
        </div>

        <div className="flex items-center gap-4 pt-4 text-xs text-united-muted">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-united-primary-light border border-white"></div>
            <div className="w-7 h-7 rounded-full bg-united-secondary border border-white"></div>
            <div className="w-7 h-7 rounded-full bg-united-primary border border-white"></div>
          </div>
          <p>Quinta & Domingo</p>
        </div>
      </div>

      <div className="relative">
        <AspectRatio ratio={15 / 11}>
          <Image
            src="/banner.jpg"
            alt="banner da igreja"
            fill
            className="h-full w-full rounded-3xl object-cover dark:brightness-[0.2] dark:grayscale"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </AspectRatio>
        <div className="absolute -bottom-6 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-soft border border-gray-100 text-xs">
          <p className="font-semibold text-united-text"></p>
          <p className="text-united-muted">
            Série
            <span
              className="font-semibold text-united-primary"
              id="infoSerie"
            ></span>
            às 10h & 18h
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
