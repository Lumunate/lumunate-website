"use client";

import { Box, styled } from "@mui/material";

export const WorkWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.spacing(7.5), // 60px → theme spacing
  maxWidth: "1698px",
  padding: "0 20px",
  margin: "0 auto",
}));

export const ProjectsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8), // 65px → theme spacing
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2), // 16px → theme spacing
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
  borderRadius: (theme.shape.borderRadius as number) * 1.5, // ✅ fixed
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

