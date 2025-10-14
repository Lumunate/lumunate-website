"use client";

import { Box, Button, styled } from "@mui/material";

export const WorkWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(7.5),
  maxWidth: "1698px",
  padding: "0 20px",
  margin: "0 auto",
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

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(1.5),
  borderRadius: (theme.shape.borderRadius as number) * 1.5,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : theme.palette.grey[100],
  boxShadow: `
    0px 4px 14.8px rgba(0, 0, 0, 0.33),
    inset 0px 4px 18.1px ${theme.palette.mode === "dark"
      ? "rgba(132, 132, 132, 0.55)"
      : "rgba(0, 0, 0, 0.1)"
    }
  `,
}));

export const ImageContainer = styled(Box)(() => ({
  width: "100%",
  borderRadius: "12px",
  overflow: "hidden",
  marginTop: "24px",
  position: "relative",
  cursor: "pointer",
  "&:hover .hoverImage": {
    filter: "blur(6px)",
    transform: "scale(1.02)",
    transition: "all 0.4s ease-in-out",
  },
  "&:hover .viewButton": {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.4s ease-in-out",
  },
}));

export const ViewButton = styled(Button)(() => ({
  position: "absolute",
  top: "13%",
  right: "10%",
  background: "rgba(0, 0, 0, 0.5)",
  boxShadow: `
    inset 0px 4px 25.6px rgba(0, 0, 0, 0.25),
    0px 4px 8.9px rgba(91, 91, 91, 0.25)
  `,
  backdropFilter: "blur(6px)",
  borderRadius: "50%",
  color: "#fff",
  textTransform: "none",
  fontWeight: 400,
  fontSize: "14px",
  padding: "26px 12px",
  opacity: 0,
  transform: "translateY(10px)",
  transition: "all 0.4s ease-in-out",
  "&:hover": {
    background: "rgba(14, 13, 13, 0.25)",
  },
}));