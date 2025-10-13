
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
import { useNavbarRef } from "@/components/ui/NavbarContext";


export default function HeaderSection() {

   const headingRef = useGsapAnimation({ direction: "text-expand", delay: 3, duration:2 });
    const textRef = useGsapAnimation({ direction: "scale-up", delay: 3, duration:2 });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  // Animate navbar + title + description + social together after video starts
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
          style={{
            opacity: 1,
            transition: "none",
          }}
        />

      </SvgBg>
      <ContentBox>
        <LeftBox>
          <StyledH1 ref={titleRef} variant="h1">Your digital <br /> evolution <br /> partner</StyledH1>
        </LeftBox>
        <RightBox>
          <StyledParagraph ref={descRef} variant="body1">
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
