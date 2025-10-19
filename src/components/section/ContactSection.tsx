"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import Link from "next/link";
import { Github, Linkedin, Instagram, PointerIcon, ArrowUpRight } from "lucide-react";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>

            <h2 className="text-3xl font-bold mb-5 tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>

            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to contact me directly for{" "}
              <span className="font-semibold text-foreground">
                work or freelance
              </span>{" "}
              at{" "}
              <Link
                href="mailto:ofrendialsa.work@gmail.com"
                className="text-black hover:underline"
              >
                ofrendialsa.work@gmail.com
              </Link>
              .
            </p>
          </div>

          <p className="text-muted-foreground mt-6 text-2sm">
              or you can dm me directly at:
            </p>

          {/* Social badges */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link
              href="https://github.com/ofrendialsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium hover:bg-muted transition"
            >
              <GitHubLogoIcon className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-4 h-4"/>
            </Link>

            <Link
              href="https://linkedin.com/in/ofrendialsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium hover:bg-muted transition"
            >
              <LinkedInLogoIcon className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-4 h-4"/>
            </Link>

            <Link
              href="https://instagram.com/ofrendialsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium hover:bg-muted transition"
            >
              <InstagramLogoIcon className="w-4 h-4" />
              Instagram
              <ArrowUpRight className="w-4 h-4"/>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
