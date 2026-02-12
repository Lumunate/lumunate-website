"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    // minHeight: "814px",
    // backgroundColor: theme.palette.background.paper,
    borderRadius: 32,
    boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
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

    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.80) 100%, rgba(0,0,0,0.2) 100%), url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')`,
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
    borderRadius: 32,
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 32,
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
