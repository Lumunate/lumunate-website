"use client";

import { styled, Box, Container, Typography } from "@mui/material";

export const SectionRoot = styled(Box, {
    shouldForwardProp: (prop) => prop !== "component",
})<{ component?: React.ElementType }>(({ theme }) => ({
    position: "relative",
    backgroundColor: "#0E0E0E",
    color: "#fff",
    paddingTop: theme.spacing(3),     // ~8px (smaller top space)
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
    fontSize: "18px",
}));

export const ImageWrapper = styled(Box)(() => ({
    width: "100%",
    textAlign: "center",
    marginTop: "8px",

    "& img": {
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        objectFit: "cover",
    },
}));
export const ImageGridWrapper = styled(Box)(() => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",  // each image ~52% width
    justifyContent: "space-between",       // push them apart nicely
    gap: "0px",
    marginTop: "8px",

    "& img": {
        width: "100%",
        height: "auto",
        borderRadius: "12px",
        objectFit: "cover",
    },
}));
