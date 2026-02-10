"use client";
import { Box, styled, Typography } from "@mui/material";

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
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "22px",
  fontqWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const StatusWrapper = styled(Box)(({ theme }) => ({
  marginTop: "44px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "0px",
  alignItems: "stretch",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));


export const StatusCard = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
  border: `1px solid ${theme.palette.divider}`,
  height: "345px",
  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
}));

export const NumberText = styled(Box)(({ theme }) => ({
  fontSize: "85px",
  fontWeight: 400,
  color: theme.palette.text.primary,
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
