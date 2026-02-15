"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    borderRadius: 32,
    alignItems: "stretch",
    minHeight: "514px",
    overflow: "hidden",
    border: "none",
    outline: "none",

    boxShadow: `
        0 10px 40px rgba(0, 0, 0, 0.6), 
        0 30px 70px rgba(0, 0, 0, 0.4)
    `,

    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 100%), url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.up("xl")]: {
        minHeight: "714px",
    },

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        height: "auto",
        minHeight: "unset",
        borderRadius: 24,
        backgroundPosition: "top center",
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 100%), url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')`,
    },
}));

export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "66px 38px",
    color: theme.palette.text.primary,
    zIndex: 2,
    backgroundColor: "transparent",
    position: "relative",

    [theme.breakpoints.down("md")]: {
        padding: "50px 32px 40px 32px",

        "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))",
            zIndex: 1,
            pointerEvents: "none",
        }
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    position: "relative",
    overflow: "visible",
    padding: "0 16px 0 0",

    [theme.breakpoints.down("lg")]: {
        width: "100%",
        padding: "0",
        zIndex: 3,
    },
    [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: "0",
        zIndex: 3,
    },
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    borderRadius: "24px",

    filter: "drop-shadow(-15px 0px 20px rgba(0,0,0,0.9)) drop-shadow(15px 0px 20px rgba(0,0,0,0.6))",

    [theme.breakpoints.down("lg")]: {
        width: "100%",
        aspectRatio: "16 / 9",
        height: "auto",
        borderRadius: "0",

        filter: "drop-shadow(0px -15px 20px rgba(0,0,0,1))",
    },
    [theme.breakpoints.down("md")]: {
        width: "100%",
        aspectRatio: "4 / 4",
        height: "auto",
        borderRadius: "0",

        filter: "drop-shadow(0px -15px 20px rgba(0,0,0,1))",
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