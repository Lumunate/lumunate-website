"use client";

import { Box, Button, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const WorkWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingBottom: "220px",

  "& .swiper": {
    width: "100%",
    margin: 0,
    paddingBottom: "40px !important",

    [theme.breakpoints.up("sm")]: {
      width: "100%",
      margin: 0,
      paddingBottom: 0,
    }
  },

  "& .swiper-pagination": {
    bottom: "0px !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "12px"
  },

  "& .swiper-pagination-bullet": {
    width: "10px",
    height: "10px",
    backgroundColor: alpha(theme.palette.text.primary, 0.4),
    opacity: 1,
    transition: "all 0.3s ease-in-out",
    margin: "0 !important",
  },

  "& .swiper-pagination-bullet-active": {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
    boxShadow: `0px 0px 10px ${alpha(theme.palette.text.primary, 0.5)}`,
  }
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.5, 2),
  color: theme.palette.mode === 'light'
    ? theme.palette.section.lightThemeTitle
    : theme.palette.text.primary,

  backgroundColor: alpha(theme.palette.background.default, 0.72),
  boxShadow: `
    0px 4px 14.8px ${alpha("#000", 0.9)},
    inset 0px 4px 18.1px ${theme.palette.mode === "dark"
      ? alpha(theme.palette.text.primary, 0.22)
      : alpha("#000", 0.1)
    }
  `,

  [theme.breakpoints.down("sm")]: {
    borderRadius: 8,
    border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
  },
  [theme.breakpoints.up("sm")]: {
    borderRadius: (theme.shape.borderRadius as number) * 1.5,
  }
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "24px",
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",

  aspectRatio: "16 / 10",

  [theme.breakpoints.down("sm")]: {
    borderRadius: 6,
    marginTop: "16px",
    border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
  },
  [theme.breakpoints.up("sm")]: {
    borderRadius: "12px",
    border: "none",
  },

  "& .hoverImage": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.4s ease-in-out",
  },

  "&:hover .hoverImage": {
    filter: "blur(6px)",
    transform: "scale(1.05)",
  },

  "&:hover .viewButton": {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.4s ease-in-out",
  },
}));

export const ViewButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "13%",
  right: "10%",

  background: alpha(theme.palette.background.default, 0.5),
  boxShadow: `
    inset 0px 4px 25.6px ${alpha(theme.palette.background.default, 0.25)}, 
    0px 4px 8.9px ${alpha(theme.palette.text.secondary, 0.25)}
  `,

  backdropFilter: "blur(6px)",
  borderRadius: "50%",
  color: theme.palette.common.white,
  textTransform: "none",
  fontWeight: 400,
  fontSize: "14px",
  padding: "26px 12px",
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.4s ease-in-out",

  "&:hover": {
    background: alpha(theme.palette.background.default, 0.25),
  },
}));

export const ProjectsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));