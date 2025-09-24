"use client";

import { WorkflowBarRoot, NavItem } from "./WorkflowBar.styles";

interface WorkflowNavBarProps {
    sections: {
        tag: string;
        title: string;
        description: string;
        video: string;
        buttonText: string;
    }[];
    activeSection: any;
    setActiveSection: (section: any) => void;
}

export default function WorkflowNavBar({ sections, activeSection, setActiveSection }: WorkflowNavBarProps) {
    return (
        <WorkflowBarRoot>
            {sections.map((section) => (
                <NavItem
                    key={section.title}
                    className={activeSection.title === section.title ? "active" : ""}
                    onClick={() => setActiveSection(section)}
                >
                    {section.title}
                </NavItem>
            ))}
        </WorkflowBarRoot>
    );
}
