"use client";

import { Box, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TransitionWrapper from "@/components/TransitionWrapper";
import { NavbarProvider } from "./ui/NavbarContext";
import React, { useState, useEffect } from "react";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavbarProvider>
        <TransitionWrapper>
          {!mounted ? (
            <Box style={{ opacity: 0 }}>{children}</Box>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </TransitionWrapper>
      </NavbarProvider>
    </ThemeProvider>
  );
}
