
import ExploreSection from "@/components/home/explore/Explore";
import LogosSection from "@/components/home/LogosSection";
import Ready from "@/components/home/ready/Ready";
import Works from "@/components/home/work/Works";
import HowWeBuild from "@/components/services/HowWeBuild/HowWeBuild";
import ServiceOverview from "@/components/services/ServiceOverview/ServiceOverview";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import { Box } from "@mui/material";

const webDevCards = [
    {
        icon: (
            <Box
                component="img"
                src="/services/frontend.svg"
                alt="User Research"
                // We keep sizing logic here or in styles
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Frontend Engineering",
        description: "Component-based web and mobile interfaces built for performance, accessibility, and maintainability."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/backend.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Backend Services & APIs",
        description: "Scalable backend systems with well-defined APIs, business logic, and secure data handling."
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
        subtitle: "Database Design & Management",
        description: "Structured data models, optimized queries, and reliable data storage built for scale."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/integration.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Integrations & System Connectivity",
        description: "Seamless integration with third-party services, internal tools, and external APIs."
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
        subtitle: "Performance & Security Optimization",
        description: "Focused improvement for load times, stability, authentication, and data protection."
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
        subtitle: "Testing, Deployment & Maintenance",
        description: "Thorough testing, production-ready deployments, and clean handover for long-term support."
    },
];

const serviceLogos = [
    { src: "/services/nodejs.svg", label: "Node JS" },
    { src: "/services/nextjs.svg", label: "Next JS" },
    { src: "/services/nuxtjs.svg", label: "Nuxt JS" },
    { src: "/services/rails.svg", label: "Rails" },
    { src: "/services/rust.svg", label: "Rust" },
    { src: "/services/swift.svg", label: "Swift" },
    { src: "/services/vuejs.svg", label: "Vue JS" },
    { src: "/services/go.svg", label: "Go" },
    { src: "/services/kotlin.svg", label: "Kotlin" },
    { src: "/services/laravel.svg", label: "Laravel" },
    { src: "/services/flutter.svg", label: "Flutter" },
    { src: "/services/flask.svg", label: "Flask" },
    { src: "/services/nestjs.svg", label: "Nest JS" },
    { src: "/services/react.png", label: "React" },
];

export default function UIUXPage() {
    return (

        <>
            <ServicesHero
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
                title="Web & Mobile Development"
                subtitle="Apps that scale Fast, secure, and built for growth across all platforms."
                overlayOpacity={0.4}


            />

            <ServiceOverview
                title="Service Overview"
                description="At Luminate, Web & Mobile Development is driven by engineering discipline. We design and build systems with a strong focus on architecture, performance, and long-term maintainability. Every technical decision, from stack selection to deployment and is made with scalability, reliability, and real usage in mind."
                cardsTitle="What This Service Includes"
                cards={webDevCards}
            />

            <HowWeBuild />

            <LogosSection
                title="Our Tech Stack"
                logos={serviceLogos}
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
