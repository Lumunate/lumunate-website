"use client";

import { alpha, Box, styled, TextField } from "@mui/material";

export const VideoHeader = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    overflow: "hidden",

    height: "720px",
    [theme.breakpoints.up("md")]: {
        height: "900px",
    },
    [theme.breakpoints.up("lg")]: {
        height: "1069px",
    },

    "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: 1,
    },

    "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        zIndex: 2,
        backdropFilter: "blur(26px)",
        WebkitBackdropFilter: "blur(26px)",

        WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 78%)",
        maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 78%)",
    },
}));

export const BottomBlur = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "80px",
    zIndex: 3,
    pointerEvents: "none",

    background: `
    linear-gradient(
      to top,
      ${alpha(theme.palette.background.default, 0.95)} 0%,
      ${alpha(theme.palette.background.default, 0.75)} 30%,
      ${alpha(theme.palette.background.default, 0.35)} 60%,
      ${alpha(theme.palette.background.default, 0)} 100%
    )
  `,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
}));


export const BackgroundVideo = styled("video")({
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
});

export const HeroContent = styled(Box)(({ theme }) => ({
    position: "relative",
    zIndex: 7,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
    },
}));

export const ContactForm = styled("form")(({ theme }) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "32px",
    columnGap: "61px",

    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr 1fr",
    },
}));


export const ContactTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputLabel-root": {
        fontSize: "22px",
        fontWeight: 400,
        color: alpha(theme.palette.text.primary, 0.75),
        transform: "none",
        position: "relative",
        marginBottom: "16px",
    },

    "& .MuiInputBase-input": {
        fontSize: "14px",
        color: alpha(theme.palette.text.primary, 0.92),
        padding: "0 0 14px 0",
    },

    "& .MuiInputBase-input::placeholder": {
        fontSize: "14px",
        opacity: 0.55,
        color: alpha(theme.palette.text.primary, 0.55),
    },

    "& .MuiInput-underline:before": {
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.18)}`,
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.35)}`,
    },
    "& .MuiInput-underline:after": {
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.35)}`,
    },

    "& .MuiSvgIcon-root": {
        color: alpha(theme.palette.text.primary, 0.55),
    },

    "& .MuiSelect-icon": {
        color: alpha(theme.palette.text.primary, 0.55),
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "22px",
    },

    "& .MuiFormHelperText-root": {
        marginLeft: 0,
        color: theme.palette.error.main,
    },

    "& textarea": {
        fontSize: "14px",
        lineHeight: 1.4,
    },
}));


export const FullRow = styled(Box)(({ theme }) => ({
    gridColumn: "1 / -1",
    position: "relative",

    "& .MuiInput-underline:before": {
        borderBottom: "none !important",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "none !important",
    },
    "& .MuiInput-underline:after": {
        borderBottom: "none !important",
    },

    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        height: "1px",
        width: "100%",
        background: theme.palette.divider,
        pointerEvents: "none",
    },

    [theme.breakpoints.up("lg")]: {
        "&::after": {
            width: "70%",
        },
    },

    "& .MuiInputLabel-root": { marginBottom: "10px" },
    "& .MuiInputBase-root.MuiInputBase-multiline": { padding: "0 0 14px 0" },
    "& .MuiInputBase-inputMultiline": {
        padding: "0 !important",
        margin: 0,
        fontSize: "14px",
        lineHeight: 1.4,
    },
}));


