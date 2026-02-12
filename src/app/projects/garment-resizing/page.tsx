"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { GarmentResizingData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function GarmentResizingPage() {
    return (
        <>
            <CaseStudyHeader
                background={GarmentResizingData.header.background}
                title={GarmentResizingData.header.title}
                subtitle={GarmentResizingData.header.subtitle}
                description={GarmentResizingData.header.description}
                metaItems={GarmentResizingData.header.meta}
            />

            <Challenges
                title={GarmentResizingData.challenges.title}
                description={GarmentResizingData.challenges.description}
                imageSrc={GarmentResizingData.challenges.imageSrc}
            />
            <Challenges
                title="Solution"
                description="We designed and delivered a two-milestone sizing system that transforms raw body measurements into reliable garment size recommendations. The solution includes individual and bulk CSV sizing flows, manufacturer-driven measurement normalization, controlled fit logic, and a clean, conversion-oriented UI. The architecture separates sizing logic from manufacturer data, ensuring accuracy."
                imageLeftSrc="/case-studies/TCR-2.svg"
                imageRightSrc="/case-studies/TCR-3.svg"
            />

            <ImpactSection
                impactPoints={GarmentResizingData.impact.points}
                services={GarmentResizingData.impact.services}
            />

            <SuccessStories
                storyText={GarmentResizingData.success.story}
                name={GarmentResizingData.success.name}
                flagUrl="/case-studies/USA-flag.svg"

                role={GarmentResizingData.success.role}
                showStars={true}
            />

            <ExploreSection />

            <Ready
                title="Ready to Build What’s Next?"
                description="Every great product starts with a conversation. Let’s discuss how we can accelerate your digital transformation."
            />
        </>
    );
}
