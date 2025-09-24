"use client";

import { Box, Typography, styled } from "@mui/material";

export const TestimonialRoot = styled(Box)(({ theme }) => ({
    width: "100vw",
    background: "#181818",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    padding: `${theme.spacing(12)} 0`,
}));

export const TestimonialContent = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    padding: 0,
    gap: theme.spacing(8),
    [theme.breakpoints.down("lg")]: {
        maxWidth: "1000px",
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
    ...theme.typography.h2,
    color: "#fff",
    fontWeight: 400,
    maxWidth: 900,
    marginLeft: theme.spacing(14), 
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
    marginRight: theme.spacing(14), 
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
    color: "#fff",
    marginBottom: theme.spacing(2),
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.95rem",
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
    background: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "#181818",
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
    color: "#fff",
    fontWeight: 700,
    fontSize: "1rem",
}));

export const AuthorTitle = styled(Typography)(({ theme }) => ({
    color: "#bdbdbd",
    fontSize: "0.95rem",
}));