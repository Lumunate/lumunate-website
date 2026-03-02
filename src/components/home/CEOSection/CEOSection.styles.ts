import { styled, Box } from "@mui/material";

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
}));

export const VideoBackground = styled("video")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
});

export const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to bottom, ${theme.palette.background.default}B3 0%, ${theme.palette.background.default}E6 100%)`,
    zIndex: 1,
}));

export const MessageCard = styled(Box)(({ theme }) => ({
    backgroundColor: `rgba(255, 255, 255, 0.1)`,
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    transition: "transform 0.3s ease",
    "&:hover": {
        backgroundColor: `rgba(255, 255, 255, 0.15)`,
    },
}));