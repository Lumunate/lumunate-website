"use client";

import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import * as S from "./JourneySection.styles";
import PageContainer from "@/components/common/PageContainer";

const journeyData = [
    { year: "2019", text: "Foundation and initial vision. We started with a small team focused on high-quality digital products." },
    { year: "2020", text: "Adaptation and growth. Despite global challenges, we expanded our service offerings." },
    { year: "2021", text: "Scaling new heights. We reached a milestone of 50+ completed projects." },
    { year: "2022", text: "Innovation leadership. Integrating AI and machine learning into core workflows." },
    { year: "2023", text: "Growth, innovation, and new successes. We unveiled Startly, a proprietary AI tool supporting business process automation." },
];

export default function JourneySection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleNext = () => {
        setActiveIndex((prev) =>
            prev === null || prev === journeyData.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setActiveIndex((prev) =>
            prev === null || prev === 0 ? journeyData.length - 1 : prev - 1
        );
    };

    const progress = activeIndex !== null
        ? ((activeIndex + 1) / journeyData.length) * 100
        : 20;

    return (
        <S.JourneyRoot>
            <PageContainer>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: "30px", md: "48", lg: "56px" },
                            fontWeight: 400,
                            mb: { xs: "40px", lg: "60px" },
                            color: 'text.primary',
                            order: 1
                        }}
                    >
                        Our Journey
                    </Typography>

                    <S.BottomWrapper sx={{ order: { xs: 2, md: 3 }, mt: { xs: 0, md: "60px" }, mb: { xs: "40px", md: 0 } }}>
                        <S.ProgressBar>
                            <S.ProgressFill progress={progress} />
                        </S.ProgressBar>
                        <S.ArrowContainer sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <S.ArrowButton onClick={handlePrev} aria-label="Previous">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </S.ArrowButton>
                            <S.ArrowButton onClick={handleNext} aria-label="Next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </S.ArrowButton>
                        </S.ArrowContainer>
                    </S.BottomWrapper>

                    <S.TimelineContainer sx={{ order: { xs: 3, md: 2 } }}>
                        {journeyData.map((item, index) => (
                            <S.TimelineItem
                                key={item.year}
                                isHovered={activeIndex === index}
                                onClick={() => setActiveIndex(index === activeIndex ? null : index)} // Click to expand on mobile
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <S.DescriptionText className={activeIndex === index ? "visible" : ""}>
                                    {item.text}
                                </S.DescriptionText>
                                <S.YearText>{item.year}</S.YearText>
                            </S.TimelineItem>
                        ))}
                    </S.TimelineContainer>
                </Box>
            </PageContainer>
        </S.JourneyRoot>
    );
}