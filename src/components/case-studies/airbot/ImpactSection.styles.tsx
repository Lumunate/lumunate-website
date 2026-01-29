"use client";

import { styled, Typography, Box, Chip, List, ListItem } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: "93px",
  paddingBottom: "191px",
}));

export const RowFlex = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  gap: "17px",

  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    textAlign: "left",
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
  color: theme.palette.text.primary,
}));


export const ContentRight = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  width: "100%",
  maxWidth: "804px",
}));

export const ListWrapper = styled(List)(({ theme }) => ({
  maxWidth: "100%",
  margin: 0,

  ...theme.typography.body1,
  lineHeight: 1.6,

  listStyleType: "disc",
  paddingInlineStart: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    paddingInlineStart: theme.spacing(3),
  },
}));

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  display: "list-item",
  padding: 0,
  color: theme.palette.section.caseStudyDesc,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: 1.6,
}));

export const ServicesWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "17px",
  flexWrap: "wrap",
}));

export const ServiceChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "16px",
  fontSize: theme.typography.body1.fontSize,

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
