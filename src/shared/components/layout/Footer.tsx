"use client";
import Image from "next/image";
import Link from "next/link";
import { PublicNavItems } from "./models/PublicNavItems";
import { Instagram, Youtube } from "lucide-react";
import { ElementType } from "react";
import { Spotify } from "../ui/icons/Spotify";

export interface SocialLink {
  icon: ElementType;
  href: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/@igrejaunited",
    ariaLabel: "Abrir canal da Igreja United no YouTube",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/igrejaunited",
    ariaLabel: "Abrir perfil da Igreja United no Instagram",
  },
  {
    icon: Spotify,
    href: "https://open.spotify.com/show/3yVZw8Vsp5GRjLWj1ycKiI",
    ariaLabel: "Abrir canal da Igreja United no Spotify",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 bg-united-secondary border-t border-gray-200">
      <div className="px-30 max-sm:px-10 py-10 max-w-6xl mx-auto sm:px-6 lg:px-8  grid md:grid-cols-4 gap-8 text-xs">
        <div className="flex flex-col gap-3">
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
          <p className="text-united-muted">ALCANÇAR | CONSTRUIR | EMPODERAR</p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-united-muted mb-3">
            Navegação
          </h4>
          <ul className="space-y-1">
            {PublicNavItems.map((item) => {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-left text-united-text hover:text-united-primary text-xs transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-united-muted mb-3">
            Informações
          </h4>
          <p className="text-united-muted flex flex-col">
            <span className="font-semibold text-united-text">Sede Tijuca</span>
            <a
              href="https://maps.app.goo.gl/GYq2BSoLfGshWdUSA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização da igreja no Google Maps"
              className="flex flex-col"
            >
              R. Barão de Mesquita, 736 - Andaraí
              <span>Rio de Janeiro - RJ</span>
            </a>
          </p>
          <p className="text-united-muted mt-3">
            <span className="font-semibold text-united-text">Horários</span>
            <br />
            Quinta 20h
            <br />
            Domingo 10h & 18h
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-united-muted mb-3">
            Redes sociais
          </h4>
          <div className="flex items-center gap-3">
            {socialLinks &&
              socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={link.ariaLabel}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-united-primary hover:border-united-primary hover:text-white transition-all duration-300"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-united-bg/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-united-muted">
          <span>
            © <span id="current-year"></span> Igreja United – Todos os direitos
            reservados.
          </span>

          <div className="flex items-center gap-3 max-sm:flex-col">
            <span>
              Design & SPA feitos por{" "}
              <a
                href="https://github.com/vitoinacio"
                className="text-united-primary font-bold hover:text-united-text"
              >
                Victor Hugo
              </a>{" "}
              com ❤️ para fins de protótipo.
            </span>
            <span className="hidden sm:inline">|</span>
            <a
              href="../../../../login_area_interna.html"
              className="hover:text-united-primary transition-colors duration-300"
            >
              Login (Líderes)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
