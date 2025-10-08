
"use client"
import useGsapAnimation from "@/hooks/useGsapAnimation";
import {
  HeaderRoot,
  SvgBg,
  ContentBox,
  LeftBox,
  StyledH1,
  RightBox,
  StyledParagraph,
  SocialStack,
} from "./HeaderSection.styles";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useGsapTimelineAnimation } from "@/hooks/useGsapAnimation";

export default function HeaderSection() {

   const headingRef = useGsapAnimation({ direction: "text-expand", delay: 3, duration:2 });
    const textRef = useGsapAnimation({ direction: "scale-up", delay: 3, duration:2 });
  const socialRef = useRef<HTMLDivElement>(null);

  // Reuse the same animation via the hook
  useGsapTimelineAnimation([titleRef, descRef, socialRef], 2);

  return (
    <HeaderRoot>
      <SvgBg>
        <video
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/v1728454343/home-header-video_em6qpr.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </SvgBg>
      <ContentBox>
        <LeftBox>
          <StyledH1 ref={headingRef} variant="h1">Your digital <br /> evolution <br /> partner</StyledH1>
        </LeftBox>
        <RightBox>
          <StyledParagraph ref={textRef} variant="body1">
            Transform ideas into scalable digital products that grow with your
            business. From AI-powered platforms to enterprise solutions,
            we&apos;re the technology partner that turns vision into velocity.
          </StyledParagraph>

          <SocialStack ref={socialRef}>
            <IconButton
              size="small"
              color="inherit"
              href="https://www.instagram.com/company/lumunate/"
              target="_blank"
              className="icon-item"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
              href="https://www.linkedin.com/company/lumunate/"
              target="_blank"
              className="icon-item"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </IconButton>
          </SocialStack>
        </RightBox>
      </ContentBox>
    </HeaderRoot>
  );
}
