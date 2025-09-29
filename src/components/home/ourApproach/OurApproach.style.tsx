"use client";

import { Box, Button, styled, Typography } from "@mui/material";

export const OurApproachContainer = styled(Box)({
  position: "relative",
  width: "100%",
  margin: "160px 0",
  overflow: "hidden",
  "& video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -2,
  },

  // overlays
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    left: 0,
    width: "100%",
    height: "200px", // adjust overlay height
    zIndex: 1,
  },

  // top overlay
  "&::before": {
    top: 0,
    background: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))",
  },

  // bottom overlay
  "&::after": {
    bottom: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))",
  },
});

export const SubContainer = styled(Box)({
  maxWidth: "1698px",
  width: "100%",
  padding: "0 20px",
  margin: "0 auto",
  height: "100vh",
});

export const TitleText = styled(Typography)(({ theme }) => ({
  position: "relative",
  zIndex: "3",
  fontSize: "56px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  gridTemplateColumns: "repeat(2, 1fr)",
  display: "grid",
  alignItems: "stretch",
  height: "90%",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const SubContentWrapper = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  borderBottom: "0.4px solid #B4B4B4",
  height: "100%",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    alignItems: "start",
  },
}));

export const SubTitle = styled(Typography)(({theme})=>({ 
  marginTop:"-65px",
  fontSize:"56px",
  [theme.breakpoints.down("sm")]:{
    marginTop:"-30px",
    fontSize:"32px",
  }
}))

export const RightBottomBox = styled(Box)(({theme})=>({
  borderLeft: `0.4px solid ${theme.palette.text.disabled}`,
  padding: "42px 60px",
  [theme.breakpoints.down("sm")]: {
    borderLeft: "none",
    padding: "42px 0px",
  }
}));

export const DiscoverButton = styled(Button)({
  backgroundColor: "#015B3F",
  padding: "16px 32px",
  fontSize: "16px",
  fontWeight: "500",
  marginTop: "46px",
  color: "white",
  borderRadius: "16px",
});

export const NumberTypography = styled(Typography)(({ theme }) => ({
  fontSize: "180px",
  fontWeight: 400,
  background: "linear-gradient(to bottom, #FFFFFF 0%, #000000 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
  position: "relative",
  zIndex: 10,
  [theme.breakpoints.down("sm")]: {
    fontSize: "120px",
  },
}));
