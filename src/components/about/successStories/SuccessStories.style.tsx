"use client";

import { Box, styled } from "@mui/material";

export const SuccessStoriesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  marginTop: theme.spacing(6), // use theme spacing
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default, // fallback bg
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
  maxWidth: "1620px",
  width: "100%",
  padding: theme.spacing(0, 2.5), // theme spacing instead of "0 20px"
  margin: "0 auto",
  position: "relative",
  zIndex: 2, // above video
  color: theme.palette.text.primary, // default text color
}));

export const StarsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  display: "flex",
  gap: theme.spacing(0.75),
}));
