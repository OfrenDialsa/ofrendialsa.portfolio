import { contact } from "./en/contact";
import { work } from "./en/work";
import { education } from "./en/education";
import { projects } from "./en/projects";
import { bootcamps } from "./en/bootcamps";
import { skills } from "./en/skills";
import { certificates } from "./en/certificates";

export const resumeData = {
  skills,
  contact,
  work,
  education,
  projects,
  bootcamps,
  certificates,
} as const;
