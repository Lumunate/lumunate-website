"use client";

import { Box, Button, styled, Typography } from "@mui/material";

export const OurApproachContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  margin: "160px 0",
  overflow: "hidden",
  "& video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -3,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
    zIndex: -2,
  },
}));

export const SubContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1698px",
  width: "100%",
  padding: theme.spacing(10, 3),
  margin: "0 auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  position: "relative",
  zIndex: 3,
  color: theme.palette.text.primary,
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.h1.fontWeight,
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  alignItems: "center",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const SubContentWrapper = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  borderBottom: "0.4px solid #B4B4B4",
  height: "100%",
  alignItems: "center",
  padding: theme.spacing(6, 8),
  [theme.breakpoints.down("md")]: {
    alignItems: "flex-start",
    textAlign: "left",
    padding: theme.spacing(5, 2),
  },
}));


export const SubTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(-8),
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.h3.fontWeight,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(-3),
    fontSize: "32px",
  },
}));

export const RightBottomBox = styled(Box)(({ theme }) => ({
  borderLeft: "0.4px solid #B4B4B4",
  padding: theme.spacing(6, 8),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  [theme.breakpoints.down("sm")]: {
    borderLeft: "none",
    padding: theme.spacing(5, 0),
  },
}));

export const DiscoverButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#015B3F",
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  marginTop: theme.spacing(5),
  color: theme.palette.common.white,
  borderRadius: "16px",
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));

export const NumberTypography = styled(Typography)(({ theme }) => ({
  fontSize: "180px",
  fontWeight: theme.typography.h1.fontWeight,
  background: "linear-gradient(to bottom, #FFFFFF 0%, #000000 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: "120px",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.h5.fontSize,
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));
