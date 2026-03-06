"use client";

import React from "react";
import { Box, Typography, PaletteMode } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface ThemeSwitcherProps {
    mode: PaletteMode;
    toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ mode, toggleTheme }) => {
    return (
        <Box
            onClick={toggleTheme}
            sx={{
                position: "fixed",
                bottom: 32,
                right: 32,
                width: 160,
                height: 48,
                backgroundColor: mode === "dark" ? "#1A1A1A" : "#FFFFFF",
                border: `2px solid ${mode === "dark" ? "#333" : "#AAAAAA"}`,
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "4px",
                zIndex: 9999,
                transition: "all 0.3s ease",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
        >
            {/* Sliding Background Indicator */}
            <Box
                sx={{
                    position: "absolute",
                    left: mode === "light" ? "4px" : "80px",
                    width: "76px",
                    height: "40px",
                    backgroundColor: mode === "dark" ? "#374151" : "#F3F4F6",
                    borderRadius: "100px",
                    transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 1,
                }}
            />

            {/* Light Option */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    gap: 1,
                }}
            >
                <WbSunnyIcon sx={{ fontSize: 18, color: mode === "light" ? "#000" : "#666" }} />
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: mode === "light" ? "#000" : "#666",
                    }}
                >
                    Light
                </Typography>
            </Box>

            {/* Dark Option */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    gap: 1,
                }}
            >
                <DarkModeIcon sx={{ fontSize: 18, color: mode === "dark" ? "#FFF" : "#666" }} />
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: mode === "dark" ? "#FFF" : "#666",
                    }}
                >
                    Dark
                </Typography>
            </Box>
        </Box>
    );
};

export default ThemeSwitcher;