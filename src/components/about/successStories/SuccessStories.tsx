"use client";

import React from "react";
import {
  ContentContainer,
  SuccessStoriesContainer,
  BackgroundVideo,
  StarsWrapper,
} from "./SuccessStories.style";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type SuccessStoriesProps = {
  storyText: string;
  name: string;
  role: string;
  showStars?: boolean;
};

const SuccessStories: React.FC<SuccessStoriesProps> = ({
  storyText,
  name,
  role,
  showStars = false,
}) => {
  return (
    <SuccessStoriesContainer>
      {/* Background video (fixed for all pages) */}
      <BackgroundVideo autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/q_auto,f_auto/about_hero_bg2_dp38xc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <ContentContainer>

        {/* Small heading */}
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: 400 }}>
          Client Success Stories
        </Typography>

        {/* Optional stars */}
        {showStars && (
          <StarsWrapper>
            {[...Array(5)].map((_, idx) => (
              <StarIcon key={idx} sx={{ color: "#FFD700", fontSize: 32 }} />
            ))}
          </StarsWrapper>
        )}

        {/* Main story text */}
        <Box sx={{ marginTop: { xs: "30px", md: "50px", lg: "65px" } }}>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "30px", lg: "59px" },
              color: "#fff",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            “{storyText}”
          </Typography>

        </Box>

        {/* Name + role */}
        <Box sx={{ marginTop: { xs: "25px", md: "40px", lg: "65px" } }}>
          <Typography
            sx={{ fontWeight: 700, color: "#fff", marginBottom: "4px" }}
            variant="body2"
          >
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#ccc" }}>
            {role}
          </Typography>
        </Box>
      </ContentContainer>
    </SuccessStoriesContainer>
  );
};

export default SuccessStories;
