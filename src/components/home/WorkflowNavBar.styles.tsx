"use client";

import { Box, styled } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vw",
    backgroundColor: "#181818",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    position: "relative", // ✅ needed for pseudo lines

    // ✅ LEFT + RIGHT vertical lines (outer edges)
    "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        width: "1px",
        backgroundColor: "#333",
        pointerEvents: "none",
    },
    "&::after": {
        content: '""',
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: "1px",
        backgroundColor: "#333",
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
    color: "#5A5A5A",
    fontSize: "16px",
    fontWeight: 400,
    transition: "background-color 0.3s ease, color 0.3s ease",
    whiteSpace: "nowrap",
    textAlign: "center",
    userSelect: "none",
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

    [theme.breakpoints.down("md")]: {
        minWidth: "150px",
        fontSize: "0.85rem",
        padding: `${theme.spacing(1)} ${theme.spacing(1.2)}`,
        flex: "0 0 auto", // ✅ important for horizontal scroll
    },

    [theme.breakpoints.down("sm")]: {
        minWidth: "130px",
        fontSize: "0.8rem",
        padding: `${theme.spacing(0.8)} ${theme.spacing(1)}`,
    },
}));
