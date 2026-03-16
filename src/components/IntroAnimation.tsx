"use client";

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
    const [videoFinished, setVideoFinished] = useState(false);

    useEffect(() => {
        // Hide the navbar immediately when the animation starts
        const navbar = document.querySelector(".main-navbar") as HTMLElement;
        if (navbar) {
            gsap.set(navbar, { opacity: 0, visibility: "hidden", display: "none" });
        }
    }, []);

    const handleVideoEnd = () => {
        // Show the navbar again
        const navbar = document.querySelector(".main-navbar") as HTMLElement;
        if (navbar) {
            navbar.style.setProperty("display", "flex", "important");
            navbar.style.setProperty("opacity", "1", "important");
            navbar.style.setProperty("visibility", "visible", "important");
        }

        setVideoFinished(true);
        onComplete();
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
            {!videoFinished && (
                <video
                    src="/startup/preload-new.mp4"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%) translateZ(0)",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        backgroundColor: "black",
                    }}
                />
            )}
        </Box>
    );
};

export default IntroAnimation;