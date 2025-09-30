"use client";

import { useState } from "react";
import WorkflowCard from "./WorkflowCard";
import { NavBarContainer, WorkflowSectionRoot } from "./WorkflowSection.styles";
import { NavItem } from "./WorkflowBar.styles";


const workflowSections = [
  {
    tag: "/UI & UX",
    title: "Creative Design & UI/UX",
    description: "Interfaces that convert User-centered designs that turn visitors into customers.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web & Mobile Development",
    title: "Web & Mobile Development",
    description: "Apps that scale Fast, secure, and built for growth across all platforms.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web & Mobile Development",
    title: "AI/ML Solutions",
    description: "Intelligence that delivers Custom AI tools that automate, optimize, and accelerate your business.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Web & Mobile Development",
    title: "Web3 & Blockchain",
    description: "Future-ready technology Decentralized solutions for tomorrow's digital economy.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Enterprise Solutions",
    title: "Enterprise Solutions",
    description: "Systems that perform Robust platforms that streamline operations and boost productivity.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
  {
    tag: "/Digital Transformation",
    title: "Digital Transformation",
    description: "Growth that sticks Data-driven strategies that maximize reach and ROI.",
    video: "/creative-design.mp4",
    buttonText: "Discover",
  },
];

export default function WorkflowSection() {
  const [activeSection, setActiveSection] = useState(workflowSections[0]);

  return (
    <WorkflowSectionRoot>
      {/*Full-width NavBar */}
      <NavBarContainer>
        {workflowSections.map((section) => (
          <NavItem
            key={section.title}
            onClick={() => setActiveSection(section)}
            className={activeSection.title === section.title ? "active" : ""}
          >
            {section.title}
          </NavItem>
        ))}
      </NavBarContainer>

      {/* 🔹 Content */}
      <WorkflowCard activeSection={activeSection} />
    </WorkflowSectionRoot>
  );
}
