import SuccessStories from "@/components/about/successStories/SuccessStories";
import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";

export default function CutConnectCaseStudyPage() {
    return (

        <>
            <CaseStudyHeader
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
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
                imageSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909411/Cut_connect_2_zjugp1.webp"
            />

            <Challenges
                title="Solution"
                description="We designed and developed Cut Connect, a custom SaaS platform that enables clients to book appointments via web and mobile apps, while shop owners manage schedules, pricing, and multi-seat configurations. The platform includes subscription models, real-time availability, and growth-ready infrastructure."
                imageLeftSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909410/Cut_connect-1_h46jbt.webp"
                imageRightSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909410/Cut_connect-2_itb1ch.webp"
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
                storyText="The team delivered exactly what was scoped, with smooth functionality and a clear, usable interface."
                name="// Furqan Shaykh -"
                flagUrl="/case-studies/Denmark-flag.svg"
                role="CEO, Cut Connect"
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
