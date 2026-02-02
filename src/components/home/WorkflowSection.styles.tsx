"use client";

import { Box, styled } from "@mui/material";

export const WorkflowSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    paddingBottom: "119px",

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
        minHeight: "auto",
        marginBottom: theme.spacing(10),
    },
}));

export const NavBarContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        width: "100vw",
        height: "100%",
        transform: "translateX(-50%)",

        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.navbar.border}`,
        borderBottom: `1px solid ${theme.palette.navbar.border}`,
        zIndex: -1,
    },

    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        width: "100vw",
        height: "100%",
        transform: "translateX(-50%)",
        borderLeft: `1px solid ${theme.palette.navbar.border}`,
        borderRight: `1px solid ${theme.palette.navbar.border}`,
        pointerEvents: "none",
        zIndex: -1,
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
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing(2.3)} ${theme.spacing(2)}`,
    cursor: "pointer",

    color: theme.palette.text.secondary,
    opacity: 0.55,

    fontSize: "16px",
    borderLeft: `1px solid ${theme.palette.navbar.border}`,
    transition: "background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease",
    whiteSpace: "nowrap",
    textAlign: "center",
    userSelect: "none",
    fontWeight: 400,
    lineHeight: 1.3,

    "&:hover": {
        backgroundColor: theme.palette.navbar.itemHoverBg,
        color: theme.palette.text.primary,
        opacity: 1,
    },

    "&&.active": {
        backgroundColor: `${theme.palette.background.default} !important`,
        color: theme.palette.text.primary,
        opacity: 1,
        fontWeight: 500,
        position: "relative",
        zIndex: 2,
    },

    "&&.active::before": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "1px",
        backgroundColor: theme.palette.navbar.border,
    },
    "&&.active::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "1px",
        backgroundColor: theme.palette.navbar.border,
    },

    [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
        padding: `${theme.spacing(1.4)} ${theme.spacing(2.2)}`,
        minWidth: "150px",
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        padding: `${theme.spacing(1)} ${theme.spacing(1.8)}`,
        minWidth: "130px",
    },
}));
