"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ExploreWrapper, ExploreText } from "./Explore.styles";

const ExploreSection = () => {
    const exploreRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (!exploreRef.current) return;

        // Smooth blinking animation
        gsap.fromTo(
            exploreRef.current,
            { opacity: 0.4 },
            {
                opacity: 1,
                duration: 1.2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1, // infinite blinking loop
            }
        );
    }, []);

    return (
        <ExploreWrapper>
            <ExploreText ref={exploreRef} variant="h1">
                Explore. Engineer. Evolve.
            </ExploreText>
        </ExploreWrapper>
    );
};

export default ExploreSection;
