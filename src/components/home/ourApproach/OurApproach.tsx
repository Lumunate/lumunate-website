import React from "react";
import {
  ContentWrapper,
  DiscoverButton,
  NumberTypography,
  OurApproachContainer,
  SubContainer,
} from "./OurApproach.style";
import { Box, Typography } from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";

const OurApproach = () => {
  return (
    <OurApproachContainer>
      <video autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dqvzaju7x/video/upload/approachbg_g7xwx5.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <SubContainer>
        <Typography sx={{ position: "relative", zIndex: "3", fontSize:{xs:"32px", sm:"56px"} }} variant="h1">
          Our Approach
        </Typography>

        <ContentWrapper>
          <Box
            sx={{
              alignItems: {xs:"start",md:"center"},
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              borderBottom: "0.4px solid #B4B4B4",
              height: "100%",
            }}
          >
            <Box>
              <NumberTypography>01</NumberTypography>
              <Typography sx={{ marginTop: {xs:"-30px",sm:"-65px"}, fontSize:{xs:"32px", sm:"56px"} }} variant="h1">
                Visual Identity & Branding
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderLeft: "0.4px solid #B4B4B4",
              borderBottom: "0.4px solid #B4B4B4",
              height: "100%",
               display: {xs:"none", md:"block"},
            }}
          ></Box>
          <Box
            sx={{
              height: "100%",
               display: {xs:"none", md:"block"},
            }}
          ></Box>
          <Box sx={{ borderLeft: {xs:"none",md:"0.4px solid #B4B4B4"}, padding: {xs:'42px 0', sm:"42px 60px"} }}>
            <Typography variant="h5">
              Define your digital presence with distinctive branding that
              resonates and converts.
            </Typography>
            <DiscoverButton>
              {" "}
              Discover{" "}
              <ArrowOutwardIcon sx={{ fontSize: "17px", marginLeft: "6px" }} />
            </DiscoverButton>
          </Box>
        </ContentWrapper>
      </SubContainer>
      {/* <Image
        style={{ position: "absolute", top: "-30%", zIndex: 1 }}
        src="/approchBlur1.svg"
        alt="blur"
        width={100}
        height={100}
        layout="responsive"
      />

      <Image
        style={{ position: "absolute", bottom: "-40%", zIndex: 1 }}
        src="/approchBlur1.svg"
        alt="blur"
        width={100}
        height={100}
        layout="responsive"
      /> */}
    </OurApproachContainer>
  );
};

export default OurApproach;
