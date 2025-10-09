"use client";

import { Box, styled } from "@mui/material";

// ✅ Full-width outer container
export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vw", // spans full viewport
    backgroundColor: "#181818",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    [theme.breakpoints.down("md")]: {
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
}));

// ✅ Individual nav item
export const NavItem = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing(1.4)} ${theme.spacing(1.5)}`,
    cursor: "pointer",
    color: "#BDBDBD",
    fontSize: "0.95rem",
    fontWeight: 400,
    borderLeft: "1px solid #333",
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

    "&:first-of-type": {
        borderLeft: "none",
    },

    [theme.breakpoints.down("md")]: {
        minWidth: "150px",
        fontSize: "0.85rem",
        padding: `${theme.spacing(1)} ${theme.spacing(1.2)}`,
    },

    [theme.breakpoints.down("sm")]: {
        minWidth: "130px",
        fontSize: "0.8rem",
        padding: `${theme.spacing(0.8)} ${theme.spacing(1)}`,
    },
}));
