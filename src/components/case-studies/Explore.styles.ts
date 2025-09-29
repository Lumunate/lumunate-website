"use client";

import { styled, Typography } from "@mui/material";

export const Explore = styled(Typography)(() => ({
    width: "100%",
    textAlign: "center",
    marginTop: 0,
    paddingBottom: "64px", // pb: 8
    fontWeight: 300,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "clamp(2rem, 7.3vw, 12rem)",
    whiteSpace: "nowrap",
    color: "#FFFFFF08",
    backgroundColor: "#0E0E0E",
    letterSpacing: "0.05em",
    filter: "blur(1px)",
    userSelect: "none",
    lineHeight: 1.2,
}));
