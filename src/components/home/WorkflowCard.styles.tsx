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
    alignItems: "stretch",
    minHeight: "514px",
    [theme.breakpoints.up("xl")]: {
        minHeight: "814px",
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
    justifyContent: "start",
    padding: "66px 38px",
    color: theme.palette.text.primary,
    position: "relative",
    zIndex: 2,

    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.80) 100%, rgba(0,0,0,0.2) 100%), url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center left",

    [theme.breakpoints.down("md")]: {
        padding: "40px 24px 0px 24px",
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    position: "relative",
    padding: 0,

    [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: 0,
        overflow: "visible",
        "&::after": {
            content: '""',
            position: "absolute",
            inset: "30px 0 auto 0",
            height: "100px",
            borderRadius: "30px",
            background: "linear-gradient(to bottom, #000 20%, transparent 100%)",
            zIndex: 5,
            pointerEvents: "none",
        }
    },
    [theme.breakpoints.up("md")]: {
        borderRadius: "30px 20px 30px 20px",
        overflow: "hidden",
        "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
            background: "linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 30%)",
        },
    }
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    backgroundColor: "transparent",

    [theme.breakpoints.down("md")]: {
        width: "100%",
        minHeight: "420px",
        borderRadius: "0",
        mixBlendMode: "screen",
        display: "block",

        boxShadow: "0px -50px 60px 10px rgba(0,0,0,1)",

        filter: "contrast(1.1) brightness(1.1)",
    },
    [theme.breakpoints.up("md")]: {
        borderRadius: "30px 20px 30px 20px",
    }
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
