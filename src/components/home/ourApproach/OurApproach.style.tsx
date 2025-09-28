"use client";

import { Box, Button, styled } from "@mui/material";

export const OurApproachContainer = styled(Box)({
  position: "relative",   // make container relative so children can be absolute
  width: "100%",
  margin: "160px 0",
  overflow: "hidden",     // ensure video doesn’t spill out
  "& video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",   // make video behave like background image
    zIndex: -1,           // send it behind the content
  },
});

export const SubContainer = styled(Box)({
  maxWidth: "1698px",
  padding: "0 20px",
  margin: "0 auto",
  height: "100vh",
});

export const ContentWrapper = styled(Box)({
  gridTemplateColumns: "repeat(2, 1fr)",
  display: "grid",
  alignItems: "stretch",
  height:"90%"
});

export const DiscoverButton = styled(Button)({
    backgroundColor: '#015B3F',
    padding:"16px 32px",
    fontSize:"16px",
    fontWeight:"500",
    marginTop:"46px",
    color:"white",
    borderRadius:"16px"
})