"use client";

import { useEffect, useRef } from "react";
import { NavBarContainer, NavItem } from "./WorkflowNavBar.styles";

interface Section {
    tag: string;
    title: string;
    description: string;
    video: string;
    buttonText: string;
}

interface WorkflowNavBarProps {
    sections: Section[];
    activeSection: Section;
    setActiveSection: (section: Section) => void;
}

export default function WorkflowNavBar({
    sections,
    activeSection,
    setActiveSection,
}: WorkflowNavBarProps) {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = navRef.current;
        if (!container) return;

        const activeItem = container.querySelector(".active") as HTMLElement;
        if (!activeItem) return;

        activeItem.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    }, [activeSection]);

    const handleWheel = (e: React.WheelEvent) => {
        const container = navRef.current;
        if (!container) return;

        if (container.scrollWidth > container.clientWidth) {
            container.scrollLeft += e.deltaY;
        }
    };

    return (
        <NavBarContainer ref={navRef} onWheel={handleWheel}>
            {sections.map((section) => (
                <NavItem
                    key={section.title}
                    className={
                        activeSection.title === section.title ? "active" : ""
                    }
                    onClick={() => setActiveSection(section)}
                >
                    {section.title}
                </NavItem>
            ))}
        </NavBarContainer>
    );
}
