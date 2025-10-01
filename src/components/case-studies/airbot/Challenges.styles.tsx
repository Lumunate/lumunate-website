"use client";

import { styled, Box, Container, Typography } from "@mui/material";

export const SectionRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,   // use theme background
  color: theme.palette.text.primary,                  // use theme text
  paddingTop: theme.spacing(1), // 8px
  paddingBottom: theme.spacing(1),
}));

export const InnerContainer = styled(Container)(() => ({}));

export const TopStrip = styled(Box)(() => ({
  marginBottom: 0, // small spacing before image
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,                     
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
  color: theme.palette.text.primary,         
}));

export const DescText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,                  // base from theme
  fontFamily: "Manrope, sans-serif",
  fontWeight: 400,
  color: theme.palette.text.secondary,        
  lineHeight: 1.6,
}));

export const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
}));

export const ImageGridWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(0),
  width: "100%",
  marginTop: theme.spacing(2),

  "& img": {
    width: "100%",
    height: "100%",
    aspectRatio: "19/12",        //  keeps proportions consistent
    borderRadius: theme.shape.borderRadius,  // theme radius
    objectFit: "cover",
  },
}));
