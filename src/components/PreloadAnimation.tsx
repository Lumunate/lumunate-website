"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

interface PreloadAnimationProps {
    onComplete?: () => void;
}

const PreloadAnimation = ({ onComplete }: PreloadAnimationProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        if (hasPlayed) return;
        setHasPlayed(true);

        const container = containerRef.current;
        const timer = setTimeout(() => {
            if (container) {
                container.style.transition = "opacity 0.8s ease";
                container.style.opacity = "0";
                setTimeout(() => onComplete?.(), 800);
            }
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete, hasPlayed]);

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
                src="https://res.cloudinary.com/dbcnkqule/video/upload/v1760622297/preload_umadhz.webm"
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
                onEnded={() => onComplete?.()}
            />

        </Box>
    );
};

export default PreloadAnimation;
