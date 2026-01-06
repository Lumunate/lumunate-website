"use client";

import { styled, Typography, Box } from "@mui/material";

export const ExploreWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default,
}));

export const ExploreText = styled(Typography)(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    marginTop: 0,
    fontWeight: 300,
    fontFamily: theme.typography.fontFamily ?? "Montserrat, sans-serif",
    fontSize: "clamp(2rem, 7.3vw, 12rem)",
    whiteSpace: "nowrap",
    color: theme.palette.text.primary + "08",
    letterSpacing: "0.05em",
    filter: "blur(1px)",
    userSelect: "none",
    lineHeight: 1.2,
}));
