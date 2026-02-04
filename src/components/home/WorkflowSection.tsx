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
import PageContainer from "../common/PageContainer";

gsap.registerPlugin(ScrollTrigger);

interface WorkflowSectionProps {
  onComplete?: () => void; // callback after last card
}

const workflowSections = [
  {
    tag: "/UI & UX",
    title: "Creative Design & UI/UX",
    description:
      "Interfaces that convert User-centered designs that turn visitors into customers.",
    video:
      "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web & Mobile",
    title: "Web & Mobile Development",
    description: "Apps that scale Fast, secure, and built for growth across all platforms.",
    video:
      "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/AI & ML",
    title: "AI/ML Solutions",
    description:
      "Intelligence that delivers Custom AI tools that automate, optimize, and accelerate your business.",
    video:
      "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web3",
    title: "Web3 & Blockchain",
    description:
      "Future-ready technology Decentralized solutions for tomorrow's digital economy.",
    video:
      "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Enterprise",
    title: "Enterprise Solutions",
    description:
      "Systems that perform Robust platforms that streamline operations and boost productivity.",
    video:
      "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Digital",
    title: "Digital Transformation",
    description: "Growth that sticks Data-driven strategies that maximize reach and ROI.",
    video:
      "https://res.cloudinary.com/dqvzaju7x/video/upload/creative-design_lghliw.mp4",
    buttonText: "Discover",
  },
];

const STACK_OFFSET = 18;
const DEFAULT_CARD_HEIGHT = 460;
const XL_CARD_HEIGHT = 560;

function getCardHeight(): number {
  if (typeof window === "undefined") return DEFAULT_CARD_HEIGHT;
  return window.innerWidth >= 1920 ? XL_CARD_HEIGHT : DEFAULT_CARD_HEIGHT;
}

export default function WorkflowSection({ onComplete }: WorkflowSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState<number>(DEFAULT_CARD_HEIGHT);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update card height on resize
  useEffect(() => {
    const updateHeight = () => setCardHeight(getCardHeight());
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const extraStackSpace = useMemo(
    () => STACK_OFFSET * (workflowSections.length - 1),
    []
  );

  // Animate stacked cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i * STACK_OFFSET,
          opacity: i <= activeIndex ? 1 : 0,
          zIndex: 10 + i,
          pointerEvents: i === activeIndex ? "auto" : "none",
          willChange: "transform, opacity",
        });
      });

      const activeCard = cardsRef.current[activeIndex];
      if (!activeCard) return;

      gsap.fromTo(
        activeCard,
        { opacity: 0, y: activeIndex * STACK_OFFSET + 40 },
        {
          opacity: 1,
          y: activeIndex * STACK_OFFSET,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeIndex, cardHeight]);

  // Start autoplay when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 75%",
      once: true,
      onEnter: () => {
        setActiveIndex(0);
        intervalRef.current = setInterval(() => {
          setActiveIndex((prev) => {
            const next = prev + 1;
            if (next >= workflowSections.length) {
              clearInterval(intervalRef.current!);
              onComplete?.();
              return prev; 
            }
            return next;
          });
        }, 4000);
      },
    });

    return () => {
      trigger.kill();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [onComplete]);

  return (
    <WorkflowSectionRoot ref={sectionRef}>
      <NavBarContainer>
        {workflowSections.map((section, i) => (
          <NavItem
            key={section.title}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? "active" : ""}
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
                top: 0,
                left: 0,
                width: "100%",
                height: cardHeight,
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
