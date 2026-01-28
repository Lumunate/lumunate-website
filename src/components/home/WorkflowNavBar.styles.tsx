"use client";

import { Box, styled } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vw",

    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.navbar.border}`,
    borderBottom: `1px solid ${theme.palette.navbar.border}`,

    overflow: "hidden",
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

    [theme.breakpoints.down("md")]: {
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
    },
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing(1.4)} ${theme.spacing(1.5)}`,
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


