"use client";

import { styled, Typography, Box, Chip, List, ListItem } from "@mui/material";

export const SectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: "93px",
  paddingBottom: "191px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "40px",
    paddingBottom: "100px",
  },
}));

export const RowFlex = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  gap: "17px",

  marginBottom: theme.spacing(4),

  [theme.breakpoints.down("xl")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    textAlign: "left",
    marginTop: "0px",
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
  [theme.breakpoints.down("xl")]: {
    marginLeft: 0,
    maxWidth: "100%",
  },
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
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));

export const ServicesWrapper = styled(Box)(({ }) => ({
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
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",

  },
}));
