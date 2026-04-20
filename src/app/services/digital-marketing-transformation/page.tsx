
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import Works from "@/components/home/work/Works";
import BuildProcessSection from "@/components/services/BuildProcessSection/BuildProcessSection";
import ServiceOverview from "@/components/services/ServiceOverview/ServiceOverview";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import { Box } from "@mui/material";

const webDevCards = [
    {
        icon: (
            <Box
                component="img"
                src="/services/digital.svg"
                alt="User Research"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Digital Strategy & Transformation Roadmaps",
        description: "Defining clear transformation goals, technology gaps, and phased roadmaps to modernize marketing and digital operations."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/marketing.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Marketing Technology Enablement",
        description: "Implementing and integrating marketing tools, analytics platforms, and automation systems to support data-driven decision making."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/performance.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Performance-Focused Digital Marketing",
        description: "Executing search, content, and paid strategies backed by analytics, conversion tracking, and continuous optimization."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/customer.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Customer Journey & Experience Optimization",
        description: "Analyzing and improving digital touchpoints across platforms to reduce friction and improve engagement and conversion."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/analytics.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Data, Analytics & Insights",
        description: "Establishing dashboards, KPIs, and reporting frameworks that turn marketing data into actionable insights."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/automation.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Automation & Process Optimization",
        description: "Using automation and AI-assisted workflows to reduce manual effort, improve consistency, and scale marketing operations."
    },
];

const blockchainSteps = [
    {
        title: "Assess & Align",
        desc: "We start by understanding business objectives, existing systems, and current marketing performance."
    },
    {
        title: "Build & Integrate",
        desc: "Solutions are implemented with a focus on integration across platforms, data consistency, and operational efficiency."
    },
    {
        title: "Measure & Iterate",
        desc: "We continuously measure performance and refine strategies based on real data, not assumptions."
    }
];

export default function UIUXPage() {
    return (

        <>
            <ServicesHero
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
                title="Digital Marketing & Transformation"
                subtitle="Growth that sticks Data-driven strategies that maximize reach and ROI."
                overlayOpacity={0.4}


            />

            <ServiceOverview
                title="Service Overview"
                description="At Luminate, Digital Marketing & Transformation is approached as a systems problem, not a campaign exercise. We help organizations modernize their digital presence, marketing operations, and customer engagement through data, automation, and measurable outcomes—ensuring marketing efforts are scalable, integrated, and aligned with business strategy."
                cardsTitle="What This Service Includes"
                cards={webDevCards}
            />
            <BuildProcessSection
                sectionTitle="How We Build"
                steps={blockchainSteps}
              
                bgImageUrl="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1771226329/Marketing_1_zbppfc.webm"
            />

            <Box sx={{ mt: "120px" }}>
                <Works title="See Our Work" includedTitles={["AirBot", "Allfred"]} />
            </Box>

            <ExploreSection />

            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
                linkText="Let's Connect"
                linkHref="/contact"
            />


        </>
    );
}
