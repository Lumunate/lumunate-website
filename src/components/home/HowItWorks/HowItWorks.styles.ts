"use client";

import Link from "next/link";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const Section = styled(Box)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.primary,
    paddingBottom: 80,

    [theme.breakpoints.down("md")]: {
        paddingTop: 64,
        paddingBottom: 64,
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: 48,
        paddingBottom: 48,
    },
}));

export const Container = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: "0 auto",
    paddingLeft: 0,
    paddingRight: 0,

    [theme.breakpoints.down("sm")]: {
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 78,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "96.85%",
    letterSpacing: "-1.5px",
    marginBottom: 80,

    [theme.breakpoints.down("lg")]: {
        fontSize: 64,
        marginBottom: 64,
    },
    [theme.breakpoints.down("md")]: {
        fontSize: 52,
        marginBottom: 56,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 30,
        marginBottom: 40,
        letterSpacing: "-1px",
    },
}));

export const FaqAccordion = styled(Accordion)(({ theme }) => ({
    background: "transparent",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    borderRadius: 0,
    margin: 0,
    borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.12)}`,
    "&:first-of-type": {
        borderTop: "none",
    },

    "&:before": { display: "none" },

    "&:last-of-type": {
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.12)}`,
    },

    "&.Mui-expanded": {
        margin: 0,
    },
}));

export const FaqSummary = styled(AccordionSummary)(({ theme }) => ({
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 60,

    "&.Mui-expanded": { minHeight: 60 },

    "& .MuiAccordionSummary-content": {
        margin: 0,
        "&.Mui-expanded": { margin: 0 },
    },

    "& .MuiAccordionSummary-expandIconWrapper": {
        color: theme.palette.text.secondary,
    },

    [theme.breakpoints.down("sm")]: {
        minHeight: 56,
        "&.Mui-expanded": { minHeight: 56 },
    },
}));

export const QuestionText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontFamily: "Montserrat",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",

    [theme.breakpoints.down("md")]: { fontSize: 20 },
    [theme.breakpoints.down("sm")]: { fontSize: 14 },
}));

export const AnswerText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "normal",
    paddingTop: 8,
    paddingBottom: 20,

    [theme.breakpoints.down("sm")]: {
        paddingBottom: 14,
        fontSize: 14,
    },
}));

export const BottomRow = styled(Box)(({ theme }) => ({
    textAlign: "center",
    marginTop: 80,

    [theme.breakpoints.down("md")]: {
        marginTop: 64,
    },
    [theme.breakpoints.down("sm")]: {
        marginTop: 40,
    },
}));

export const BottomText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
     [theme.breakpoints.down("sm")]: {
        fontSize: 14,
    },
}));

export const TalkLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontFamily: "Montserrat",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
}));
