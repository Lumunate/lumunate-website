import { styled, Box } from "@mui/material";

export const ArticleBody = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    border: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "40px",
    "& h4": {
        fontSize: "32px",
        fontWeight: 400,
        marginBottom: "12px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
        },
    },
    "& p": {
        fontSize: "20px",
        lineHeight: 1.8,
        opacity: 0.8,
        marginBottom: "20px",
    },
    "& ol": {
        paddingLeft: theme.spacing(2),
        "& li": {
            marginBottom: "20px",
            fontSize: "20px",
            lineHeight: 1.6,
            opacity: 0.9,
            fontweight: 400,
        },
    },
}));

export const StickySidebar = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: "100px",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "40px",
    [theme.breakpoints.down("md")]: {
        position: "relative",
        top: 0,
    },
}));

export const TOCContainer = styled(Box)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: "20px",
    borderRadius: "18px",


}));