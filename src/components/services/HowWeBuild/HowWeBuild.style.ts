"use client";

import { Box, styled, Typography, alpha } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
        height: "auto",
        minHeight: "120vh",
        padding: theme.spacing(15, 0),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}));

export const BackgroundVideo = styled("video")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -2,
    [theme.breakpoints.down("md")]: {
        minHeight: "100%",
    },
}));

export const VideoOverlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    inset: 0,

    background: `
    linear-gradient(to right, ${theme.palette.background.default} 40%, ${alpha(theme.palette.background.default, 0.4)} 100%),
    linear-gradient(to bottom, ${theme.palette.background.default} 0%, transparent 10%, transparent 90%, ${theme.palette.background.default} 100%)
  `,
    zIndex: -1,
}));

export const ContentGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "0.8fr 1.2fr",
    gap: "64px",
    width: "100%",
    zIndex: 1,
    alignItems: "start",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        gap: theme.spacing(4),
    },
}));

export const StepsList = styled(Box)({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: 0,
});

export const StepItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== "active" && prop !== "isFirst" && prop !== "isLast",
})<{ active?: boolean; isFirst?: boolean; isLast?: boolean }>(({ theme, active, isFirst, isLast }) => ({
    position: "relative",
    cursor: "pointer",
    paddingBottom: isLast ? 0 : "32px",
    paddingLeft: "25px",
    display: "flex",
    alignItems: "flex-start",
    minHeight: "24px",

    "&::before": {
        content: '""',
        position: "absolute",
        left: "7px",
        top: isFirst ? "12px" : 0,
        bottom: isLast ? "calc(100% - 12px)" : 0,
        width: "1px",
        backgroundColor: alpha(theme.palette.text.primary, 0.15),
        zIndex: 1,
    },

    "&::after": {
        content: '""',
        position: "absolute",
        left: "0px",
        top: "12px",
        transform: "translateY(-50%)",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: active ? (theme.palette as any).section?.processNumber : alpha(theme.palette.text.primary, 0.2),
        boxShadow: active ? `0 0 15px ${(theme.palette as any).section?.processNumber}` : "none",
        transition: "all 0.4s ease",
        zIndex: 2,
    },
}));

export const StepTitle = styled(Typography, {
    shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
    fontSize: "24px",
    fontWeight: 400,
    color: active ? (theme.palette as any).section?.processNumber : alpha(theme.palette.text.primary, 0.3),
    transition: "color 0.4s ease",
    lineHeight: "24px",
    display: "block",
    [theme.breakpoints.down("lg")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
    },
}));

export const DescriptionBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
});

export const ActiveContentTitle = styled(Typography)(({ theme }) => ({
    color: (theme.palette as any).section?.heading,
    marginBottom: "32px",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: "40px",
    display: "block",
    [theme.breakpoints.down("lg")]: {
        fontSize: "20px",
        marginBottom: "18px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        marginBottom: "12px",
    },
}));