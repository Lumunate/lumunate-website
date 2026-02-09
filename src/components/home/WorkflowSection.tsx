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

const STACK_OFFSET = 18;
const DEFAULT_CARD_HEIGHT = 460;
const XL_CARD_HEIGHT = 560;

export default function WorkflowSection({ onComplete }: WorkflowSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(DEFAULT_CARD_HEIGHT);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mainTriggerRef = useRef<ScrollTrigger | null>(null);

  const extraStackSpace = useMemo(
    () => STACK_OFFSET * (workflowSections.length - 1),
    []
  );

  useEffect(() => {
    const updateHeight = () => {
      setCardHeight(window.innerWidth >= 1920 ? XL_CARD_HEIGHT : DEFAULT_CARD_HEIGHT);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const scrollDistance = window.innerHeight * 4;

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

    return () => {
      mainTriggerRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card, i) => {
      const isActive = i === activeIndex;
      const isPast = i < activeIndex;

      gsap.to(card, {
        y: i * STACK_OFFSET - (isPast ? 30 : 0),
        opacity: isActive ? 1 : isPast ? 0.3 : 0,
        scale: isActive ? 1 : 0.96,
        duration: 0.6,
        ease: "expo.out",
        zIndex: 10 + i,
        pointerEvents: isActive ? "auto" : "none",
        filter: isPast ? "blur(4px)" : "blur(0px)",
      });
    });

    if (activeIndex === workflowSections.length - 1) {
      onComplete?.();
    }
  }, [activeIndex]);

  const scrollToCard = (index: number) => {
    if (!mainTriggerRef.current) return;

    const trigger = mainTriggerRef.current;
    const start = trigger.start;
    const end = trigger.end;
    const total = end - start;

    const targetScroll = start + (total * (index / workflowSections.length)) + 5;

    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: 0.8,
      ease: "power3.inOut",
    });
  };

  return (
    <WorkflowSectionRoot ref={sectionRef}>
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
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            margin: "104px auto 0",
            height: cardHeight + extraStackSpace,
          }}
        >
          {workflowSections.map((section, i) => (
            <div
              key={section.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              style={{
                position: "absolute",
                inset: 0,
                height: cardHeight,
                opacity: 0,
                transform: `translateY(${i * STACK_OFFSET}px)`,
                willChange: "transform, opacity",
              }}
            >
              <WorkflowCard activeSection={section} />
            </div>
          ))}
        </div>
      </PageContainer>
    </WorkflowSectionRoot>
  );
}