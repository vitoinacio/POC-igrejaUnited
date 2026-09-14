import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import type { ImageCardProps } from "../types/image-card.types";
export function ImageCard({ title, description, image, href }: ImageCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
          <Link
            href={href}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
