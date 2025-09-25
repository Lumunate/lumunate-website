"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    maxWidth: "1100px",
    minHeight: 400,
    background: "transparent",
    borderRadius: 24,
    boxShadow: "0 0 24px 0 rgba(0,0,0,0.25)",
    overflow: "hidden",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        minHeight: 0,
        boxShadow: "none",
        borderRadius: 0,
    },
}));

export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(6),
    color: "#fff",
    position: "relative",

    // texture background
    backgroundImage: "url('/design-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center left",

    // lighter overlay (reduce darkness)
    backgroundColor: "rgba(0,0,0,0.4)",   // was darker before
    backgroundBlendMode: "multiply",

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
    },
}));


export const CardRight = styled(Box)(({ }) => ({
    flex: 1,
    display: "flex",
    alignItems: "stretch",   
    justifyContent: "center",
}));

export const WorkflowVideo = styled("video")(({ }) => ({
    width: "100%",
    height: "100%",         
    objectFit: "cover",      
    borderRadius: 0,      
}));


export const TopText = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    color: "#bdbdbd",
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    color: "#fff",
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
        lineHeight: "1.2",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: "#AAAAAA",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginBottom: theme.spacing(2),
    },
}));
