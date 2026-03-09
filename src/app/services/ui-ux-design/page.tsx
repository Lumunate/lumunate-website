
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";
import Works from "@/components/home/work/Works";
import OurProcess from "@/components/services/OurProcess/OurProcess";
import ServiceOverview from "@/components/services/ServiceOverview/ServiceOverview";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import UIUXSection from "@/components/services/UIUXSection/UIUXSection";
import { Box } from "@mui/material";

const webDevCards = [
    {
        icon: (
            <Box
                component="img"
                src="/services/users.svg"
                alt="User Research"
                // We keep sizing logic here or in styles
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "User Research & Experience Mapping",
        description: "Deep understanding of user behavior, needs, and pain points"
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
        subtitle: "Wireframes & Interface Design",
        description: "Strategic layout and interaction patterns that guide users naturally"
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/visual-design.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Visual Design Aligned with Brand",
        description: "Cohesive visual systems that strengthen brand identity"
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/interaction.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Interaction & Micro-interactions",
        description: "Delightful details that enhance the user experience"
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/responsive.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Responsive Web & Mobile Design",
        description: "Seamless experiences across all devices and screen sizes"
    },
    {
        icon: (
            <Box
                component="img"
                src="/services/usability.svg"
                alt="UI Design"
                sx={{ width: "40px", height: "40px" }}
            />
        ),
        subtitle: "Usability Testing & Refinement",
        description: "Continuous iteration based on real user feedback"
    },
];

export default function UIUXPage() {
    return (

        <>
            <ServicesHero
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
                title="Creative Design & UI/UX"
                subtitle="Interfaces that convert User-centered designs that turn visitors into customers."
                overlayOpacity={0.4}


            />

            <ServiceOverview
                title="Service Overview"
                description="Creative Design & UI/UX  brings together visual creativity and usability expertise. We design interfaces that are not only beautiful but functional—creating experiences that users love while driving measurable business outcomes. From initial research to final delivery, we ensure every design decision is grounded in user needs and strategic goals."
                cardsTitle="What This Service Includes"
                cards={webDevCards}
            />

            <UIUXSection />

            <OurProcess />

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
