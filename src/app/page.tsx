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
import CEOSection from "@/components/home/CEOSection/CEOSection";
import IntroAnimation from "@/components/IntroAnimation";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const approachRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("introFinished");
    if (hasSeenIntro === "true") {
      setIntroDone(true);
      const navbar = document.querySelector(".main-navbar") as HTMLElement;
      if (navbar) {
        navbar.style.display = "flex";
        navbar.style.opacity = "1";
      }
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introFinished", "true");
    setIntroDone(true);
  };

  return (
    <>
      {/* The unified component handles the handoff internally to prevent black gaps */}
      {!introDone && <IntroAnimation onComplete={handleIntroComplete} />}

      <Box
        sx={{
          opacity: introDone ? 1 : 0,
          visibility: introDone ? "visible" : "hidden",
          transition: "opacity 0.8s ease",
        }}
      >
        <HeaderSection animate={introDone} />
        <LogosSection />
        <TestimonialSection />
        <WorkflowSection />
        <TrackRecord />

        <Box ref={approachRef}>
          <OurApproach />
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
      </Box>
    </>
  );
}