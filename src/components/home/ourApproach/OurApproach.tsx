import React from "react";
import {
  ContentWrapper,
  DiscoverButton,
  OurApproachContainer,
  SubContainer,
} from "./OurApproach.style";
import { Box, Typography } from "@mui/material";

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const OurApproach = () => {
  return (
    <OurApproachContainer>
        <video autoPlay loop muted playsInline>
    <source src="/approachbg.mp4" type="video/mp4" />
  </video>


      <SubContainer>
        <Typography variant="h1">Our Approach</Typography>

        <ContentWrapper>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              borderBottom:"0.4px solid #B4B4B4",
              height:"100%"
            }}
          >
            <Box>

            <Typography sx={{fontSize:"180px", fontWeight:400 }}>01</Typography>
            <Typography sx={{marginTop:"-65px"}} variant="h1" >Visual Identity & Branding</Typography>
            </Box>
          </Box>
          <Box sx={{borderLeft:"0.4px solid #B4B4B4", borderBottom:"0.4px solid #B4B4B4",  height:"100%"}}></Box>
          <Box sx={{ height:"100%"}}></Box>
          <Box sx={{ borderLeft:"0.4px solid #B4B4B4", padding:"42px 60px"}}><Typography variant="h5">Define your digital presence with distinctive branding that resonates and converts.</Typography>
          <DiscoverButton> Discover <ArrowOutwardIcon sx={{fontSize:"17px", marginLeft:"6px"}} /></DiscoverButton>
          </Box>
        </ContentWrapper>
      </SubContainer>
    </OurApproachContainer>
  );
};

export default OurApproach;
