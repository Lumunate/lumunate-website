"use client";

import { Box, Typography, Stack, styled } from "@mui/material";

// Root container full height
export const HeaderRoot = styled(Box)(() => ({
    width: "100%",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
}));

// Background image
export const SvgBg = styled(Box)(() => ({
    position: "absolute",
    inset: 0,
    zIndex: -1,
    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
}));

// Content container
export const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: theme.spacing(4),
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: theme.spacing(4),
    },
}));

// Left Section (Heading)
export const LeftBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
}));

export const StyledH1 = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "2.8rem",
    lineHeight: 1.2,
    color: "#fff",
    maxWidth: 500,
    [theme.breakpoints.up("md")]: {
        fontSize: "3.8rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
    },
}));

// Right Section (Text + Icons)
export const RightBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
    maxWidth: 420,
    color: "#fff",
    fontSize: "1.05rem",
    lineHeight: 1.6,
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
}));

export const SocialStack = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    gap: theme.spacing(1.5),
    alignItems: "flex-end",
    [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        justifyContent: "center",
    },
}));
