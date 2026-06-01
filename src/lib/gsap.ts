"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Clean up function for GSAP contexts
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger, useGSAP };
