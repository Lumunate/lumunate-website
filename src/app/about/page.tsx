import Different from '@/components/about/different/Different'
import Hero from '@/components/about/hero/Hero'
import SuccessStories from '@/components/about/successStories/SuccessStories'
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


    </>
  )
}

export default page
