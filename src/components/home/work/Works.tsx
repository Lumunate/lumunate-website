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

const Works = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projects = [
    { title: "AirBot", year: 2025, imageSrc: "/project1.svg", url: "/projects/airbot" },
    { title: "Allfred", year: 2025, imageSrc: "/project2.svg", url: "/projects/allfred" },
    { title: "Koinfolio", year: 2024, imageSrc: "/project3.svg", url: "/projects/koinfolio" },
    { title: "CutConnect", year: 2025, imageSrc: "/project4.svg", url: "/projects/cut-connect" },
  ];

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
          width={600}
          height={400}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          className="hoverImage"
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
        <Typography variant="h5">Work</Typography>

        <Box sx={{ marginTop: "65px" }}>
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              style={{
                "--swiper-pagination-color": theme.palette.text.primary,
                "--swiper-pagination-bullet-inactive-color": theme.palette.text.secondary,
                "--swiper-pagination-bullet-inactive-opacity": "0.4",
              } as React.CSSProperties}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  {renderProjectCard(project, index)}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Box sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px 16px"
            }}>
              {projects.map((project, index) => renderProjectCard(project, index))}
            </Box>
          )}
        </Box>
      </PageContainer>
    </WorkWrapper>
  );
};

export default Works;