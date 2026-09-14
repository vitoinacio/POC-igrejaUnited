"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSiteHeaderViewModel } from "../viewmodels/use-site-header-viewmodel";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { navigation, open, closeMenu, toggleMenu } = useSiteHeaderViewModel();

  return (
    <header className="absolute w-[86%] left-[7%] top-0 z-50 border-white/30 bg-white/30 backdrop-blur-sm rounded-b-3xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
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
                item.isActive &&
                  "bg-primary text-white hover:bg-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="grid h-10 w-10 place-items-center rounded-full border bg-white lg:hidden"
          onClick={toggleMenu}
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
              onClick={closeMenu}
              className={cn(
                "rounded-xl px-4 py-3 text-sm",
                item.isActive
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
