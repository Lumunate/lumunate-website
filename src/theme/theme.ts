"use client";

import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1024,
    xl: 1200,
    xxl: 1400,
  },
};
const lightPalette = {
  mode: "light" as PaletteMode,
  background: {
    default: "#ffffff",
    paper: "#f8f9fa",
  },
  text: {
    primary: "rgba(0, 0, 0, 1)",
    secondary: "#AAAAAA",
    grey: "#CAC8C8",
    light: "rgba(255, 255, 255, 1)",
  },
  primary: { main: "#000000" },
  secondary: { main: "#DA9694" },
};

const darkPalette = {
  mode: "dark" as PaletteMode,
  background: {
    default: "#0a0a0a",
    paper: "#171717",
  },
  text: {
    primary: "#ededed",
    secondary: "#AAAAAA",
    disabled: "#CAC8C8",
  },
  primary: { main: "#ffffff" },
  secondary: { main: "#DA9694" },
};

const typography = {
  h1: { fontSize: "56px", fontWeight: 400 },
  h2: { fontSize: "40px", fontWeight: 900 },
  h3: { fontSize: "38px", fontWeight: 400 },
  h4: { fontSize: "28px", fontWeight: 400 },
  h5: { fontSize: "22px", fontWeight: 400 },
  h6: { fontSize: "1.125rem", fontWeight: 600 },
  body1: { fontSize: "18px", fontWeight: 400 },
  body2: { fontSize: "16px", fontWeight: 400 },
  caption: { fontSize: "12px", fontWeight: 400 },
};

// 👇 your dark flag here
const dark = true;

const theme = createTheme({
  palette: dark ? darkPalette : lightPalette,
  breakpoints,
  typography,
});

export default theme;
