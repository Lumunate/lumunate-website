"use client";

import { Box, Typography, Stack, styled } from "@mui/material";

// Root container full height and width
export const HeaderRoot = styled(Box)(({ theme }) => ({
    width: "100vw",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    padding: 0, 
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("lg")]: {
        maxWidth: "1000px",
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: theme.spacing(4),
        padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        padding: 0,
    },
}));

export const StyledH1 = styled(Typography)(({ theme }) => ({
    ...theme.typography.h1,
    color: "#fff",
    maxWidth: 500,
    lineHeight: 1.1,
    [theme.breakpoints.down("lg")]: {
        fontSize: "50px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "32px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
    },
}));

export const LeftBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(14), 
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        marginLeft: 0,
        marginBottom: theme.spacing(2),
    },
}));

export const RightBox = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: theme.spacing(3),
    marginRight: theme.spacing(14), 
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        marginRight: 0,
    },
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    maxWidth: 420,
    color: "#9F9F9F",
    lineHeight: 1.6,
    [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
        maxWidth: 350,
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "15px",
        maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
    },
}));

export const SocialStack = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    gap: theme.spacing(1.5),
    alignItems: "flex-end",
    [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
}));