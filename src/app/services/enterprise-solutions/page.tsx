
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import Works from "@/components/home/work/Works";
import BuildProcessSection from "@/components/services/BuildProcessSection/BuildProcessSection";
import ProcessStepsSection from "@/components/services/ProcessStepsSection/ProcessStepsSection";
import ServiceOverview from "@/components/services/ServiceOverview/ServiceOverview";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import { Box } from "@mui/material";

const webDevCards = [
    {
        icon: (
            <Box
                component="img"
                src="/services/enterprise.svg"
                alt="User Research"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Enterprise System Architecture",
        description: "Designing scalable, fault-tolerant system architectures that support high traffic, complex workflows, and distributed teams."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/custom-app.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Custom Application Development",
        description: "Building enterprise-grade applications tailored to specific business processes, compliance needs, and operational constraints."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/testing.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Legacy System Modernization",
        description: "Refactoring or re-platforming existing systems to improve performance, security, and maintainability without disrupting operations."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/integration-2.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Integration & Interoperability",
        description: "Connecting internal systems, third-party platforms, and external services through reliable, well-documented integrations."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/database.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Data Management & Governance",
        description: "Implementing structured data models, access control, and governance practices to ensure accuracy, traceability, and compliance."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/testing-2.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Security, Compliance & Risk Management",
        description: "Applying enterprise security standards, access policies, and auditability to reduce risk and support regulatory requirements."
    },
];

const blockchainSteps = [
    {
        title: "Architecture & Constraints First",
        desc: "We design systems around scale, security, compliance, and organizational constraints before implementation begins."
    },
    {
        title: "Controlled Delivery",
        desc: "Development follows structured phases with validation, testing, and review gates to reduce risk in large deployments."
    },
    {
        title: "Operational Readiness",
        desc: "Solutions are delivered with monitoring, documentation, and handover processes designed for long-term operation."
    }
];

export default function UIUXPage() {
    return (

        <>
            <ServicesHero
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
                title="Enterprise Solutions"
                subtitle="Systems that perform Robust platforms that streamline operations and boost productivity."
                overlayOpacity={0.4}


            />

            <ServiceOverview
                title="Service Overview"
                description="At Luminate, Enterprise Solutions are designed to support complex organizations, high-volume systems, and long-term operations. We build and modernize enterprise software with a focus on system reliability, data integrity, security, and maintainability, ensuring solutions remain stable as usage, teams, and requirements grow."
                cardsTitle="What This Service Includes"
                cards={webDevCards}
            />

            <BuildProcessSection
                sectionTitle="How We Build"
                steps={blockchainSteps}
                bgImageUrl="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1771226242/Enrterprise_Solution_w9fhhl.webp"
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
