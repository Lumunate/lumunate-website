"use client";

import {
  ContentContainer,
  HeroContainer,
  BackgroundVideo,
  BottomBlurOverlay,
} from "./Hero.style";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";

interface HeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  descFontSize?: string | object;
}

const Hero = ({
  videoSrc = "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770896346/About_US_q641uq.webm",
  title = "About Us",
  subtitle = "Born from a vision to democratize innovation",
  description = "Every unicorn startup, every industry-disrupting platform, every enterprise transformation—they all started with a team that understood technology isn't just about code. It's about momentum.",
  descFontSize,
}: HeroProps) => {
  const theme = useTheme();
  const isBlog = subtitle === "";

  return (
    <HeroContainer>
      <BackgroundVideo autoPlay muted loop playsInline aria-hidden="true">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <ContentContainer>
        <PageContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              width: "100%",
              alignItems: { xs: "flex-start", md: "center" },
              gap: {
                xs: 0,
                md: isBlog ? 0 : "100px",
                lg: isBlog ? 0 : "150px",
              },
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "40px", md: "60px", xl: "90px" },
                  color: theme.palette.text.primary,
                  whiteSpace: { xs: "normal", md: "nowrap" },
                  lineHeight: 1.1,
                }}
              >
                {title}
              </Typography>

              {!isBlog && (
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", xl: "22px" },
                    color: theme.palette.text.secondary,
                    mt: "16px",
                  }}
                  variant="h2"
                >
                  {subtitle}
                </Typography>
              )}

              {isBlog && (
                <Typography
                  sx={{
                    maxWidth: "668px",
                    fontSize: descFontSize ?? "16px",
                    color: theme.palette.text.secondary,
                    mt: "16px",
                  }}
                  variant="body1"
                >
                  {description}
                </Typography>
              )}
            </Box>

            {!isBlog && (
              <Box sx={{ mt: { xs: "60px", md: 0 } }}>
                <Typography
                  sx={{
                    maxWidth: "668px",
                    fontSize: descFontSize ?? { xs: "14px", md: "16px" },
                    color: theme.palette.text.secondary,
                  }}
                  variant="body1"
                >
                  {description}
                </Typography>
              </Box>
            )}
          </Box>
        </PageContainer>
      </ContentContainer>

      <Image
        style={{
          position: "absolute",
          bottom: "-14rem",
          width: "100%",
          height: "auto",
          zIndex: 4,
          pointerEvents: "none",
        }}
        src="/blure.png"
        alt=""
        width={1920}
        height={500}
      />
      <BottomBlurOverlay />
    </HeroContainer>
  );
};

export default Hero;
