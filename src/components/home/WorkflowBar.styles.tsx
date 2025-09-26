"use client";

import { Box, styled } from "@mui/material";

export const WorkflowBarRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1100px",
    backgroundColor: "#181818",
    // boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
    borderRadius: "0",
    border: "1px solid #333",
    overflow: "hidden",
    marginTop: theme.spacing(4),
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
        maxWidth: "100%",
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
        overflowX: "scroll",
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
            display: "none", // Chrome + Safari
        },
        borderRadius: "0",
        maxWidth: "100%",
    },
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: "#AAAAAA",
    borderLeft: "1px solid #333",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: 400,
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        color: "#fff",
    },
    "&.active": {
        backgroundColor: "#292929",
        color: "#fff",
        fontWeight: 600,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
    "&:first-of-type": {
        borderLeft: "none",
    },
    [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    },
}));
