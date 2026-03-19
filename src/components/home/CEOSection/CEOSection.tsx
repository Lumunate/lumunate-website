"use client";

import { Box, Typography, Avatar, Stack } from "@mui/material";
import * as S from "./CEOSection.styles";
import PageContainer from "@/components/common/PageContainer";
import DiscoverButton from "@/components/ui/DiscoverButton";
import useGsapAnimation from "@/hooks/useGsapAnimation";

const CEOSection = () => {
  // Heading Animation
  const headingRef = useGsapAnimation<HTMLHeadingElement>({
    direction: "fade",
    delay: 0.2,
    duration: 1,
  });

  // Avatar Animation
  const avatarRef = useGsapAnimation<HTMLDivElement>({
    direction: "scale-up",
    delay: 0.4,
    duration: 0.8,
  });

  const contentRef = useGsapAnimation<HTMLDivElement>({
    direction: "bottom",
    delay: 0.5,
    duration: 1,
  });

  return (
    <S.SectionWrapper>
      <S.VideoBackground
        autoPlay
        muted
        loop
        playsInline
        poster="https://res.cloudinary.com/dlhe4iq8c/video/upload/q_auto,f_auto,w_1280/v1772440694/16296848-hd_1920_1080_24fps_vp2tgd.webp"
        preload="metadata"
      >
        <source
          src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772440694/16296848-hd_1920_1080_24fps_vp2tgd.webm"
          type="video/webm"
        />
      </S.VideoBackground>
      <S.Overlay />

      <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
        <PageContainer>
          {/* Animated Heading */}
          <Typography
            ref={headingRef}
            variant="h1"
            align="center"
            sx={{
              fontSize: { xs: "30px", md: "48px", lg: "60px" },
              fontWeight: 400,
              mb: { xs: "40px", md: "80px" },
              color: "text.primary",
            }}
          >
            Hello from the CEO
          </Typography>

          <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: "20px", md: "40px" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              justifyContent="center"
            >
              {/* Animated Avatar Wrapper */}
              <Box ref={avatarRef} sx={{ display: "inline-flex" }}>
                <Avatar
                  src="/ceo-img.svg"
                  alt="Saad Javaid"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>

              {/* Animated Stack for Cards */}
              <Stack
                ref={contentRef}
                spacing="20px"
                sx={{ flex: 1, width: "100%" }}
              >
                <S.MessageCard>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "16px", lg: "22px" },
                      color: "text.primary",
                      lineHeight: 1.4,
                    }}
                  >
                    Hello 👋, <br />I am Saad Javaid, CEO of Lumunate.
                  </Typography>
                </S.MessageCard>

                <S.MessageCard>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "16px", lg: "22px" },
                      color: "text.primary",
                    }}
                  >
                    Whether you have a clear brief or just questions, a short
                    call can bring clarity. Pick a time that works for you.
                  </Typography>
                </S.MessageCard>

                <S.MessageCard>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "16px", lg: "22px" },
                      color: "text.primary",
                    }}
                  >
                    Looking forward to hear from you!
                  </Typography>
                </S.MessageCard>

                <Box
                  sx={{
                    pt: { xs: "0px", md: "20px" },
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <DiscoverButton
                    variant="contained"
                    href="/book-a-meeting"
                    aria-label="Book a meeting slot on our calendar"
                  >
                    Book a Slot
                  </DiscoverButton>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </PageContainer>
      </Box>
    </S.SectionWrapper>
  );
};

export default CEOSection;
