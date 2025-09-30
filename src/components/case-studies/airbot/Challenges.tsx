"use client";

import Image from "next/image";
import {
    SectionRoot,
    InnerContainer,
    TopStrip,
    ImageWrapper,
    ImageGridWrapper,
} from "./Challenges.styles";
import { Box, Typography } from "@mui/material";

type ChallengesProps = {
    title?: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    imageLeftSrc?: string;
    imageRightSrc?: string;
};

export default function Challenges({
    title = "Challenges",
    description,
    imageSrc,
    imageAlt = "Section Illustration",
    imageLeftSrc,
    imageRightSrc,
}: ChallengesProps) {
    return (
        <SectionRoot component="section">
            <InnerContainer maxWidth="xl">
                <TopStrip>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr", // stack on small
                                md: "1fr 1fr", // side by side on desktop
                            },
                            gap: 2,
                        }}
                    >
                        {/* Title */}
                        <Box>
                            <Typography variant="h2">{title}</Typography>
                        </Box>

                        {/* Description */}
                        <Box>
                            <Typography
                                sx={{ color: "#CBCBCB", maxWidth: "900px", fontSize: "15px" }}
                                variant="body1"
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </TopStrip>
            </InnerContainer>

            {/* Full screen image */}
            {imageSrc && !imageLeftSrc && !imageRightSrc && (
                <ImageWrapper>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        priority
                    />
                </ImageWrapper>
            )}

            {/* Two images side by side (stay inside container) */}
            {imageLeftSrc && imageRightSrc && (
                <ImageGridWrapper>
                    <Image
                        src={imageLeftSrc}
                        alt="Left Illustration"
                        width={1200}
                        height={800}
                    />
                    <Image
                        src={imageRightSrc}
                        alt="Right Illustration"
                        width={1200}
                        height={800}
                    />

                </ImageGridWrapper>
            )}

        </SectionRoot>
    );
}
