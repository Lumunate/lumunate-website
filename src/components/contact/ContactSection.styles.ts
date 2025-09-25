"use client";
import { Box, styled, TextField } from "@mui/material";

export const VideoHeader = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "280px", 
    overflow: "hidden",
    marginBottom: theme.spacing(0), 

    [theme.breakpoints.up("md")]: {
        height: "360px",
    },
}));

export const BackgroundVideo = styled("video")(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    transform: "translate(-50%, -50%)",
    objectFit: "cover",
    zIndex: 0,
}));

export const ContactRoot = styled(Box)(({ theme }) => ({
    backgroundColor: "#0E0E0E",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(8, 2),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(12, 4),
    },
}));

export const ContactForm = styled("form")(({ theme }) => ({
    maxWidth: "1000px",
    width: "100%",
    display: "grid",
    gap: theme.spacing(3),
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr 1fr",
    },
}));

export const ContactTextField = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-root": {
        color: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#444",
    },
    "& .MuiInputLabel-root": {
        color: "#aaa",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#888",
    },
    "& .MuiSelect-select": {
        color: "#fff", 
    },
}));

