"use client";

import { Box, styled } from "@mui/material";

export const DifferentContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.primary,
    marginTop: "45px",
    [theme.breakpoints.down("md")]: {
        marginTop: "100px",
    },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1px",
    backgroundColor: theme.palette.divider,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "207px",
    position: "relative",

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },

}));

