"use client";

import { Typography, Stack, Box } from '@mui/material';
import useGsapAnimation from '@/hooks/useGsapAnimation';
import {
    ProcessSection,
    VideoBg,
    RelativeContainer,
    StepNumber
} from './OurProcess.styles';
import PageContainer from '@/components/common/PageContainer';

const steps = [
    { id: '01', title: 'Understand', desc: 'We dive deep into your users, business goals, and competitive landscape to identify opportunities and constraints.' },
    { id: '02', title: 'Design', desc: 'We create wireframes, prototypes, and high-fidelity designs that solve user problems with elegant simplicity.' },
    { id: '03', title: 'Refine', desc: 'Through testing and iteration, we polish every detail to ensure the design meets both user and business objectives.' },
    { id: '04', title: 'Deliver', desc: 'We hand off production-ready designs with clear documentation and support for seamless developer implementation.' },
];

const ProcessStep = ({ step, index }: { step: typeof steps[0], index: number }) => {
    const animatedRef = useGsapAnimation<HTMLDivElement>({
        direction: "left",
        delay: index * 0.15,
        duration: 1,
        once: true
    });

    return (
        <Stack
            ref={animatedRef}
            direction="row"
            spacing="24px"
            alignItems="flex-start"
            sx={{ width: '100%' }}
        >
            <StepNumber>{step.id}</StepNumber>

            <Stack spacing="8px">
                <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 400, color: 'section.heading' }}
                >
                    {step.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "14px", md: "16px" }, color: 'section.desc', lineHeight: 1.6 }}
                >
                    {step.desc}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default function OurProcess() {
    const titleRef = useGsapAnimation<HTMLHeadingElement>({ direction: "fade" });

    return (
        <ProcessSection>
            <VideoBg autoPlay loop muted playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1771226261/Design_bt9pmm.webm" type="video/mp4" />
            </VideoBg>

            <PageContainer>

                <RelativeContainer maxWidth={false} disableGutters>
                    <Typography
                        ref={titleRef}
                        variant="h4"
                        sx={{
                            fontSize: { xs: "18px", md: "22px" },
                            fontWeight: 400,
                            color: 'section.heading',
                            mb: '32px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            textAlign: 'left',
                            width: '100%'
                        }}
                    >
                        Our Process
                    </Typography>

                    <Stack spacing="24px" sx={{ width: '100%', alignItems: 'flex-start' }}>
                        {steps.map((step, index) => (
                            <ProcessStep key={step.id} step={step} index={index} />
                        ))}
                    </Stack>
                </RelativeContainer>
            </PageContainer>
        </ProcessSection>
    );
}