"use client";

import { Typography } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    RootSection,
    StepsContainer,
    StepCard,
    StepHeader,
    StepNumber,
    StepTitle,
    StepDivider,
    StepDesc,
    TitleDividerWrapper,
} from "./ProcessStepsSection.styles";

const STRATEGY_DATA = [
    {
        id: "01",
        title: "Use-Case Driven Design",
        desc: "We validate whether blockchain is the right solution before implementation, avoiding unnecessary decentralization.",
    },
    {
        id: "02",
        title: "Security First",
        desc: "Smart contracts and system components are designed with security constraints, threat modeling, and failure scenarios in mind.",
    },
    {
        id: "03",
        title: "Production-Oriented Delivery",
        desc: "We build with upgradeability, monitoring, and long-term maintenance planned from the start.",
    },
];

export default function StrategyProcessSection() {
    return (
        <RootSection>
            <PageContainer>
                <Typography
                    variant="h5"
                    sx={{ textAlign: "left", fontSize: { xs: "18px", md: "22px" }, fontWeight: 400 }}
                >
                    How We Build
                </Typography>

                <StepsContainer>
                    {STRATEGY_DATA.map((step, index) => (
                        <StepCard
                            key={step.id}
                            showVerticalBorder={index < 2}
                        >
                            <StepHeader>
                                <StepNumber>{step.id}</StepNumber>

                                <TitleDividerWrapper>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDivider />
                                </TitleDividerWrapper>
                            </StepHeader>

                            <StepDesc>{step.desc}</StepDesc>
                        </StepCard>
                    ))}
                </StepsContainer>
            </PageContainer>
        </RootSection>
    );
}