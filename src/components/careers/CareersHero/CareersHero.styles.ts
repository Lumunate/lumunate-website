"use client";

import { Box, Typography, styled } from "@mui/material";

export const HeroRoot = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,

    [theme.breakpoints.down("md")]: {
        alignItems: "flex-start",
    },
}));

export const VideoBackground = styled("video")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
});

export const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to top, 
        ${theme.palette.background.default} 0%, 
        ${theme.palette.background.default} 5%, 
        transparent 30%
    )`,
    zIndex: 2,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    zIndex: 3,
    // paddingTop: "260px",
    paddingBottom: "0px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
        paddingTop: "164px",
        paddingBottom: "0px",
    },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "90px",
    fontWeight: 400,
    color: theme.palette.text.primary,
    lineHeight: 1.1,
    [theme.breakpoints.down("lg")]: {
        fontSize: "64px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "40px",
    },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    paddingTop: "21px",
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        paddingTop: "12px",
    },
}));