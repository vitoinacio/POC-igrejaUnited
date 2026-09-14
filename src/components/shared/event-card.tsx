import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  label: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  action?: ReactNode;
}
export function EventCard({
  label,
  title,
  description,
  image,
  href = "/eventos",
  action,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent>
        <p className="eyebrow tracking-[.14em]!">{label}</p>
        <h3 className="mt-2 font-serif text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          Ver detalhes <ArrowRight className="h-4 w-4" />
        </Link>
        {action && <div className="mt-4">{action}</div>}
      </CardContent>
    </Card>
  );
}
