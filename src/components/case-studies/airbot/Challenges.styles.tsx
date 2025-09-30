"use client";

import { styled, Box, Container, Typography } from "@mui/material";

export const SectionRoot = styled(Box, {
    shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
    position: "relative",
    backgroundColor: "#0E0E0E",
    color: "#fff",
    paddingTop: theme.spacing(1),     // ~8px (smaller top space)
    paddingBottom: theme.spacing(1),  // ~8px (smaller bottom space)
}));


export const InnerContainer = styled(Container)(() => ({}));

export const TopStrip = styled(Box)(() => ({
    marginBottom: "0px",  // smaller, just spacing before image
}));


export const TitleText = styled(Typography)(() => ({
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "33px",
    lineHeight: "120%",
    letterSpacing: "120%",
    color: "#EDEDED",
}));

export const DescText = styled(Typography)(() => ({
    color: "#CBCBCB",
    lineHeight: 1.6,
    fontFamily: "Manrope, sans-serif",
    fontWeight: 400,
    fontSize: "15px",
}));

export const ImageWrapper = styled(Box)(() => ({
    position: "relative",
    width: "100%",  
    height: "100vh", 
    overflow: "hidden",
}));


export const ImageGridWrapper = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",  
    gap: theme.spacing(1),           
    width: "100vw",                   
    marginLeft: "calc(-50vw + 50%)",  
    marginTop: theme.spacing(2),

    "& img": {
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        objectFit: "cover",
    },
}));

