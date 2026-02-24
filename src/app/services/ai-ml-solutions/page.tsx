
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import Works from "@/components/home/work/Works";
import ServiceOverview from "@/components/services/ServiceOverview/ServiceOverview";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import { Box } from "@mui/material";

const webDevCards = [
    {
        icon: (
            <Box
                component="img"
                src="/services/problem.svg"
                alt="User Research"
                // We keep sizing logic here or in styles
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Problem Framing & Feasibility",
        description: "We start by defining the problem clearly. what can and should be solved with ML, what data is available, and what success looks like in measurable terms."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/wireframes.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Data Preparation & Pipelines",
        description: "We design data pipelines for collection, cleaning, labeling, and versioning to ensure models are trained on reliable, reproducible datasets."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/development.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Model Development & Evaluation",
        description: "We build, train, and evaluate models using appropriate techniques i.e classical ML or deep learning based on the problem, not trends."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/model.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Model Deployment & Integration",
        description: "Models are deployed as services or embedded within applications, with clear APIs and performance considerations for real-time or batch use."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/monitoring.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Monitoring & Iteration",
        description: "We monitor model performance, drift, and system behavior over time, refining models as data and requirements evolve."
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/security.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Security & Compliance",
        description: "We apply access control, data protection, and auditability practices to ensure AI systems are safe, traceable, and production-ready."
    },
];

export default function UIUXPage() {
    return (

        <>
            <ServicesHero
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
                title="AI/ML Solutions"
                subtitle="Intelligence that delivers Custom AI tools that automate, optimize, and accelerate your business."
                overlayOpacity={0.4}


            />

            <ServiceOverview
                title="Service Overview"
                description="At Luminate, AI and machine learning are applied to solve specific problems—automation, prediction, optimization, and decision support. We design and implement AI/ML solutions that integrate cleanly with existing systems, perform reliably in production, and are built with clear constraints around data, accuracy, and scalability."
                cardsTitle="What This Service Includes"
                cards={webDevCards}
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
