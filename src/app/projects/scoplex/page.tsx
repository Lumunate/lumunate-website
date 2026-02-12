"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { ScoplexData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function ScoplexPage() {
    return (
        <>
            <CaseStudyHeader
                background={ScoplexData.header.background}
                title={ScoplexData.header.title}
                subtitle={ScoplexData.header.subtitle}
                description={ScoplexData.header.description}
                metaItems={ScoplexData.header.meta}
            />

            <Challenges
                title={ScoplexData.challenges.title}
                description={ScoplexData.challenges.description}
                imageSrc={ScoplexData.challenges.imageSrc}
            />
            <Challenges
                title="Solution"
                description="We redesigned and developed a modern Shopify storefront for Scoplex with a strong focus on UI clarity, UX optimization, and conversion performance. The final implementation ensured performance optimization, accessibility readiness, and seamless integration , creating a storefront that is both visually compelling and technically robust."
                imageLeftSrc="/case-studies/TCR-2.svg"
                imageRightSrc="/case-studies/TCR-3.svg"
            />

            <ImpactSection
                impactPoints={ScoplexData.impact.points}
                services={ScoplexData.impact.services}
            />

            <SuccessStories
                storyText={ScoplexData.success.story}
                name={ScoplexData.success.name}
                logoUrl="/case-studies/Themetco-logo.png"
                flagUrl="/case-studies/UAE-flag.svg"
                role={ScoplexData.success.role}
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
