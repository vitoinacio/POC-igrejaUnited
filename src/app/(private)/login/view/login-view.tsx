"use client";

import { useLoginViewModel } from "../viewmodels/use-login-viewmodel";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function LoginView() {
  const { onSubmit } = useLoginViewModel();
  return (
    <section className="page-shell grid min-h-[72vh] place-items-center py-12">
      <Card className="w-full max-w-md">
        <CardContent className="p-7 sm:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
            <LockKeyhole className="h-5 w-5" />
          </span>
          <p className="eyebrow mt-6">Área reservada</p>
          <h1 className="mt-2 font-serif text-4xl">Liderança United</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Acesso para líderes, pastores e apóstolos.
          </p>
          <form onSubmit={onSubmit} className="mt-7 grid gap-4">
            <label className="grid gap-2 text-sm">
              E-mail
              <input
                required
                type="email"
                className="h-11 rounded-xl border bg-white px-4 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="grid gap-2 text-sm">
              Senha
              <input
                required
                type="password"
                className="h-11 rounded-xl border bg-white px-4 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <Button className="mt-2 w-full">Entrar</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}