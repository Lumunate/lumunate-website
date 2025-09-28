"use client"
import { Box, Button, styled } from "@mui/material";


export const TrackContainer  = styled(Box)({
  width: "100%",
  paddingTop:"120px !important",
  maxWidth:'1698px',
  padding:"0 20px",
  margin: "0 auto",
});

export const TitleWrapper = styled(Box)({
    marginBottom: "40px",
})

export const DiscoverButton = styled(Button)({
    backgroundColor: '#015B3F',
    padding:"16px 32px",
    fontSize:"16px",
    fontWeight:"500",
    marginTop:"32px",
    color:"white",
    borderRadius:"16px"
})

export const StatusWrapper = styled(Box)({
marginTop:"44px",
gridTemplateColumns: "repeat(4, 1fr)",
display: "grid",
});

export const StatusCard = styled(Box)({
padding:"16px 24px",
border:"1px solid #757575",
height:"345px"
})