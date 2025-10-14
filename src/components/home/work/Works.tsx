import React from "react";
import {  TitleWrapper, WorkWrapper, ImageContainer, ViewButton } from "./work.style";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Works = () => {
  const projects = [
    {
      title: "AirBot",
      year: 2025,
      imageSrc: "/project1.svg",
      url: "/projects/airbot",
    },
    {
      title: "Allfred",
      year: 2025,
      imageSrc: "/project2.svg",
      url: "/projects/allfred",
    },
    {
      title: "Koinfolio",
      year: 2025,
      imageSrc: "/project3.svg",
      url: "/projects/koinfolio",
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project4.svg",
      url: "/projects/cut-connect",
    },
    {
      title: "Ayse",
      year: 2025,
      imageSrc: "/project5.svg",
      url: "/projects/ayse",
    },
    {
      title: "Zeal",
      year: 2025,
      imageSrc: "/project6.svg",
      url: "/projects/zeal",
    },
    {
      title: "Fast Clean Service",
      year: 2025,
      imageSrc: "/project7.svg",
      url: "/projects/fast-clean",
    },
    {
      title: "Ace My Exam",
      year: 2025,
      imageSrc: "/project8.svg",
      url: "/projects/airbot",
    },
    {
      title: "Map Mavens",
      year: 2025,
      imageSrc: "/project9.svg",
      url: "/projects/airbot",
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project10.svg",
      url: "/projects/airbot",
    },
  ];

   return (
    <WorkWrapper>
      <Typography variant="h5">Work</Typography>

      <Grid
        sx={{ marginTop: "65px" }}
        container
        rowSpacing="32px"
        columnSpacing="16px"
      >
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <TitleWrapper>
              <Typography
                sx={{ fontSize: { xs: "28px", sm: "38px" } }}
                variant="h3"
              >
                {project.title}
              </Typography>
              <Typography variant="h5" sx={{ color: "#CAC8C8" }}>
                {project.year}
              </Typography>
            </TitleWrapper>

            <ImageContainer>
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={250}
                layout="responsive"
                className="hoverImage"
              />
              <Link href={project.url}>
                <ViewButton className="viewButton">
                  View <ArrowOutwardIcon sx={{ fontSize: "17px", ml: "6px" }} />
                </ViewButton>
              </Link>
            </ImageContainer>
          </Grid>
        ))}
      </Grid>
    </WorkWrapper>
  );
};

export default Works;
