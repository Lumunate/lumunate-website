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
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default, 

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
        minHeight: "auto",
    },
}));

// NavBar container...
export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vw",
    borderTop: `1px solid ${theme.palette.divider ?? "#333"}`,
    borderBottom: `1px solid ${theme.palette.divider ?? "#333"}`,
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(2)} ${theme.spacing(8)}`, 
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: theme.palette.text.secondary, 
    borderLeft: `1px solid ${theme.palette.divider ?? "#333"}`,
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: theme.typography.fontWeightRegular,

    "&:hover": {
        backgroundColor: theme.palette.action.hover, 
        color: theme.palette.text.primary,
    },

    "&.active": {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightBold,
        boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
    },

    "&:first-of-type": {
        borderLeft: "none",
    },

    [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`, 
    },
}));
