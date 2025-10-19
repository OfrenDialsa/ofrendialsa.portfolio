import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "NeroBot",
    href: "https://github.com/OfrenDialsa/NeroBot",
    dates: "Jan 2025 - Sekarang",
    active: true,
    description:
      "Aplikasi Android yang menghadirkan pengalaman chat AI yang seru dan interaktif menggunakan model Gemini terbaru, serta memberikan pembaruan berita terkini melalui News API.",
    technologies: [
      "Jetpack Compose",
      "Kotlin",
      "Koin",
      "Room",
      "DataStore",
      "Gemini API",
    ],
    links: [
      {
        type: "Kode Sumber",
        href: "https://github.com/OfrenDialsa/NeroBot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image:
      "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/photo/Nerobot",
  },
  {
    title: "Gentamin",
    href: "https://gentamin.vercel.app/",
    dates: "Juli 2025 - Sekarang",
    active: true,
    description:
      "Platform buku multi-format (PDF, audio, video) dengan antarmuka yang bersih, interaktif, dan dilengkapi fitur manajemen konten yang kuat.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Supabase",
      "TailwindCSS",
      "Shadcn UI",
    ],
    links: [
      {
        type: "Website",
        href: "https://gentamin.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/Gentamin",
  },
];
