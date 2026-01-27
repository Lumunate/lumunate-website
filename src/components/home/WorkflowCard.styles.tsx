"use client";

import { Box, Typography, styled } from "@mui/material";

export const WorkflowCardRoot = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    maxWidth: "1661px",
    minHeight: 460,
    background: "transparent",
    borderRadius: 32,
    boxShadow: "0 0 24px 0 rgba(6, 5, 5, 0.25)",
    overflow: "hidden",

    // ✅ XL SCREENS (1920px+)
    [theme.breakpoints.up("xl")]: {
        maxWidth: "1800px",
        minHeight: 560,
        borderRadius: 36,
    },

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        minHeight: 0,
        boxShadow: "none",
        borderRadius: 0,
    },
}));


export const CardLeft = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "66px 38px",
    color: "#fff",
    position: "relative",

    // texture background
    backgroundImage: `
    linear-gradient(to right, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 110%),
    url('/design-bg.png')
  `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center left",

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
    },
}));



export const CardRight = styled(Box)(({ }) => ({
    flex: 1,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    maxHeight: "814px",
}));

export const WorkflowVideo = styled("video")(({ theme }) => ({
    width: "120%",
    height: "140%",
    objectFit: "cover",
    alignSelf: "center",

    [theme.breakpoints.up("xl")]: {
        width: "135%",
        height: "160%",
    },
}));


export const TopText = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    color: "#bdbdbd",
    fontWeight: 400,
    fontSize: "16px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    color: "#fff",
    fontWeight: 400,
    fontSize: "48px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
        lineHeight: "1.2",
    },
}));

export const Description = styled(Typography)(({ theme }) => ({
    ...theme.typography.body1,
    color: "#AAAAAA",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        marginBottom: theme.spacing(2),
    },
}));
