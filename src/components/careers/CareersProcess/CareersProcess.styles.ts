"use client";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import { alpha } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
}));

export const BgVideo = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  opacity: 0.35,
});

export const VideoOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 2,
  pointerEvents: "none",
  background: `linear-gradient(to bottom, 
        ${theme.palette.background.default} 0%, 
        ${alpha(theme.palette.background.default, 0)} 25%, 
        ${alpha(theme.palette.background.default, 0)} 75%, 
        ${theme.palette.background.default} 100%)`,
}));

export const ParentTitle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "60px",
  fontSize: "22px",
  zIndex: 4,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("xl")]: {
    top: "100px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    top: "80px",
    fontSize: "18px",
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 4,
  textAlign: "center",
  padding: theme.spacing(0, 0),
}));

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontSize: "78px",
  fontWeight: 400,
  lineHeight: 1.1,
  color: theme.palette.text.primary,
  [theme.breakpoints.down("lg")]: {
    fontSize: "48px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  paddingTop: "32px",
  color: theme.palette.text.secondary,
  maxWidth: "1098px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    paddingTop: "20px",
    maxWidth: "345px",
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  width: "100%",
  padding: "40px 0",
  zIndex: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
  borderTop: `1px solid ${alpha(theme.palette.divider, 1)}`,
  borderBottom: `1px solid ${alpha(theme.palette.divider, 1)}`,
  backgroundColor: theme.palette.background.default,
  backdropFilter: "blur(10px)",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 24px",
  },
}));

export const StepItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active, theme }) => ({
  fontSize: "14px",
  cursor: "pointer",
  color: active
    ? theme.palette.text.primary
    : theme.palette.section.careersdots,
  fontWeight: active ? 600 : 400,
  transition: "all 0.3s ease",
  position: "relative",
  "&::after": active
    ? {
        content: '""',
        position: "absolute",
        bottom: "-4px",
        left: 0,
        width: "100%",
        height: "2px",
        backgroundColor: theme.palette.text.primary,
      }
    : {},
}));

export const DotGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "4px",
  opacity: 0.2,
  "& span": {
    width: "3px",
    height: "3px",
    backgroundColor: theme.palette.text.primary,
    borderRadius: "50%",
  },
}));
