"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    // minHeight: "814px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 32,
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
    overflow: "hidden",

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
    gap: "32px",

    color: theme.palette.text.primary,
    position: "relative",
    zIndex: 2,

    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%), url('/design-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center left",

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
}));

export const TopText = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,

    color: theme.palette.text.secondary,

    fontWeight: 400,
    fontSize: "16px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,

    color: theme.palette.text.primary,

    fontWeight: 400,
    fontSize: "48px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
        lineHeight: "1.2",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,

    color: theme.palette.text.secondary,

    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginBottom: theme.spacing(2),
    },
}));
