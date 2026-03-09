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
          src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770892986/tva-timedoor_1_hcvelf.webm"
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


            <Link
              href="/contact"
              passHref
              style={{
                textDecoration: "none",
                display: "flex",
                width: "100%",
              }}
            >
              <Box ref={descRef}>
                <DiscoverButton

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

                    px: {
                      xs: "16px",
                    },
                    py: {
                      xs: "12px",
                    },
                    gap: {
                      xs: "8px",
                    },
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
