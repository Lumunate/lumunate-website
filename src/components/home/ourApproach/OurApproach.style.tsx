"use client";

import { Box, styled, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const OurApproachContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "1070px",
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

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: alpha("#000", 0.7),
    zIndex: -2,
  },

  "& .topBlur": {
    position: "absolute",
    left: 0,
    right: 0,
    top: "0px",
    height: "60px",
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

  "& .bottomBlur": {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "-40px",
    height: "60px",
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
    height: "900px",
    margin: "96px 0",
  },

  [theme.breakpoints.down("sm")]: {
    height: "720px",
    margin: "72px 0",
  },
}));


export const SubContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  minHeight: "100vh",
  padding: theme.spacing(10, 0),

  display: "grid",
  gridTemplateRows: "auto 1fr",
  rowGap: theme.spacing(6),

  alignItems: "stretch",
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

export const FullBleedGrid = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  minHeight: "calc(100vh - 140px)",
  display: "flex",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50vw",
    width: "1px",

    background: `linear-gradient(
      to bottom,
      ${alpha(theme.palette.text.primary, 0)} 0%,
      ${alpha(theme.palette.text.primary, 0.18)} 25%,
      ${alpha(theme.palette.text.primary, 0.22)} 50%,
      ${alpha(theme.palette.text.primary, 0.18)} 75%,
      ${alpha(theme.palette.text.primary, 0)} 100%
    )`,

    transform: "translateX(-0.5px)",
    zIndex: 1,
    pointerEvents: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    top: "50%",
    height: "1px",

    background: `linear-gradient(
      to right,
      ${alpha(theme.palette.text.primary, 0)} 0%,
      ${alpha(theme.palette.text.primary, 0.18)} 25%,
      ${alpha(theme.palette.text.primary, 0.22)} 50%,
      ${alpha(theme.palette.text.primary, 0.18)} 75%,
      ${alpha(theme.palette.text.primary, 0)} 100%
    )`,

    transform: "translateY(-0.5px)",
    zIndex: 1,
    pointerEvents: "none",
  },

  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    "&::before": { display: "none" },
    "&::after": { display: "none" },
  },
}));


export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  width: "100%",

  height: "100%",
  minHeight: "auto",

  "& > *": {
    position: "relative",
    zIndex: 2,
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    minHeight: "auto",
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
  padding: theme.spacing(11.625, 9),

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
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "100%",
  padding: theme.spacing(5.25, 20),

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
