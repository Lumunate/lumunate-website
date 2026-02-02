"use client";

import { styled, Typography, Box } from "@mui/material";

export const ExploreWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: theme.spacing(0, 0),
  paddingBottom: "139px",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
    },
}));

export const ExploreText = styled(Typography)(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    fontWeight: 300,
    fontFamily: "Neue Montreal, sans-serif",
    fontSize: "clamp(2rem, 7.3vw, 12rem)",
    whiteSpace: "nowrap",
    color: `${theme.palette.text.primary}08`,
    letterSpacing: "0.05em",
    filter: "blur(1px)",
    userSelect: "none",
    lineHeight: 1.2,
}));
