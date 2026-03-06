"use client";

import { styled, Typography, Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const ExploreWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: theme.spacing(0, 0),
    paddingBottom: "139px",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
    },
}));



export const ExploreText = styled(Typography)(({ theme }) => {
    // Determine base color based on mode
    const baseColor = theme.palette.mode === 'light'
        ? theme.palette.section.heading
        : theme.palette.common.white;

    return {
        width: "100%",
        textAlign: "center",
        fontWeight: 300,
        fontFamily: "Neue Montreal",
        fontSize: "clamp(2rem, 8.6vw, 14rem)",
        whiteSpace: "nowrap",
        // Using alpha for subtle transparency
        color: alpha(baseColor, 0.09),
        letterSpacing: "0.05em",
        filter: "blur(1px)",
        userSelect: "none",
        lineHeight: 1.2,

        [theme.breakpoints.down("md")]: {
            // Increase opacity for smaller screens as previously defined
            color: alpha(baseColor, 0.10),
        },
    };
});