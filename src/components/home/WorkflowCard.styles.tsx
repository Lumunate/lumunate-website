"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    position: "relative",
    borderRadius: "20px",
    alignItems: "stretch",

    minHeight: "560px",
    overflow: "hidden",

    backgroundColor: theme.palette.background.default,
    backgroundImage: `
        linear-gradient(to left, ${theme.palette.background.default} 0%, rgba(0,0,0,0.4) 100%), 
        linear-gradient(to right, ${theme.palette.background.default} 0%, rgba(0,0,0,0.4) 30%), 
        url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",

    boxShadow: `
        inset 0px 4px 10px rgba(255, 255, 255, 0.05),
        0px 10px 40px rgba(0, 0, 0, 0.6), 
        0px 30px 70px rgba(0, 0, 0, 0.4)
    `,

    "@media (min-width: 1920px)": {
        minHeight: "814px",
    },

    [theme.breakpoints.down("xl")]: {
        minHeight: "414px",
    },

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        height: "auto",
        minHeight: "350px",
        backgroundImage: `
            linear-gradient(to bottom, ${theme.palette.background.default} 0%, rgba(0,0,0,0.6) 100%), 
            url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')
        `,
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        height: "500px",
        minHeight: "650px",
        backgroundImage: `
            linear-gradient(to bottom, ${theme.palette.background.default} 0%, rgba(0,0,0,0.6) 100%), 
            url('https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893374/Cards_Background_q9vqww.webp')
        `,
    },
}));

export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "66px 48px",
    color: theme.palette.text.primary,
    zIndex: 3,
    position: "relative",

    [theme.breakpoints.down(1025)]: {
        flex: 1,
        padding: "40px 32px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "40px 32px 0px 32px",
        justifyContent: "flex-start",
    },
}));

export const CardRight = styled(Box)(({ theme }) => ({
    flex: 1.5,
    display: "flex",
    position: "relative",
    overflow: "hidden",
    marginRight: "13px",
    borderRadius: "20px",
    maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 10%)",
    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 10%)",

    [theme.breakpoints.down("lg")]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        flexGrow: 1,
        lineHeight: 0,
        fontSize: 0,
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 100%)",
    },
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "100%",
    height: "100%",
    //  minHeight: "550px",
    objectFit: "cover",
    alignSelf: "center",
    zIndex: 1,
    display: "block",

    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",

    [theme.breakpoints.down("lg")]: {
        aspectRatio: "unset",
        width: "100%",
        height: "100%",
        minHeight: "400px",
        borderTopRightRadius: "0px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        margin: 0,
        verticalAlign: "bottom",
    },
    [theme.breakpoints.down("md")]: {
        aspectRatio: "unset",
        minHeight: "200px",
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