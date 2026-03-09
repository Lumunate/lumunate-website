"use client";

import { Box } from "@mui/material";
import DiscoverButton from "../ui/DiscoverButton";
import {
    WorkflowCardRoot,
    CardLeft,
    CardRight,
    TopText,
    Title,
    Description,
    WorkflowVideo,
} from "./WorkflowCard.styles";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface WorkflowCardProps {
    activeSection: {
        tag: string;
        title: string;
        description: string;
        video: string;
        buttonText: string;
        path: string;
    } | null;
}

export default function WorkflowCard({ activeSection }: WorkflowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const textElementsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!activeSection) return;

        if (textElementsRef.current) {
            const children = textElementsRef.current.querySelectorAll('.animate-text');
            gsap.fromTo(
                children,
                { opacity: 0, y: 15, filter: "blur(6px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                    overwrite: "auto"
                }
            );
        }

        gsap.fromTo(
            ".animate-btn",
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.4, delay: 0.2, ease: "back.out(1.7)", overwrite: "auto" }
        );

    }, [activeSection]);

    if (!activeSection) return null;

    return (
        <WorkflowCardRoot ref={cardRef}>
            <CardLeft>
                <Box ref={textElementsRef}>
                    <TopText className="animate-text" variant="h6">
                        {activeSection.tag}
                    </TopText>
                    <Title className="animate-text" variant="h4">
                        {activeSection.title}
                    </Title>
                    <Description className="animate-text">
                        {activeSection.description}
                    </Description>
                </Box>
                <Link
                    href={activeSection.path || "/contact"}
                    passHref
                    style={{ textDecoration: 'none' }}
                    className="animate-btn"
                >
                    <DiscoverButton sx={{ mt: { xs: "0px", md: "0px" }, width: "fit-content" }}>
                        {activeSection.buttonText || "Discover"}
                    </DiscoverButton>
                </Link>
            </CardLeft>

            <CardRight>
                <WorkflowVideo
                    key={activeSection.video}
                    src={activeSection.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ opacity: 0, transform: "scale(1.05)" }}
                    onLoadedData={(e) => {
                        gsap.to(e.currentTarget, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            ease: "power2.out"
                        });
                    }}
                />
            </CardRight>
        </WorkflowCardRoot>
    );
}