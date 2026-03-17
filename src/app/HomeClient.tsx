"use client";

import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// Critical Components (Load immediately)
import IntroAnimation from "@/components/IntroAnimation";
import HeaderSection from "@/components/home/HeaderSection";

// Dynamic Imports (Code splitting)
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

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

gsap.registerPlugin(ScrollToPlugin);

export default function HomeClient() {
    const [introDone, setIntroDone] = useState(false);
    const approachRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check session storage on mount
        const finished = sessionStorage.getItem("introFinished") === "true";
        if (finished) {
            setIntroDone(true);
            const navbar = document.querySelector(".main-navbar") as HTMLElement;
            if (navbar) {
                navbar.style.display = "flex";
                navbar.style.opacity = "1";
            }
        }
    }, []);

    const handleIntroComplete = () => {
        sessionStorage.setItem("introFinished", "true");
        setIntroDone(true);
    };

    return (
        <>
            {!introDone && <IntroAnimation onComplete={handleIntroComplete} />}

            <Box
                component="main" // Better for SEO/Accessibility
                sx={{
                    opacity: introDone ? 1 : 0,
                    visibility: introDone ? "visible" : "hidden",
                    transition: "opacity 0.8s ease",
                }}
            >
                <HeaderSection animate={introDone} />

                {/* Only render these when the intro is actually done to save CPU */}
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
                            description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions."
                            linkText="Let's Connect"
                            linkHref="/contact"
                        />
                    </>
                )}
            </Box>
        </>
    );
}