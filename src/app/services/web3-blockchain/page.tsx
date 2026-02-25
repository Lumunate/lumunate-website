
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import Works from "@/components/home/work/Works";
import ProcessStepsSection from "@/components/services/ProcessStepsSection/ProcessStepsSection";
import ServiceOverview from "@/components/services/ServiceOverview/ServiceOverview";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import { Box } from "@mui/material";

const webDevCards = [
    {
        icon: (
            <Box
                component="img"
                src="/services/blockchain.svg"
                alt="User Research"
                // We keep sizing logic here or in styles
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Blockchain Architecture & Protocol Selection",
        description: "We evaluate use cases, select appropriate chains or protocols, and design system architecture based on scalability, security, and cost constraints."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/smart.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Smart Contract Development & Auditing",
        description: "We develop secure, well-tested smart contracts with clear logic, strict access control, and upgrade considerations built in."
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
        subtitle: "dApp Development",
        description: "End-to-end decentralized applications with clean frontend interfaces, wallet integrations, and reliable interaction with on-chain components."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/wallet.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Wallet & Identity Integration",
        description: "Secure integration with wallets, authentication mechanisms, and user identity flows across decentralized systems."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/on-off-integration.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "On-chain & Off-chain Integration",
        description: "Bridging blockchain logic with off-chain services, APIs, databases, and traditional systems where required."
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
        subtitle: "Testing, Security & Deployment",
        description: "Comprehensive testing, security reviews, and deployment strategies to reduce risk in production environments."
    },
];

export default function UIUXPage() {
    return (

        <>
            <ServicesHero
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
                title="Web3 & Blockchain"
                subtitle="Future-ready technology Decentralized solutions for tomorrow's digital economy."
                overlayOpacity={0.4}


            />

            <ServiceOverview
                title="Service Overview"
                description="At Luminate, Web3 and blockchain development is treated as distributed systems engineering, not experimentation. We build decentralized applications and blockchain infrastructure with a focus on security, correctness, and integration with real-world systems. Every solution is designed to be auditable, maintainable, and ready for production use."
                cardsTitle="What This Service Includes"
                cards={webDevCards}
            />

            <ProcessStepsSection />

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
