"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { TCRData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function TCRPage() {
    return (
        <>
            <CaseStudyHeader
                background={TCRData.header.background}
                title={TCRData.header.title}
                subtitle={TCRData.header.subtitle}
                description={TCRData.header.description}
                metaItems={TCRData.header.meta}
            />

            <Challenges
                title={TCRData.challenges.title}
                description={TCRData.challenges.description}
                imageSrc={TCRData.challenges.imageSrc}  
            />
            <Challenges
                title="Solution"
                description="We designed and developed a modern real estate website for TCR Properties that focuses on clarity, usability, and trust. The solution includes a structured property listing system, intuitive navigation, responsive layouts for all devices, and clear calls-to-action for inquiries. Visual hierarchy and clean layouts were used to highlight key property details, while the overall design reinforces professionalism and reliability—helping users move confidently from browsing to contacting."
                imageLeftSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909629/TCR-1_jn1piu.webp"
                imageRightSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909629/TCR-2_tw4bbn.webp"
            />

            <ImpactSection
                impactPoints={TCRData.impact.points}
                services={TCRData.impact.services}
            />

            <SuccessStories
                storyText={TCRData.success.story}
                name={TCRData.success.name}
                role={TCRData.success.role}
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
