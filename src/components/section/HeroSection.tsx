"use client";

import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import Lanyard from "../Lanyard";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between items-center">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>

          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex justify-center items-center size-32 md:size-40 -translate-y-6 md:-translate-y-8">
              <Lanyard />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
