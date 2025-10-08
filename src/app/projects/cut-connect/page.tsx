import SuccessStories from "@/components/about/successStories/SuccessStories";
import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import { Explore } from "@/components/case-studies/Explore.styles";
import Ready from "@/components/home/ready/Ready";
import { Box } from "@mui/material";

export default function CutConnectCaseStudyPage() {
    return (

        <>
            <CaseStudyHeader
                background={{ kind: "video", src: "https://res.cloudinary.com/dqvzaju7x/video/upload/v1759933021/airbot-header_gx3fsp.mp4", }}
                title="Cut Connect"
                subtitle="Men’s Grooming SaaS Platform"
                description={
                    <>
                        Cut Connect reflects Lumunate’s strength in Web & Mobile Development, Product SaaS Solutions, and Digital Transformation, helping small businesses modernize operations and deliver a seamless customer experience.
                    </>
                }
                metaItems={[
                    { label: "Year", value: "2025" },
                    {
                        label: "Timeline",
                        items: [
                            { label: "", value: "Under Development" },
                        ],
                    },
                ]}
                overlayOpacity={0.4}
                rightMaxWidth={900}

            />

            <Challenges
                title="Challenge"
                description="Traditional barbershops lacked digital tools to manage appointments, seat allocations, and customer engagement, limiting their ability to scale and modernize."
                imageSrc="/case-studies/cut-connect-1.svg"
            />

            <Challenges
                title="Solution"
                description="We designed and developed Cut Connect, a custom SaaS platform that enables clients to book appointments via web and mobile apps, while shop owners manage schedules, pricing, and multi-seat configurations. The platform includes subscription models, real-time availability, and growth-ready infrastructure."
                imageLeftSrc="/case-studies/cut-connect-2.svg"
                imageRightSrc="/case-studies/cut-connect-3.svg"
            />



            <ImpactSection
                impactPoints={[
                    "Helped barbershops digitize scheduling and customer management",
                    "Increased convenience for customers through mobile-first booking",
                    "Supported scalability with a flexible SaaS model",
                ]}
                services={["UI/UX", "Wire framing", "Prototyping"]}
            />

            <SuccessStories
                storyText="The team at Luminate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!"
                name="Ebrahim"
                role="CEO, Koinfolio"
                showStars={true}
            />

            <Box component="section">
                <Explore variant="h1">
                    Explore. Engineer. Evolve.
                </Explore>
            </Box>

            <Ready
                title="Ready to Build What's Next?"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
                linkText="Let's Connect"
                linkHref="/contact"
            />


        </>
    );
}
