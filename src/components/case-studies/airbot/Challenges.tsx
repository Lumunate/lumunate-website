"use client";

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
            <InnerContainer maxWidth="lg">
                <TopStrip>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",       // 📱 small screens: stack title & desc
                                sm: "1fr",       // 📱 same stacking on sm
                                md: "1fr 1fr",   // 🖥 md+: keep side by side
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
                            <Typography sx={{ color: "#CBCBCB" }} variant="body1">
                                {description}
                            </Typography>
                        </Box>
                    </Box>
                </TopStrip>

                {/* Single image */}
                {imageSrc && !imageLeftSrc && !imageRightSrc && (
                    <ImageWrapper>
                        <img src={imageSrc} alt={imageAlt} />
                    </ImageWrapper>
                )}

                {/* Two images side by side */}
                {imageLeftSrc && imageRightSrc && (
                    <ImageGridWrapper>
                        <Box>
                            <img src={imageLeftSrc} alt="Left Illustration" />
                        </Box>
                        <Box>
                            <img src={imageRightSrc} alt="Right Illustration" />
                        </Box>
                    </ImageGridWrapper>
                )}
            </InnerContainer>
        </SectionRoot>
    );
}
