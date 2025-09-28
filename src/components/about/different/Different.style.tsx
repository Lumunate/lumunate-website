"use client"

import { Box, styled } from "@mui/material"

export const DifferentContainer= styled(Box)({
    maxWidth: '1620px',
    width: '100%',
    margin: '0 auto',
    padding: '65px 20px',
})

export const ContentContainer= styled(Box)({
    maxWidth:"1620px",
    width:"100%",
    margin:"0 auto",
    display:"grid",
    gridTemplateColumns:"repeat(2, 1fr)",
    border:"1px solid #757575",
    borderRadius:"12px",

})