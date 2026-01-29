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


    /* TOP blur rectangle (theme-based) */
    "& .topBlur": {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "70px",
      zIndex: 2,
      pointerEvents: "none",
      background: `
        linear-gradient(
          to bottom,
          ${alpha(bg, 0.95)} 0%,
          ${alpha(bg, 0.65)} 35%,
          ${alpha(bg, 0.25)} 70%,
          ${alpha(bg, 0)} 100%
        )
      `,
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
    },

    /* BOTTOM blur rectangle (theme-based) */
    "& .bottomBlur": {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "20px",
      zIndex: 2,
      pointerEvents: "none",
      background: `
        linear-gradient(
          to top,
          ${alpha(bg, 0.95)} 0%,
          ${alpha(bg, 0.65)} 35%,
          ${alpha(bg, 0.25)} 70%,
          ${alpha(bg, 0)} 100%
        )
      `,
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
    },
  };
});

export const BackgroundVideo = styled("video")({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

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
