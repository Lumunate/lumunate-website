"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ExploreWrapper, ExploreText } from "./Explore.styles";

const ExploreSection = () => {
    const exploreRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        // Used GSAP context to safely scope animation
        const ctx = gsap.context(() => {
            if (!exploreRef.current) return;

            // Smooth infinite blinking animation
            gsap.fromTo(
                exploreRef.current,
                { opacity: 0.4 },
                {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1, // infinite loop
                }
            );
        }, exploreRef);

        // Cleanup — kills animation on unmount or route change
        return () => ctx.revert();
    }, []);

    return (
        <ExploreWrapper>
            <ExploreText ref={exploreRef}>
                Explore. Engineer. Evolve.
            </ExploreText>
        </ExploreWrapper>
    );
};

export default ExploreSection;
