"use client";

import React from "react";
import {
  ContentContainer,
  SuccessStoriesContainer,
  BackgroundVideo,
  StarsWrapper,
} from "./SuccessStories.style";
import { Box, Typography, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PageContainer from "@/components/common/PageContainer";
import Image from "next/image";

type SuccessStoriesProps = {
  storyText: string;
  name: string;
  role: string;
  showStars?: boolean;
  flagUrl?: string;
  logoUrl?: string
};

const SuccessStories: React.FC<SuccessStoriesProps> = ({
  storyText,
  name,
  role,
  showStars = false,
  flagUrl,
  logoUrl,
}) => {
  const theme = useTheme();

  return (
    <SuccessStoriesContainer>
      <BackgroundVideo
        key="success-stories-section-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770896280/Feedback_bg_ftbegc.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <Box className="topBlur" />
      <Box className="bottomBlur" />

      <ContentContainer>
        <PageContainer>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "18px", sm: "22px" },
              color: theme.palette.text.primary,
              fontWeight: 400,
            }}
          >
            Client Success Stories
          </Typography>

          {showStars && (
            <StarsWrapper>
              {[...Array(5)].map((_, idx) => (
                <StarIcon
                  key={idx}
                  sx={{
                    color: theme.palette.warning.main,
                    fontSize: 32,
                  }}
                />
              ))}
            </StarsWrapper>
          )}

          <Box sx={{ marginTop: { xs: "47px", md: "50px", lg: "65px" } }}>
            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "32px", md: "42px", lg: "60px" },
                color: theme.palette.text.primary,
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              “{storyText}”
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: { xs: "40px", md: "50px", lg: "65px" },
            }}
          >
            {/* Name */}
            <Typography
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                marginRight: logoUrl || flagUrl ? "4px" : 0,
              }}
              variant="body2"
            >
              {name}
            </Typography>

            {/* Logo (optional) */}
            {logoUrl && (
              <Image
                src={logoUrl}
                alt={`${name} Logo`}
                width={30}
                height={30}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  marginRight: flagUrl ? "4px" : 0,
                }}
              />
            )}

            {/* Flag (optional) */}
            {flagUrl && (
              <Image
                src={flagUrl}
                alt={`${name} Flag`}
                width={30}
                height={30}
                style={{
                  width: "20px",
                  height: "16px",
                  objectFit: "cover",
                }}
              />
            )}
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "16px", sm: "18px" },
            }}
          >
            {role}
          </Typography>
        </PageContainer>
      </ContentContainer>
    </SuccessStoriesContainer>
  );
};

export default SuccessStories;
