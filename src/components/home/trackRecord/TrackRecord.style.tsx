"use client";
import { Box, styled, Typography } from "@mui/material";

export const TrackContainer = styled(Box)({
  width: "100%",
  paddingTop: "120px !important",
  paddingBottom: "59px",
});

export const TitleWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "40px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",
  },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "56px",
  marginBottom: "16px",
  color: theme.palette.mode === 'light'
    ? theme.palette.section.lightThemeTitle
    : theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "30px",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'light'
    ? theme.palette.section.muted
    : theme.palette.text.secondary,
  fontSize: "22px",
  fontWeight: 400,
  marginTop: "6px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const StatusWrapper = styled(Box)(({ theme }) => ({
  marginTop: "44px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "0px",
  alignItems: "stretch",
  width: "100%",

  [theme.breakpoints.down("xl")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    marginTop: "40px",
  },
}));

export const StatusCard = styled(Box)(({ theme }) => ({
  padding: "16px 24px",
  border: `1px solid ${theme.palette.divider}`,
  height: "345px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center", 
  [theme.breakpoints.down("sm")]: {
    height: "250px",
    padding: "30px 20px 80px 20px",
    justifyContent: "flex-start",
  },
}));

export const NumberText = styled(Box)(({ theme }) => ({
  fontSize: "85px",
  fontWeight: 400,
  color: theme.palette.mode === 'light'
    ? theme.palette.section.heading
    : theme.palette.text.primary,
  fontFamily: "'Manrope', sans-serif",
  whiteSpace: "nowrap",
  display: "inline-block",
  lineHeight: 1.1,

  minWidth: "220px",
  textAlign: "left",

  "@media (max-width: 1300px)": {
    fontSize: "55px",
    minWidth: "160px",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "60px",
    minWidth: "180px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "48px",
    minWidth: "auto",
  },
}));