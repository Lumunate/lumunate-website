"use client";
import { Box, Button, styled } from "@mui/material";

export const TrackContainer = styled(Box)({
  width: "100%",
  paddingTop: "120px !important",
  maxWidth: "1698px",
  padding: "0 20px",
  margin: "0 auto",
});

export const TitleWrapper = styled(Box)({
  marginBottom: "40px",
});

export const DiscoverButton = styled(Button)({
  backgroundColor: "#015B3F",
  padding: "16px 32px",
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
  color: "white",
  [theme.breakpoints.down("xxl")]: {
  fontSize: "55px",
  },
  [theme.breakpoints.down("xl")]: {
  fontSize: "45px",
  },
   [theme.breakpoints.down("sm")]: {
  fontSize: "32px",
  },

}));
