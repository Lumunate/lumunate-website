"use client";

import { Typography, Stack, Box } from '@mui/material';
import {
    ProcessSection,
    VideoBg,
    RelativeContainer,
    StepNumber
} from './OurProcess.styles';
import PageContainer from '@/components/common/PageContainer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    { id: '01', title: 'Understand', desc: 'We dive deep into your users, business goals, and competitive landscape...' },
    { id: '02', title: 'Design', desc: 'We create wireframes, prototypes, and high-fidelity designs...' },
    { id: '03', title: 'Refine', desc: 'Through testing and iteration, we polish every detail...' },
    { id: '04', title: 'Deliver', desc: 'We hand off production-ready designs with clear documentation...' },
];

export default function OurProcess() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const processSteps = gsap.utils.toArray<HTMLElement>(".process-step");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=400%",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            processSteps.forEach((step, i) => {
                if (i > 0) {
                    tl.fromTo(step,
                        {
                            opacity: 0,
                            y: 50
                        },
                        {
                            opacity: 1,
                            y: i * 110,
                            duration: 1,
                            ease: "power2.out"
                        },

                        `step-${i}`
                    );
                }
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <ProcessSection ref={sectionRef}>
            <VideoBg autoPlay loop muted playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1771226261/Design_bt9pmm.webm" type="video/mp4" />
            </VideoBg>

            <PageContainer>
                <RelativeContainer maxWidth={false} disableGutters>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: "18px", md: "22px" },
                            fontWeight: 400,
                            color: 'section.heading',
                            mb: '48px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Our Process
                    </Typography>

                    <Box sx={{ position: 'relative', width: '100%', minHeight: '500px' }}>
                        {steps.map((step, index) => (
                            <Stack
                                key={step.id}
                                className="process-step"
                                direction="row"
                                spacing="24px"
                                alignItems="flex-start"
                                sx={{
                                    width: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    // Initially, Step 1 is visible at top, others are hidden
                                    opacity: index === 0 ? 1 : 0,
                                    transform: index === 0 ? 'translateY(0px)' : 'translateY(50px)',
                                    pointerEvents: 'auto',
                                    transition: 'none'
                                }}
                            >
                                <StepNumber>{step.id}</StepNumber>
                                <Stack spacing="8px">
                                    <Typography variant="h6" sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 400, color: 'section.heading' }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "16px" }, color: 'section.desc', lineHeight: 1.6, maxWidth: '600px' }}>
                                        {step.desc}
                                    </Typography>
                                </Stack>
                            </Stack>
                        ))}
                    </Box>
                </RelativeContainer>
            </PageContainer>
        </ProcessSection>
    );
}