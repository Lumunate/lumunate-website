"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
    const [preloadFinished, setPreloadFinished] = useState(false);
    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial Setup: Hide navbar and position panels outside the view
        const navbar = document.querySelector(".main-navbar") as HTMLElement;
        if (navbar) {
            gsap.set(navbar, { opacity: 0, visibility: "hidden", display: "none" });
        }

        gsap.set(leftRef.current, { y: "100%" });
        gsap.set(rightRef.current, { y: "100%" });
        gsap.set(centerRef.current, { y: "-100%" });

        const preloadTimer = setTimeout(() => {
            handleStartupAnimation();
        }, 2000);

        return () => clearTimeout(preloadTimer);
    }, []);

    const handleStartupAnimation = () => {
        setPreloadFinished(true);

        // Startup Panel Animation (GSAP)
        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut" },
            onComplete: () => {
                const navbar = document.querySelector(".main-navbar") as HTMLElement;
                if (navbar) {
                    navbar.style.setProperty("display", "flex", "important");
                    navbar.style.setProperty("opacity", "1", "important");
                    navbar.style.setProperty("visibility", "visible", "important");
                }
                onComplete();
            },
        });

        tl.to([leftRef.current, centerRef.current, rightRef.current], {
            y: "0%",
            duration: 1.1,
            stagger: 0.1,
        }).to({}, { duration: 0.2 });
    };

    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                backgroundColor: "black",
                overflow: "hidden",
                width: "100vw",
                height: "100vh",
            }}
        >
            {/* PRELOAD PHASE (GIF) */}
            {!preloadFinished && (
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/startup/preload-new.gif"
                        alt="loading animation"
                        sx={{
                            width: "120px",
                            height: "auto",
                            // Keep the dots sharp for that HD look
                            imageRendering: "pixelated",
                            pointerEvents: "none",
                        }}
                    />
                </Box>
            )}

            {/* STARTUP PHASE (SVG PANELS) */}
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                }}
            >
                <Box
                    ref={leftRef}
                    sx={{
                        flex: 1,
                        backgroundImage: "url('/startup/left-startup.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        bgcolor: "black",
                    }}
                />

                <Box
                    ref={centerRef}
                    sx={{
                        flex: 1,
                        backgroundImage: "url('/startup/center-startup.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        bgcolor: "black",
                    }}
                />

                <Box
                    ref={rightRef}
                    sx={{
                        flex: 1,
                        backgroundImage: "url('/startup/right-startup.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        bgcolor: "black",
                    }}
                />
            </Box>
        </Box>
    );
};

export default IntroAnimation;