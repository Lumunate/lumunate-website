import React from 'react'
import { TitleWrapper, WorkWrapper } from './work.style'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const Works = () => {

  const projects = [
    {
      title: "AirBot",
      year: 2025,
      imageSrc: "/project1.svg"
    },
    {
      title: "Allfred",
      year: 2025,
      imageSrc: "/project2.svg"
    },
    {
      title: "Koinfolio",
      year: 2025,
      imageSrc: "/project3.svg"
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project4.svg"
    },
    {
      title: "Ayse",
      year: 2025,
      imageSrc: "/project5.svg"
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project6.svg"
    },
    {
      title: "Ayse",
      year: 2025,
      imageSrc: "/project7.svg"
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project8.svg"
    },
    {
      title: "Ayse",
      year: 2025,
      imageSrc: "/project9.svg"
    },
    {
      title: "CutConnect",
      year: 2025,
      imageSrc: "/project10.svg"
    },
  ]

  return (
    <WorkWrapper>
      <Typography variant='h5'>Work</Typography>

      <Grid sx={{ marginTop: "65px" }} container rowSpacing="32px" columnSpacing="16px">
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <TitleWrapper>
              <Typography sx={{ fontSize: { xs: "28px", sm: "38px" } }} variant='h3'>{project.title}</Typography>
              <Typography variant='h5' sx={{ color: "#CAC8C8" }}>{project.year}</Typography>
            </TitleWrapper>
            <Box
              sx={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                marginTop: "24px"
              }}
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={250}
                layout='responsive'
              />
            </Box>
          </Grid>
        ))}

      </Grid>

    </WorkWrapper>
  )
}

export default Works
