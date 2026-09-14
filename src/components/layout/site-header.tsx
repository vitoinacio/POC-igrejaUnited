"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute w-[86%] left-[7%] top-0 z-50 border-white/30 bg-white/30 backdrop-blur-sm rounded-b-3xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">
            untd.
          </span>
          <span className="text-xs uppercase tracking-[0.28em]">
            Igreja
            <br />
            <strong className="font-semibold">United</strong>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition hover:bg-secondary",
                pathname === item.href &&
                  "bg-primary text-white hover:bg-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="page-shell grid gap-1 pb-4 lg:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-sm",
                pathname === item.href
                  ? "bg-primary text-white"
                  : "hover:bg-secondary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
