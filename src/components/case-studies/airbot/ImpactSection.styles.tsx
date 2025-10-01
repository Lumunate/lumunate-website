"use client";

import { styled, Container, Typography, Box, Chip, List, ListItem } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,   // theme background
  color: theme.palette.text.primary,                  // theme text
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
}));

export const InnerContainer = styled(Container)(() => ({}));

export const RowGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  alignItems: "start",
  gap: theme.spacing(12),

  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
    textAlign: "center",
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h5,                  // use theme
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 500,
  color: theme.palette.text.primary,       // text color from theme
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
}));

export const ListWrapper = styled(List)(({ theme }) => ({
  maxWidth: "100%",
  marginBottom: theme.spacing(3),
  ...theme.typography.body2,              // consistent text style
  lineHeight: 1.6,
  paddingLeft: theme.spacing(3),
  listStyleType: "disc",
  paddingInlineStart: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
    textAlign: "left",
  },
}));

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  display: "list-item",
  padding: 0,
  color: theme.palette.text.secondary,     // theme text
  fontSize: theme.typography.body2.fontSize,
  lineHeight: 1.6,
}));

export const ServicesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  flexWrap: "wrap",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const ServiceChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,     // use theme paper bg
  color: theme.palette.text.primary,                  // text from theme
  border: `1px solid ${theme.palette.divider}`,       // theme divider
  borderRadius: "16px",
  fontSize: "14px",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,      // hover state
  },
}));
