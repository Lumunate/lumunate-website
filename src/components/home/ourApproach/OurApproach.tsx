"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
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
  const data = useMemo(
    () => [
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
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Animation logic for content changes
  useEffect(() => {
    const targets = [
      numberRef.current,
      titleRef.current,
      descRef.current,
      buttonRef.current,
    ].filter(Boolean);
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
    });

    return () => ctx.revert();
  }, [activeIndex]);

  // SCROLL TRIGGER
  useEffect(() => {
    if (!containerRef.current) return;

    const totalSteps = data.length;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * (totalSteps + 1)}`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.min(
          totalSteps - 1,
          Math.floor(progress * totalSteps),
        );
        setActiveIndex((prev) => (prev !== index ? index : prev));
      },
      onLeave: () => {
        onComplete?.();
      },
    });

    return () => {
      trigger.kill();
    };
  }, [data.length, onComplete]);

  return (
    <OurApproachContainer ref={containerRef}>
      <Box className="topBlur" />
      <Box className="bottomBlur" />

      {/* OPTIMIZED VIDEO: Fixed type and added preload */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        style={{ willChange: "transform" }}
      >
        <source
          src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770893375/liquid-gradient-abstract-background_qpknyp.webm"
          type="video/webm"
        />
      </video>

      <PageContainer>
        <TitleText variant="h5" component="h2">
          Our Approach
        </TitleText>
      </PageContainer>

      <FullBleedGrid>
        <PageContainer>
          <ContentWrapper>
            <SubContentWrapper>
              <Box>
                {/* Reference the data directly to ensure the UI is in sync with state */}
                <NumberTypography ref={numberRef}>
                  {data[activeIndex].number}
                </NumberTypography>

                <SubTitle ref={titleRef} variant="h1" component="h3">
                  {data[activeIndex].title}
                </SubTitle>
              </Box>
            </SubContentWrapper>

            <RightBottomBox>
              <DescriptionText ref={descRef} variant="h5" component="p">
                {data[activeIndex].description}
              </DescriptionText>
              <Link
                href="/contact"
                passHref
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "4px",
                }}
                aria-label="Contact us to discover our full portfolio of services"
              >
                <DiscoverButton
                  ref={buttonRef}
                  sx={{
                    mt: { xs: "20px", lg: "20px", xl: "20px" },
                    minHeight: "48px",
                    minWidth: "120px",
                    m: "8px",
                  }}
                >
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
