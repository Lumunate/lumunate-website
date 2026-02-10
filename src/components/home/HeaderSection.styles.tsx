"use client";

import { Box, Typography, Stack, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const HeaderRoot = styled(Box)(({ }) => ({
    width: "100vw",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const SvgBg = styled(Box)(({ theme }) => ({
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

    // Bottom blur blended
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,

        height: "40px",
        zIndex: 2,
        pointerEvents: "none",

        // Tint the blur with theme background default (#0E0E0E)
        background: `
      linear-gradient(
        to top,
        ${alpha(theme.palette.background.default, 0.95)} 0%,
        ${alpha(theme.palette.background.default, 0.75)} 30%,
        ${alpha(theme.palette.background.default, 0.35)} 60%,
        ${alpha(theme.palette.background.default, 0)} 100%
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
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        paddingTop: "100px",
        gap: theme.spacing(3),
    },
}));

export const StyledH1 = styled(Typography)(({ theme }) => ({
    ...theme.typography.h1,
    color: theme.palette.section.heading,
    maxWidth: "713px",
    lineHeight: "97%",
    fontSize: "90px",
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("xl")]: {
        fontSize: "70px",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "50px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "40px",
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
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: "20px",
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
    color: theme.palette.section.desc,

    maxWidth: "607px",
    lineHeight: 1.6,

    [theme.breakpoints.down("lg")]: {
        ...theme.typography.body1,
        maxWidth: 550,
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        ...theme.typography.h6,
        maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        ...theme.typography.h6,
    },
}));

export const SocialStack = styled(Stack)(({ theme }) => ({
    position: "absolute",
    top: "280px",
    bottom: "100px",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    alignItems: "flex-end",
    padding: "0 0",
    zIndex: 2,

    [theme.breakpoints.down("md")]: {
        position: "static",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
    },
}));
