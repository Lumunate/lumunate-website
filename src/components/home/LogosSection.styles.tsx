"use client";

import { Box, styled } from "@mui/material";

/* Root container */
export const LogosRoot = styled(Box)(({ theme }) => ({
    width: "100vw",
    overflow: "hidden",
    padding: "0 0",
    paddingBottom: "205px",
    paddingTop: "45px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        paddingBottom: "100px",
    },
}));

/* Moving track */
export const LogosTrack = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "max-content",
    gap: theme.spacing(10),

    animation: "logoScroll 30s linear infinite",

    "&:hover": {
        animationPlayState: "paused",
    },

    [theme.breakpoints.down("md")]: {
        gap: theme.spacing(6),
        animationDuration: "22s",
    },

    [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(4),
        animationDuration: "18s",
    },

    "@keyframes logoScroll": {
        "0%": {
            transform: "translateX(0)",
        },
        "100%": {
            transform: "translateX(-50%)",
        },
    },
}));

/* Individual logo */
export const LogoItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,

    "& img": {
        width: 80,
        height: 60,
        objectFit: "contain",
        filter: "grayscale(1)",
        opacity: 0.65,
        transition: "all 0.3s ease",

        [theme.breakpoints.down("md")]: {
            width: 60,
            height: 45,
        },

        [theme.breakpoints.down("sm")]: {
            width: 48,
            height: 36,
        },
    },

    "&:hover img": {
        filter: "grayscale(0)",
        opacity: 1,
    },
}));
