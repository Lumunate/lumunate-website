import React from "react";
import {
  ContentWrapper,
  DiscoverButton,
  NumberTypography,
  OurApproachContainer,
  RightBottomBox,
  SubContainer,
  SubContentWrapper,
  SubTitle,
  TitleText,
} from "./OurApproach.style";
import { Box, Typography } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { DescriptionText } from "../trackRecord/TrackRecord.style";

const OurApproach = () => {
  return (
    <OurApproachContainer>
      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/approachbg_g7xwx5.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <SubContainer>
        <TitleText variant="h1">
          Our Approach
        </TitleText>

        <ContentWrapper>
          <SubContentWrapper>
            <Box>
              <NumberTypography>01</NumberTypography>
              <SubTitle variant="h1">
                Visual Identity & Branding
              </SubTitle>
            </Box>
          </SubContentWrapper>
          <Box
            sx={{
              borderLeft: "0.4px solid #B4B4B4",
              borderBottom: "0.4px solid #B4B4B4",
              height: "100%",
               display: {xs:"none", md:"block"},
            }}
          ></Box>
          <Box
            sx={{
              height: "100%",
               display: {xs:"none", md:"block"},
            }}
          ></Box>
          <RightBottomBox>
            <DescriptionText variant="h5">
              Define your digital presence with distinctive branding that
              resonates and converts.
            </DescriptionText>
            <DiscoverButton>
              {" "}
              Discover{" "}
              <ArrowOutwardIcon sx={{ fontSize: "17px", marginLeft: "6px" }} />
            </DiscoverButton>
          </RightBottomBox>
        </ContentWrapper>
      </SubContainer>
      
    </OurApproachContainer>
  );
};

export default OurApproach;
