"use client";

import CareerPath from "@/components/careers/CareerPath/CareerPath";
import CareersHero from "@/components/careers/CareersHero/CareersHero";
import CareersProcess from "@/components/careers/CareersProcess/CareersProcess";
import OpenPositions from "@/components/careers/OpenPositions/OpenPositions";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";

export default function CareersPage() {
    return (

        <>
            <CareersHero />

            <CareerPath />

            <CareersProcess />

            <OpenPositions />

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
