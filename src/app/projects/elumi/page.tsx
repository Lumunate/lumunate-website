"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { ElumiData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function ElumiPage() {
    return (
        <>
            <CaseStudyHeader
                background={ElumiData.header.background}
                title={ElumiData.header.title}
                subtitle={ElumiData.header.subtitle}
                description={ElumiData.header.description}
                metaItems={ElumiData.header.meta}
            />

            <Challenges
                title={ElumiData.challenges.title}
                description={ElumiData.challenges.description}
                imageSrc={ElumiData.challenges.imageSrc}
            />
            <Challenges
                title="Solution"
                description="We designed a cinematic, storytelling-driven Shopify experience that balances inspiration, education, and commerce. The solution includes experience-first layouts, visual ritual guidance, warm Mediterranean aesthetics, and modular sections built on Shopify 2.0 for scalability. Carefully paced storytelling, clear product cues, and intuitive navigation guide users from discovery to understanding and purchase while reinforcing Elumi’s luxury identity."
                imageLeftSrc="/case-studies/TCR-2.svg"
                imageRightSrc="/case-studies/TCR-3.svg"
            />

            <ImpactSection
                impactPoints={ElumiData.impact.points}
                services={ElumiData.impact.services}
            />

            <SuccessStories
                storyText={ElumiData.success.story}
                name={ElumiData.success.name}
                flagUrl="/case-studies/UK-flag.svg"
                role={ElumiData.success.role}
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
