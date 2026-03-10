"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TransitionWrapper from "@/components/TransitionWrapper";
import { NavbarProvider } from "./ui/NavbarContext";
import React from "react";

export default function LayoutClient({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarProvider>
                <TransitionWrapper>

                    <Navbar />
                    {children}
                    <Footer />

                </TransitionWrapper>
            </NavbarProvider>

        </ThemeProvider>
    );
}
