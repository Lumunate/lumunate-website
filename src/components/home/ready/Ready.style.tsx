"use client";

import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const ReadyContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  marginTop: theme.spacing(5),
  width: "100%",
  height: "100vh",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    height: "780px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "580px",
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
      ? `linear-gradient(to bottom, ${alpha(theme.palette.background.default, 0.45)} 0%, transparent 100%)`
      : alpha(theme.palette.common.white, 0.25),
  zIndex: 1,
}));

export const TextWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  height: "100%",
  margin: "0 auto",
  flexDirection: "column",
  textAlign: "center",
  letterSpacing: "-1.5px",
  zIndex: 2,
  padding: theme.spacing(0, 0),
  color: theme.palette.text.primary,

  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px",
    justifyContent: "flex-start",
  },

  "& h1, & h2": {
    lineHeight: 1.1,
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.05,
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1.02,
    },
  },
}));