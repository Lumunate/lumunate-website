"use client"

import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const ReadyContainer = styled(Box)({
  position: "relative",
  marginTop: "40px",
  width: "100%",
  height: "100vh",
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

export const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.45)", // optional darken for text contrast
  zIndex: 1,
});

export const TextWrapper = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  maxWidth: "1100px",
  margin: "0 auto",
  flexDirection: "column",
  textAlign: "center",
  zIndex: 2, // above video and overlay
});