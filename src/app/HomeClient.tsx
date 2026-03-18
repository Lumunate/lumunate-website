"use client";

import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Critical Components
import IntroAnimation from "@/components/IntroAnimation";
import HeaderSection from "@/components/home/HeaderSection";

// Dynamic Imports
const LogosSection = dynamic(() => import("@/components/home/LogosSection"));
const TestimonialSection = dynamic(() => import("@/components/home/TestimonialSection"));
const WorkflowSection = dynamic(() => import("@/components/home/WorkflowSection"));
const TrackRecord = dynamic(() => import("@/components/home/trackRecord/TrackRecord"));
const OurApproach = dynamic(() => import("@/components/home/ourApproach/OurApproach"));
const Works = dynamic(() => import("@/components/home/work/Works"));
const ExploreSection = dynamic(() => import("@/components/home/explore/Explore"));
const Ready = dynamic(() => import("@/components/home/ready/Ready"));
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks/HowItWorks"));
const CEOSection = dynamic(() => import("@/components/home/CEOSection/CEOSection"));

gsap.registerPlugin(ScrollToPlugin);

export default function HomeClient() {
    // 1. Initialize state directly to avoid the 'useEffect' cascading render error.
    // We check if we are in the browser first to avoid SSR errors.
    const [introDone, setIntroDone] = useState(() => {
        if (typeof window !== "undefined") {
            return sessionStorage.getItem("introFinished") === "true";
        }
        return false;
    });

    const approachRef = useRef<HTMLDivElement>(null);

    // 2. We still need this to ensure the 'body' class is applied on refresh
    useEffect(() => {
        if (introDone) {
            document.body.classList.add("intro-done");
        }
    }, [introDone]);

    const handleIntroComplete = () => {
        sessionStorage.setItem("introFinished", "true");
        setIntroDone(true);
        document.body.classList.add("intro-done");
    };

    return (
        <>
            {/* 1. Intro Animation Layer */}
            {!introDone && <IntroAnimation onComplete={handleIntroComplete} />}

            {/* 2. Optimized Main Container */}
            <Box
                component="main"
                sx={{
                    opacity: introDone ? 1 : 0.01,
                    visibility: "visible",
                    transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <HeaderSection animate={introDone} />

                {/* 3. Deferred Loading Strategy */}
                {introDone && (
                    <>
                        <LogosSection />
                        <TestimonialSection />
                        <WorkflowSection />
                        <TrackRecord />
                        <Box ref={approachRef}>
                            <OurApproach />
                        </Box>
                        <Works />
                        <HowItWorks />
                        <CEOSection />
                        <ExploreSection />
                        <Ready
                            title="Ready to Build What's Next?"
                            description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation."
                            linkText="Let's Connect"
                            linkHref="/contact"
                        />
                    </>
                )}
            </Box>
        </>
    );
}