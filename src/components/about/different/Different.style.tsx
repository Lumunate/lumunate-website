"use client";

import { Box, styled } from "@mui/material";

export const DifferentContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.primary,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    position: "relative",
    marginBottom: "207px",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "12px",
    overflow: "hidden",

    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        top: "50%",
        height: "1px",
        backgroundColor: theme.palette.divider,
        pointerEvents: "none",
        zIndex: 10,
    },

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(1, 1fr)",

        "&::after": {
            display: "none",
        },
    },
}));

