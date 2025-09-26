"use client";
import { styled, Box } from "@mui/material";

/* Root */
export const HeaderRoot = styled("section")(() => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    color: "#fff",
}));

/* Background video */
export const BackgroundVideo = styled("video")(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
}));

/* Background image */
export const BackgroundImage = styled("img")(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
}));

/* Main container with configurable overlay */
export const HeaderContent = styled(Box, {
    shouldForwardProp: (prop) => prop !== "overlayopacity",
})<{ overlayopacity?: number }>(({ theme, overlayopacity = 0.4 }) => ({
    position: "relative",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "100%",
    padding: theme.spacing(6, 6),
    background: `rgba(0,0,0,${overlayopacity})`,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: theme.spacing(3),
        padding: theme.spacing(4, 2),
    },
}));

/* Left column */
export const HeaderLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    marginBottom: theme.spacing(17),
    [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(4),
    },
}));

/* Right column */
export const HeaderRight = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
}));

/* Description Paragraph */
export const Description = styled("p")(({ theme }) => ({
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "120%",
    letterSpacing: "-2%",
    color: "#CBCBCB",
    opacity: 0.9,
    marginBottom: theme.spacing(4),
    maxWidth: "900px",
    [theme.breakpoints.down("md")]: {
        fontSize: "16px",
    },
}));

export const MetaLabel = styled("span")(() => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#B8B8B8",
}));

export const MetaValue = styled("span")(() => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#FFFFFF",
}));
