"use client";

import { styled, Container, Typography, Box, Chip, List, ListItem } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#0E0E0E",
  color: "#fff",
  padding: theme.spacing(6, 10),
}));

export const InnerContainer = styled(Container)(() => ({}));

export const RowGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  alignItems: "start",
  gap: theme.spacing(12),           // bigger gap

  marginBottom: theme.spacing(4),

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
    fontSize: "20px",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
}));


export const ListWrapper = styled(List)(({ theme }) => ({
  maxWidth: "100%",
  marginBottom: theme.spacing(3),
  fontSize: "15px",
  lineHeight: 1.6,
  paddingLeft: theme.spacing(3),
  listStyleType: "disc",  //  bullets....
  paddingInlineStart: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
    textAlign: "left",
  },
}));

export const ListItemStyled = styled(ListItem)(() => ({
  display: "list-item",   // ensures bullet is visible...
  padding: 0,
  color: "rgba(255,255,255,0.85)",
  fontSize: "15px",
  lineHeight: 1.6,
}));


export const ServicesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  flexWrap: "wrap",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const ServiceChip = styled(Chip)(({ }) => ({
  backgroundColor: "#00000033",
  color: "#EDEDED",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "16px",
  fontSize: "14px",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.15)",
  },
}));
