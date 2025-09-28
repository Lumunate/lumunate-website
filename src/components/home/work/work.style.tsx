"use client";

import { Box, styled } from "@mui/material";

export const WorkWrapper = styled(Box)({
  width: "100%",
  paddingTop: "60px",
  maxWidth: "1698px",
  padding: "0 20px",
  margin: "0 auto",
});

export const ProjectsWrapper = styled(Box)({
    marginTop: "65px",
    display:"grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap:"16px",
})

export const TitleWrapper = styled(Box)({
    display: "flex",
  justifyContent: "space-between",
  padding: "12px",
  borderRadius: "12px",
  background: "#00000054", // or whichever background you need
  boxShadow: `
    0px 4px 14.8px rgba(0, 0, 0, 0.33),  /* Drop shadow */
    inset 0px 4px 18.1px rgba(132, 132, 132, 0.55) /* Inner shadow */
  `,
})
