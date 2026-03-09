"use client";

import CareerPath from "@/components/careers/CareerPath/CareerPath";
import CareersHero from "@/components/careers/CareersHero/CareersHero";
import CareersProcess from "@/components/careers/CareersProcess/CareersProcess";
import OpenPositions from "@/components/careers/OpenPositions/OpenPositions";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import { Box } from "@mui/material";
import { useRef } from "react";


export default function CareersPage() {

    const positionsRef = useRef<HTMLDivElement>(null);

    const scrollToPositions = () => {
        positionsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return (

        <>
            <CareersHero />

            <CareerPath onButtonClick={scrollToPositions} />

            <CareersProcess />

            <Box ref={positionsRef}>
                <OpenPositions />
            </Box>

            <ExploreSection />

            <Ready
                title="Ready to Build What's Next?"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
                linkText="Let's Connect"
                linkHref="/contact"
            />


        </>
    );
}
