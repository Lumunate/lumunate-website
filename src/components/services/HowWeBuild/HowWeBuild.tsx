"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { Typography, Container } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SectionContainer,
    BackgroundVideo,
    VideoOverlay,
    ContentGrid,
    StepsList,
    StepItem,
    StepTitle,
    DescriptionBox,
    ActiveContentTitle,
} from "./HowWeBuild.style";
import PageContainer from "@/components/common/PageContainer";

gsap.registerPlugin(ScrollTrigger);

const BUILD_STEPS = [
    {
        title: "Architecture First",
        desc: "We start by designing the system structure upfront, defining data flows, service boundaries, and scalability requirements based on expected usage and growth. This reduces technical debt, avoids unnecessary refactors, and ensures the foundation can support future features without instability.",
    },
    {
        title: "Incremental Development",
        desc: "Features are built in controlled, incremental stages, allowing functionality, performance, and technical assumptions to be validated as development progresses. This approach keeps complexity manageable and prevents late-stage surprises.",
    },
    {
        title: "Testing & Quality Control",
        desc: "Features are built in controlled, incremental stages, allowing functionality, performance, and technical assumptions to be validated as development progresses. This approach keeps complexity manageable and prevents late-stage surprises.",
    },
    {
        title: "Deployment & Handover",
        desc: "Features are built in controlled, incremental stages, allowing functionality, performance, and technical assumptions to be validated as development progresses. This approach keeps complexity manageable and prevents late-stage surprises.",
    },
];

const HowWeBuild = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: `+=${BUILD_STEPS.length * 100}%`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const newIndex = Math.min(
                        Math.floor(progress * BUILD_STEPS.length),
                        BUILD_STEPS.length - 1
                    );
                    setActiveIndex(newIndex);
                },
            });
        });

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        gsap.fromTo(
            descRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
    }, [activeIndex]);

    return (
        <SectionContainer ref={containerRef}>
            <BackgroundVideo autoPlay loop muted playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1771915300/Development_1_uqht1w.webm" type="video/mp4" />
            </BackgroundVideo>
            <VideoOverlay />

            <PageContainer>
                <Typography
                    variant="h5"
                    sx={{ mb: { xs: "32px", md: "64px" }, fontSize: { xs: "18px", md: "22px" }, opacity: 0.8, fontWeight: 400 }}
                >
                    How We Build
                </Typography>

                <ContentGrid>
                    {/* Left Side: Navigation Steps */}
                    <StepsList>
                        {BUILD_STEPS.map((step, index) => (
                            <StepItem
                                key={index}
                                active={activeIndex === index}
                                isFirst={index === 0}
                                isLast={index === BUILD_STEPS.length - 1}
                            >
                                <StepTitle active={activeIndex === index}>
                                    {step.title}
                                </StepTitle>
                            </StepItem>
                        ))}
                    </StepsList>

                    {/* Right Side: Active Content */}
                    <DescriptionBox ref={descRef}>
                        <ActiveContentTitle variant="h4">
                            {BUILD_STEPS[activeIndex].title}
                        </ActiveContentTitle>
                        <Typography
                            variant="body2"
                            sx={{
                                lineHeight: 1.6,
                                fontSize: { xs: "14px", md: "16px" },
                                color: "text.secondary",
                                fontWeight: 400
                            }}
                        >
                            {BUILD_STEPS[activeIndex].desc}
                        </Typography>
                    </DescriptionBox>
                </ContentGrid>
            </PageContainer>
        </SectionContainer>
    );
};

export default HowWeBuild;