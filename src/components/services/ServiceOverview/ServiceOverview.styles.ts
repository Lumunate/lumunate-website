"use client";

import { styled, Box } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
    paddingTop: "120px",
    paddingBottom: "120px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
        paddingTop: "80px",
        paddingBottom: "80px",
    },
}));

export const CardBox = styled(Box)(({ theme }) => ({
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {
        padding: "25px 25px",
    },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
    color: theme.palette.button.discoverBg,
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    "& svg": {
        fontSize: "32px",
    },
    [theme.breakpoints.down("sm")]: {
        marginBottom: "14px",
    },
}));