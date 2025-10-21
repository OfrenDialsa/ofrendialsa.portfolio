"use client";

import BlurFadeText from "@/components/magicui/blur-fade-text";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/data";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import Lanyard from "../Lanyard";
import RotatingText from "../RotatingText";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-visible">
      <div className="mx-auto w-full max-w-2xl space-y-8 relative">
        <div className="gap-2 flex justify-between items-center relative">
          <div className="flex-col flex flex-1 space-y-3 relative z-10">
            <div className="flex items-center flex-wrap gap-2 leading-none">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl sm:text-5xl xl:text-5xl font-bold tracking-tighter"
                yOffset={8}
                text={`Hi, I'm `}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <RotatingText
                  texts={["Ofren", "Dialsa"]}
                  mainClassName={`
                    inline-flex items-center justify-center
                    px-3 sm:px-3 md:px-4 
                    bg-black text-white 
                    dark:bg-white dark:text-black
                    overflow-hidden py-0.5 sm:py-1 md:py-1.5 
                    rounded-lg 
                    text-4xl sm:text-5xl xl:text-5xl font-bold 
                    leading-none
                    transition-colors duration-300 translate-y-2
                  `}
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl sm:text-5xl xl:text-5xl font-bold tracking-tighter"
                yOffset={8}
                text={`👋`}
              />
            </div>

            {/* Deskripsi */}
            <BlurFadeText
              className="max-w-[600px] md:text-lg"
              delay={BLUR_FADE_DELAY + 0.2}
              text={DATA.description}
            />
          </div>

          {/* Lanyard di kanan */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div
              className="flex justify-center items-center bg-transparent size-32 md:size-40 -translate-y-6 md:-translate-y-8 relative z-0"
              style={{
                pointerEvents: "auto",
                isolation: "isolate",
              }}
            >
              <Lanyard position={[0, 0, 32]} gravity={[0, -40, 0]} />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
