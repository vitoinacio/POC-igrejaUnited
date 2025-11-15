"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PublicNavItems } from "./models/PublicNavItems";
import { Menu } from "lucide-react";
import { Sheet, SheetDescription, SheetTitle } from "../ui/sheet";
import { SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const PublicHeader = () => {
  const pathname = usePathname();

  return (
    <header className="relative w-full bg-white flex items-center py-3 justify-between px-30 max-sm:px-10">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="Logo da igreja"
          width={40}
          height={40}
          className="rounded-full"
          sizes="100vw"
        />
        <div className="tracking-[0.18em]">
          <p className="text-united-muted text-xs">IGREJA</p>
          <p className="text-united-text font-semibold text-sm">UNITED</p>
        </div>
      </div>
      <nav aria-label="Primary navigation">
        <ul className="hidden min-[900px]:flex items-center space-x-6">
          {PublicNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li
                key={item.href}
                className={`font-medium ${
                  isActive &&
                  "relative after:border-2 after:border-b after:absolute after:bottom-0 after:left-0 after:scale-x-100 after:transition-transform after:duration-300 after:w-full py-1"
                }`}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="nav-link border-b-2 border-transparent pb-1 text-united-muted hover:text-gray-700 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menu de navegação"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="px-8 py-4">
            <SheetHeader className="flex flex-row items-center gap-3 p-0">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>

              <Image
                src="/logo.jpg"
                alt="Logo da igreja"
                width={40}
                height={40}
                className="rounded-full"
                sizes="100vw"
              />
              <div className="tracking-[0.18em]">
                <p className="text-united-muted text-xs">IGREJA</p>
                <p className="text-united-text font-semibold text-sm">UNITED</p>
              </div>
            </SheetHeader>

            <SheetDescription className="sr-only">
              Links de navegação principais do site da Igreja United.
            </SheetDescription>

            <nav aria-label="Primary navigation">
              <ul className="flex flex-col space-y-4">
                {PublicNavItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li
                      key={item.href}
                      className={`font-medium ${
                        isActive &&
                        "relative after:border-2 after:border-b after:absolute after:bottom-0 after:left-0 after:scale-x-100 after:transition-transform after:duration-300 after:w-full py-1"
                      }`}
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className="nav-link border-b-2 border-transparent pb-1 text-united-muted hover:text-gray-700 transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default PublicHeader;
