"use client";

import { Box, styled } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.navbar.border}`,
    position: "sticky",
    zIndex: 1100,

    top: "88px",
    marginTop: "24px",

    overflowX: "auto",
    overflowY: "hidden",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },

    [theme.breakpoints.up("lg")]: {
        justifyContent: "center",
        overflowX: "hidden",
        top: "120px",
        marginTop: "40px",
    },
}));
export const NavItem = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    minWidth: "fit-content",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    opacity: 0.55,
    fontSize: "14px",
    fontWeight: 400,
    borderLeft: `1px solid ${theme.palette.navbar.border}`,

    "&:first-of-type": {
        borderLeft: "none",
    },

    "&.active": {
        backgroundColor: `${theme.palette.background.default} !important`,
        color: theme.palette.text.primary,
        opacity: 1,
        fontWeight: 600,
        boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
    },
}));