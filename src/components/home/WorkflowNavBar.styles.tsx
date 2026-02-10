"use client";

import { Box, styled } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.navbar.border}`,
    borderBottom: `1px solid ${theme.palette.navbar.border}`,
    overflowX: "hidden",
    overflowY: "hidden",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    position: "relative",

    "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "1px",
        backgroundColor: theme.palette.navbar.border,
        pointerEvents: "none",
    },
    "&::after": {
        content: '""',
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: "1px",
        backgroundColor: theme.palette.navbar.border,
        pointerEvents: "none",
    },

    // Scroll-x for screens below lg
    [theme.breakpoints.down("lg")]: {
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    opacity: 0.55,
    fontSize: "16px",
    fontWeight: 400,
    whiteSpace: "nowrap",
    userSelect: "none",
    lineHeight: 1.3,

    // separators
    borderLeft: `1px solid ${theme.palette.navbar.border}`,
    "&:last-of-type": {
        borderRight: `1px solid ${theme.palette.navbar.border}`,
    },

    transition: "background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease",

    "&:hover": {
        backgroundColor: `${theme.palette.navbar.itemHoverBg} !important`,
        color: theme.palette.text.primary,
        opacity: 1,
    },

    "&.active": {
        backgroundColor: `${theme.palette.background.default} !important`,
        color: theme.palette.text.primary,
        opacity: 1,
        fontWeight: 500,
        position: "relative",
        zIndex: 2,
        boxShadow: `
      inset 0 1px 0 ${theme.palette.navbar.border},
      inset 0 -1px 0 ${theme.palette.navbar.border}
    `,
        backgroundClip: "padding-box",
    },
}));
