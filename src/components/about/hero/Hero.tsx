"use client";

import React from "react";
import { ContentContainer, HeroContainer, BackgroundVideo, BottomBlurOverlay } from "./Hero.style";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";

const Hero = () => {
  const theme = useTheme();

  return (
    <HeroContainer>
      <BackgroundVideo autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/q_auto,f_auto/about_hero_bg_drepea.mp4"
          type="video/mp4"
        />
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
              gap: { xs: 0, md: "20px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "60px", xl: "90px" },
                  color: theme.palette.text.primary,
                }}
              >
                About Us
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "22px" },
                  color: theme.palette.text.secondary,
                  mt: { xs: "16px", md: 0 }, 
                }}
                variant="h5"
              >
                Born from a vision to democratize innovation
              </Typography>
            </Box>

            <Box
              sx={{
                mt: { xs: "60px", md: 0 }, 
              }}
            >
              <Typography
                sx={{
                  maxWidth: "668px",
                  fontSize: { xs: "14px", md: "16px" },
                  color: theme.palette.text.secondary,
                }}
                variant="body1"
              >
                Every unicorn startup, every industry-disrupting platform, every
                enterprise transformation—they all started with a team that
                understood technology isn&apos;t just about code. It&apos;s about
                momentum.
              </Typography>
            </Box>
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
        }}
        src="/blure.png"
        alt="blur"
        width={100}
        height={100}
      />
      <BottomBlurOverlay />
    </HeroContainer>
  );
};

export default Hero;
