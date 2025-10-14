import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { contact } from "./json/resume/contact";
import { work } from "./json/resume/work";
import { education } from "./json/resume/education";
import { projects } from "./json/resume/projects";
import { hackatons } from "./json/resume/hackaton";
import { skills } from "./json/resume/skills";

export const DATA = {
  name: "Ofren Dialsa",
  initials: "OD",
  url: "https://ofrendialsa.site",
  location: "Kerinci, Jambi, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Developer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  skills: skills,
  contact: contact,
  work: work,
  education: education,
  projects: projects,
  hackathons: hackatons,
} as const;
