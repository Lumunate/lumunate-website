"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ContentWrapper,
  NumberTypography,
  OurApproachContainer,
  RightBottomBox,
  SubContentWrapper,
  SubTitle,
  TitleText,
  DescriptionText,
  FullBleedGrid,
} from "./OurApproach.style";
import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PageContainer from "@/components/common/PageContainer";
import DiscoverButton from "@/components/ui/DiscoverButton";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onComplete?: () => void;
}

const OurApproach = ({ onComplete }: Props) => {
  const data = [
    { number: "01", title: "Visual Identity & Branding", description: "Define your digital presence with distinctive branding that resonates and converts." },
    { number: "02", title: "Design & Research", description: "Transform ideas into user-centered designs through research, prototypes, and validation." },
    { number: "03", title: "Development & Testing", description: "Build scalable solutions with clean architecture, rigorous testing, and modern frameworks." },
    { number: "04", title: "Launch & Iteration", description: "Deploy with secure infrastructure and stay invested in continuous optimization." },
    { number: "05", title: "Digital Transformation", description: "Drive growth with SEO, targeted campaigns, and data-driven marketing strategies." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  /* Animate text when step changes */
  useEffect(() => {
    gsap.fromTo(
      [numberRef.current, titleRef.current, descRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      }
    );
  }, [activeIndex]);

  /* Scroll-driven steps */
  useEffect(() => {
    if (!containerRef.current) return;

    const totalSteps = data.length;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * totalSteps}`,
      scrub: 0.6,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        const index = Math.min(
          totalSteps - 1,
          Math.floor(self.progress * totalSteps)
        );

        setActiveIndex(index);
      },

      onLeave: () => {
        onComplete?.();
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <OurApproachContainer ref={containerRef}>
      <Box className="topBlur" />
      <Box className="bottomBlur" />

      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/approachbg_g7xwx5.mp4"
          type="video/mp4"
        />
      </video>

      <PageContainer>
        <TitleText variant="h5">Our Approach</TitleText>
      </PageContainer>

      <FullBleedGrid>
        <PageContainer>
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
              <DescriptionText ref={descRef} variant="h5">
                {data[activeIndex].description}
              </DescriptionText>

              <DiscoverButton sx={{ mt: "40px" }}>
                Discover
              </DiscoverButton>
            </RightBottomBox>
          </ContentWrapper>
        </PageContainer>
      </FullBleedGrid>
    </OurApproachContainer>
  );
};

export default OurApproach;
