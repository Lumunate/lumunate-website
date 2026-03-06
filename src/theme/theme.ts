"use client";

import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    navbar: {
      bg: string;
      border: string;
      itemText: string;
      itemTextHover: string;
      itemHoverBg: string;
      mobileItem: string;
      cardsNavBg: string;
      cardsNavActive: string;
    };
    section: {
      heading: string;
      desc: string;
      star: string;
      caseStudyDesc: string;
      caseStudyLabel: string;
      muted: string;
      processNumber: string;
      cardBg: string;
      calenderBg: string;
      careersdots: string;
      lightThemeTitle: string;
      faqColor: string;
    };
    button: {
      discoverBg: string;
      CancelBg: string;
    };
  }
  interface PaletteOptions {
    navbar?: Partial<Palette["navbar"]>;
    section?: Partial<Palette["section"]>;
    button?: {
      discoverBg?: string;
      CancelBg?: string;
    };
  }
}

// Original Colors for DARK Theme...
export const DARK_TOKENS = {
  navbar: {
    bg: "#101010",
    border: "#343434",
    itemText: "#363636",
    itemTextHover: "#FFFFFF",
    itemHoverBg: "rgba(255,255,255,0.08)",
    mobileItem: "#5E5E5E",
    cardsNavBg: "#151515",
    cardsNavActive: "#171717",
  },
  section: {
    heading: "#FFFFFF",
    desc: "#9F9F9F",
    caseStudyDesc: "#CBCBCB",
    caseStudyLabel: "#B8B8B8",
    star: "#FFD600",
    muted: "#AAAAAA",
    processNumber: "#00A270",
    cardBg: "#191919",
    calenderBg: "#111111",
    careersdots: "#535353",
  },
  bg: {
    default: "#0E0E0E",
    paper: "#171717",
  },
  button: {
    discoverBg: "#015B3F",
    CancelBg: "#2C2F32",
  },
};

// Light Mode Colors...
export const LIGHT_TOKENS = {
  navbar: {
    bg: "#FFFFFF",
    border: "#AAAAAA",
    itemText: "#363636",
    itemTextHover: "#000000",
    itemHoverBg: "rgba(0,0,0,0.05)",
    mobileItem: "#6C757D",
    cardsNavBg: "#FFFFFF",
    cardsNavActive: "#F1F3F5",
  },
  section: {
    heading: "#015B3F",
    desc: "#4A4A4A",
    caseStudyDesc: "#343A40",
    caseStudyLabel: "#495057",
    star: "#EECA00",
    muted: "#868E96",
    processNumber: "#087F5B",
    cardBg: "#FFFFFF",
    calenderBg: "#F8F9FA",
    careersdots: "#ADB5BD",
    lightThemeTitle: "#0A0A0A",
    faqColor: "#343434",

  },
  bg: {
    default: "#FFFFFF",
    paper: "#F8F9FA",
  },
  button: {
    discoverBg: "#00A270",
    CancelBg: "#E9ECEF",
  },
};

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

const typography = {
  fontFamily: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`,
  h1: { fontSize: "56px", fontWeight: 400 },
  h2: { fontSize: "40px", fontWeight: 900 },
  h3: { fontSize: "38px", fontWeight: 400 },
  h4: { fontSize: "28px", fontWeight: 400 },
  h5: { fontSize: "22px", fontWeight: 400 },
  h6: { fontSize: "16px", fontWeight: 400 },
  body1: { fontSize: "18px", fontWeight: 400 },
  body2: { fontSize: "16px", fontWeight: 400 },
  caption: { fontSize: "12px", fontWeight: 400 },
};

// Function to generate the theme dynamically
export const getAppTheme = (mode: PaletteMode) => {
  const tokens = mode === "dark" ? DARK_TOKENS : LIGHT_TOKENS;

  return createTheme({
    palette: {
      mode,
      background: {
        default: tokens.bg.default,
        paper: tokens.bg.paper,
      },
      text: {
        primary: tokens.section.heading,
        secondary: tokens.section.desc,
      },
      divider: tokens.navbar.border,
      navbar: tokens.navbar,
      section: tokens.section,
      button: tokens.button,
    },
    breakpoints,
    typography,
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {},
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: 0,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            textTransform: "none",
          },
        },
      },
    },
  });
};

// Default export (optional, useful for initial SSR)
const defaultTheme = getAppTheme("dark");
export default defaultTheme;