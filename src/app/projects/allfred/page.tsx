import SuccessStories from "@/components/about/successStories/SuccessStories";
import CaseStudyHeader from "@/components/case-studies/airbot/CaseStudyHeader";
import Challenges from "@/components/case-studies/airbot/Challenges";
import ImpactSection from "@/components/case-studies/airbot/ImpactSection";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";

export default function AllfredCaseStudyPage() {
    return (

        <>
            <CaseStudyHeader
                background={{ kind: "video", src: "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770906021/Case_study_hero_jjcnzp.webm", }}
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
                imageSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909214/Allfred_cover_clwbj9.webp"
            />

            <Challenges
                title="Solution"
                description="We built Allfred, a custom ERP and scheduling platform tailored for healthcare and therapy centers. The solution included medical billing & invoicing, patient tracking & management, shared calendars for 25+ therapists, and secure file storage. The system was designed to be GDPR-compliant, locally hosted for data privacy, and fully integrated with payment systems and automated invoicing."
                imageLeftSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909214/9327350075c436aad7f861f492e029a93fa12764_yihpow.webp"
                imageRightSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770909214/Allfred-2_dhegtw.webp"
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
                storyText="Strong execution, clear communication, and a product that works reliably in real-world use.  If you are looking for a high-quality development team, do not hesitate to use Lumunate’s services."
                name="// Christopher Sindelar -"
                flagUrl="/case-studies/Austria-flag.svg"
                role="CEO, Austria"
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
