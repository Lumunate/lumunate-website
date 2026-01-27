"use client";

import { Box, Typography, Stack, styled } from "@mui/material";

export const HeaderRoot = styled(Box)(({ }) => ({
    width: "100vw",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const SvgBg = styled(Box)(() => ({
    position: "absolute",
    inset: 0,
    zIndex: -1,
    overflow: "hidden",
    pointerEvents: "none",

    "& video": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    //  Bottom blur blended
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,

        height: "40px",
        zIndex: 2,
        pointerEvents: "none",

        // Tint the blur with logos bg color
        background: `
      linear-gradient(
        to top,
        rgba(14,14,14,0.95) 0%,
        rgba(14,14,14,0.75) 30%,
        rgba(14,14,14,0.35) 60%,
        rgba(14,14,14,0) 100%
      )
    `,

        // real blur
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
    },
}));



export const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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
    color: "#ffffff",
    maxWidth: "713px",
    lineHeight: "97%",
    fontSize: "90px",
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("lg")]: {
        fontSize: "90px",
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
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        marginRight: 0,
    },
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
    maxWidth: "607px",
    lineHeight: 1.6,

    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
        maxWidth: 550,
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
    position: "absolute",
    top: "280px",
    bottom: "100px",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    alignItems: "flex-end",
    padding: "0 30px",
    zIndex: 2,

    [theme.breakpoints.down("md")]: {
        position: "static",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(3),
    },
}));
