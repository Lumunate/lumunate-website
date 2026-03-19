"use client";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";
import {
  HeroContainer,
  BottomBlurOverlay,
} from "@/components/about/hero/Hero.style";

interface BlogDetailsHeroProps {
  imgSrc: string;
  title: string;
}

const BlogDetailsHero = ({ imgSrc, title }: BlogDetailsHeroProps) => {
  const theme = useTheme();

  return (
    <HeroContainer
      sx={{
        height: "1069px",
        maxHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          key={imgSrc}
          src={imgSrc}
          alt={`Featured image for: ${title}`}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: alpha(theme.palette.common.black, 0.5),
            zIndex: 1,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: { xs: "flex-start", md: "center" },
          pb: { xs: "39px", md: "50px", xl: "200px" },
          height: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <PageContainer>
          <Box sx={{ width: "100%", textAlign: { xs: "left", md: "center" } }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "36px", md: "54px", lg: "72px" },
                fontWeight: 400,
                color: theme.palette.common.white,
                lineHeight: 1.2,
                maxWidth: "1284px",
                mx: "auto",
              }}
            >
              {title}
            </Typography>
          </Box>
        </PageContainer>
      </Box>

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

export default BlogDetailsHero;
