"use client";

import { Box, styled, alpha } from "@mui/material";

export const WorkflowSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "119px",
    [theme.breakpoints.up("lg")]: {
        paddingTop: "16px",
    },
    [theme.breakpoints.down("lg")]: {
        paddingTop: "16px",
    },
    [theme.breakpoints.down("md")]: {
        paddingBottom: theme.spacing(6),
        minHeight: "auto",
    },
}));

export const NavBarContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    backgroundColor: theme.palette.navbar.cardsNavBg,
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

    "&:last-of-type": {
        borderRight: `1px solid ${theme.palette.divider}`,
    },

    "&.active": {
        color: theme.palette.text.primary,
        opacity: 1,
        fontWeight: 600,

        background: `linear-gradient(180deg, 
            ${alpha(theme.palette.common.white, 0.09)} 0%, 
            ${theme.palette.navbar.cardsNavActive} 100%)`,

        backgroundColor: theme.palette.navbar.cardsNavActive,

        // Inset shadow 
        boxShadow: `inset 0px 1px 1px ${alpha(theme.palette.common.white, 0.1)}`,
    },

    "&:hover": {
        opacity: 1,
        backgroundColor: alpha(theme.palette.navbar.cardsNavActive, 0.5),
    },

    [theme.breakpoints.down("md")]: {
        padding: "16px 20px",
        fontSize: "14px",
    },
}));