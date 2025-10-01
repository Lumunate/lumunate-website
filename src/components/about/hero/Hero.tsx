import React from "react";
import { ContentContainer, HeroContainer, BackgroundVideo } from "./Hero.style";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundVideo autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/q_auto,f_auto/about_hero_bg_drepea.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <ContentContainer>
        <Box sx={{display:"flex", flexDirection:{xs:"column",md:"row"} ,justifyContent:"space-between", width:"100%", alignItems:{xs:"start",md:"center"}, gap:{xs:"50px",md:"20px"}}}>

        <Box>
          <Typography sx={{fontSize:{xs:"52px",md:"66px",xl:"90px"}}} >About Us</Typography>
          <Typography sx={{fontSize:{xs:"18px",sm:"22px"}}} variant='h5'>Born from a vision to democratize innovation</Typography>
        </Box>
        <Box>
          <Typography sx={{maxWidth:"668px", fontSize:{xs:"16px",sm:"18px"}}} variant='body1' >Every unicorn startup, every industry-disrupting platform, every enterprise transformation—they all started with a team that understood technology isn&apos;t just about code. It&apos;s about momentum.</Typography>
        </Box>
        </Box>
      </ContentContainer>
      <Image style={{position:"absolute", bottom:"-14rem"}} src="/blure.png" alt='blur' width={100} height={100} layout='responsive' />
    </HeroContainer>
  )
}

export default Hero
