"use client";
import { Box, Button, styled, Typography } from "@mui/material";

export const TrackContainer = styled(Box)({
  width: "100%",
  paddingTop: "120px !important",
  paddingBottom: "59px",
});

export const TitleWrapper = styled(Box)({
  marginBottom: "40px",
});

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "56px",
  marginBottom: "16px",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  }
}))

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "22px",
  fontqWeight: 400,
  marginBottom: "32px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px"
  }
}));

export const DiscoverButton = styled(Button)({
  backgroundColor: "#015B3F",
  padding: "22px 33px 19px 37px",
  fontSize: "16px",
  fontWeight: "500",
  marginTop: "32px",
  color: "white",
  borderRadius: "16px",
});

export const StatusWrapper = styled(Box)(({ theme }) => ({
  marginTop: "44px",
  gridTemplateColumns: "repeat(4, 1fr)",
  display: "grid",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));

export const StatusCard = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
  border: "1px solid #757575",
  height: "345px",
  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
}));

export const NumberText = styled(Box)(({ theme }) => ({
  fontSize: "85px",
  fontWeight: 400,
  color: "white",
  fontFamily: "Manrope,Montserrat, sans-serif",
  "@media (max-width: 1300px)": {
    fontSize: "55px",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "45px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },

}));
