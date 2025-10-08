"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StartupAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.classList.add("startup-active");

        const cleanup = () => document.body.classList.remove("startup-active");

        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
        });

        gsap.set(leftRef.current, { y: "100%" });
        gsap.set(rightRef.current, { y: "100%" });
        gsap.set(centerRef.current, { y: "-100%" });

        tl.to([leftRef.current, rightRef.current, centerRef.current], {
            y: "0%",
            duration: 1.1,
        })
            .to({}, { duration: 0.4 })
            .to(
                [leftRef.current, rightRef.current, centerRef.current],
                {
                    y: "-100%",
                    duration: 1.1,
                    ease: "power3.inOut",
                    onStart: () => {
                        // remove black background right as strips begin moving up
                        if (containerRef.current) {
                            containerRef.current.style.background = "transparent";
                        }
                    },
                },
                "+=0.1"
            )
            .to(containerRef.current, {
                autoAlpha: 0, // hides + sets visibility:hidden
                duration: 0.7,
                ease: "power2.inOut",
                onComplete: () => {
                    if (containerRef.current) {
                        containerRef.current.style.display = "none";
                    }

                    // delay cleanup slightly
                    setTimeout(() => {
                        onComplete();
                        setTimeout(() => {
                            cleanup();
                            ScrollTrigger.refresh(true);
                        }, 700);
                    }, 300);
                },
            });


        return () => {
            cleanup();
            tl.kill();
        };
    }, [onComplete]);

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                background: "#000",
                willChange: "opacity, transform",
                pointerEvents: "none",
            }}

        >
            <Box
                ref={leftRef}
                sx={{
                    flex: "1 1 33.33%",
                    backgroundImage: "url('/startup/left-startup.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <Box
                ref={centerRef}
                sx={{
                    flex: "1 1 33.33%",
                    backgroundImage: "url('/startup/center-startup.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <Box
                ref={rightRef}
                sx={{
                    flex: "1 1 33.33%",
                    backgroundImage: "url('/startup/right-startup.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
        </Box>
    );
};

export default StartupAnimation;
