"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, useTheme } from "@mui/material";

export default function Logo() {
    // Access the current theme (light or dark)
    const theme = useTheme();
    const isLight = theme.palette.mode === "light";

    // Determine which image source to use
    const logoSrc = isLight
        ? "/lumunate-logo-light.svg"  // Light Logo
        : "/lumunate-logo.svg";        // Dark Logo 

    return (
        <Box
            component={Link}
            href="/"
            aria-label="Lumunate"
            sx={{
                display: "inline-flex",
                flexShrink: 0,
                alignItems: "center",
                textDecoration: "none",
                // Smooth transition when switching
                transition: "opacity 0.3s ease",
            }}
        >
            <Image
                key={theme.palette.mode} // Use key to force re-render/animation on switch
                src={logoSrc}
                alt="Lumunate Portfolio - Logo"
                width={259}
                height={85}
                priority
            />
        </Box>
    );
}