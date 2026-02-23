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

// Register the plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    { id: '01', title: 'Understand', desc: 'We dive deep into your users, business goals, and competitive landscape to identify opportunities and constraints.' },
    { id: '02', title: 'Design', desc: 'We create wireframes, prototypes, and high-fidelity designs that solve user problems with elegant simplicity.' },
    { id: '03', title: 'Refine', desc: 'Through testing and iteration, we polish every detail to ensure the design meets both user and business objectives.' },
    { id: '04', title: 'Deliver', desc: 'We hand off production-ready designs with clear documentation and support for seamless developer implementation.' },
];

const ProcessStep = ({ step }: { step: typeof steps[0] }) => {
    return (
        <Stack
            className="process-step"
            direction="row"
            spacing="24px"
            alignItems="flex-start"
            sx={{ width: '100%', opacity: 0 }}
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
    );
};

export default function OurProcess() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".process-step",
                {
                    x: -40, 
                    opacity: 0,
                    filter: "blur(4px)" 
                },
                {
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.4, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 75%",
                        toggleActions: "play none none none",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <ProcessSection>
            <VideoBg autoPlay loop muted playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1771226261/Design_bt9pmm.webm" type="video/mp4" />
            </VideoBg>

            <PageContainer>
                <RelativeContainer ref={containerRef} maxWidth={false} disableGutters>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: "18px", md: "22px" },
                            fontWeight: 400,
                            color: 'section.heading',
                            mb: '32px', 
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}
                    >
                        Our Process
                    </Typography>

                    <Stack spacing="40px" sx={{ width: '100%' }}>
                        {steps.map((step) => (
                            <ProcessStep key={step.id} step={step} />
                        ))}
                    </Stack>
                </RelativeContainer>
            </PageContainer>
        </ProcessSection>
    );
}