"use client";

import { Box, IconButton, Typography, styled } from "@mui/material";

export const JourneyRoot = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
        paddingTop: "100px",
        paddingBottom: "100px",
    },
}));

export const TimelineContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "495px",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        height: "auto",
        marginTop: theme.spacing(0),
    },
}));


export const TimelineItem = styled(Box, {
    shouldForwardProp: (prop) => prop !== "isHovered",
})<{ isHovered: boolean }>(({ theme, isHovered }) => ({
    flex: isHovered ? 2.8 : 1,
    position: "relative",
    padding: "52px 24px",
    borderLeft: `1px solid ${theme.palette.divider}`,
    transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",

    "&:last-child": {
        borderRight: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },

    borderBottom: `1px solid ${theme.palette.divider}`,
    borderTop: `1px solid ${theme.palette.divider}`,

    [theme.breakpoints.down("md")]: {
        flex: "none !important",
        height: isHovered ? "auto" : "180px",
        padding: "40px 24px",
        border: `1px solid ${theme.palette.divider}`,
        marginBottom: "-1px",
        justifyContent: isHovered ? "flex-start" : "center",
        flexDirection: "column-reverse",
        "&:last-child": {
            marginBottom: 0
        }
    },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0.05em",
    color: theme.palette.text.primary,
    marginBottom: "40px",
    maxWidth: "400px",
    textTransform: "uppercase",
    opacity: 0,
    maxHeight: 0,
    transform: "translateY(20px)",
    transition: "all 0.5s ease 0.1s",
    pointerEvents: "none",
    "&.visible": {
        opacity: 1,
        maxHeight: "500px",
        transform: "translateY(0)",
        marginTop: "20px",
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
        marginBottom: "20px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        marginBottom: "0",
    },
}));

export const YearText = styled(Typography)(({ theme }) => ({
    fontSize: "27px",
    fontWeight: 400,
    color: theme.palette.text.primary,
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    "&::before": {
        content: '"—"',
        marginRight: theme.spacing(1.5),
        color: theme.palette.section.muted,
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "20px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "26px",
    }
}));

export const BottomWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: "60px",
});

export const ProgressBar = styled(Box)(({ theme }) => ({
    flex: 1,
    height: "2px",
    backgroundColor: theme.palette.divider,
    position: "relative",
}));

export const ProgressFill = styled(Box)<{ progress: number }>(({ theme, progress }) => ({
    width: `${progress}%`,
    height: "1px",
    backgroundColor: theme.palette.text.primary,
    transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
}));

export const ArrowContainer = styled(Box)({
    display: "flex",
    gap: "8px",
    paddingLeft: "40px",
});

export const ArrowButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: "8px",
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: theme.palette.navbar.itemHoverBg,
        transform: "scale(1.1)",
    },
}));