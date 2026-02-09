import React from "react";
import { TitleWrapper, WorkWrapper, ImageContainer, ViewButton } from "./work.style";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PageContainer from "@/components/common/PageContainer";

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
      year: 2024,
      imageSrc: "/project3.svg",
      url: "/projects/koinfolio",
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project4.svg",
      url: "/projects/cut-connect",
    },
  ];

  return (
    <WorkWrapper>
      <PageContainer>
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
                <Typography variant="h5" sx={{ color: "text.secondary" }}>
                  {project.year}
                </Typography>
              </TitleWrapper>

              <ImageContainer>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={400}
                  height={250}
                  style={{ width: '100%', height: 'auto' }}
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
      </PageContainer>
    </WorkWrapper>
  );
};

export default Works;
