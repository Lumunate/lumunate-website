"use client";

import React from "react";
import {
  ReadyContainer,
  TextWrapper,
  BackgroundVideo,
  Overlay,
} from "./Ready.style";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
  poster = "/ready-poster.jpg",
  linkText = "Let’s Connect",
  linkHref = "/contact",
}: ReadyProps) => {
  return (
    <ReadyContainer>
      <BackgroundVideo autoPlay muted loop playsInline poster={poster}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <Overlay />

      <TextWrapper>
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "32px",sm:"56px", md: "78px" },
            color: "#fff",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography sx={{ color: "#AAAAAA", mt: 2 }} variant="body2">
          {description}
        </Typography>

        {/* CTA Link */}
        <Box sx={{ marginTop: "38px" }}>
          <Link style={{ color: "white", textDecoration: "none" }} href={linkHref}>
            <Typography
              variant="h4"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              {linkText} <ArrowOutwardIcon sx={{ fontSize: "26px", ml: 1 }} />
            </Typography>
          </Link>
        </Box>
      </TextWrapper>
    </ReadyContainer>
  );
};

export default Ready;
