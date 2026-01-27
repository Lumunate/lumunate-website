"use client";

import React, { useEffect } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGsapAnimation, { useGsapSlideAnimation } from "@/hooks/useGsapAnimation";
import PageContainer from "@/components/common/PageContainer";

gsap.registerPlugin(ScrollTrigger);

const OurApproach = () => {
  const data = [
    {
      number: "01",
      title: "Visual Identity & Branding",
      description:
        "Define your digital presence with distinctive branding that resonates and converts.",
    },
    {
      number: "02",
      title: "Design & Research",
      description:
        "Transform ideas into user-centered designs through research, prototypes, and validation.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Build scalable solutions with clean architecture, rigorous testing, and modern frameworks.",
    },
    {
      number: "04",
      title: "Launch & Iteration",
      description:
        "Deploy with secure infrastructure and stay invested in continuous optimization.",
    },
    {
      number: "05",
      title: "Digital Transformation",
      description:
        "Drive growth with SEO, targeted campaigns, and data-driven marketing strategies.",
    },
  ];

  // Hook controlling slide-based section progress
  const { elementRef, activeIndex } = useGsapSlideAnimation(data);

  // Individual element animations (safe and auto-cleaned by internal gsap.context)
  const numberRef = useGsapAnimation({
    direction: "left",
    delay: 0.4,
    duration: 1,
  });
  const titleRef = useGsapAnimation({
    direction: "top",
    delay: 0.5,
    duration: 1,
  });
  const descriptionRef = useGsapAnimation({
    direction: "fade",
    delay: 0.6,
    duration: 1,
  });
  const buttonRef = useGsapAnimation<HTMLButtonElement>({
    direction: "bottom",
    delay: 0.7,
    duration: 1,
  });

  //  Additional gsap.context for safe ScrollTrigger + video mount cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Optional: Add subtle fade-in for entire section background video or container
      gsap.fromTo(
        elementRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, elementRef);

    // Cleanup: revert GSAP safely on unmount
    return () => ctx.revert();
  }, [elementRef]);

  return (
    <OurApproachContainer ref={elementRef}>
      <Box className="topBlur" />
      <Box className="bottomBlur" />
      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/approachbg_g7xwx5.mp4"
          type="video/mp4"
          key="our-approach-section-video"
        />
        Your browser does not support the video tag.
      </video>

      <PageContainer>
        <SubContainer>
          <TitleText variant="h5">Our Approach</TitleText>

          <ContentWrapper>
            <SubContentWrapper>
              <Box>
                <NumberTypography ref={numberRef}>
                  {data[activeIndex].number}
                </NumberTypography>
                <SubTitle ref={titleRef} variant="h1">
                  {data[activeIndex].title}
                </SubTitle>
              </Box>
            </SubContentWrapper>

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
      </PageContainer>
    </OurApproachContainer>
  );
};

export default OurApproach;
