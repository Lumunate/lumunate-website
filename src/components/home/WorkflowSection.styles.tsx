"use client";

import { Box, styled } from "@mui/material";

export const WorkflowSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "119px",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
        minHeight: "auto",
    },
}));

export const NavBarContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    [theme.breakpoints.up("lg")]: {
        justifyContent: "center",
    },
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flexShrink: 0,
    padding: "20px 32px",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    opacity: 0.6,
    fontSize: "16px",
    transition: "all 0.3s ease",
    position: "relative",
    borderLeft: `1px solid ${theme.palette.divider}`,

    "&.active": {
        opacity: 1,
        color: theme.palette.text.primary,
        fontWeight: 600,
        backgroundColor: theme.palette.background.default,
        "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "3px",
            backgroundColor: theme.palette.primary.main,
        }
    },

    [theme.breakpoints.down("md")]: {
        minWidth: "150px",
        textAlign: "center",
        padding: "16px 20px",
    },
}));