"use client";

import React, { useEffect, useRef } from "react";
import * as S from "./CareersProcess.styles";
import PageContainer from "@/components/common/PageContainer";
import gsap from "gsap";
import { useGsapSlideAnimation } from "@/hooks/useGsapAnimation";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    {
        id: "01",
        title: "Initial Screening Call",
        description: "A short call or online interview to assess communication skills, Role understanding, Cultural fit & Basic technical or design competency.",
    },
    {
        id: "02",
        title: "Main Interview",
        description: "Meet one of our experts and dive into their world. Don't forget to envision yourself..",
    },
    {
        id: "03",
        title: "Task/Challenge",
        description: "Candidates complete a task, test, or in-depth interview relevant to the role (design challenge, coding task, or case discussion). This validates real-world problem-solving ability, not just credentials.",
    },
    {
        id: "04",
        title: "Final Discussion & Offer",
        description: "Final discussion with leadership or the core team to align on expectations, compensation, and availability. Successful candidates receive an offer and onboarding details.",
    },
];

export default function CareersProcess() {
    const { elementRef: sectionRef, activeIndex: activeStep } = useGsapSlideAnimation(PROCESS_STEPS);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const targets = [titleRef.current, descRef.current];

        gsap.fromTo(
            targets,
            { opacity: 0, y: 20, filter: "blur(8px)" },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
                overwrite: true
            }
        );
    }, [activeStep]);

    const handleStepClick = (index: number) => {
        if (!sectionRef.current) return;

        const trigger = ScrollTrigger.getAll().find(st => st.trigger === sectionRef.current);

        if (trigger) {
            const totalSteps = PROCESS_STEPS.length;

            const targetProgress = index / totalSteps;
            const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress + 10;

            window.scrollTo({
                top: targetScroll,
                behavior: "smooth"
            });
        } else {
            const sectionTop = sectionRef.current.offsetTop;
            const scrollOffset = sectionTop + (index * window.innerHeight);
            window.scrollTo({
                top: scrollOffset,
                behavior: "smooth"
            });
        }
    };

    const current = PROCESS_STEPS[activeStep];

    return (
        <S.SectionRoot ref={sectionRef}>

            <S.BgVideo autoPlay muted loop playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772513890/14941280_1920_1080_24fps_1_n2eyqe.webm" type="video/mp4" />
            </S.BgVideo>

            <PageContainer>
                <S.ParentTitle>Our Process</S.ParentTitle>

                <S.ContentBox>
                    <S.MainTitle ref={titleRef} variant="h1">
                        {current.title}
                    </S.MainTitle>
                    <S.Description ref={descRef}>
                        {current.description}
                    </S.Description>
                </S.ContentBox>
            </PageContainer>

            <S.NavContainer>
                {PROCESS_STEPS.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <S.StepItem
                            active={activeStep === index}
                            onClick={() => handleStepClick(index)}
                        >
                            {step.id}
                        </S.StepItem>
                        {index < PROCESS_STEPS.length - 1 && (
                            <S.DotGrid>
                                <span /><span />
                                <span /><span />
                            </S.DotGrid>
                        )}
                    </React.Fragment>
                ))}
            </S.NavContainer>
        </S.SectionRoot>
    );
}