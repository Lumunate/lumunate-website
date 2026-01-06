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
}));

export const ContentBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: "0 30px",
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
    maxWidth: 400,
    lineHeight: "97%",
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
    marginLeft: theme.spacing(2),
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
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        marginRight: 0,
    },
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
    maxWidth: 420,
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
    top: theme.spacing(28),
    right: theme.spacing(4),
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
