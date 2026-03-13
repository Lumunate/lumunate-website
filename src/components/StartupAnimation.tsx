"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Box } from "@mui/material";

const StartupAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const navbar = document.querySelector(".main-navbar") as HTMLElement;

        // Hide initially
        if (navbar) {
            gsap.set(navbar, { opacity: 0, visibility: "hidden", display: "none" });
        }

        const tl = gsap.timeline({
            defaults: { ease: "power4.inOut" },
            onComplete: () => {
                const navbar = document.querySelector(".main-navbar") as HTMLElement;
                if (navbar) {
                    // Force it to show immediately with no transition
                    navbar.style.setProperty("display", "flex", "important");
                    navbar.style.setProperty("opacity", "1", "important");
                    navbar.style.setProperty("visibility", "visible", "important");
                }

                sessionStorage.setItem("introFinished", "true");
                setVisible(false);
                onComplete();
            }
        });

        // Initial state
        gsap.set(leftRef.current, { y: "100%" });
        gsap.set(rightRef.current, { y: "100%" });
        gsap.set(centerRef.current, { y: "-100%" });

        // Simple Entrance Animation ONLY
        tl.to([leftRef.current, centerRef.current, rightRef.current], {
            y: "0%",
            duration: 1.1,
            stagger: 0.1
        })
            .to({}, { duration: 0.2 }); 

        return () => { tl.kill(); };
    }, [onComplete]);

    if (!visible) return null;

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "fixed",
                inset: 0,
                zIndex: 10001, 
                display: "flex",
                background: "black",
            }}
        >
            <Box ref={leftRef} sx={{ flex: 1, backgroundImage: "url('/startup/left-startup.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <Box ref={centerRef} sx={{ flex: 1, backgroundImage: "url('/startup/center-startup.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <Box ref={rightRef} sx={{ flex: 1, backgroundImage: "url('/startup/right-startup.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </Box>
    );
};

export default StartupAnimation;