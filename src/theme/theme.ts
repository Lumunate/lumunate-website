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
    };
    section: {
      heading: string;
      desc: string;
      star: string;
      caseStudyDesc: string;
      caseStudyLabel: string;
      muted: string;
      processNumber: string;
    };
    button: {
      discoverBg: string;
    };
  }
  interface PaletteOptions {
    navbar?: Partial<Palette["navbar"]>;
    section?: Partial<Palette["section"]>;
    button?: {
      discoverBg?: string;
    };
  }
}

export const TOKENS = {
  navbar: {
    bg: "#101010",
    border: "#343434",
    itemText: "#363636",
    itemTextHover: "#FFFFFF",
    itemHoverBg: "rgba(255,255,255,0.08)",
    mobileItem: "#5E5E5E",
  },
  section: {
    heading: "#FFFFFF",
    desc: "#9F9F9F",
    caseStudyDesc: "#CBCBCB",
    caseStudyLabel: "#B8B8B8",
    star: "#FFD600",
    muted: "#AAAAAA",
    processNumber: "#00A270",
  },
  bg: {
    default: "#0E0E0E",
    paper: "#171717",
  },
  button: {
    discoverBg: "#015B3F",
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

const theme = createTheme({
  palette: {
    mode: "dark" as PaletteMode,

    background: {
      default: TOKENS.bg.default,
      paper: TOKENS.bg.paper,
    },

    text: {
      primary: TOKENS.section.heading,
      secondary: TOKENS.section.desc,
    },

    divider: TOKENS.navbar.border,

    navbar: TOKENS.navbar,
    section: TOKENS.section,
    button: TOKENS.button,
  },

  breakpoints,
  typography,

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
        },
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

export default theme;
