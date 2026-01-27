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
        backgroundColor: "#181818",
        borderTop: "1px solid #333",
        borderBottom: "1px solid #333",
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
        borderLeft: "1px solid #333",
        borderRight: "1px solid #333",
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
    color: "#5A5A5A",
    fontSize: "16px",
    borderLeft: "1px solid #333",
    transition: "background-color 0.3s ease, color 0.3s ease",
    whiteSpace: "nowrap",
    textAlign: "center",
    userSelect: "none",
    fontWeight: 400,
    lineHeight: 1.3,

    "&:hover": {
        backgroundColor: "rgba(255,255,255,0.05)",
        color: "#fff",
    },

    "&.active": {
        backgroundColor: "#292929",
        color: "#fff",
        fontWeight: 500,
    },

    // ✅ ADD right line after the last nav item (same as others)
    "&:last-of-type": {
        borderRight: "1px solid #333",
    },

    // ❌ REMOVE this (it was killing the first left line)
    // "&:first-of-type": { borderLeft: "none" },

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




