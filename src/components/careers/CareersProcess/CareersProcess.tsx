"use client";

import React, { useState } from "react";
import * as S from "./CareersProcess.styles";
import { Box } from "@mui/material";
import ConnectButton from "@/components/ui/ConnectButton";
import PageContainer from "@/components/common/PageContainer";

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
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    };

    const current = PROCESS_STEPS[activeStep];

    return (
        <S.SectionRoot>
            <S.BgVideo autoPlay muted loop playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772513890/14941280_1920_1080_24fps_1_n2eyqe.webm" type="video/mp4" />
            </S.BgVideo>

            <S.VideoOverlay />

            <PageContainer>
                <S.ParentTitle>Our Process</S.ParentTitle>

                <S.ContentBox>
                    <S.MainTitle variant="h1">{current.title}</S.MainTitle>
                    <S.Description>{current.description}</S.Description>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <ConnectButton onClick={handleNext}>
                            Browse Opportunities
                        </ConnectButton>
                    </Box>
                </S.ContentBox>
            </PageContainer>
            <S.NavContainer>
                {PROCESS_STEPS.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <S.StepItem
                            active={activeStep === index}
                            onClick={() => setActiveStep(index)}
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