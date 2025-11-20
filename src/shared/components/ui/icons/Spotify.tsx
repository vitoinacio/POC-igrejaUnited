import type { LucideProps } from "lucide-react";

export const Spotify = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >

    <circle cx="12" cy="12" r="9" />

    <path d="M9 15a4.5 4.5 0 0 1 6 0" />
    <path d="M7.75 12.75a6.5 6.5 0 0 1 8.5 0" />
    <path d="M6.5 10.5a8.5 8.5 0 0 1 11 0" />
  </svg>
);
