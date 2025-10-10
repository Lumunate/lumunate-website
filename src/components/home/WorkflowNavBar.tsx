"use client";

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
    return (
        <NavBarContainer>
            {sections.map((section) => (
                <NavItem
                    key={section.title}
                    className={activeSection.title === section.title ? "active" : ""}
                    onClick={() => setActiveSection(section)}
                >
                    {section.title}
                </NavItem>
            ))}
        </NavBarContainer>
    );
}
