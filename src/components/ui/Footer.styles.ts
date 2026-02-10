"use client";
import { styled, Box } from "@mui/material";
import Link from "next/link";

const NAV_SPACER_WIDTH = 64;
const ICON_CELL_WIDTH = 64;
const ICON_SPACER_WIDTH = 24;
const NOISE_SVG =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E";


export const FooterRoot = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`,
    width: "100%",
}));

export const FooterTop = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    overflow: "hidden",
    backgroundColor: "transparent",
    /* === CENTER STRIP (GRADIENT + NOISE) === */
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: NAV_SPACER_WIDTH * 4,
        right: NAV_SPACER_WIDTH * 4,

        backgroundImage: `
        linear-gradient(
            180deg,
            rgba(255,255,255,0.09) 0%,
            rgba(255,255,255,0.02) 100%
        ),
        url("${NOISE_SVG}")
    `,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",

        opacity: 0.15,
        pointerEvents: "none",
        zIndex: 0,
    },


    /* === INNER SHADOW (matches Figma effect panel) === */
    "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: NAV_SPACER_WIDTH * 4,
        right: NAV_SPACER_WIDTH * 4,

        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
        pointerEvents: "none",
        zIndex: 1,
    },

    /* Keep content above effects */
    "& > *": {
        position: "relative",
        zIndex: 2,
    },
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
