"use client";

import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Critical Components
import IntroAnimation from "@/components/IntroAnimation";
import HeaderSection from "@/components/home/HeaderSection";

// Dynamic Imports
const LogosSection = dynamic(() => import("@/components/home/LogosSection"), {
  ssr: false,
});
const TestimonialSection = dynamic(
  () => import("@/components/home/TestimonialSection"),
  { ssr: false },
);
const WorkflowSection = dynamic(
  () => import("@/components/home/WorkflowSection"),
  { ssr: false },
);
const TrackRecord = dynamic(
  () => import("@/components/home/trackRecord/TrackRecord"),
  { ssr: false },
);
const OurApproach = dynamic(
  () => import("@/components/home/ourApproach/OurApproach"),
  { ssr: false },
);
const Works = dynamic(() => import("@/components/home/work/Works"), {
  ssr: false,
});
const ExploreSection = dynamic(
  () => import("@/components/home/explore/Explore"),
  { ssr: false },
);
const Ready = dynamic(() => import("@/components/home/ready/Ready"), {
  ssr: false,
});
const HowItWorks = dynamic(
  () => import("@/components/home/HowItWorks/HowItWorks"),
  { ssr: false },
);
const CEOSection = dynamic(
  () => import("@/components/home/CEOSection/CEOSection"),
  { ssr: false },
);

gsap.registerPlugin(ScrollToPlugin);

export default function HomeClient() {
  const [introDone, setIntroDone] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const approachRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsMounted(true);
      const finished = sessionStorage.getItem("introFinished") === "true";
      if (finished) {
        setIntroDone(true);
        document.body.classList.add("intro-done");
      }
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introFinished", "true");
    setIntroDone(true);
    document.body.classList.add("intro-done");
  };

  return (
    <>
      {isMounted && !introDone && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      <Box
        component="main"
        sx={{
          opacity: isMounted && introDone ? 1 : 0.01,
          visibility: "visible",
          transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <HeaderSection animate={introDone} />

        {isMounted && introDone && (
          <>
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
          </>
        )}
      </Box>
    </>
  );
}
