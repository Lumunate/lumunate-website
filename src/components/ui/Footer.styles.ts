"use client";
import { styled, Box } from "@mui/material";
import Link from "next/link";

/* Root container */
export const FooterRoot = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.background.default, // ✅ theme bg
    borderTop: `1px solid ${theme.palette.divider ?? "#222"}`,
    color: theme.palette.text.secondary, // ✅ theme text
    width: "100%",
}));

export const FooterTop = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.divider ?? "#2B2B2B"}`,
    padding: theme.spacing(0, 2),
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
    height: 56,
    [theme.breakpoints.down("sm")]: {
        height: 48,
        padding: theme.spacing(0, 1.5),
    },
}));

export const FooterNavItem = styled(Link)(({ theme }) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
    textDecoration: "none",
    padding: "0 30px",
    transition: "color .25s ease",
    height: "100%",

    "&:hover": {
        color: theme.palette.text.primary,
    },

    "&::before, &::after": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "1px",
        backgroundColor: theme.palette.divider ?? "#2B2B2B",
    },
    "&::before": { left: 0 },
    "&::after": { right: 0 },

    "&.left-item": {
        marginLeft: theme.spacing(4),
    },
    "&.right-item": {
        marginRight: theme.spacing(4),
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: "0.85rem",
        padding: "0 20px",
    },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: `1px solid ${theme.palette.divider ?? "#2B2B2B"}`,
    maxWidth: "1280px",
    margin: "0 auto",
    width: "100%",
    height: 56,
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: "auto",
        padding: theme.spacing(2, 0),
        gap: theme.spacing(2),
        textAlign: "center",
    },
}));

export const FooterSection = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    "& .icon-item": {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 16px",
        height: "100%",
        "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "1px",
            backgroundColor: theme.palette.divider ?? "#2B2B2B",
        },
        "&::before": { left: 0 },
        "&::after": { right: 0 },
    },
    "&.left-icons": {
        marginLeft: theme.spacing(4),
    },
    "&.right-icons": {
        marginRight: theme.spacing(4),
    },
}));

export const FooterText = styled("span")(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
}));

export const FooterIconBox = styled(FooterSection)(() => ({}));
