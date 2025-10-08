import SuccessStories from "@/components/about/successStories/SuccessStories";
import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import { Explore } from "@/components/case-studies/Explore.styles";
import Ready from "@/components/home/ready/Ready";
import { Box } from "@mui/material";

export default function AllfredCaseStudyPage() {
    return (

        <>
            <CaseStudyHeader
                background={{ kind: "video", src: "https://res.cloudinary.com/dqvzaju7x/video/upload/v1759933021/airbot-header_gx3fsp.mp4", }}
                title="Allfred"
                subtitle="Healthcare ERP"
                description={
                    <>
                        Allfred reflects Lumunate’s expertise in Web & Mobile App Development, and enterprise-grade digital solutions. By unifying ERP, billing, custom scheduling, and patient management into a single platform, it streamlined operations, reduced administrative overhead, and empowered healthcare teams to focus more on patients rather than paperwork.
                    </>
                }
                metaItems={[
                    { label: "Year", value: "2025" },
                    { label: "Timeline:", value: "Under Development" },
                    { label: "End to End Users", value: "6,000+" },

                ]}
                overlayOpacity={0.4}
                rightMaxWidth={900}

            />

            <Challenges
                title="Challenge"
                description="Healthcare centers and therapy practices often struggle with managing multiple administrative workflows, from patient records and billing to scheduling and compliance. Existing systems were fragmented, non-intuitive, and lacked features tailored to medical professionals."
                imageSrc="/case-studies/allfred-1.svg"
            />

            <Challenges
                title="Solution"
                description="We built Allfred, a custom ERP and scheduling platform tailored for healthcare and therapy centers. The solution included medical billing & invoicing, patient tracking & management, shared calendars for 25+ therapists, and secure file storage. The system was designed to be GDPR-compliant, locally hosted for data privacy, and fully integrated with payment systems and automated invoicing."
                imageLeftSrc="/case-studies/allfred-2.svg"
                imageRightSrc="/case-studies/allfred-3.svg"
            />

            <ImpactSection
                impactPoints={[
                    "Reduced administrative overhead for healthcare teams",
                    "Improved patient management and scheduling efficiency",
                    "Delivered a compliant, scalable system tailored for healthcare providers",
                ]}
                services={["ERP & SaaS Development", "Web App Development", "UI/UX Design", "Cloud & Compliance Architecture"]}
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
