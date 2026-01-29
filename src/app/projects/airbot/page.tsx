import SuccessStories from "@/components/about/successStories/SuccessStories";
import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";

export default function AirbotCaseStudyPage() {
    return (

        <>
            <CaseStudyHeader
                background={{ kind: "video", src: "https://res.cloudinary.com/dqvzaju7x/video/upload/v1759933021/airbot-header_gx3fsp.mp4", }}
                title="Airbot"
                subtitle="AI-Powered Hospitality Assistant"
                description={
                    <>
                        Airbot is an AI-native web application designed to help businesses streamline workflows and accelerate digital adoption. By combining custom SaaS development, AI/ML-driven automation, and end-to-end onboarding flows, Airbot enables organizations to integrate intelligent tools without technical overhead. With a library of 35+ AI-powered applications, seamless checkout, and optimized discovery, Airbot reflects Lumunate’s expertise in building scalable, AI-first digital platforms.
                    </>
                }
                metaItems={[
                    { label: "Year", value: "2025" },
                    {
                        label: "Timeline",
                        items: [
                            { label: "MVP –", value: "20 weeks" },
                            { label: "Version 2 –", value: "ongoing" },
                        ],
                    },
                ]}
                overlayOpacity={0.4}
                rightMaxWidth={823}

            />

            <Challenges
                title="Challenge"
                description="Managing multiple listings, handling high volumes of guest messages, 
      and ensuring timely, personalized communication is a major challenge for property managers and co-hosts. 
      Manual handling often leads to inefficiencies and burnout."
                imageSrc="/case-studies/Airbot-3.svg"
            />

            <Challenges
                title="Solution"
                description="We built AirBot, an AI assistant that automates guest communication, drives upsells, integrates with PMS platforms, and helps property managers boost revenue."
                imageLeftSrc="/case-studies/Airbot-3.svg"
                imageRightSrc="/case-studies/Airbot-4.svg"
            />

            <ImpactSection
                impactPoints={[
                    "Simplified AI adoption for businesses of all sizes",
                    "Enabled automation without technical overhead",
                    "Delivered 35+ AI-native apps in one cohesive platform",
                    "Boosted user adoption and revenue through optimized onboarding and marketing funnels",
                ]}
                services={["UI/UX", "SaaS Development", "AI/ML Integration", "Cloud Architecture"]}
            />

            <SuccessStories
                storyText="The team at Luminate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!"
                name="// Ebrahim"
                role="CEO, Koinfolio"
                showStars={true}
            />

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
