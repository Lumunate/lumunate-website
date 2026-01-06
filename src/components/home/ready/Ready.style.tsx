"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ReadyContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(5),
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    height: "80vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "70vh",
  },
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

export const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    theme.palette.mode === "dark"
      ? "rgba(0,0,0,0.45)"
      : "rgba(255,255,255,0.25)",
  zIndex: 1,
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1050px",
  margin: "0 auto",
  flexDirection: "column",
  textAlign: "center",
  letterSpacing: "-1.5px",
  zIndex: 2,
  padding: theme.spacing(0, 2),
  color: theme.palette.text.primary,

  "& h1, & h2, & .MuiTypography-root": {
    lineHeight: 1.1,
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.05,
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.02,
    },
  },

  [theme.breakpoints.down("md")]: {
    maxWidth: "90%",
  },
}));
