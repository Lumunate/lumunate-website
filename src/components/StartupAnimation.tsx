// StartupAnimation.tsx (adjusted)

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StartupAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasRun = sessionStorage.getItem("startupAnimationShown");
        if (hasRun) {
            onComplete();
            return;
        }

        sessionStorage.setItem("startupAnimationShown", "true");
        setVisible(true);

        document.body.classList.add("startup-active");

        const navbar = document.querySelector("header.MuiAppBar-root") as HTMLElement | null;
        if (navbar) {
            gsap.set(navbar, { opacity: 0, y: -80, pointerEvents: "none" });
        }

        const cleanup = () => {
            document.body.classList.remove("startup-active");
        };

        // Delay GSAP animation until DOM nodes exist
        const animate = () => {
            if (!leftRef.current || !centerRef.current || !rightRef.current || !containerRef.current) {
                return; // wait until refs are ready
            }

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
                            gsap.to(containerRef.current!, {
                                backgroundColor: "transparent",
                                duration: 0.3,
                                ease: "none",
                            });
                        },
                    },
                    "+=0.1"
                )
                .to(containerRef.current, {
                    autoAlpha: 0,
                    duration: 0.7,
                    ease: "power2.inOut",
                    onComplete: () => {
                        containerRef.current!.style.display = "none";
                        if (navbar) {
                            gsap.set(navbar, { opacity: 0, y: -80, pointerEvents: "none" });
                        }
                        setVisible(false);
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
        };

        // Delay the animation to the next tick to ensure refs exist
        const timeout = setTimeout(animate, 0);

        return () => {
            clearTimeout(timeout);
            cleanup();
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
