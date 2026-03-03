"use client";

import { Box, Typography, styled } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export const StackContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
});

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "56px",
    fontWeight: 400,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("lg")]: {
        fontSize: "42px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "30px",
    },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 400,
    color: theme.palette.text.secondary,
    paddingTop: "20px",
    lineHeight: 1.5,
    [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
    },
}));

export const ActionAndVideoArea = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: "44px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        marginTop: "40px",
    },
}));

export const VideoWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    flex: 1,
    marginLeft: "45px",
    marginRight: "-25%",
    borderRadius: "12px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
        width: "85%",
        marginLeft: "auto",
        marginRight: "-10%",
        marginTop: "32px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "85%",
    }
}));

export const VideoOverlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
    pointerEvents: "none",
    background: `
    linear-gradient(to left, ${theme.palette.background.default} 0%, transparent 15%),
    linear-gradient(to top, ${theme.palette.background.default} 0%, transparent 15%),
    linear-gradient(to bottom, ${theme.palette.background.default} 0%, transparent 15%)
  `,
    [theme.breakpoints.down("md")]: {
        background: `
      linear-gradient(to left, ${theme.palette.background.default} 0%, transparent 20%),
      linear-gradient(to top, ${theme.palette.background.default} 0%, transparent 20%),
      linear-gradient(to bottom, ${theme.palette.background.default} 0%, transparent 20%)
    `,
    }
}));

export const CareerVideo = styled("video")({
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
    opacity: "0.5",
    zIndex: 1,
});