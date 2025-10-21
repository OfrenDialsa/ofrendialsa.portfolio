import { AwardIcon, Code2Icon, CodeIcon, FolderIcon, HomeIcon } from "lucide-react";
import { contact } from "./json/resume/en/contact";
import { work } from "./json/resume/en/work";
import { education } from "./json/resume/en/education";
import { projects } from "./json/resume/en/projects";
import { bootcamps } from "./json/resume/en/bootcamps";
import { skills } from "./json/resume/en/skills";
import { certificates } from "./json/resume/en/certificates";

export const DATA = {
  name: "Ofren Dialsa",
  initials: "OD",
  url: "https://codefren.site",
  location: "Kerinci, Jambi, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jambi",
  description:
    "an Information Systems undergraduate at Jambi University with a strong interest in technology and innovation.",
  summary:
    "I have experience in software development, including mobile, web, and backend projects, gained through internship and programs like [Bangkit Academy](#bootcamps) and [AWS Backend Academy 2025](#bootcamps). I enjoy learning new technologies, solving real-world problems, and collaborating to build impactful digital solutions.",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
    { href: "#bootcamps", icon: Code2Icon, label: "Bootcamps" },
    { href: "#certificates", icon: AwardIcon, label: "Certificates" },
  ],

  skills: skills,
  contact: contact,
  work: work,
  education: education,
  projects: projects,
  bootcamps: bootcamps,
  certificates: certificates
} as const;