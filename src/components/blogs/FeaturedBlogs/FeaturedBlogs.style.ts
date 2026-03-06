import { Box, styled, Typography, Chip, alpha } from "@mui/material";

export const BlogSectionWrapper = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.default,
}));

export const FeaturedTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    color: theme.palette.section.heading,
    fontSize: "22px",
    fontWeight: 400,
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
    },
}));

// Role Tag for blog categories
export const RoleTag = styled(Chip)(({ theme }) => ({
    fontSize: "16px",
    height: "auto",
    padding: "10px",
    backgroundColor: theme.palette.button.discoverBg,
    color: theme.palette.mode === 'light'
        ? '#FFFFFF'
        : theme.palette.section.heading,
    borderRadius: "20px",
    marginBottom: "24px",
    "& .MuiChip-label": {
        padding: 0,
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
    },
}));

// LEFT SIDE: Big Featured Image Card 
export const MainFeaturedCard = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "903px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "0px 60px 60px 30px",
    [theme.breakpoints.down("xl")]: {
        height: "903px",
        borderRadius: "10px 10px 10px 10px",
    },

    [theme.breakpoints.down("lg")]: {
        height: "499px", padding: theme.spacing(3),
        marginBottom: "20px",

    },
}));

// The Right Side Row Boxes
export const SmallBlogBox = styled(Box)(({ theme }) => ({
    position: "relative",
    backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.section.muted
        : theme.palette.section.cardBg,
    display: "flex",
    alignItems: "center",
    minHeight: "220px",
    width: "100%",
    padding: "0px 24px 24px 24px",

    [theme.breakpoints.between("md", "lg")]: {
        minHeight: "160px",
        padding: "16px",
        borderRight: `1px solid ${theme.palette.navbar.bg}`,
        "&:first-of-type": {
            borderBottom: `1px solid ${theme.palette.navbar.bg}`,
            borderRadius: "10px 0 0 0",
        },
        "&:nth-of-type(2)": {
            borderRadius: "0 0 0 10px",
        }
    },

    [theme.breakpoints.down("md")]: {
        padding: "16px 16px",
        minHeight: "unset",

        flexDirection: "row",
        // gap: "16px",

        "&:first-of-type": {
            marginBottom: "16px",
            borderRadius: "10px",
            borderBottom: "none",
        },
        "&:nth-of-type(2)": {
            borderRadius: "10px",
        }
    },

    [theme.breakpoints.up("lg")]: {
        "&:first-of-type": {
            borderBottom: `1px solid ${theme.palette.navbar.bg}`,
            borderRadius: "0px 10px 0 0",
        },
    }
}));

export const OverlappingThumb = styled(Box)(({ theme }) => ({
    position: "absolute",
    left: "-80px",
    top: "22px",
    width: "160px",
    height: "160px",
    zIndex: 3,

    [theme.breakpoints.down("lg")]: {
        position: "relative",
        left: "0",
        top: "0",
        width: "80px",
        height: "80px",
        "& img": {
            border: "none",
        },
    },
}));

// RIGHT SIDE: Small Blog Rows
export const SmallBlogRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(3),
}));

export const ThumbImageWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "160px",
    height: "160px",
    flexShrink: 0,
    [theme.breakpoints.down("lg")]: {
        width: "100px",
        height: "100px",
    },
    "& img": {
        borderRadius: "50%",
        objectFit: "cover",
    },
}));

// RIGHT SIDE: Bottom Image Card
export const BottomFeaturedCard = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    flexGrow: 1,
    minHeight: "413px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "0px",
    [theme.breakpoints.down("xl")]: {
        height: "auto",
    },
    [theme.breakpoints.between("md", "lg")]: {
        width: "50%",
        marginTop: "0px",
        borderRadius: "0 10px 10px 0",
        minHeight: "200px",
    },
    [theme.breakpoints.down("md")]: {
        height: "400px",
        borderRadius: "12px",
        marginTop: "20px",
    },
}));

export const CardOverlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background: `linear-gradient(to bottom, transparent 50%, ${alpha(theme.palette.background.default, 0.8)} 100%)`,
}));

export const CardOverlaySolid = styled(Box)(({ theme }) => ({
    position: "absolute",
    inset: 0,
    zIndex: 1,
    backgroundColor: alpha(theme.palette.background.default, 0.5),
}));