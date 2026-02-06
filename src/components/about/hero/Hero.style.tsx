"use client";

import { Box, styled } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const BackgroundVideo = styled("video")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});


export const ContentContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  paddingBottom: theme.spacing(2),
  justifyContent: "center",
  position: "relative",
  zIndex: 2,

  [theme.breakpoints.down("lg")]: {
    paddingBottom: theme.spacing(8),
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.down("sm")]: {
    paddingBottom: theme.spacing(6),
  },
}));

export const BottomBlurOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  width: "100%",
  height: "260px",

  bottom: "-14rem",

  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))",

  zIndex: 1,
  pointerEvents: "none",
}));
