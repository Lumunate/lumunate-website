"use client";

import React, { useEffect, useRef, memo } from "react";
import {
  ReadyContainer,
  TextWrapper,
  BackgroundVideo,
  Overlay,
} from "./Ready.style";
import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PageContainer from "@/components/common/PageContainer";

type ReadyProps = {
  title: string;
  description: string;
  videoSrc?: string;
  poster?: string;
  linkText?: string;
  linkHref?: string;
};

const Ready = ({
  title,
  description,
  videoSrc = "https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770893377/orb_init0e.webm",
  linkText = "Let’s Connect",
  linkHref = "/contact",
}: ReadyProps) => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;

    return () => {
      if (videoEl) {
        videoEl.pause();
        videoEl.src = "";
        videoEl.load();
      }
    };
  }, []);

  return (
    <ReadyContainer>
      <BackgroundVideo
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ willChange: "transform" }}
      >
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <Overlay />
      <PageContainer>
        <TextWrapper>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "56px", md: "60px", lg: "60px", xl: "78px" },
              color: theme.palette.text.primary,
              fontWeight: 400,
              fontFamily: 'Montserrat',
              lineHeight: "100%"
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              mt: { xs: 2.5, sm: 4 },
              fontFamily: "Montserrat",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "-0.2px",
              maxWidth: "1098px",
              mx: "auto",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            {description}
          </Typography>

          <Box sx={{ marginTop: "38px" }}>
            <Link
              style={{
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
              href={linkHref}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "20px", sm: "28px" },
                  display: "inline-flex",
                  alignItems: "center",
                  color: theme.palette.text.primary,
                }}
              >
                {linkText}{" "}
                <ArrowOutwardIcon
                  sx={{
                    fontSize: "26px",
                    ml: 1,
                    color: theme.palette.text.primary,
                  }}
                />
              </Typography>
            </Link>
          </Box>
        </TextWrapper>
      </PageContainer>
    </ReadyContainer>
  );
};

// Wrap with memo to prevent unnecessary re-renders if parent state changes
export default memo(Ready);