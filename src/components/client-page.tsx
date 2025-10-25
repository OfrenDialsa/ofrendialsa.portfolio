"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });
const RotatingText = dynamic(() => import("@/components/RotatingText"), { ssr: false });
const BlurFade = dynamic(() => import("@/components/magicui/blur-fade"), { ssr: false });
const BlurFadeText = dynamic(() => import("@/components/magicui/blur-fade-text"), { ssr: false });

export { Lanyard, RotatingText, BlurFade, BlurFadeText };
