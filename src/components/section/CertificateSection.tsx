"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { CertificateCard } from "@/components/certificate-card";
import Link from "next/link";

export default function CertiSection() {
  return (
    <section id="certificates">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Certificates
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Achievements & Learning Journey
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are some of the certifications I’ve earned while improving
                my skills and building real-world projects.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[800px] mx-auto">
          {DATA.certificates.map((cert, idx) => (
            <BlurFade key={cert.title} delay={BLUR_FADE_DELAY * 12 + idx * 0.05}>
              <CertificateCard {...cert} />
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="text-center text-muted-foreground text-sm sm:text-base">
            I have more than{" "}
            <span className="font-semibold text-foreground">20+</span> certificates —{" "}
            <Link
              href="https://www.linkedin.com/in/ofren-dialsa/details/certifications/"
              target="_blank"
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              view them all on my LinkedIn
            </Link>
            .
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
