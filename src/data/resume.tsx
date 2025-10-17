import { HomeIcon } from "lucide-react";
import { contact } from "./json/resume/contact";
import { work } from "./json/resume/work";
import { education } from "./json/resume/education";
import { projects } from "./json/resume/projects";
import { bootcamps } from "./json/resume/bootcamps";
import { skills } from "./json/resume/skills";
import { certificates } from "./json/resume/certificates";

export const DATA = {
  name: "Ofren Dialsa",
  initials: "OD",
  url: "https://ofrendialsa.site",
  location: "Kerinci, Jambi, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "an Information Systems undergraduate at Jambi University with a strong interest in technology and innovation.",
  summary:
    "I have experience in software development, including mobile, web, and backend projects, gained through programs like Bangkit Academy and AWS Backend Academy 2025. I enjoy learning new technologies, solving real-world problems, and collaborating to build impactful digital solutions.",
  avatarUrl: "/me.webp",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  skills: skills,
  contact: contact,
  work: work,
  education: education,
  projects: projects,
  bootcamps: bootcamps,
  certificates: certificates
} as const;
