"use client";

import { useState, useEffect, useRef } from "react";
import WorkflowCard from "./WorkflowCard";
import { NavBarContainer, WorkflowSectionRoot, NavItem } from "./WorkflowSection.styles";
import gsap from "gsap";

const workflowSections = [
  {
    tag: "/UI & UX",
    title: "Creative Design & UI/UX",
    description: "Interfaces that convert. User-centered designs that turn visitors into customers.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web & Mobile",
    title: "Web & Mobile Development",
    description: "Apps that scale. Fast, secure, and built for growth across all platforms.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/AI & ML",
    title: "AI/ML Solutions",
    description: "Custom AI tools that automate, optimize, and accelerate your business.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web3",
    title: "Web3 & Blockchain",
    description: "Decentralized solutions for tomorrow's digital economy.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Enterprise",
    title: "Enterprise Solutions",
    description: "Robust platforms that streamline operations and boost productivity.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Digital",
    title: "Digital Transformation",
    description: "Data-driven strategies that maximize reach and ROI.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
];

export default function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Autoplay effect every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % workflowSections.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate when activeIndex changes
  useEffect(() => {
    const card = cardsRef.current[activeIndex];
    if (!card) return;

    const offset = activeIndex * 15; // increase value for more stacked spacing

    gsap.set(card, { zIndex: 10 + activeIndex });
    gsap.fromTo(
      card,
      { opacity: 0, y: offset + 40 }, // start lower with offset
      { opacity: 1, y: offset, duration: 0.8, ease: "power3.out" }
    );
  }, [activeIndex]);

  return (
    <WorkflowSectionRoot>
      {/* Navbar */}
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

      {/* Card Stack */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
          minHeight: "460px",
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
              height: "100%",
              opacity: i <= activeIndex ? 1 : 0, // keep old cards visible in stack
              transform: `translateY(${i * 17}px)`, // ⬅️ offset stacking
              pointerEvents: i === activeIndex ? "auto" : "none",
            }}
          >
            <WorkflowCard activeSection={section} />
          </div>
        ))}
      </div>
    </WorkflowSectionRoot>
  );
}
