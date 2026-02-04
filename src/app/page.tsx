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

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [preloadDone, setPreloadDone] = useState(false);
  const [startupDone, setStartupDone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [startApproach, setStartApproach] = useState(false);

  // Section refs
  const logosRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  const approachDoneRef = useRef(false);

  // Lock scroll initially
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const wait = (sec: number) =>
    new Promise((r) => setTimeout(r, sec * 1000));

  const scrollTo = (target: HTMLElement | null, duration = 1.4) =>
    new Promise<void>((resolve) => {
      if (!target) return resolve();
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 0 },
        duration,
        ease: "power2.inOut",
        onComplete: resolve,
      });
    });

  // Startup sequence
  useEffect(() => {
    if (!startupDone) return;

    const run = async () => {
      document.body.style.overflow = "hidden";

      await wait(4); // hero

      await scrollTo(logosRef.current);
      await wait(3);

      await scrollTo(testimonialRef.current);
      await wait(4);

      await scrollTo(workflowRef.current);
      await wait(6 * 4); // workflow cards

      await scrollTo(trackRef.current);
      await wait(3);

      // 🔥 Our Approach (controlled start)
      await scrollTo(approachRef.current);
      setStartApproach(true);

      // ⏳ wait until OurApproach REALLY finishes
      await new Promise<void>((resolve) => {
        const i = setInterval(() => {
          if (approachDoneRef.current) {
            clearInterval(i);
            resolve();
          }
        }, 100);
      });

      // 🔥 Now scroll to Works
      await scrollTo(worksRef.current);

      document.body.style.overflow = "";
    };

    run();
  }, [startupDone]);

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
      {!preloadDone && (
        <PreloadAnimation onComplete={() => setPreloadDone(true)} />
      )}

      {preloadDone && !startupDone && (
        <StartupAnimation onComplete={() => setStartupDone(true)} />
      )}

      <Box
        sx={{
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? "none" : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <HeaderSection />

        <Box ref={logosRef}>
          <LogosSection />
        </Box>

        {/* <Box ref={testimonialRef}> */}
        <TestimonialSection />
        {/* </Box> */}

        <Box ref={workflowRef}>
          <WorkflowSection
            onComplete={async () => {
              // Wait a tiny moment for last card to settle
              await wait(0.3);
              await scrollTo(trackRef.current);
            }}
          />
        </Box>


        <Box ref={trackRef}>
          <TrackRecord />
        </Box>

        {/* ✅ Controlled animation */}
        <Box ref={approachRef}>
          <OurApproach
            start={startApproach}
            onComplete={() => {
              approachDoneRef.current = true;
            }}
          />
        </Box>

        <Box ref={worksRef}>
          <Works />
        </Box>

        <HowItWorks />
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
