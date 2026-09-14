export interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}
