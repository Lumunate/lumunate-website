"use client";

import { styled, Box, Typography } from "@mui/material";

export const HeaderRoot = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "1070px",
    overflow: "hidden",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
}));

export const BackgroundVideo = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "1070px",
    objectFit: "cover",
    zIndex: 0,
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
    height: "100%",
    background: `rgba(0,0,0,${overlayopacity})`,

    display: "flex",
    alignItems: "flex-end",

    paddingBottom: "85px",

    [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(6),
    },
}));

export const HeaderLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    paddingBottom: "47px",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "90px",
    fontWeight: 400,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
        fontSize: "52px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
        textAlign: "center",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "33px",
    fontWeight: 400,
    lineHeight: 1.3,
    color: theme.palette.text.primary,
    marginTop: "21px",
    [theme.breakpoints.down("md")]: {
        fontSize: "22px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        textAlign: "center",
    },
}));

export const HeaderRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.section.caseStudyDesc,
    opacity: 0.9,
    marginBottom: "54px",
    maxWidth: "823px",
    [theme.breakpoints.down("md")]: { fontSize: "16px", textAlign: "center" },
}));

export const MetaLabel = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.palette.section.caseStudyLabel,
}));

export const MetaValue = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.palette.text.primary,
}));
