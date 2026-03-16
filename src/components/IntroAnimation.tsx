"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

interface IntroAnimationProps {
    onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
    const [videoFinished, setVideoFinished] = useState(false);
    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const navbar = document.querySelector(".main-navbar") as HTMLElement;
        if (navbar) {
            gsap.set(navbar, { opacity: 0, visibility: "hidden", display: "none" });
        }

        gsap.set(leftRef.current, { y: "100%" });
        gsap.set(rightRef.current, { y: "100%" });
        gsap.set(centerRef.current, { y: "-100%" });
    }, []);

    const handleVideoEnd = () => {
        setVideoFinished(true);

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
            {!videoFinished && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >

                    <video
                        src="https://res.cloudinary.com/dlhe4iq8c/video/upload/q_auto:best,f_webm/v1770911368/preload_zszdxp.webm"
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
                            minWidth: "100vw",
                            minHeight: "100vh",
                            objectFit: "cover",
                            backgroundColor: "black",
                        }}
                    />
                </Box>
            )}

            <Box sx={{ display: "flex", width: "100%", height: "100%", zIndex: 1 }}>
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