"use client";

import { Box, styled, Typography, alpha } from "@mui/material";

interface RootSectionProps {
    $mediaType: "video" | "image";
}

export const RootSection = styled(Box)<RootSectionProps>(({ theme, $mediaType }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(12, 0),
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",

    // TOP OVERLAY: Only visible for videos
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "200px",
        background: `linear-gradient(to bottom, ${theme.palette.background.default} 0%, transparent 100%)`,
        zIndex: 1,
        pointerEvents: "none",
        display: $mediaType === "video" ? "block" : "none",
    },

    // BOTTOM OVERLAY: Always visible
    "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "300px",
        background: `linear-gradient(to top, ${theme.palette.background.default} 0%, transparent 100%)`,
        zIndex: 1,
        pointerEvents: "none",
    }
}));

export const MediaBackground = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    filter: "brightness(0.5)",
}) as any;

export const ContentOverlay = styled(Box)({
    position: "relative",
    zIndex: 2,
    width: "100%",
});

export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontSize: "32px",
    fontWeight: 400,
    textAlign: "center",
    marginBottom: "48px",
    [theme.breakpoints.down("md")]: {
        fontSize: "22px",
        marginBottom: "32px",
    },
}));

export const CardWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.background.paper, 0.4),
    backdropFilter: "blur(12px)",
    border: `1px solid ${alpha(theme.palette.divider, 0.9)}`,
    borderRadius: "16px",
    padding: "40px",
    height: "100%",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        transform: "translateY(-8px)",
        borderColor: alpha(theme.palette.primary.main, 0.6),
        boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.6)}`,
    },
    [theme.breakpoints.down("lg")]: {
        padding: "32px 24px",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "20px 16px",
    },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 500,
    marginBottom: "20px",
    lineHeight: 1.2,
    color: theme.palette.common.white,
    [theme.breakpoints.down("lg")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        marginBottom: "12px",
    },
}));

export const CardDesc = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
    },
}));