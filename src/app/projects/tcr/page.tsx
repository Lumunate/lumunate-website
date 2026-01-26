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
                imageSrc={TCRData.challenges.imageSrc}   // 👈 single image
            />
            <Challenges
                title="Solution"
                description="We built Koinfolio, a Next.js web application integrating real-time asset tracking, customizable dashboards, and secure Web3 payment gateways (PayPal, Stripe, Coinbase). The platform also supports advanced analytics and ongoing feature enhancements, including bubble visualizations and portfolio comparisons."
                imageLeftSrc="/case-studies/koinfolio-2.svg"
                imageRightSrc="/case-studies/koinfolio-3.svg"
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
