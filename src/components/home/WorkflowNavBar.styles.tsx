"use client";

import { Box, styled, alpha } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.navbar.cardsNavBg,
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "sticky",
    zIndex: 1100,
    top: "80px",
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
            ${alpha(theme.palette.navbar.cardsNavActive, 0.10)} 0%, 
            ${alpha(theme.palette.navbar.cardsNavActive, 0.09)} 100%)`,

        // Inset shadow
        boxShadow: `inset 0px 1px 1px ${alpha(theme.palette.divider, 0.3)}`,
    },

    "&:hover": {
        opacity: 1,
        backgroundColor: theme.palette.action.hover,
    },

    [theme.breakpoints.down("md")]: {
        padding: "16px 20px",
        fontSize: "14px",
    },
}));