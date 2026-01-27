"use client";

import { Box, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TransitionWrapper from "@/components/TransitionWrapper";
import { usePathname } from "next/navigation";
import { NavbarProvider } from "./ui/NavbarContext";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavbarProvider>
                <TransitionWrapper>
                    {/* This key forces remount on every route change */}
                    <Box key={pathname}>
                        <Navbar />
                        {children}
                        <Footer />
                    </Box>
                </TransitionWrapper>
            </NavbarProvider>
        </ThemeProvider>
    );
}
