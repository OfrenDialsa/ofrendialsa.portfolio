"use client";

import dynamic from "next/dynamic";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false });
const RotatingText = dynamic(() => import("@/components/RotatingText"), { ssr: false });

export { Lanyard, RotatingText };