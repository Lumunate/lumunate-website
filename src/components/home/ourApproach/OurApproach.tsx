"use client"
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
  DescriptionText,
} from "./OurApproach.style";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import useGsapAnimation, { useGsapSlideAnimation } from "@/hooks/useGsapAnimation";

const OurApproach = () => {

  const data = [
    {
      number:"01",
      title:"Visual Identity & Branding",
      description:"Define your digital presence with distinctive branding that resonates and converts.",
    },
     {
      number:"02",
      title:"Design & Research",
      description:"Transform ideas into user-centered designs through research, prototypes, and validation.",
    },
     {
      number:"03",
      title:"Development & Testing",
      description:"Build scalable solutions with clean architecture, rigorous testing, and modern frameworks.",
    },
     {
      number:"04",
      title:"Launch & Iteration",
      description:"Deploy with secure infrastructure and stay invested in continuous optimization.",
    },
     {
      number:"05",
      title:"Digital Transformation",
      description:"Drive growth with SEO, targeted campaigns, and data-driven marketing strategies.",
    },
    
  ]

   const { elementRef, activeIndex } = useGsapSlideAnimation(data);
   const numberRef = useGsapAnimation({ direction: "left", delay: 0.5, duration:1 });
   const titleRef = useGsapAnimation({ direction: "top", delay: 0.5, duration:1 });
   const descriptionRef = useGsapAnimation({ direction: "fade", delay: 0.5, duration:1 });
   const buttonRef = useGsapAnimation({ direction: "bottom", delay: 0.5, duration:1 });



  return (
    <OurApproachContainer ref={elementRef}>
      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/approachbg_g7xwx5.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <SubContainer>
        <TitleText variant="h1">Our Approach</TitleText>

        <ContentWrapper>
          <SubContentWrapper>
            <Box>
              <NumberTypography ref={numberRef}>{data[activeIndex].number}</NumberTypography>
              <SubTitle ref={titleRef} variant="h1">
                {data[activeIndex].title}
              </SubTitle>
            </Box>
          </SubContentWrapper>

          <Box
            sx={{
              borderLeft: "0.4px solid #B4B4B4",
              borderBottom: "0.4px solid #B4B4B4",
              height: "100%",
              display: { xs: "none", md: "block" },
            }}
          />
          <Box
            sx={{
              height: "100%",
              display: { xs: "none", md: "block" },
            }}
          />

          <RightBottomBox>
            <DescriptionText ref={descriptionRef} variant="h5">
              {data[activeIndex].description}
            </DescriptionText>
            <DiscoverButton ref={buttonRef as React.RefObject<HTMLButtonElement>}>
              Discover
              <ArrowOutwardIcon sx={{ fontSize: "17px", marginLeft: "6px" }} />
            </DiscoverButton>
          </RightBottomBox>
        </ContentWrapper>
      </SubContainer>
    </OurApproachContainer>
  );
};

export default OurApproach;
