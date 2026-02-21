"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    borderRadius: 32,
    alignItems: "stretch",
    minHeight: "714px",
    overflow: "hidden",

    backgroundColor: "#000",
    backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 100%), 
        url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "normal", // Blends the gradient and the image layer

    //  EFFECTS ---
    boxShadow: `
        /* 1. Inner Shadow (Figma: Inner shadow) */
        inset 0px 4px 10px rgba(255, 255, 255, 0.05),
        /* 2. Drop Shadow (Figma: Drop shadow) */
        0px 10px 40px rgba(0, 0, 0, 0.6), 
        0px 30px 70px rgba(0, 0, 0, 0.4)
    `,

    [theme.breakpoints.up("xl")]: {
        minHeight: "714px",
    },

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        height: "auto",
        minHeight: "unset",
        borderRadius: 32,
        backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 100%), 
            url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')
        `,
    },
}));

export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    padding: "66px 48px",
    color: theme.palette.text.primary,
    zIndex: 3,
    position: "relative",
    // Fix for 1024px and below to give text more room
    [theme.breakpoints.down(1025)]: {
        flex: 1,
        padding: "40px 32px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "50px 32px 40px 32px",
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1.5,
    display: "flex",
    position: "relative",
    overflow: "hidden",
    paddingRight: "16px",
    // Standard Desktop Mask
    maskImage: "linear-gradient(to right, transparent 0%, black 15%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",

    // Fix for 1024px: Reduce flex so video is smaller and adjust mask
    [theme.breakpoints.down(1024)]: {
        flex: 1, 
        maskImage: "linear-gradient(to right, transparent 0%, black 10%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%)",
    },

    [theme.breakpoints.down("lg")]: {
        width: "100%",
        paddingRight: "0px",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%)",
    },
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    aspectRatio: "16 / 16",

    borderTopRightRadius: "32px",
    borderBottomRightRadius: "32px",
    [theme.breakpoints.down("lg")]: {
        aspectRatio: "16 / 9",
    },
    [theme.breakpoints.down("md")]: {
        aspectRatio: "1 / 1",
    },
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