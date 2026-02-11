"use client";

import { styled, Box, Typography } from "@mui/material";

export const HeaderRoot = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    minHeight: "600px",
    maxHeight: "1070px",
    overflow: "hidden",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xl")]: {
        height: "700px",
        minHeight: "800px",
        maxHeight: "700px",
    },
    [theme.breakpoints.down("md")]: {
        height: "700px",
        minHeight: "700px",
        maxHeight: "700px",
    },
}));

export const BackgroundVideo = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center bottom",
    zIndex: 0,
    transform: "scale(1.1)",
    transformOrigin: "bottom center",
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

    background: `linear-gradient(
    to bottom,
    rgba(0,0,0,${overlayopacity}) 0%,
    rgba(0,0,0,0) 50%,
    rgba(0,0,0,${overlayopacity}) 100%
  )`,

    display: "flex",
    alignItems: "flex-end",
    paddingBottom: "60px",

    /* Bottom Blur Fade into theme background */
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "40px",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        background: `linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0%,
      ${theme.palette.background.default} 100%
    )`,
        pointerEvents: "none",
        zIndex: 2,
    },

    [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(4),
    },

    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
        paddingTop: "100px",
        paddingBottom: 0,
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
    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
        textAlign: "left",
        paddingBottom: "0px",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "90px",
    fontWeight: 500,
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
        fontSize: "40px",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "33px",
    fontWeight: 400,
    lineHeight: 1.3,
    color: theme.palette.text.primary,
    marginTop: "21px",
    [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.h5.fontSize,
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

    "& .meta-container": {
        [theme.breakpoints.up("md")]: {
            transform: "translateY(-35px)",
        },
        [theme.breakpoints.up("xl")]: {
            transform: "translateY(-35px)",
        }
    },

    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
    },
}));


export const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.section.caseStudyDesc,
    opacity: 1,
    fontSize: theme.typography.body1.fontSize,
    marginBottom: "54px",
    maxWidth: "823px",
    [theme.breakpoints.down("md")]: {
        fontSize: "16px", textAlign: "center"
    },
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        marginTop: "0px",
        marginBottom: "30px",
        fontSize: "14px",
    },
}));


export const MetaLabel = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.section.caseStudyLabel,
    lineHeight: 1.2,
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
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