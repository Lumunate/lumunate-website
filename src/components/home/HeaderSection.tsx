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

export default function HeaderSection() {
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
          <StyledH1 variant="h1">Your digital evolution partner</StyledH1>
        </LeftBox>
        <RightBox>
          <StyledParagraph variant="body1">
            Transform ideas into scalable digital products that grow with your
            business. From AI-powered platforms to enterprise solutions,
            we&apos;re the technology partner that turns vision into velocity.
          </StyledParagraph>

          <SocialStack>
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
