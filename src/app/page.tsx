"use client";

import { useState, useEffect } from "react";
import { Box } from "@mui/material";

// Sections
import HeaderSection from "@/components/home/HeaderSection";
import LogosSection from "@/components/home/LogosSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import TrackRecord from "@/components/home/trackRecord/TrackRecord";
import OurApproach from "@/components/home/ourApproach/OurApproach";
import Works from "@/components/home/work/Works";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";

// Animations
import PreloadAnimation from "@/components/PreloadAnimation";
import StartupAnimation from "@/components/StartupAnimation";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";

export default function Home() {
  const [preloadDone, setPreloadDone] = useState(false);
  const [startupDone, setStartupDone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // After Startup finishes, fade in content + refresh ScrollTrigger
  useEffect(() => {
    if (!startupDone) return;

    setFadeIn(true);

    const t = setTimeout(() => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    }, 200);

    return () => clearTimeout(t);
  }, [startupDone]);

  return (
    <>
      {/* 1: Preloader animated white circles */}
      {!preloadDone && (
        <PreloadAnimation onComplete={() => setPreloadDone(true)} />
      )}

      {/* 2: Startup animation (3 vertical strips) */}
      {preloadDone && !startupDone && (
        <StartupAnimation onComplete={() => setStartupDone(true)} />
      )}

      {/* 3: Main website content (fades in after startup) */}
      <Box
        sx={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "none" : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <HeaderSection />
        <LogosSection />
        <TestimonialSection />
        <WorkflowSection />
        <TrackRecord />
        <OurApproach />
        <Works />
        <ExploreSection />
        <HowItWorks />
        <Ready
          title="Ready to Build What's Next?"
          description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
          linkText="Let's Connect"
          linkHref="/contact"
        />
      </Box>
    </>
  );
}
