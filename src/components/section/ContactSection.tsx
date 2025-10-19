"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import { BLUR_FADE_DELAY } from "@/lib/utils";
import { SocialButton } from "../ui/social-button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-12 md:py-20 bg-background"
    >
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              Get in Touch
            </h2>

            <p className="mx-auto max-w-[600px] text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              Feel free to contact me directly for{" "}
              <span className="font-semibold text-foreground">
                work or freelance
              </span>{" "}
              at{" "}
              <Link
                href="mailto:ofrendialsa.work@gmail.com"
                className="text-black dark:text-white underline underline-offset-4 hover:text-primary transition-colors"
              >
                ofrendialsa.work@gmail.com
              </Link>
              .
            </p>
          </div>

          <p className="text-muted-foreground mt-8 text-sm sm:text-base">
            or you can DM me directly at:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full px-2">
            <SocialButton
              href="https://github.com/ofrendialsa"
              icon={<GitHubLogoIcon className="w-4 h-4" />}
              label="GitHub"
            />

            <SocialButton
              href="https://linkedin.com/in/ofrendialsa"
              icon={<LinkedInLogoIcon className="w-4 h-4" />}
              label="LinkedIn"
            />

            <SocialButton
              href="https://instagram.com/ofrendialsa"
              icon={<InstagramLogoIcon className="w-4 h-4" />}
              label="Instagram"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
