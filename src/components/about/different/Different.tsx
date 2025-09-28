import React from 'react'
import { ContentContainer, DifferentContainer } from './Different.style'
import { Box, Typography } from '@mui/material'

const Different = () => {
  const data = [
    {
      title: "Engineering Meets Strategy",
      description:
        "We don't just write code, we solve problems. Every line of code serves a business objective. Every feature drives measurable results.",
    },
    {
      title: "Future-Ready Technology",
      description:
        "While others catch up to trends, we're already building the next wave. AI, Web3, enterprise solutions, we're not just familiar with emerging tech, we're pioneering it.",
    },
    {
      title: "Global Impact, Personal Touch",
      description:
        "We work with clients worldwide while maintaining the agility and attention of a dedicated team. Big company capabilities, startup heart.",
    },
    {
      title: "Partnership Beyond Projects",
      description:
        "Your success is our success. We're invested in your long-term growth, not just project completion. That's why our clients keep coming back.",
    },
  ]

  return (
    <DifferentContainer>
      <Box sx={{ paddingBottom: '65px' }}>
        <Typography variant="h1">What Makes Us Different</Typography>
      </Box>

      <ContentContainer>
        {data.map((item, index) => {
          const isGifBackground = index === 0 || index === 3
          return (
            <Box
              key={index}
              sx={{
                borderRight: index === 0 || index === 2 ? '1px solid #757575' : "none",
                borderBottom: index === 0 || index === 1 ? '1px solid #757575' :"none",
                padding: '160px 32px',
                backgroundImage: isGifBackground ? 'url(/aboutCardBg.gif)' : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff', // make text readable
                borderRadius: index ===3 ? "12px":"none",
              }}
            >
              <Typography variant="h1">{item.title}</Typography>
              <Typography
                variant="h5"
                sx={{ marginTop: '32px', color: isGifBackground ? '#f1f1f1' : '#CBCBCB', borderRadius:"12px" }}
              >
                {item.description}
              </Typography>
            </Box>
          )
        })}
      </ContentContainer>
    </DifferentContainer>
  )
}

export default Different
