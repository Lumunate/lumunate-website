"use client";

import { useState, useEffect } from "react";
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
import StartupAnimation from "@/components/StartupAnimation";

export default function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!animationDone) return;

    // show content immediately
    setFadeIn(true);

    // give layout a tick, then refresh ScrollTrigger
    const t = setTimeout(() => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh();
      });
    }, 150);

    return () => clearTimeout(t);
  }, [animationDone]);

  return (
    <>
      {!animationDone && <StartupAnimation onComplete={() => setAnimationDone(true)} />}

      <Box
        sx={{
          opacity: fadeIn ? 1 : 0,
          // IMPORTANT: remove transform once visible (no transformed ancestor!)
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
