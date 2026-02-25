"use client";

import { Box, styled, Typography, Paper } from "@mui/material";

export const RootSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10, 0),
    color: theme.palette.text.primary,
}));

export const MainGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr auto 1.5fr",
    alignItems: "stretch",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        gap: theme.spacing(4),
    },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
    paddingRight: "80px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
        paddingRight: "32px",
        justifyContent: "flex-start",
        marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
        paddingRight: 0,
    },
}));

export const VerticalDivider = styled(Box)(({ theme }) => ({
    width: "1px",
    backgroundColor: theme.palette.divider,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export const RightContent = styled(Box)(({ theme }) => ({
    paddingLeft: "80px",
    paddingTop: "80px",
    paddingBottom: "80px",
    [theme.breakpoints.down("lg")]: {
        paddingLeft: "32px",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
        paddingLeft: 0,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}));

export const CardGrid = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    "& > *:last-child": {
        gridColumn: "1 / span 2",
    },
    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr",
        gap: "20px",
        "& > *:last-child": {
            gridColumn: "auto",
        },
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr",
        gap: "20px",
        "& > *:last-child": {
            gridColumn: "auto",
        },
    },
}));

export const StyledCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "40px",
    borderRadius: "12px",
    border: `1px solid ${theme.palette.divider}`,
    backgroundImage: "none",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "100%",
    [theme.breakpoints.down("lg")]: {
        padding: "24px",
        gap: "16px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "12px 14px 12px 14px",
        gap: "12px",
    },
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    fontWeight: 500,
    color: theme.palette.text.primary,
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
    },
}));

export const CardDesc = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
    },
}));