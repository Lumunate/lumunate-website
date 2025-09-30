"use client";

import { Box, styled } from "@mui/material";

export const LogosRoot = styled(Box)(({ theme }) => ({
    width: "100vw",
    background: "#181818",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(4)} 0`,
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
}));

export const LogosRow = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1920px",
    [theme.breakpoints.down("md")]: {
        gap: theme.spacing(4),
        maxWidth: "900px",
    },
    [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(2),
        maxWidth: "100%",
    },
}));

export const LogoItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 40,
    maxWidth: 90,
    "& img": {
        width: 70,
        height: 60,
        objectFit: "contain",
        filter: "grayscale(1)",
        opacity: "64%",
        display: "block",
    },
    "& span": {
        color: theme.palette.text.secondary || "#bdbdbd",
        fontSize: "0.9rem",
        marginTop: theme.spacing(1),
        textAlign: "center",
    },
}));