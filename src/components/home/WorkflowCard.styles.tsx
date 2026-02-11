"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    position: "relative",
    borderRadius: 32,
    boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
    overflow: "hidden",
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.80) 100%, rgba(0,0,0,0.04) 100%), url('/design-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        height: "auto",
    },
}));

export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "66px 38px",
    color: theme.palette.text.primary,
    position: "relative",
    zIndex: 2,

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: "30px 20px 30px 20px",
    padding: "0 0px 0 0",

    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        right: "16px",
        left: 0,
        borderRadius: "30px 20px 30px 20px",
        pointerEvents: "none",
        zIndex: 1,
        background: "linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 30%)",
    },

    [theme.breakpoints.down("md")]: {
        padding: "0",
        "&::after": {
            inset: 0,
            borderRadius: 0
        }
    },
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "30px 20px 30px 20px",
    zIndex: 0,
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
        maxHeight: "297px",
        maxWidth: "345px",
        objectFit: "cover"
    },
}));

export const TopText = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,

    color: theme.palette.text.secondary,

    fontWeight: 400,
    fontSize: "16px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,

    color: theme.palette.text.primary,

    fontWeight: 400,
    fontSize: "48px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "28px",
        lineHeight: "1.2",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    width: "100%",
    maxWidth: "542px",
    color: theme.palette.text.secondary,

    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        marginBottom: theme.spacing(2),
    },
}));
