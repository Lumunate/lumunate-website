"use client";

import { Box, Button, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const WorkWrapper = styled(Box)(() => ({
  width: "100%",
  paddingBottom: "220px",
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
  alignItems: "center",
  padding: theme.spacing(1.5),
  borderRadius: (theme.shape.borderRadius as number) * 1.5,

  backgroundColor: alpha(theme.palette.background.default, 0.72),

  boxShadow: `
    0px 4px 14.8px ${alpha("#000", 0.9)},
    inset 0px 4px 18.1px ${theme.palette.mode === "dark"
      ? alpha(theme.palette.text.primary, 0.22)
      : alpha("#000", 0.1)
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
