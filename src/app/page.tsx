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
    if (!preloadDone || !startupDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [preloadDone, startupDone]);

  useEffect(() => {
    if (!approachRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartApproach(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(approachRef.current);

    return () => observer.disconnect();
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
  );
}
