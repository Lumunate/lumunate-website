"use client";

import { ThemeProvider, PaletteMode } from "@mui/material";
import { getAppTheme } from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TransitionWrapper from "@/components/TransitionWrapper";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher"; // Your new component
import React, { useState, useMemo, useEffect } from "react";
import { NavbarProvider } from "./ui/NavbarContext";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<PaletteMode>("dark");
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by waiting for mount
    useEffect(() => {
        const savedMode = localStorage.getItem("themeMode") as PaletteMode;
        if (savedMode) setMode(savedMode);
        setMounted(true);
    }, []);

    const theme = useMemo(() => getAppTheme(mode), [mode]);

    const toggleTheme = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("themeMode", newMode);
    };

    if (!mounted) return null;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarProvider>
                <TransitionWrapper>
                    <Navbar />
                    {children}
                    <Footer />

                    {/* Custom Pill Switcher */}
                    <ThemeSwitcher mode={mode} toggleTheme={toggleTheme} />

                </TransitionWrapper>
            </NavbarProvider>
        </ThemeProvider>
    );
}