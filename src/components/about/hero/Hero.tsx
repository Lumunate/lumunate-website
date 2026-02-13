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
          src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770896346/About_US_q641uq.webm"
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
              gap: { xs: 0, md: "100px", lg: "150px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "60px", xl: "90px" },
                  color: theme.palette.text.primary,
                  whiteSpace: { xs: "normal", md: "nowrap" },
                }}
              >
                About Us
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", xl: "22px" },
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
