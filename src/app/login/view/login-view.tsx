"use client";

import { useLoginViewModel } from "../viewmodels/use-login-viewmodel";
import { LockKeyhole, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export function LoginView() {
  const { onSubmit } = useLoginViewModel();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="w-full max-w-md shadow-soft">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-primary">
          <LockKeyhole className="h-7 w-7 text-white" />
        </div>
        <CardTitle className="font-serif text-3xl">Liderança United</CardTitle>
        <CardDescription className="mt-2 text-base">
          Acesso para líderes, pastores e apóstolos.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="pl-10 h-11 rounded-xl border bg-white focus:ring-2 focus:ring-primary/20"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="pl-10 pr-12 h-11 rounded-xl border bg-white focus:ring-2 focus:ring-primary/20"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="rounded border-primary text-primary focus:ring-primary/20" />
              <span className="text-muted-foreground">Lembrar-me</span>
            </label>
            <a href="#" className="text-sm text-primary hover:underline">Esqueci a senha</a>
          </div>
          <Button type="submit" className="w-full h-12 text-base" size="lg">
            Entrar
          </Button>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-primary/10" />
          </div>
          <span className="relative flex justify-center text-xs uppercase tracking-[0.24em] text-muted-foreground bg-white/80 px-4">
            Área restrita
          </span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          <Link href="/" className="flex items-center justify-center gap-1 text-primary hover:underline font-medium">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}