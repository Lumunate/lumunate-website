"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Typography } from "@mui/material";
import * as S from "./OpenPositions.styles";
import PageContainer from "@/components/common/PageContainer";

const POSITIONS = [
    { title: "Network security engineer", dept: "SECURITY", desc: "Designs, implements, and maintains security solutions to protect computer networks." },
    { title: "Data protection specialist", dept: "SECURITY", desc: "Implements measures to protect company's sensitive data from unauthorized access and leaks." },
    { title: "SOC analyst", dept: "SECURITY", desc: "Monitors security events in real-time to detect and respond to threats." },
    { title: "Cybersecurity analyst", dept: "SECURITY", desc: "Monitors systems to detect and respond to security incidents." },
    { title: "SOC analyst", dept: "SECURITY", desc: "Monitors security events in real-time to detect and respond to threats." },
    { title: "Cybersecurity analyst", dept: "SECURITY", desc: "Monitors systems to detect and respond to security incidents." },
    { title: "Backend Engineer", dept: "ENGINEERING", desc: "Build scalable backend systems and APIs that power our applications." },
    { title: "UX Designer", dept: "DESIGN", desc: "Design intuitive and beautiful interfaces that users love." },
];

export default function OpenPositions() {
    return (
        <S.SectionWrapper>
            <PageContainer>
                <S.Title variant="h2">8 Open Positions</S.Title>

                <Grid container spacing={0}>
                    {POSITIONS.map((job, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 3 }} key={index}>
                            <S.JobCard>
                                <Box>

                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 400, fontSize: { xs: "20px", md: "20px", lg: "24px" } }}>
                                        {job.title}
                                    </Typography>
                                    <S.CategoryTag>{job.dept}</S.CategoryTag>
                                    <Typography variant="body2" sx={{ color: "text.secondary", fontSize: { xs: "14px", lg: "16px" }, mt: { xs: "24px", md: 0 }, lineHeight: 1.6 }}>
                                        {job.desc}
                                    </Typography>
                                </Box>

                                <S.ApplyLink href="/contact">
                                    <Typography sx={{ mr: "4px", fontSize: { xs: "16px", md: "14px" }, fontWeight: 500 }}>
                                        Apply Now
                                    </Typography>
                                    <ArrowOutwardIcon sx={{ fontSize: "16px" }} />
                                </S.ApplyLink>
                            </S.JobCard>
                        </Grid>
                    ))}
                </Grid>
            </PageContainer>
        </S.SectionWrapper>
    );
}