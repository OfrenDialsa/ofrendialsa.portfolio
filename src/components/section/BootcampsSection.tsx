"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import { BootcampsCard } from "../bootcamps-card";

export default function BootcampsSection() {
  return (
    <section id="bootcamps">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Bootcamps and Professional Training
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Always learning, always improving
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                During my time in university, I attended {DATA.bootcamps.length}
                + bootcamps and professional training programs to strengthen my
                technical and problem-solving skills.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {DATA.bootcamps.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <BootcampsCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
