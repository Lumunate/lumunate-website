"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { AltrowData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function AltrowPage() {
    return (
        <>
            <CaseStudyHeader
                background={AltrowData.header.background}
                title={AltrowData.header.title}
                subtitle={AltrowData.header.subtitle}
                description={AltrowData.header.description}
                metaItems={AltrowData.header.meta}
            />

            <Challenges
                title={AltrowData.challenges.title}
                description={AltrowData.challenges.description}
                imageSrc={AltrowData.challenges.imageSrc}
            />
            <Challenges
                title="Solution"
                description="We designed a lifestyle-first e-commerce experience that blends warm photography, intuitive navigation, and story-driven content. The solution includes a clear mega-menu structure for Men, Women, and Unisex collections, community-driven social proof, localized market optimizations, and modular layouts built for scalability. Balanced visual hierarchy and uncluttered layouts guide users smoothly from inspiration to purchase while reinforcing ALTROW’s effortless luxury positioning."
                imageLeftSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770910536/Free_iPhone_17_Pro_kx0t7h.webp"
                imageRightSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770910504/Frame_1000002387_gjtzbd.webp"
            />

            <ImpactSection
                impactPoints={AltrowData.impact.points}
                services={AltrowData.impact.services}
            />

            <SuccessStories
                storyText={AltrowData.success.story}
                name={AltrowData.success.name}
                logoUrl="/case-studies/Themetco-logo.png"
                flagUrl="/case-studies/UK-flag.svg"

                role={AltrowData.success.role}
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
