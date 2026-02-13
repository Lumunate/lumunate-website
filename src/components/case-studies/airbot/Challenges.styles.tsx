"use client";

import { styled, Box } from "@mui/material";

export const SectionRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,

  paddingTop: 0,
  paddingBottom: 0,

}));

export const TopStrip = styled(Box)(({ theme }) => ({
  marginBottom: 0,
  backgroundColor: theme.palette.background.default,
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100vw",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",

  aspectRatio: "16 / 9",

  borderRadius: "0px",
  overflow: "hidden",

  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  [theme.breakpoints.down("sm")]: {
    aspectRatio: "1 / 1",
  },
}));

export const ImageGridWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  width: "100%",
  marginTop: theme.spacing(2),

  "& img": {
    width: "100%",
    height: "100%",
    aspectRatio: "19/12",
    // borderRadius: "12px",
    objectFit: "cover",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(0),
    borderRadius: "0px",
  },
}));
