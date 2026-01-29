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
    imageAlt = "Section Illustration",
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
                            alignItems: "flex-start",
                            justifyContent: "space-between",

                            paddingTop: "38px",
                            paddingBottom: "58px",

                            gap: "17px",

                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                paddingTop: theme.spacing(4),
                                paddingBottom: theme.spacing(4),
                                gap: theme.spacing(2),
                            },
                        })}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "22px", md: "33px" },
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
                                marginLeft: "auto",
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
                    />
                </ImageWrapper>
            )}

            {imageLeftSrc && imageRightSrc && (
                <ImageGridWrapper>
                    <Image src={imageLeftSrc} alt="Left Illustration" width={1200} height={800} />
                    <Image src={imageRightSrc} alt="Right Illustration" width={1200} height={800} />
                </ImageGridWrapper>
            )}
        </SectionRoot>
    );
}
