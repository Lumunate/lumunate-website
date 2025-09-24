import Explore from "@/components/home/explore/Explore";
import OurApproach from "@/components/home/ourApproach/OurApproach";
import Ready from "@/components/home/ready/Ready";
import TrackRecord from "@/components/home/trackRecord/TrackRecord";
import Works from "@/components/home/work/Works";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
    <TrackRecord />
    <OurApproach />
    <Works />
    <Explore />
    <Ready/>
    </Box>
  );
}
