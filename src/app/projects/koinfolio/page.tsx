"use client";

import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import { koinfolioData } from "./data";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import SuccessStories from "@/components/about/successStories/SuccessStories";
import Ready from "@/components/home/ready/Ready";
import ExploreSection from "@/components/home/explore/Explore";

export default function KoinfolioPage() {
    return (
        <>
            <CaseStudyHeader
                background={koinfolioData.header.background}
                title={koinfolioData.header.title}
                subtitle={koinfolioData.header.subtitle}
                description={koinfolioData.header.description}
                metaItems={koinfolioData.header.meta}
            />

            <Challenges
                title={koinfolioData.challenges.title}
                description={koinfolioData.challenges.description}
                imageSrc={koinfolioData.challenges.imageSrc}   // 👈 single image
            />
            <Challenges
                title="Solution"
                description="We built Koinfolio, a Next.js web application integrating real-time asset tracking, customizable dashboards, and secure Web3 payment gateways (PayPal, Stripe, Coinbase). The platform also supports advanced analytics and ongoing feature enhancements, including bubble visualizations and portfolio comparisons."
                imageLeftSrc="/case-studies/koinfolio-2.svg"
                imageRightSrc="/case-studies/koinfolio-3.svg"
            />

            <ImpactSection
                impactPoints={koinfolioData.impact.points}
                services={koinfolioData.impact.services}
            />

            <SuccessStories
                storyText={koinfolioData.success.story}
                name={koinfolioData.success.name}
                role={koinfolioData.success.role}
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
