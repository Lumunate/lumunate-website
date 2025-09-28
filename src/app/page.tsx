
import HeaderSection from "@/components/home/HeaderSection";
  import LogosSection from "@/components/home/LogosSection";
  import TestimonialSection from "@/components/home/TestimonialSection";
  import WorkflowSection from "@/components/home/WorkflowSection";
  import Explore from "@/components/home/explore/Explore";
  import OurApproach from "@/components/home/ourApproach/OurApproach";
  import Ready from "@/components/home/ready/Ready";
  import TrackRecord from "@/components/home/trackRecord/TrackRecord";
  import Works from "@/components/home/work/Works";


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
       <Explore />
      <Ready/>
        
        
      </>
    );
  }

