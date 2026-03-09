"use client";

import { Box, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const SuccessStoriesContainer = styled(Box)(({ theme }) => {
  const bg = theme.palette.background.default;

  return {
    position: "relative",
    width: "100vw",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    minHeight: "100vh",
    marginBottom: "207px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: bg,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "52px",
    },
    "& video": {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    },

    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: alpha(bg, 0.55),
      zIndex: 1,
    },

    /* TOP blur rectangle */
    "& .topBlur": {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "40px",
      zIndex: 2,
      pointerEvents: "none",
      background: `
    linear-gradient(
      to bottom,
      ${bg} 0%,
      ${alpha(bg, 0.9)} 20%,
      ${alpha(bg, 0.4)} 60%,
      ${alpha(bg, 0)} 100%
    )
  `,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    },

    /* BOTTOM blur rectangle */
    "& .bottomBlur": {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "40px",
      zIndex: 2,
      pointerEvents: "none",
      background: `
    linear-gradient(
      to top,
      ${bg} 0%,
      ${alpha(bg, 0.9)} 20%,
      ${alpha(bg, 0.4)} 60%,
      ${alpha(bg, 0)} 100%
    )
  `,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
    },
  };
});

export const BackgroundVideo = styled("video")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  [theme.breakpoints.up("lg")]: {
    height: "1164px",
    maxHeight: "1164px",
  },
}));
export const ContentContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  position: "relative",
  zIndex: 3,
  color: theme.palette.text.primary,
}));

export const StarsWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  display: "flex",
  gap: theme.spacing(0.75),
}));
