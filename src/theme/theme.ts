'use client';

import { createTheme } from '@mui/material/styles';


const colorSchemes = { light: false, dark: true };

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

// const palette = {
//   background: {
//     white: 'rgba(255, 255, 255, 1)',
//     default: 'rgba(255, 251, 251, 1)',
//     gray: 'rgba(248, 249, 250, 1)',
//   },
//   accent: {
//     main: 'rgba(218, 150, 148, 1)',
//   },
//   primary: {
//     main: 'rgba(0, 0, 0, 1)',
//   },
//   text: {
//     primary: 'rgba(0, 0, 0, 1)',
//     secondary: 'rgba(120, 120, 120, 1)',
//     grey: 'rgba(180, 180, 180, 1)',
//     light: 'rgba(255, 255, 255, 1)',
//   },
//   secondary:{
//     main: 'rgba(218, 150, 148, 1)', 
//   }
// };

const typography = {
  h1: {
    fontSize: '56px',
    fontWeight: 400,
  },
  h2: {
    fontSize: '40px',
    fontWeight: 900,
  },
  h3: {
    fontSize: '38px',
    fontWeight: 400,
  },
  h4: {
    fontSize: '28px',
    fontWeight: 400,
  },
  h5: {
    fontSize: '22px',
    fontWeight: 400,
  },
  h6: {
    fontSize: '1.125rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '18px',
    fontWeight: 400,
  },
  body2: {
    fontSize: '16px',
    fontWeight: 400,
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
  },
};

const theme = createTheme({
//   palette,
  colorSchemes,
  breakpoints,
  typography,
});

export default theme;

