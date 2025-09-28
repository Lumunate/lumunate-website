import React from 'react'
import { ContentContainer, SuccessStoriesContainer,BackgroundVideo, } from './SuccessStories.style'
import { Box, Typography } from '@mui/material'

const SuccessStories = () => {
  return (
    <SuccessStoriesContainer>

 {/* Background video */}
      <BackgroundVideo autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/q_auto,f_auto/about_hero_bg2_dp38xc.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </BackgroundVideo>

      <ContentContainer>
        <Typography variant='h5' >Client Success Stories</Typography>
        <Box sx={{marginTop:"65px"}}>
            <Typography sx={{fontSize:"78px"}} >“The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!</Typography>
        </Box>
        <Box sx={{marginTop:"65px"}}>
            <Typography sx={{fontWeight:700}} variant='body2'>{`// Ebrahim`}</Typography>
            <Typography variant='body1'>CEO, Koinfolio</Typography>
        </Box>
      </ContentContainer>
    </SuccessStoriesContainer>
  )
}

export default SuccessStories
