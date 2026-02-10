"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import WorkflowCard from "./WorkflowCard";
import {
  NavBarContainer,
  WorkflowSectionRoot,
  NavItem,
} from "./WorkflowSection.styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import PageContainer from "../common/PageContainer";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface WorkflowSectionProps {
  onComplete?: () => void;
}

const workflowSections = [
  {
    tag: "/UI & UX",
    title: "Creative Design & UI/UX",
    description: "Interfaces that convert User-centered designs that turn visitors into customers.",
    video: "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web & Mobile",
    title: "Web & Mobile Development",
    description: "Apps that scale Fast, secure, and built for growth across all platforms.",
    video: "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/AI & ML",
    title: "AI/ML Solutions",
    description: "Intelligence that delivers Custom AI tools that automate, optimize, and accelerate your business.",
    video: "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web3",
    title: "Web3 & Blockchain",
    description: "Future-ready technology Decentralized solutions for tomorrow's digital economy.",
    video: "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Enterprise",
    title: "Enterprise Solutions",
    description: "Systems that perform Robust platforms that streamline operations and boost productivity.",
    video: "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Digital",
    title: "Digital Transformation",
    description: "Growth that sticks Data-driven strategies that maximize reach and ROI.",
    video: "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
];

const STACK_OFFSET = 12;
const HEIGHTS = {
  MOBILE: 500,
  LAPTOP: 450,
  DESKTOP: 750,
  XL: 850
};

export default function WorkflowSection({ onComplete }: WorkflowSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(HEIGHTS.LAPTOP);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mainTriggerRef = useRef<ScrollTrigger | null>(null);

  const extraStackSpace = useMemo(
    () => STACK_OFFSET * (workflowSections.length - 1),
    []
  );

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width >= 1920) {
        setCardHeight(HEIGHTS.XL);
      } else if (width >= 1600) {
        setCardHeight(HEIGHTS.DESKTOP);
      } else if (width >= 1024) {
        setCardHeight(HEIGHTS.LAPTOP);
      } else {
        setCardHeight(HEIGHTS.MOBILE);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const scrollDistance = window.innerHeight * 3;

    mainTriggerRef.current = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const totalCards = workflowSections.length;
        let index = Math.floor(self.progress * totalCards);
        if (index >= totalCards) index = totalCards - 1;
        setActiveIndex(index);
      },
    });

    return () => mainTriggerRef.current?.kill();
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card, i) => {
      const isActive = i === activeIndex;

      gsap.to(card, {
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 20,
        duration: 0.8,
        ease: "power2.inOut",
        zIndex: isActive ? 50 : 10,
        pointerEvents: isActive ? "auto" : "none",
      });
    });

    if (activeIndex === workflowSections.length - 1) onComplete?.();
  }, [activeIndex]);

  const scrollToCard = (index: number) => {
    if (!mainTriggerRef.current) return;
    const trigger = mainTriggerRef.current;
    const targetScroll = trigger.start + ((trigger.end - trigger.start) * (index / workflowSections.length)) + 10;
    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  return (
    <WorkflowSectionRoot ref={sectionRef} sx={{ minHeight: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <NavBarContainer>
        {workflowSections.map((section, i) => (
          <NavItem
            key={section.title}
            className={activeIndex === i ? "active" : ""}
            onClick={() => scrollToCard(i)}
          >
            {section.title}
          </NavItem>
        ))}
      </NavBarContainer>

      <PageContainer>
        <Box sx={{ width: "100%", px: { xs: 2, md: 4 } }}>
          <Box
            style={{
              position: "relative",
              width: "100%",
              margin: "40px auto 0",
              height: cardHeight + extraStackSpace,
              transition: "height 0.3s ease-out",
            }}
          >
            {workflowSections.map((section, i) => (
              <div
                key={section.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                style={{
                  position: "absolute",
                  inset: 0,
                  height: cardHeight,
                  width: "100%",
                  willChange: "transform, opacity",
                }}
              >
                <WorkflowCard activeSection={section} />
              </div>
            ))}
          </Box>
        </Box>
      </PageContainer>
    </WorkflowSectionRoot>
  );
}