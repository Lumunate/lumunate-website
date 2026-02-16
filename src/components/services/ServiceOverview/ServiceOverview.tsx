"use client";

import React, { ReactNode } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    SectionRoot,
    CardBox,
    IconWrapper
} from "./ServiceOverview.styles";

interface ServiceCard {
    icon: ReactNode;
    subtitle: string;
    description: string;
}

interface ServiceOverviewProps {
    title: string;
    description: string;
    cardsTitle: string;
    cards: ServiceCard[];
}

export default function ServiceOverview({
    title,
    description,
    cardsTitle,
    cards,
}: ServiceOverviewProps) {
    const theme = useTheme();

    return (
        <SectionRoot>
            <PageContainer>
                {/* Header Section */}
                <Box sx={{ maxWidth: "1674px" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "30px", md: "42px", lg: "56px" },
                            color: theme.palette.section.heading,
                            mb: { xs: "20px", md: "32px" },
                            fontFamily: "Montserrat"
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "14px", md: "16px", lg: "20px" },
                            color: theme.palette.section.desc,
                            lineHeight: 1.6,
                            fontFamily: "Montserrat",
                            marginBottom: { xs: "90px", lg: "120px" },
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: { xs: "18px", lg: "22px" },
                        color: theme.palette.section.heading,
                        lineHeight: 1.6,
                        fontFamily: "Montserrat",
                        mb: { xs: "20px", lg: "32px" },
                    }}
                >
                    {cardsTitle}
                </Typography>

                {/* Parent Card Container */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "1fr 1fr",
                            lg: "1fr 1fr 1fr"
                        },
                        borderRadius: "10px",
                        overflow: { xs: "visible", md: "hidden" },
                        border: {
                            xs: "none",
                            md: `1px solid ${theme.palette.navbar.border}`
                        },
                        gap: { xs: "16px", md: 0 },
                    }}
                >
                    {cards.map((card, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                border: {
                                    xs: `1px solid ${theme.palette.navbar.border}`,
                                    md: "none"
                                },
                                borderRadius: { xs: "10px", md: 0 },
                                borderRight: {
                                    xs: `1px solid ${theme.palette.navbar.border}`,
                                    md: (index + 1) % 2 === 0 ? "none" : `1px solid ${theme.palette.navbar.border}`,
                                    lg: (index + 1) % 3 === 0 ? "none" : `1px solid ${theme.palette.navbar.border}`,
                                },

                                borderBottom: {
                                    xs: `1px solid ${theme.palette.navbar.border}`,
                                    md: index >= cards.length - (cards.length % 2 === 0 ? 2 : 1)
                                        ? "none"
                                        : `1px solid ${theme.palette.navbar.border}`,
                                    lg: index >= cards.length - 3
                                        ? "none"
                                        : `1px solid ${theme.palette.navbar.border}`,
                                },
                            }}
                        >
                            <CardBox>
                                <IconWrapper>{card.icon}</IconWrapper>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "20px", lg: "24px" },
                                        fontWeight: 500,
                                        color: theme.palette.section.heading,
                                        mb: { xs: "14px", lg: "24px" },
                                        fontFamily: "Montserrat",
                                    }}
                                >
                                    {card.subtitle}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "14px", lg: "16px" },
                                        color: theme.palette.section.desc,
                                        lineHeight: 1.5,
                                        fontFamily: "Montserrat",
                                    }}
                                >
                                    {card.description}
                                </Typography>
                            </CardBox>
                        </Box>
                    ))}
                </Box>
            </PageContainer>
        </SectionRoot >
    );
}