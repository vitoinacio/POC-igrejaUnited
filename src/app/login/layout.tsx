import Link from "next/link";

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-primary/10 px-6 py-4 flex items-center justify-between bg-white">
        <span className="text-xs uppercase tracking-[0.28em] font-bold text-primary">united</span>
        <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Voltar ao site
        </Link>
      </header>
      <main className="flex-1 grid place-items-center py-12 px-4">{children}</main>
      <footer className="border-t border-primary/10 px-6 py-4 text-center text-xs text-muted-foreground bg-white">
        © {new Date().getFullYear()} Igreja United
      </footer>
    </div>
  );
}