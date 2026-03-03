import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SectionWrapper = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(10, 0),
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    marginTop: "233px",
    [theme.breakpoints.down("md")]: {
        marginTop: "100px",
    },
}));

export const VideoBackground = styled("video")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    opacity: "40%",
});

export const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(
        to bottom, 
        ${theme.palette.background.default} 0%, 
        ${theme.palette.background.default}4D 20%, 
        ${theme.palette.background.default}4D 80%, 
        ${theme.palette.background.default} 100%
    )`,
    zIndex: 1,
}));

export const MessageCard = styled(Box)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.section.heading, 0.1),
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
    transition: "transform 0.3s ease, background-color 0.3s ease",
    "&:hover": {
        backgroundColor: alpha(theme.palette.divider, 0.3),
        transform: "translateY(-4px)",
    },
    [theme.breakpoints.down("md")]: {
        padding: "14px 20px",
    },
}));