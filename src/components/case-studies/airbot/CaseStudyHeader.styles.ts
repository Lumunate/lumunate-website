"use client";
import { styled, Box, Typography } from "@mui/material";

export const HeaderRoot = styled(Box)(() => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    color: "#fff",
}));

export const BackgroundVideo = styled(Box)(({ }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
})) as typeof Box;

export const BackgroundImage = styled(Box)(({ }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
})) as typeof Box;

/* Overlay content */
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

export const HeaderLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    marginBottom: theme.spacing(17),
    [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));


export const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    fontSize: "3rem",
    lineHeight: 1.2,
    color: "#fff",
    [theme.breakpoints.down("md")]: {
        fontSize: "2.2rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
        textAlign: "center",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.3,
    color: "#CBCBCB",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        textAlign: "center",
    },
}));



export const HeaderRight = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
}));

export const Description = styled(Typography)(({ theme }) => ({
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "120%",
    letterSpacing: "-2%",
    color: "#CBCBCB",
    opacity: 0.9,
    marginBottom: theme.spacing(4),
    maxWidth: "900px",
    [theme.breakpoints.down("md")]: { fontSize: "16px" },
}));

export const MetaLabel = styled(Typography)(() => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#B8B8B8",
}));

export const MetaValue = styled(Typography)(() => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#FFFFFF",
}));
