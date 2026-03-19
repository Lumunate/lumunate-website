"use client";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import { alpha } from "@mui/material";
import Link from "next/link";

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing("119px 0px"),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    padding: "100px 0px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "56px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(15),
  textAlign: "left",
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
    marginBottom: "47px",
  },
}));

export const JobCard = styled(Box)(({ theme }) => ({
  padding: "32px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: `1px solid ${alpha(theme.palette.divider, 1)}`,
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.03),
  },
  [theme.breakpoints.down("md")]: {
    padding: "24px",
  },
}));

export const CategoryTag = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("md")]: {
    marginTop: "8px",
  },
}));

export const ApplyLink = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  marginTop: theme.spacing(4),
  cursor: "pointer",
  color: theme.palette.text.primary,
  textDecoration: "none",
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.7,
    textDecoration: "none",
  },
}));
