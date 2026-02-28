import { Box, styled, Typography, Pagination } from "@mui/material";

export const BlogGridWrapper = styled(Box)(({ theme }) => ({
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
}));

export const BlogNavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.navbar.border}`,
    borderBottom: `1px solid ${theme.palette.navbar.border}`,
    position: "sticky",
    zIndex: 1100,
    top: "80px",
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    [theme.breakpoints.up("lg")]: {
        justifyContent: "center",
    },
}));

export const BlogNavItem = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 32px",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    opacity: 0.55,
    fontSize: "16px",
    fontWeight: 400,
    borderLeft: `1px solid ${theme.palette.navbar.border}`,
    "&:last-of-type": {
        borderRight: `1px solid ${theme.palette.navbar.border}`,
    },
    "&.active": {
        backgroundColor: `${theme.palette.navbar.border} !important`,
        color: theme.palette.text.primary,
        opacity: 1,
        fontWeight: 600,
        boxShadow: "none",
    },
    [theme.breakpoints.down("lg")]: {
        padding: "15px 12px",
        fontSize: "14px",
    },
}));

export const BlogCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.section.cardBg, // Using TOKENS.section.cardBg (#191919)
    borderRadius: "10px",
    overflow: "hidden",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    padding: "16px",
    "&:hover": {
        transform: "translateY(-8px)",
    },
}));

export const ImageWrapper = styled(Box)({
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "16px",
});

export const ContentBox = styled(Box)({
    padding: "0px 8px 8px 8px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
});

export const BlogDate = styled(Typography)(({ theme }) => ({
    color: theme.palette.section.desc, // Using TOKENS.section.desc (#9F9F9F)
    fontSize: "16px",
    marginBottom: theme.spacing(1),
    fontWeight: 400,
}));

export const BlogTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary, // Using TOKENS.section.heading (#FFFFFF)
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: 1.4,
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
    },
}));

export const ReadNowLink = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "2px",
    color: theme.palette.text.primary,
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "auto",
    "&:hover": {
        textDecoration: "underline",
    },
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    "& .MuiPaginationItem-root": {
        color: "#FFFFFFCC",
        fontSize: "14px",
        fontWeight: 500,
        "&.Mui-selected": {
            backgroundColor: `${theme.palette.section.processNumber} !important`, // Using TOKENS.section.processNumber (#00A270)
            color: "#FFFFFF !important",
            borderRadius: "4px",
        },
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
        },
    },
}));