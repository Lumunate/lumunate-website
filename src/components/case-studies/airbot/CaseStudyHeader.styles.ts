"use client";
import { styled, Box, Typography } from "@mui/material";

export const HeaderRoot = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
}));

export const BackgroundVideo = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
})) as typeof Box;

export const BackgroundImage = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
})) as typeof Box;

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
    ...theme.typography.h2,
    fontWeight: 400,
    lineHeight: 1.2,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("md")]: {
        fontSize: "2.2rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
        textAlign: "center",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.h5,
    fontWeight: 400,
    lineHeight: 1.3,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
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
    ...theme.typography.body1,
    fontFamily: "Manrope, sans-serif",
    color: theme.palette.text.secondary,
    opacity: 0.9,
    marginBottom: theme.spacing(4),
    maxWidth: "900px",
    [theme.breakpoints.down("md")]: { fontSize: "16px" },
}));

export const MetaLabel = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.palette.text.secondary,
}));

export const MetaValue = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: theme.palette.text.primary,
}));
