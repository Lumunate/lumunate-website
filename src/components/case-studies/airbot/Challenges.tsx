"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    SectionRoot,
    TopStrip,
    ImageWrapper,
    ImageGridWrapper,
} from "./Challenges.styles";

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
    imageAlt = "Visual representation of project challenges",
    imageLeftSrc,
    imageRightSrc,
}: ChallengesProps) {
    return (
        <SectionRoot component="section">
            <TopStrip>
                <PageContainer>
                    <Box
                        sx={(theme) => ({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",

                            paddingTop: "38px",
                            paddingBottom: "58px",
                            gap: "20px",

                            [theme.breakpoints.up("lg")]: {
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                gap: "40px",
                            },

                            [theme.breakpoints.down("sm")]: {
                                paddingBottom: "40px"
                            },
                        })}
                    >
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: { xs: "30px", md: "33px" },
                                fontWeight: 400,
                                flexShrink: 0,
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={(theme) => ({
                                color: theme.palette.section.caseStudyDesc,
                                maxWidth: "819px",
                                textAlign: "left",
                                fontSize: { xs: "16px", md: "18px" },

                                [theme.breakpoints.up("lg")]: {
                                    marginLeft: "auto",
                                },
                            })}
                        >
                            {description}
                        </Typography>
                    </Box>
                </PageContainer>
            </TopStrip>

            {imageSrc && !imageLeftSrc && !imageRightSrc && (
                <ImageWrapper>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="100vw"
                    />
                </ImageWrapper>
            )}

            {imageLeftSrc && imageRightSrc && (
                <ImageGridWrapper>
                    <Image
                        src={imageLeftSrc}
                        alt={`${title} - analysis view`}
                        width={1200}
                        height={800}
                    />
                    <Image
                        src={imageRightSrc}
                        alt={`${title} - technical implementation`}
                        width={1200}
                        height={800}
                    />
                </ImageGridWrapper>
            )}
        </SectionRoot>
    );
}
