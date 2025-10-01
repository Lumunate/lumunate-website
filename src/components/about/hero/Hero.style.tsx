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
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  maxWidth: "1698px",
  width: "100%",
  padding: theme.spacing(0, 2.5),
  display: "flex",
  alignItems: "flex-center",
  margin: "0 auto",
  paddingBottom: theme.spacing(2),
  justifyContent: "space-between",
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
