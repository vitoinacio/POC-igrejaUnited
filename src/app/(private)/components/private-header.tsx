"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PrivateHeaderProps {
  onMenuClick: () => void;
}

export function PrivateHeader({ onMenuClick }: PrivateHeaderProps) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/95 backdrop-blur-xl">
      <div className="flex px-5 h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5 text-primary" />
          </button>
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white font-bold text-sm">
              untd.
            </span>
            <span className="hidden text-xs uppercase tracking-[0.28em] sm:block">
              Igreja<br />
              <strong className="font-semibold">United</strong>
            </span>
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 rounded-lg hover:bg-primary/5 transition-colors"
            aria-label="Perfil do usuário"
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="hidden sm:block text-sm font-medium">Líder</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>

          {showProfile && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowProfile(false)} />
              <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-white shadow-lg py-2 z-20">
                <div className="px-4 py-3 border-b border-primary/10">
                  <p className="text-sm font-medium">Líder United</p>
                  <p className="text-xs text-muted-foreground">lideranca@united.com</p>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-primary/5 transition-colors"
                  onClick={() => setShowProfile(false)}
                >
                  <Settings className="h-4 w-4" />
                  Configurações
                </Link>
                <Link
                  href="/login"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                  onClick={() => setShowProfile(false)}
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}