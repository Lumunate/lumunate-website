"use client";

import { Box, styled } from "@mui/material";

export const SuccessStoriesContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
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
  padding: "0 20px",
  margin: "0 auto",
  position: "relative",
  zIndex: 2, // ensure content appears above video + overlay
}));
