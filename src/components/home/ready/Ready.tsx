"use client";

import React, { useEffect, useRef } from "react";
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
  videoSrc = "https://res.cloudinary.com/dqvzaju7x/video/upload/ctabg_crlgz3.mp4",
  linkText = "Let’s Connect",
  linkHref = "/contact",
}: ReadyProps) => {
  const theme = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;

    return () => {
      if (videoEl) {
        try {
          videoEl.pause();

          videoEl.removeAttribute("src");
          while (videoEl.firstChild) {
            videoEl.removeChild(videoEl.firstChild);
          }

          videoEl.load();
        } catch (error) {
          console.warn("Video cleanup error:", error);
        }
      }
    };
  }, []);

  return (
    <ReadyContainer>
      <BackgroundVideo
        key="ready-section-video"
        ref={videoRef} autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <Overlay />
      <PageContainer>
        <TextWrapper>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "56px", md: "78px" },
              color: theme.palette.text.primary,
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: theme.palette.text.secondary, mt: 2 }}
            variant="body2"
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

export default Ready;
