import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { getSiteFooterViewModel } from "../viewmodels/site-footer.viewmodel";

export function SiteFooter() {
  const { navigation } = getSiteFooterViewModel();
  return (
    <footer className="mt-8 bg-secondary/70">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">
              untd.
            </span>
            <span className="text-xs uppercase tracking-[0.28em]">
              Igreja
              <br />
              <strong>United</strong>
            </span>
          </div>
          <p className="max-w-xs text-xs uppercase leading-5 tracking-[0.08em] text-primary/70">
            Alcançar, construir e empoderar vidas através da palavra
            transformadora de Jesus Cristo.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Navegação</p>
          <div className="grid gap-2 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Informações</p>
          <p className="text-sm leading-6">
            <strong>Sede — Andaraí</strong>
            <br />
            Rua Pontes Corrêa, 39
            <br />
            Rio de Janeiro — RJ
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Domingo 18h · Quarta 20h · Quinta 20h
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Nos acompanhe</p>
          <div className="flex gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
              Youtube
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
              Instagram
            </span>
          </div>
          <Link
            href="/login"
            className="mt-6 inline-flex items-center gap-2 text-xs text-primary/60 hover:text-primary"
          >
            <LockKeyhole className="h-4 w-4" />
            Área de líderes
          </Link>
        </div>
      </div>
      <div className="border-t border-primary/10 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Igreja United — Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
