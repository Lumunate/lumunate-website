"use client";

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
import PageContainer from "../common/PageContainer";
import { useNavbarRef } from "@/components/ui/NavbarContext";
import { usePathname } from "next/navigation";

export default function HeaderSection({ animate }: { animate: boolean }) {
  const navRef = useNavbarRef();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useGsapTimelineAnimation(
    [navRef, titleRef, descRef, socialRef],
    0,
    animate && isHome
  );

  return (
    <HeaderRoot>
      <SvgBg>
        <video
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/v1728454343/home-header-video_em6qpr.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </SvgBg>

      <PageContainer>
        <ContentBox>
          <LeftBox>
            <StyledH1 ref={titleRef}>
              Your digital <br /> evolution <br /> partner
            </StyledH1>
          </LeftBox>

          <RightBox>
            <StyledParagraph ref={descRef}>
              Transform ideas into scalable digital products that grow with your
              business. From AI-powered platforms to enterprise solutions,
              we&apos;re the technology partner that turns vision into velocity.
            </StyledParagraph>

            <SocialStack ref={socialRef}>
              <IconButton
                size="small"
                href="https://www.linkedin.com/company/lumunate/"
                target="_blank"
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={25} height={25} />
              </IconButton>
            </SocialStack>
          </RightBox>
        </ContentBox>
      </PageContainer>
    </HeaderRoot>
  );
}
