"use client";

import { Box, styled } from "@mui/material";

export const WorkflowNavBarRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1100px",
    backgroundColor: "#181818",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
    borderLeft: "1px solid #333",
    borderRight: "1px solid #333",
    overflow: "hidden",
    margin: "0 auto",
    marginTop: theme.spacing(4),

    [theme.breakpoints.up("md")]: {
        justifyContent: "space-between",
    },

    [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
            display: "none", // Chrome/Safari
        },
    },
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "180px",
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    cursor: "pointer",
    color: "#AAAAAA",
    borderLeft: "1px solid #333",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: 400,
    whiteSpace: "nowrap",
    textAlign: "center",

    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
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
        minWidth: "160px",
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
        fontSize: "15px",
    },

    [theme.breakpoints.down("sm")]: {
        minWidth: "140px",
        padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
        fontSize: "14px",
    },
}));
