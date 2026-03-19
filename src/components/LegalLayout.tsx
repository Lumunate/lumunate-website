"use client";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import React from "react";
import PageContainer from "./common/PageContainer";
import ExploreSection from "./home/explore/Explore";
import Ready from "./home/ready/Ready";

const LayoutRoot = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: "100vh",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: "90px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: theme.palette.section.heading,
  marginBottom: "16px",

  [theme.breakpoints.down("lg")]: {
    fontSize: "56px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const UpdateDate = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.section.heading,
  marginBottom: "43px",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  "& .legal-subtitle, & .legal-point": {
    fontSize: "16px",
    fontWeight: 500,
    color: theme.palette.section.heading,
    marginBottom: theme.spacing(1),
  },

  "& .legal-body": {
    fontSize: "16px",
    lineHeight: 1.6,
    color: theme.palette.section.desc,
    marginBottom: theme.spacing(1),
  },

  "& ul, & .contact-list": {
    paddingLeft: theme.spacing(2),
    margin: 0,
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },

  "& li, & .contact-item": {
    fontSize: "16px",
    color: theme.palette.section.desc,
    position: "relative",
    paddingLeft: "15px",
    lineHeight: 1.6,
    "&::before": {
      content: '"."',
      position: "absolute",
      left: 0,
      top: "-10px",
      fontSize: "22px",
      fontWeight: "bold",
      color: theme.palette.section.heading,
    },
  },
}));

interface Props {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: Props) {
  return (
    <LayoutRoot>
      <PageContainer>
        <MainTitle variant="h1">{title}</MainTitle>
        <UpdateDate>Last Updated: {lastUpdated}</UpdateDate>
        <ContentBox>{children}</ContentBox>

        <Box sx={{ marginTop: "100px" }}>
          <ExploreSection />

          <Ready
            title="Tell us about your vision"
            description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
            linkText="Let's Connect"
            linkHref="/contact"
          />
        </Box>
      </PageContainer>
    </LayoutRoot>
  );
}
