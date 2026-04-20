"use client";

import { Box, styled, Typography, alpha } from "@mui/material";

export const RootSection = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10, 0),
    color: theme.palette.text.primary,
}));

export const StepsContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "100px 0",
    [theme.breakpoints.down("xl")]: {
        gridTemplateColumns: "1fr",
        padding: "60px 0",
        gap: "60px",
    },

    [theme.breakpoints.down("md")]: {
        gap: 0,
    }
}));

export const StepCard = styled(Box, {
    shouldForwardProp: (prop) => prop !== "showVerticalBorder",
})<{ showVerticalBorder?: boolean }>(({ theme, showVerticalBorder }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "0 40px",
    position: "relative",

    "&::after": {
        content: showVerticalBorder ? '""' : "none",
        position: "absolute",
        right: 0,
        top: 0,
        height: "100%",
        width: "1px",
        backgroundColor: alpha(theme.palette.divider, 0.5),
    },

    [theme.breakpoints.down("lg")]: {
        padding: "0",
        "&::after": {
            display: "none",
        },
    },

    [theme.breakpoints.down("md")]: {
        paddingBottom: "32px",
        marginBottom: "32px",
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
        "&:last-child": {
            borderBottom: "none",
            marginBottom: 0,
            paddingBottom: 0,
        },
    },
}));

export const StepHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "stretch",
    gap: "24px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
    },
}));

export const StepNumber = styled(Typography)(({ theme }) => ({
    fontSize: "130px",
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette.section.processNumber,
    [theme.breakpoints.down("md")]: {
        fontSize: "80px",
    },
}));

export const TitleDividerWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    paddingTop: "15px",
    [theme.breakpoints.down("md")]: {
        paddingTop: "0",
        width: "100%",
    },
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
    fontSize: "25px",
    color: theme.palette.text.secondary,
    fontWeight: 500,
    lineHeight: 1.2,
    minWidth: "150px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
    },
}));

export const StepDivider = styled(Box)(({ theme }) => ({
    height: "1px",
    backgroundColor: theme.palette.divider,
    marginTop: "26px",
    width: "100%",
    maxWidth: "calc(100% - 0px)",

    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export const StepDesc = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginTop: "50px",
    paddingRight: "20px",
    [theme.breakpoints.down("xl")]: {
        marginTop: "0px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        marginTop: "12px",
        paddingRight: "0",
    },
}));