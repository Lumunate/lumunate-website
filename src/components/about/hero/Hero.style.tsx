"use client";

import { Box, styled } from "@mui/material";
import { alignItems } from "@mui/system";

export const HeroContainer = styled(Box)({
  height: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

export const BackgroundVideo = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});


export const ContentContainer = styled(Box)(({theme})=>({
  height: "100%",
  maxWidth: "1698px",
  width: "100%",
  padding: "0 20px",
  display: "flex",
  alignItems: "end",
  margin: "0 auto",
  paddingBottom: "100px",
  justifyContent: "space-between",
  position: "relative",
  zIndex: 2,
  
}));
