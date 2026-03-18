"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import dynamic from "next/dynamic";
import dotsData from "../../public/startup/dots.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
            onComplete: () => onComplete(),
        });

        tl.to([leftRef.current, centerRef.current, rightRef.current], {
            y: "0%",
            duration: 1.1,
            stagger: 0.1,
            force3D: true,
        });
    }, [onComplete]);

    useEffect(() => {
        const panels = [leftRef.current, centerRef.current, rightRef.current];
        gsap.set(panels, { willChange: "transform" });
        gsap.set(leftRef.current, { y: "100%" });
        gsap.set(rightRef.current, { y: "100%" });
        gsap.set(centerRef.current, { y: "-100%" });

        const timer = setTimeout(handleStartupAnimation, 1200);
        return () => clearTimeout(timer);
    }, [handleStartupAnimation]);

    return (
        <Box component="section" sx={{ position: "fixed", inset: 0, zIndex: 10000, bgcolor: "black" }}>
            {!preloadFinished && (
                <Box sx={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: { xs: "180px", md: "400px" } }}>
                        <Lottie animationData={dotsData} loop={true} />
                    </Box>
                </Box>
            )}
            <Box sx={{ display: "flex", width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                <Box ref={leftRef} sx={{ flex: 1, backgroundImage: "url('/startup/left-startup.svg')", backgroundSize: "cover", bgcolor: "black" }} />
                <Box ref={centerRef} sx={{ flex: 1, backgroundImage: "url('/startup/center-startup.svg')", backgroundSize: "cover", bgcolor: "black" }} />
                <Box ref={rightRef} sx={{ flex: 1, backgroundImage: "url('/startup/right-startup.svg')", backgroundSize: "cover", bgcolor: "black" }} />
            </Box>
        </Box>
    );
};

export default IntroAnimation;