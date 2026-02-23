"use client";

import React from "react";
import { TitleWrapper, WorkWrapper, ImageContainer, ViewButton } from "./work.style";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PageContainer from "@/components/common/PageContainer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Added optional props for title and project selection
interface WorksProps {
  title?: string;
  includedTitles?: string[]; // e.g., ["AirBot", "Allfred"]
  limit?: number;
}

const Works = ({ title = "Work", includedTitles, limit }: WorksProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projects = [
    { title: "AirBot", year: 2025, imageSrc: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770893373/Airbot_nagyon.webp", url: "/projects/airbot" },
    { title: "Allfred", year: 2025, imageSrc: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770898186/Allfred-Home_11zon_t92k4g.webp", url: "/projects/allfred" },
    { title: "Koinfolio", year: 2024, imageSrc: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770898186/Koinfolio_1__11zon_gdiwkt.webp", url: "/projects/koinfolio" },
    { title: "CutConnect", year: 2025, imageSrc: "https://res.cloudinary.com/dlhe4iq8c/image/upload/v1770898378/Cut_connect_1_ysrdaf.webp", url: "/projects/cut-connect" },
  ];

  // Filter by specific titles if provided
  let displayedProjects = includedTitles
    ? projects.filter(p => includedTitles.includes(p.title))
    : projects;

  // Apply the limit if provided
  if (limit) {
    displayedProjects = displayedProjects.slice(0, limit);
  }

  const renderProjectCard = (project: typeof projects[0], index: number) => (
    <Box key={index}>
      <TitleWrapper>
        <Typography sx={{ fontSize: { xs: "32px", sm: "38px" } }} variant="h3">
          {project.title}
        </Typography>
        <Typography variant="h5" sx={{ color: "text.secondary" }}>
          {project.year}
        </Typography>
      </TitleWrapper>

      <ImageContainer>
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          className="hoverImage"
          style={{ objectFit: 'cover' }}
        />
        <Link href={project.url}>
          <ViewButton className="viewButton">
            View <ArrowOutwardIcon sx={{ fontSize: "17px", ml: "6px" }} />
          </ViewButton>
        </Link>
      </ImageContainer>
    </Box>
  );

  return (
    <WorkWrapper>
      <PageContainer>
        <Typography variant="h5">{title}</Typography>

        <Box sx={{ marginTop: "65px" }}>
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{ clickable: true }}
              style={{
                width: "100%",
                "--swiper-pagination-color": theme.palette.text.primary,
                "--swiper-pagination-bullet-inactive-color": theme.palette.text.secondary,
                "--swiper-pagination-bullet-inactive-opacity": "0.4",
              } as React.CSSProperties}
            >
              {displayedProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Box sx={{ px: 0 }}>
                    {renderProjectCard(project, index)}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Box sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px 16px"
            }}>
              {displayedProjects.map((project, index) => renderProjectCard(project, index))}
            </Box>
          )}
        </Box>
      </PageContainer>
    </WorkWrapper>
  );
};

export default Works;