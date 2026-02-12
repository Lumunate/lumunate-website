"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { CorpfitData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function CorpfitPage() {
    return (
        <>
            <CaseStudyHeader
                background={CorpfitData.header.background}
                title={CorpfitData.header.title}
                subtitle={CorpfitData.header.subtitle}
                description={CorpfitData.header.description}
                metaItems={CorpfitData.header.meta}
            />

            <Challenges
                title={CorpfitData.challenges.title}
                description={CorpfitData.challenges.description}
                imageSrc={CorpfitData.challenges.imageSrc}
            />
            <Challenges
                title="Solution"
                description="We extended the existing platform with modular, non-breaking feature enhancements focused on usability, control, and scalability. The solution includes role-based user management, a structured exercise library, a robust program builder, improved trainee program access, a mobile-first workout player, AI-driven timers, workout history tracking, and continuity safeguards for the AI agent."
                imageLeftSrc="/case-studies/TCR-2.svg"
                imageRightSrc="/case-studies/TCR-3.svg"
            />

            <ImpactSection
                impactPoints={CorpfitData.impact.points}
                services={CorpfitData.impact.services}
            />

            <SuccessStories
                storyText={CorpfitData.success.story}
                name={CorpfitData.success.name}
                flagUrl="/case-studies/USA-flag.svg"

                role={CorpfitData.success.role}
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
