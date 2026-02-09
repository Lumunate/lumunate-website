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
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  onComplete?: () => void;
}

const OurApproach = ({ onComplete }: Props) => {
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

  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Step 1 & Steps 2-5 animations
  useEffect(() => {
    const numberEl = numberRef.current;
    const titleEl = titleRef.current;
    const descEl = descRef.current;
    const btnEl = buttonRef.current;

    if (!numberEl || !titleEl || !descEl || !btnEl) return;

    // Kill any previous float animations
    gsap.killTweensOf([numberEl, titleEl]);

    if (activeIndex === 0) {
      // Step 1 animation: number & title from left
      gsap.fromTo(
        [numberEl, titleEl],
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
    } else {
      // Steps 2-5 animation: float/blink effect
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power1.out" } });

      tl.fromTo(
        numberEl,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1 }
      ).fromTo(
        titleEl,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1 },
        "<"
      );

      // subtle infinite float after animation
      gsap.to([numberEl, titleEl], {
        y: -5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6, // wait for fade-in to finish
      });
    }

    // Right-bottom desc & button animation (all steps)
    gsap.fromTo(
      [descEl, btnEl],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08 }
    );
  }, [activeIndex]);

  // Scroll-driven step change
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
        const index = Math.min(totalSteps - 1, Math.floor(self.progress * totalSteps));
        setActiveIndex(index);
      },
      onLeave: () => {
        onComplete?.();
      },
    });

    return () => trigger.kill();
  }, [data, onComplete]);

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
                <NumberTypography ref={numberRef}>{data[activeIndex].number}</NumberTypography>

                <SubTitle ref={titleRef} variant="h1">
                  {data[activeIndex].title}
                </SubTitle>
              </Box>
            </SubContentWrapper>

            <RightBottomBox>
              <DescriptionText ref={descRef} variant="h5">
                {data[activeIndex].description}
              </DescriptionText>
              <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
                <DiscoverButton ref={buttonRef} sx={{ mt: "40px" }}>
                  Discover
                </DiscoverButton>
              </Link>
            </RightBottomBox>
          </ContentWrapper>
        </PageContainer>
      </FullBleedGrid>
    </OurApproachContainer>
  );
};

export default OurApproach;
