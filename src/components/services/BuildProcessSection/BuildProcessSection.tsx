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
    const isVideo = bgImageUrl?.match(/\.(webm|mp4|ogg|mov)$/i);
    const mediaType = isVideo ? "video" : "image";

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) return <RootSection $mediaType={mediaType} />;

    return (
        <RootSection $mediaType={mediaType}>
            {bgImageUrl && (
                isVideo ? (
                    <MediaBackground
                        key="video-bg"
                        $mediaType={mediaType} // Pass prop here
                        component="video"
                        src={bgImageUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        sx={{ width: '100%', height: '100%' }}
                    />
                ) : (
                    <MediaBackground
                        key="image-bg"
                        $mediaType={mediaType} // Pass prop here
                        component="img"
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
                                {/* Pass prop here to toggle backdropFilter */}
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