"use client";

import Link from "next/link";
import { IconButton, styled, IconButtonProps, Box } from "@mui/material";

const NAV_SPACER_WIDTH = 64;
const ICON_CELL_WIDTH = 64;
const SMALL_SPACER_WIDTH = 32;

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
    height: 56,
    borderBottom: `1px solid ${theme.palette.divider}`,
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        [theme.breakpoints.up("sm")]: {
            left: NAV_SPACER_WIDTH * 4,
            right: NAV_SPACER_WIDTH * 4,
        },
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 100%), url("${NOISE_SVG}")`,
        opacity: 0.15,
        zIndex: 0,
    },
}));

export const NoiseOverlay = styled(Box)({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 100%), url("${NOISE_SVG}")`,
    opacity: 0.15,
    zIndex: 0,
    pointerEvents: "none",
});

export const FooterNavItem = styled(Link)(({ theme }) => ({
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontSize: "14px",
    color: theme.palette.mode === 'light'
        ? theme.palette.section.desc
        : theme.palette.section.muted,
    textDecoration: "none",
    zIndex: 2,
    transition: theme.transitions.create("color", {
        duration: theme.transitions.duration.shortest,
    }),
    "&:hover": {
        color: theme.palette.navbar.itemTextHover,
    },
    [theme.breakpoints.up("sm")]: {
        width: NAV_SPACER_WIDTH * 3,
        flex: "none",
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));


export const IconWrapper = styled(
    IconButton
)<IconButtonProps & { component?: "a" }>(({ theme }) => ({
    width: ICON_CELL_WIDTH,
    height: "100%",
    borderRadius: 0,
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 2,
    borderLeft: `1px solid ${theme.palette.divider}`,

    // Target the image inside the wrapper
    "& img": {
        // In Light Mode, apply a filter to make white icons appear dark/black
        filter: theme.palette.mode === 'light'
            ? "brightness(0) saturate(100%) invert(30%)" // Adjust hex/color via filter
            : "none",
        transition: "filter 0.3s ease",
    },

    "&::before": {
        content: '""',
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: theme.palette.navbar.itemHoverBg,
        opacity: 0,
        transition: "opacity 0.2s ease",
        zIndex: -1,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },

    "&:hover::before": { opacity: 1 },
    "&:hover": { backgroundColor: "transparent" },

    "&.mobile-icon": {
        flex: 1,
        maxWidth: 100,
        "&:first-of-type": {
            borderLeft: "none !important",
        },
    }
}));

export const FooterSpacer = styled(Box)<{ size?: "small" }>(({ theme, size }) => ({
    width: size === "small" ? SMALL_SPACER_WIDTH : NAV_SPACER_WIDTH,
    height: "100%",
    borderLeft: `1px solid ${theme.palette.divider}`,
    backgroundColor: "transparent",
}));

export const FooterSpacer = styled(Box)<{ size?: "small" }>(
    ({ theme, size }) => ({
        width: size === "small" ? SMALL_SPACER_WIDTH : NAV_SPACER_WIDTH,
        height: "100%",
        borderLeft: `1px solid ${theme.palette.divider}`,
        backgroundColor: "transparent",
    })
);

export const FooterBottom = styled(Box)({
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const FooterText = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: theme.palette.mode === 'light'
        ? theme.palette.section.desc
        : theme.palette.text.secondary,
    letterSpacing: "0.5px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
    },
}));