"use client";

import { Box, styled, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const OurApproachContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  margin: "160px 0",
  overflow: "hidden",

  "& video": {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -3,
  },

  // full dark overlay
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: alpha("#000", 0.7),
    zIndex: -2,
  },

  // TOP blur blend (use theme background)
  "& .topBlur": {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "20px",
    zIndex: -1,
    pointerEvents: "none",
    background: `
      linear-gradient(
        to bottom,
        ${alpha(theme.palette.background.default, 0.95)} 0%,
        ${alpha(theme.palette.background.default, 0.75)} 30%,
        ${alpha(theme.palette.background.default, 0.35)} 60%,
        ${alpha(theme.palette.background.default, 0)} 100%
      )
    `,
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
  },
  // BOTTOM blur blend (use theme background)
  "& .bottomBlur": {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "20px",
    zIndex: -1,
    pointerEvents: "none",
    background: `
      linear-gradient(
        to top,
        ${alpha(theme.palette.background.default, 0.95)} 0%,
        ${alpha(theme.palette.background.default, 0.75)} 30%,
        ${alpha(theme.palette.background.default, 0.35)} 60%,
        ${alpha(theme.palette.background.default, 0)} 100%
      )
    `,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  },

  [theme.breakpoints.down("md")]: {
    margin: "96px 0",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "72px 0",
  },
}));

export const SubContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1698px",
  width: "100%",
  padding: theme.spacing(10, 0),
  margin: "0 auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  position: "relative",
  zIndex: 3,
  color: theme.palette.text.primary,
  fontSize: theme.typography.h5.fontSize,
  fontWeight: 400,
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  width: "100%",
  height: "100%",
  alignItems: "stretch",
  overflow: "hidden",

  /* CENTER vertical line (full height) */
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: "1px",
    backgroundColor: alpha(theme.palette.text.primary, 0.25), // was rgba(180,...)
    transform: "translateX(-0.5px)",
    pointerEvents: "none",
    zIndex: 1,
  },

  /* CENTER horizontal line (full width) */
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    height: "1px",
    backgroundColor: alpha(theme.palette.text.primary, 0.25), // was rgba(180,...)
    transform: "translateY(-0.5px)",
    pointerEvents: "none",
    zIndex: 1,
  },

  /* keep content above the lines */
  "& > *": {
    position: "relative",
    zIndex: 2,
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",

    "&::before": { display: "none" },
    "&::after": { display: "none" },
  },
}));

export const SubContentWrapper = styled(Box)(({ theme }) => ({
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
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
  gridColumn: "2 / 3",
  gridRow: "2 / 3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100%",
  padding: theme.spacing(6, 8),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0),
  },
}));

export const NumberTypography = styled(Typography)(({ theme }) => ({
  fontSize: "260px",
  fontWeight: 400,
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(0,0,0,0.35) 100%)",
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
