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
    { id: '01', title: 'Understand', desc: 'We dive deep into your users, business goals, and competitive landscape to identify opportunities and constraints.' },
    { id: '02', title: 'Design', desc: 'We create wireframes, prototypes, and high-fidelity designs that solve user problems with elegant simplicity.' },
    { id: '03', title: 'Refine', desc: 'Through testing and iteration, we polish every detail to ensure the design meets both user and business objectives.' },
    { id: '04', title: 'Deliver', desc: 'We hand off production-ready designs with clear documentation and support for seamless developer implementation.' },
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

                    end: "+=500%",
                    pin: true,

                    scrub: 1,
                    anticipatePin: 1,
                }
            });

            processSteps.forEach((step, i) => {
                // Exit animation for current step
                if (i !== steps.length - 1) {
                    // Fade out current
                    tl.to(step, {
                        opacity: 0,
                        y: -40,
                        duration: 1,
                        ease: "power1.inOut"
                    });
                    // Fade in next
                    tl.fromTo(processSteps[i + 1],
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power1.inOut"
                        },
                        "<"
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

                    <Box sx={{ position: 'relative', width: '100%', height: '220px' }}>
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
                                    opacity: index === 0 ? 1 : 0,
                                    pointerEvents: index === 0 ? 'auto' : 'none',
                                    transition: 'none'
                                }}
                            >
                                <StepNumber>{step.id}</StepNumber>
                                <Stack spacing="8px">
                                    <Typography variant="h6" sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 400, color: 'section.heading' }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "16px" }, color: 'section.desc', lineHeight: 1.6 }}>
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