"use client";

import { Box, styled, Toolbar } from "@mui/material";

export const NavContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: 0,
    padding: "8px 131px",
    color: "#363636",
    height: 80,

    [theme.breakpoints.down("lg")]: { padding: "8px 80px" },
    [theme.breakpoints.down("md")]: { padding: "8px 32px", height: 64 },
}));

export const StyledToolbar = styled(Toolbar)(() => ({
    justifyContent: "space-between",
    padding: 0,
    height: "100%",
    minHeight: "unset",
}));

export const LogoBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    flex: 1,
}));

export const MenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    height: "100%",
    "& > *:not(:last-child)": {
        marginRight: theme.spacing(3),
    },
}));

export const RightBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
}));

export const VerticalDivider = styled(Box)(() => ({
    width: "0.5px",
    minWidth: "0.5px",
    flexShrink: 0,
    height: "calc(100% + 16px)",
    marginTop: "-8px",
    marginBottom: "-8px",
    backgroundColor: "#343434",
}));
