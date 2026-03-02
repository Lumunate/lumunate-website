import { styled, Box } from "@mui/material";

export const ArticleBody = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    padding: "40px",
    height: "100%",
    "& h4": {
        fontSize: "32px",
        fontWeight: 400,
        marginBottom: "12px",
        // This ensures the title doesn't hide under your header when scrolling
        scrollMarginTop: "120px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
            marginBottom: "16px",
        },
    },
    "& p": {
        fontSize: "20px",
        lineHeight: 1.8,
        opacity: 0.8,
        color: theme.palette.section.caseStudyDesc,
        marginBottom: "20px",
        [theme.breakpoints.down("lg")]: {
            fontSize: "18px",
        },
    },
    "& ol": {
        paddingLeft: theme.spacing(2),
        "& li": {
            color: theme.palette.section.caseStudyDesc,
            marginBottom: "20px",
            fontSize: "20px",
            lineHeight: 1.6,
            opacity: 0.9,
            fontWeight: 400,
            [theme.breakpoints.down("lg")]: {
                fontSize: "16px",
            },
        },
    },
    [theme.breakpoints.down("sm")]: {
        padding: "0px",
        border: "none",
        fontSize: "14px",
    },
}));

export const StickySidebar = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: "100px",
    height: "fit-content", // CRITICAL: Allows the box to float
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    padding: "40px",
    [theme.breakpoints.down("lg")]: {
        position: "relative",
        top: 0,
        border: "none",
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down("md")]: {
        position: "relative",
        top: 0,
        border: "none",
        padding: "0px",
    },
}));

export const TOCContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.section.cardBg,
    borderRadius: "18px",
}));