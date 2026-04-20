"use client";

import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

import HeaderSection from "@/components/home/HeaderSection";
import LogosSection from "@/components/home/LogosSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import TrackRecord from "@/components/home/trackRecord/TrackRecord";
import OurApproach from "@/components/home/ourApproach/OurApproach";
import Works from "@/components/home/work/Works";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";

import PreloadAnimation from "@/components/PreloadAnimation";
import StartupAnimation from "@/components/StartupAnimation";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import CEOSection from "@/components/home/CEOSection/CEOSection";

gsap.registerPlugin(ScrollToPlugin);

export default function Home({
}: {
  navRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [preloadDone, setPreloadDone] = useState(false);
  const [startupDone, setStartupDone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Section refs - Only keeping approachRef as it was the only one used by the observer logic
  const approachRef = useRef<HTMLDivElement>(null);

  // Lock scroll initially
  useEffect(() => {
    if (!preloadDone || !startupDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [preloadDone, startupDone]);

  // Fade in content
  useEffect(() => {
    if (!startupDone) return;

    setFadeIn(true);
    setTimeout(() => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) =>
        ScrollTrigger.refresh()
      );
    }, 200);
  }, [startupDone]);

  return (
    <>
      {!preloadDone && <PreloadAnimation onComplete={() => setPreloadDone(true)} />}
      {preloadDone && !startupDone && <StartupAnimation onComplete={() => setStartupDone(true)} />}

      <Box
        sx={{
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 1s ease",
        }}
      >
        <HeaderSection animate={startupDone} />
        <LogosSection />
        <TestimonialSection />
        <WorkflowSection />
        <TrackRecord />
        {/* Added ref back here in case you want to use it for ScrollTrigger later */}
        <Box ref={approachRef}>
          <OurApproach />
        </Box>
      </Box>

      <Works />
      <HowItWorks />
      <CEOSection />
      <ExploreSection />

      <Ready
        title="Ready to Build What's Next?"
        description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions."
        linkText="Let's Connect"
        linkHref="/contact"
      />
    </>
  );
}