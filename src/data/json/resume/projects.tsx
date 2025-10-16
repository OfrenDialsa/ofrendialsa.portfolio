import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "NeroBot",
    href: "https://github.com/OfrenDialsa/NeroBot",
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
        href: "https://github.com/OfrenDialsa/NeroBot",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image:
      "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/photo/Untitled%20design%20%283%29.png",
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
      }
    ],
    image: "",
    video: "https://qfnp44np2u2fkofa.public.blob.vercel-storage.com/Gentamin",
  },
  {
    title: "llm.report",
    href: "https://llm.report",
    dates: "April 2023 - September 2023",
    active: true,
    description:
      "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://llm.report",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/dillionverma/llm.report",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "Automatic Chat",
    href: "https://automatic.chat",
    dates: "April 2023 - March 2024",
    active: true,
    description:
      "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Magic UI",
      "Stripe",
      "Cloudflare Workers",
    ],
    links: [
      {
        type: "Website",
        href: "https://automatic.chat",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
];
