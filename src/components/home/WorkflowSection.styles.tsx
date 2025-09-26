"use client";

import { Box, styled } from "@mui/material";

export const WorkflowSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",               // full screen section
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    padding: theme.spacing(8, 2),
    backgroundColor: "#181818",       // solid dark background ONLY here

    // center the navbar + card to 1100px like the design
    "& > *": {
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto",
    },

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 1.5),
        minHeight: "auto",
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