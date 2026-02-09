"use client";
import { styled, Box } from "@mui/material";
import Link from "next/link";

const NAV_SPACER_WIDTH = 64;
const ICON_CELL_WIDTH = 64;
const ICON_SPACER_WIDTH = 24;

export const FooterRoot = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`,
    width: "100%",
}));

export const FooterTop = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
}));

export const FooterSpacer = styled(Box)<{ variant?: "icon" }>(({ theme, variant }) => ({
    width: variant === "icon" ? ICON_SPACER_WIDTH : NAV_SPACER_WIDTH,
    height: "100%",
    position: "relative",

    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: "1px",
        backgroundColor: theme.palette.divider,
    },
}));

export const FooterNavItem = styled(Link)(({ theme }) => ({
    width: NAV_SPACER_WIDTH * 3,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
    textDecoration: "none",

    "&:hover": {
        color: theme.palette.text.primary,
    },

    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: "1px",
        backgroundColor: theme.palette.divider,
    },
}));

export const FooterSection = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "100%",

    "& .icon-item": {
        width: ICON_CELL_WIDTH,
        height: "100%",
        position: "relative",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "transparent !important",

        "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "1px",
            backgroundColor: theme.palette.divider,
        },

        "& img": {
            position: "relative",
            zIndex: 2,
        },

        "&::before": {
            content: '""',
            position: "absolute",
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: theme.palette.action.hover,
            opacity: 0,
            transition: "opacity 0.2s ease",
            zIndex: 1,
        },

        "&:hover::before": {
            opacity: 1,
        },
    },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: `1px solid ${theme.palette.divider}`,
}));

export const FooterText = styled("span")(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
}));
