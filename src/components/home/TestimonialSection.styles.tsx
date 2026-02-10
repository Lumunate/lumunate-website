"use client";

import { Box, Typography, styled } from "@mui/material";
import { fontSize } from "@mui/system";

export const TestimonialRoot = styled(Box)(({ theme }) => ({
    width: "100vw",
    maxWidth: "1654px",
    background: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    paddingBottom: "170px",
}));

export const TestimonialContent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    gap: theme.spacing(8),

    [theme.breakpoints.down("lg")]: {
        gap: theme.spacing(4),
    },

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: theme.spacing(4),
    },

    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
        textAlign: "left",
        gap: 0,
    },
}));

export const TestimonialHeading = styled(Typography)(({ theme }) => ({
    ...theme.typography.h2,
    color: theme.palette.section.heading,
    fontWeight: 400,
    fontSize: "78px",
    fontFamily: "Montserrat, sans-serif",
    maxWidth: "1098px",

    [theme.breakpoints.down("lg")]: {
        fontWeight: 400,
        fontSize: "40px",
        maxWidth: "100%",
        marginRight: "30px",
    },

    [theme.breakpoints.down("md")]: {
        fontWeight: 400,
        fontSize: "30px",
        textAlign: "left",
        marginBottom: "60px",
    },
}));

export const TestimonialBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: 420,
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        maxWidth: "100%",
    },

    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
        width: "100%",
    },
}));

export const StarsRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
        marginBottom: "16px",
    },
}));

export const TestimonialText = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: theme.palette.section.desc,
    marginBottom: theme.spacing(2),
    fontSize: "18px",
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        textAlign: "left",
        marginBottom: "20px",
        fontWeight: 400,
    },
}));

export const AuthorRow = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        alignItems: "flex-start",
    },
}));

export const AuthorAvatar = styled(Box)(({ theme }) => ({
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: theme.palette.section.desc,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "1.2rem",
    color: theme.palette.background.default,
}));

export const AuthorInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
        alignItems: "center",
    },

    [theme.breakpoints.down("sm")]: {
        alignItems: "flex-start",
    },
}));

export const AuthorName = styled(Typography)(({ theme }) => ({
    color: theme.palette.section.heading,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 700,
}));

export const AuthorTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.section.desc,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 400,
}));
