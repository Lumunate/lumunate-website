"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import Lottie from "lottie-react";
import dotsData from "../../public/startup/dots.json";

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
    const [preloadFinished, setPreloadFinished] = useState(false);
    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const handleStartupAnimation = useCallback(() => {
        setPreloadFinished(true);

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
        });
    }, [onComplete]);

    useEffect(() => {
        const navbar = document.querySelector(".main-navbar") as HTMLElement;
        if (navbar) {
            gsap.set(navbar, { opacity: 0, visibility: "hidden", display: "none" });
        }

        gsap.set(leftRef.current, { y: "100%" });
        gsap.set(rightRef.current, { y: "100%" });
        gsap.set(centerRef.current, { y: "-100%" });

        const preloadTimer = setTimeout(() => {
            handleStartupAnimation();
        }, 1800);

        return () => clearTimeout(preloadTimer);
    }, [handleStartupAnimation]);

    return (
        <Box sx={{ position: "fixed", inset: 0, zIndex: 10000, backgroundColor: "black", overflow: "hidden" }}>

            {/* PRELOAD PHASE (Lottie JSON) */}
            {!preloadFinished && (
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "180px",
                                sm: "250px",
                                md: "400px",
                            },
                            height: "auto"
                        }}
                    >
                        <Lottie
                            animationData={dotsData}
                            loop={true}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </Box>
                </Box>
            )}

            {/* STARTUP PHASE (Panels)  */}
            <Box sx={{ display: "flex", width: "100%", height: "100%", position: "absolute", inset: 0, zIndex: 1 }}>
                <Box ref={leftRef} sx={{ flex: 1, backgroundImage: "url('/startup/left-startup.svg')", backgroundSize: "cover", bgcolor: "black" }} />
                <Box ref={centerRef} sx={{ flex: 1, backgroundImage: "url('/startup/center-startup.svg')", backgroundSize: "cover", bgcolor: "black" }} />
                <Box ref={rightRef} sx={{ flex: 1, backgroundImage: "url('/startup/right-startup.svg')", backgroundSize: "cover", bgcolor: "black" }} />
            </Box>
        </Box>
    );
};

export default IntroAnimation;