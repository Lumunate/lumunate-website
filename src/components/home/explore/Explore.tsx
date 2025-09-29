import { Box, Typography } from '@mui/material'
import React from 'react'

const Explore = () => {
  return (
    <Box sx={{width:"100%", margin:"0 auto", marginTop:"78px"}}>
     <Typography
                variant="h1"
                component="div"
                sx={{
                    width: "100%",
                    textAlign: "center",
                    mt: 0,
                    pb: 8,
                    fontWeight: 300,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(2rem, 7.3vw, 12rem)",
                    whiteSpace: "nowrap",
                    color: "#FFFFFF08",
                    bgcolor: "#0E0E0E",
                    letterSpacing: "0.05em",
                    filter: "blur(1px)",
                    userSelect: "none",
                    lineHeight: 1.2,
                }}
            >
                Explore. Engineer. Evolve.
            </Typography>
    </Box>
  )
}

export default Explore
