"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    borderRadius: 32,
    boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
    overflow: "hidden",
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.80) 100%, rgba(0,0,0,0.04) 100%), url('/design-bg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "stretch",
    minHeight: "514px",
    [theme.breakpoints.up("xl")]: {
        minHeight: "714px",
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        height: "auto",
        minHeight: "unset",
    },
}));

export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "66px 38px",
    color: theme.palette.text.primary,
    zIndex: 2,
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.80) 100%, rgba(0,0,0,0.2) 100%), url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')`,
    backgroundSize: "cover",

    [theme.breakpoints.down("md")]: {
        padding: "40px 24px 20px 24px",
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    position: "relative",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
        height: "auto",
        aspectRatio: "16 / 10", // Prevents stretching
        width: "100%",
        boxShadow: "0px -20px 40px rgba(0,0,0,0.5)",
    },
    [theme.breakpoints.up("md")]: {
        borderRadius: "30px 20px 30px 20px",
    }
}));

export const TopText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "16px",
    marginBottom: theme.spacing(2),
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "48px",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "28px",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    maxWidth: "542px",
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
    },
}));