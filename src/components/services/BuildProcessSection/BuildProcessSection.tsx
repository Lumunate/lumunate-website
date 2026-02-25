"use client";

import React from "react";
import { Grid } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    RootSection,
    SectionTitle,
    CardWrapper,
    CardTitle,
    CardDesc,
    MediaBackground,
    ContentOverlay
} from "./BuildProcessSection.styles";

interface ProcessStep {
    title: string;
    desc: string;
}

interface BuildProcessSectionProps {
    sectionTitle?: string;
    steps: ProcessStep[];
    bgImageUrl?: string;
}

export default function BuildProcessSection({
    sectionTitle = "How We Build",
    steps,
    bgImageUrl,
}: BuildProcessSectionProps) {
    // Detect media type
    const isVideo = bgImageUrl?.match(/\.(webm|mp4|ogg|mov)$/i);
    const mediaType = isVideo ? "video" : "image";
    return (
        <RootSection $mediaType={mediaType}>
            {bgImageUrl && (
                isVideo ? (
                    <MediaBackground
                        key="video-bg"
                        component="video" // Renders <video>
                        src={bgImageUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        alt="background video"
                        sx={{ width: '100%', height: '100%' }}
                    />
                ) : (
                    <MediaBackground
                        key="image-bg"
                        component="img" // Renders <img>
                        src={bgImageUrl}
                        alt="background image"
                        sx={{ width: '100%', height: '100%' }}
                    />
                )
            )}

            <ContentOverlay>
                <PageContainer>
                    <SectionTitle>{sectionTitle}</SectionTitle>

                    <Grid container spacing="32px" justifyContent="center">
                        {steps.map((step, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <CardWrapper>
                                    <CardTitle>{step.title}</CardTitle>
                                    <CardDesc>{step.desc}</CardDesc>
                                </CardWrapper>
                            </Grid>
                        ))}
                    </Grid>
                </PageContainer>
            </ContentOverlay>
        </RootSection>
    );
}