"use client";

import { styled, Typography } from "@mui/material";

export const Explore = styled(Typography)(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    marginTop: 0,
    paddingBottom: theme.spacing(8),
    fontWeight: 300,
    fontFamily: theme.typography.fontFamily ?? "Montserrat, sans-serif",
    fontSize: "clamp(2rem, 7.3vw, 12rem)", 
    whiteSpace: "nowrap",
    color: theme.palette.text.primary + "08", 
    backgroundColor: theme.palette.background.default, 
    letterSpacing: "0.05em",
    filter: "blur(1px)",
    userSelect: "none",
    lineHeight: 1.2,
}));
