"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TransitionWrapper from "@/components/TransitionWrapper";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TransitionWrapper>
                {/* This key forces remount on every route change */}
                <div key={pathname}>
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </TransitionWrapper>
        </ThemeProvider>
    );
}
