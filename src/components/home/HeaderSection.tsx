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
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useGsapTimelineAnimation } from "@/hooks/useGsapAnimation";
import PageContainer from "../common/PageContainer";
import { useNavbarRef } from "@/components/ui/NavbarContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DiscoverButton from "../ui/DiscoverButton";

declare module 'react' {
  interface VideoHTMLAttributes<T> extends React.HTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto';
  }
}

export default function HeaderSection({ animate }: { animate: boolean }) {
  const navRef = useNavbarRef();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useGsapTimelineAnimation(
    [navRef, titleRef, descRef, btnRef, socialRef],
    0,
    animate && isHome
  );

  return (
    <HeaderRoot>
      <SvgBg>
        <video
          fetchPriority="high"
          preload="metadata"
          poster="https://res.cloudinary.com/dlhe4iq8c/video/upload/q_auto,f_auto,w_1280/v1770892986/tva-timedoor_1_hcvelf.webp"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source
            src="https://res.cloudinary.com/dlhe4iq8c/video/upload/q_auto,f_auto,w_1280,br_1500k/v1770892986/tva-timedoor_1_hcvelf.webm"
            type="video/webm"
          />
        </video>
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

            <Link
              href="/contact"
              passHref
              style={{
                textDecoration: "none",
                display: "flex",
                width: "100%",
              }}
            >
              <Box ref={btnRef}>
                <DiscoverButton
                  label="Get started with your project"
                  sx={{
                    mt: "40px",
                    width: "fit-content",
                    alignSelf: {
                      xs: "flex-start",
                      md: "center",
                      lg: "flex-end",
                    },
                    display: {
                      xs: "inline-flex",
                      sm: "inline-flex",
                      md: "none",
                    },
                    px: { xs: "16px" },
                    py: { xs: "12px" },
                    gap: { xs: "8px" },
                  }}
                >
                  Get Started
                </DiscoverButton>
              </Box>
            </Link>

            <SocialStack ref={socialRef}>
              <IconButton
                size="small"
                href="https://www.linkedin.com/company/lumunate/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Lumunate's LinkedIn profile"
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={25}
                  height={25}
                  priority
                />
              </IconButton>
            </SocialStack>
          </RightBox>
        </ContentBox>
      </PageContainer>
    </HeaderRoot>
  );
}