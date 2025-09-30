"use client";

import { Box, Typography, styled } from "@mui/material";

export const TestimonialRoot = styled(Box)(({ theme }) => ({
    width: "100vw",
    background: theme.palette.background.default, // use global bg
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    padding: `${theme.spacing(12)} ${theme.spacing(6)}`, // theme spacing
}));

export const TestimonialContent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1654px",
    margin: "0 auto",
    padding: 0,
    gap: theme.spacing(8),
    [theme.breakpoints.down("lg")]: {
        maxWidth: "1098px",
        gap: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(4),
        textAlign: "center",
        padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        gap: theme.spacing(2),
        padding: 0,
    },
}));

export const TestimonialHeading = styled(Typography)(({ theme }) => ({
    ...theme.typography.h2, // global h2 style
    color: theme.palette.text.primary, // used text color
    fontWeight: 400,
    maxWidth: 450,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
        maxWidth: "100%",
        marginLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.4rem",
        marginLeft: 0,
    },
}));

export const TestimonialBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: 420,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        maxWidth: "100%",
        marginRight: 0,
    },
}));

export const StarsRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
}));

export const TestimonialText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.text.secondary, // use secondary text
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.body1.fontSize, // from theme
    [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.body2.fontSize,
    },
}));

export const AuthorRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}));

export const AuthorAvatar = styled(Box)(({ theme }) => ({
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: theme.palette.text.secondary, // fallback grey
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "1.2rem",
    color: theme.palette.background.default, // contrast
}));

export const AuthorInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },
}));

export const AuthorName = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.body1.fontSize,
}));

export const AuthorTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
}));
