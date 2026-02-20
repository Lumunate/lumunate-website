"use client";

import { styled, Box, Typography } from "@mui/material";

export const HeaderRoot = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    // Changed: Remove hard maxHeight/minHeight to let content breathe
    minHeight: "100vh",
    overflow: "hidden",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("lg")]: {
        minHeight: "650px",
    },
    [theme.breakpoints.down("md")]: {
        minHeight: "850px",
    },
}));

export const BackgroundVideo = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    zIndex: 0,
    transform: "scale(1.05)",
})) as typeof Box;


export const BackgroundImage = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "1070px",
    objectFit: "cover",
    zIndex: 0,
})) as typeof Box;

export const HeaderContent = styled(Box, {
    shouldForwardProp: (prop) => prop !== "overlayopacity",
})<{ overlayopacity?: number }>(({ theme, overlayopacity = 0.4 }) => ({
    position: "relative",
    zIndex: 1,
    width: "100%",
    flexGrow: 1,
    display: "flex",
    alignItems: "flex-end",

    paddingTop: "120px",
    paddingBottom: "80px",

    background: `linear-gradient(
    to bottom,
    rgba(0,0,0,${overlayopacity}) 0%,
    rgba(0,0,0,0) 50%,
    rgba(0,0,0,0.8) 100%
  )`,

    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100px",
        background: `linear-gradient(to bottom, rgba(0,0,0,0), ${theme.palette.background.default})`,
        pointerEvents: "none",
        zIndex: 2,
    },

    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        paddingBottom: theme.spacing(8),
    },

    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
        paddingTop: "100px",
        paddingBottom: "40px",
    },
}));

export const HeaderLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(40px, 6vw, 90px)",
    fontWeight: 400,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        maxwidth: "279px",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "33px",
    fontWeight: 400,
    lineHeight: 1.3,
    color: theme.palette.text.primary,
    marginTop: "21px",
    [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.body1.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
        marginTop: "10px",
        textAlign: "left",
    },
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "100%",

    "& .meta-container": {
        [theme.breakpoints.up("md")]: {
            marginTop: "20px",
        },
    },

    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
    },
}));


export const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.section.caseStudyDesc,
    fontSize: "18px",
    lineHeight: 1.6,
    marginBottom: "40px",
    maxWidth: "823px",
    [theme.breakpoints.down("xl")]: {
        fontSize: "16px",
        textAlign: "left",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
        textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        fontSize: "14px",
    },
}));


export const MetaLabel = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.section.caseStudyLabel,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        whiteSpace: "nowrap",
    },
}));

export const MetaValue = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.text.primary,
    lineHeight: 1.2,

    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
}));