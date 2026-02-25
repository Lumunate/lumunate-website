"use client";

import React from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    RootSection,
    MainGrid,
    LeftContent,
    VerticalDivider,
    RightContent,
    CardGrid,
    StyledCard,
    CardTitle,
    CardDesc,
} from "./ProductionSection.styles";

const CARDS_DATA = [
    {
        title: "Data First",
        desc: "We prioritize data quality, structure, and availability before model selection. Poor data leads to unreliable outcomes.",
    },
    {
        title: "Model Choice with Constraints",
        desc: "Model complexity is chosen based on accuracy needs, latency, interpretability, and cost not experimentation for its own sake.",
    },
    {
        title: "Production-Oriented Delivery",
        desc: "We build ML systems with deployment, scaling, and monitoring in mind from day one, avoiding research-only solutions that don't survive production.",
    },
];

export default function ProductionSection() {
    return (
        <RootSection>
            <PageContainer>
                <Typography
                    variant="h5"
                    sx={{ textAlign: "left", fontSize: "22px", display: { xs: "none", md: "block" } }}
                >
                    How We Build
                </Typography>

                <MainGrid>
                    {/* Left Side Content */}
                    <LeftContent>

                        <Box sx={{ width: "48px", height: "48px", position: "relative" }}>

                            <Image
                                src="/services/build-prod.svg"
                                alt="Production Icon"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: { xs: "30px", md: "40px" },
                                fontWeight: 600,
                                mt: "40px",
                                lineHeight: 1.1,
                            }}
                        >
                            Built for Production, Not Demos
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: "14px", md: "16px", lg: "18px" },
                                mt: "16px",
                                color: "text.secondary",
                                maxWidth: "500px",
                            }}
                        >
                            We focus on AI systems that can be deployed, measured, and
                            maintained—not prototypes that stop at experimentation.
                        </Typography>
                    </LeftContent>

                    <VerticalDivider />

                    {/* Right Side Content */}
                    <RightContent>
                        <CardGrid>
                            {CARDS_DATA.map((card, index) => (
                                <StyledCard key={index} elevation={0}>
                                    <CardTitle>{card.title}</CardTitle>
                                    <CardDesc>{card.desc}</CardDesc>
                                </StyledCard>
                            ))}
                        </CardGrid>
                    </RightContent>
                </MainGrid>
            </PageContainer>
        </RootSection>
    );
}