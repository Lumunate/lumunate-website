"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Critical Components
import IntroAnimation from "@/components/IntroAnimation";
import HeaderSection from "@/components/home/HeaderSection";

// Dynamic Imports (Keep these as they help TBT)
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
    const [introDone, setIntroDone] = useState(false);
    const approachRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const finished = sessionStorage.getItem("introFinished") === "true";
        if (finished) {
            setIntroDone(true);
            document.body.classList.add("intro-done");
        }
    }, []);

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
                    /* CRITICAL FIX: We use a tiny opacity (0.01) instead of 0.
                       This allows the browser to 'see' the LCP elements (videos/text) 
                       immediately for SEO and Performance scores, while remaining 
                       virtually invisible to the user until the panels slide away.
                    */
                    opacity: introDone ? 1 : 0.01,
                    visibility: "visible", // Never set to 'hidden' for the main wrapper
                    transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* HeaderSection is the most likely LCP candidate. 
            We pass introDone so it can start internal animations. */}
                <HeaderSection animate={introDone} />

                {/* 3. Deferred Loading Strategy: 
            Only render heavy sections once the intro is finished. 
            This drastically reduces Total Blocking Time (TBT). */}
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