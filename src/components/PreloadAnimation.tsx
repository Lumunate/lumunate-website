"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

interface PreloadAnimationProps {
    onComplete?: () => void;
}

const PreloadAnimation = ({ onComplete }: PreloadAnimationProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("preloadShown");
        if (hasVisited) {
            onComplete?.(); // Skip animation
            return;
        }

        sessionStorage.setItem("preloadShown", "true");

        // Defer state update to next tick to avoid synchronous setState in effect
        const showTimeout = setTimeout(() => {
            setVisible(true);
        }, 0);

        const fadeTimer = setTimeout(() => {
            if (containerRef.current) {
                containerRef.current.style.transition = "opacity 0.8s ease";
                containerRef.current.style.opacity = "0";

                setTimeout(() => {
                    setVisible(false);
                    onComplete?.();
                }, 800);
            }
        }, 3500);

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(fadeTimer);
        };
    }, [onComplete]);

    if (!visible) return null;

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#080808",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                overflow: "hidden",
            }}
        >
            <video
                src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770911368/preload_zszdxp.webm"
                autoPlay
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1.3)",
                    width: "100%",
                    height: "100%",
                    minWidth: "100vw",
                    minHeight: "100vh",
                    objectFit: "cover",
                }}
                onEnded={() => {
                    setVisible(false);
                    onComplete?.();
                }}
            />
        </Box>
    );
};

export default PreloadAnimation;