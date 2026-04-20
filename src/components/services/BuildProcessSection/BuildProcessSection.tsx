"use client";

import React from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    RootSection,
    SectionTitle,
    CardWrapper,
    CardTitle,
    CardDesc,
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
    const isVideo = bgImageUrl?.match(/\.(webm|mp4|ogg|mov)$/i);
    const mediaType = isVideo ? "video" : "image";

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) return <RootSection $mediaType={mediaType} />;

    return (
        <RootSection $mediaType={mediaType}>
            {bgImageUrl && (
                isVideo ? (
                    <Box
                        key="video-bg"
                        component="video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            inset: 0,
                            zIndex: 0,
                            pointerEvents: 'none',
                            filter: mediaType === 'video' ? 'brightness(0.5)' : 'none', // apply mediaType styling here
                        }}
                    >
                        <source src={bgImageUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Box>
                ) : (
                    <Box
                        key="image-bg"
                        component="img"
                        src={bgImageUrl}
                        alt="background image"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            inset: 0,
                            zIndex: 0,
                            filter: mediaType === 'video' ? 'brightness(0.5)' : 'none', // apply mediaType styling here
                        }}
                    />
                )
            )}

            <ContentOverlay>
                <PageContainer>
                    <SectionTitle>{sectionTitle}</SectionTitle>

                    <Grid container spacing="32px" justifyContent="center">
                        {steps.map((step, index) => (
                            <Grid key={index} size={{ xs: 12, md: 4 }}>
                                <CardWrapper $mediaType={mediaType}>
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