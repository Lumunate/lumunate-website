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

const Ready = () => {
  return (
    <ReadyContainer>
      <BackgroundVideo
        autoPlay
        muted
        loop
        playsInline
        poster="/ready-poster.jpg"
      >
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/ctabg_crlgz3.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <Overlay />

      <TextWrapper>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "78px" },
            color: "#fff",
            fontWeight: 700,
          }}
        >
          Ready to Build What&apos;s Next?
        </Typography>

        <Typography sx={{ color: "#AAAAAA", mt: 2 }} variant="body2">
          Every great product starts with a conversation. Let&apos;s discuss how
          we can accelerate your digital transformation and turn your ideas into
          scalable solutions that drive real results.
        </Typography>

        <Box sx={{ marginTop: "38px" }}>
          <Link style={{ color: "white", textDecoration: "none" }} href="/">
            <Typography
              variant="h4"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Let’s Connect{" "}
              <ArrowOutwardIcon sx={{ fontSize: "26px", ml: 1 }} />
            </Typography>
          </Link>
        </Box>
      </TextWrapper>
    </ReadyContainer>
  );
};

export default Ready;
