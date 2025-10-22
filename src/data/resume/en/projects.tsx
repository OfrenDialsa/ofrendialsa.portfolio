import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "NeroBot",
    href: "https://www.github.com/OfrenDialsa/NeroBot",
    dates: "Jan 2025 - Present",
    active: true,
    description:
      "This Android app offers a fun and lively AI chat experience using Latest Gemini model, while also keeping users updated with the latest news using News API",
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
        type: "Source Code",
        href: "https://www.github.com/OfrenDialsa/NeroBot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image:
      "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/photo/Nerobot",
  },
  {
    title: "Gentamin",
    href: "https://gentamin.vercel.app/",
    dates: "July 2025 - Present",
    active: true,
    description:
      "Multi-format book platform (PDF, audio, video) with clean, interactive UI and powerful content management features.",
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
