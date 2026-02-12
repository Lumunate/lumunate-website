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

export const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  borderRadius: 12,

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
    borderRadius: "12px",
    objectFit: "cover",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(0),

    "& img": {
      height: "auto",
      aspectRatio: "19/12",
    },
  },
}));
