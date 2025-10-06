
import HeaderSection from "@/components/home/HeaderSection";
import LogosSection from "@/components/home/LogosSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import OurApproach from "@/components/home/ourApproach/OurApproach";
import Ready from "@/components/home/ready/Ready";
import TrackRecord from "@/components/home/trackRecord/TrackRecord";
import Works from "@/components/home/work/Works";
import ExploreSection from "@/components/home/explore/Explore";


export default function Home() {
  return (
    <>
      <HeaderSection />

      <LogosSection />

      <TestimonialSection />

      <WorkflowSection />

      <TrackRecord />

      <OurApproach />

      <Works />

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

