import Different from '@/components/about/different/Different'
import Hero from '@/components/about/hero/Hero'
import SuccessStories from '@/components/about/successStories/SuccessStories'
import { Explore } from '@/components/case-studies/Explore.styles'
import Ready from '@/components/home/ready/Ready'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Different />


      <SuccessStories
        storyText="The team at Luminate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!"
        name="Ebrahim"
        role="CEO, Koinfolio"
        showStars={false}
      />


      <Box component="section">
        <Explore variant="h1">
          Explore. Engineer. Evolve.
        </Explore>
      </Box>

      <Ready
        title="Your Success Story Starts Here"
        description="Every breakthrough product begins with a single conversation. Ready to write your success story?"
      />

    </>
  )
}

export default page
