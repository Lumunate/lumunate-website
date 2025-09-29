"use client";

import { styled, Container, Typography, Box, Chip } from "@mui/material";

export const SectionRoot = styled("section")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#0E0E0E",
  color: "#fff",
  padding: theme.spacing(6, 10),
}));

export const InnerContainer = styled(Container)(() => ({}));

export const RowGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "start",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
    textAlign: "center",
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 500,
  fontSize: "24px",
  color: "#EDEDED",

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1),
  },
}));

export const ListWrapper = styled("ul")(({ theme }) => ({
  maxWidth: "900px",
  marginBottom: theme.spacing(3),
  fontSize: "15px",
  lineHeight: 1.6,
  paddingLeft: theme.spacing(3),

  "& li": {
    marginBottom: theme.spacing(1),
    color: "rgba(255,255,255,0.85)",
  },

  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(0),
    textAlign: "left",
  },
}));

export const ServicesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const ServiceChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#00000033",
  color: "#EDEDED",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "16px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
}));
