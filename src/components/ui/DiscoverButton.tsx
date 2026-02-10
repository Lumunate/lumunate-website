"use client";

import { Button, ButtonProps, styled, keyframes, alpha } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const rotateSnake = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledDiscoverButton = styled(Button)(({ theme }) => ({
    padding: "16px 24px",
    gap: "8px",
    minHeight: "56px",
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    lineHeight: 1,
    color: "#FFFFFF",
    borderRadius: "15px",
    textTransform: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    zIndex: 1,
    border: "none",
    backgroundColor: "#00412D",
    transition: "all 0.4s ease",

    "&::before": {
        content: '""',
        position: "absolute",
        zIndex: -2,
        backgroundImage: `conic-gradient(
        from 0deg,
        transparent 0%,
        transparent 10%, 
        #8EFFAC 25%, 
        transparent 40%,
        transparent 100%
    )`,
        opacity: 0,
        transition: "opacity 0.3s ease",
        width: "200%",
        height: "200%",
        left: "-50%",
        top: "-50%",
    },

    "&::after": {
        content: '""',
        position: "absolute",
        zIndex: -1,
        inset: "2px",
        borderRadius: "12px",
        backgroundColor: "#00412D",
        transition: "background-color 0.4s ease",
    },

    "&:hover": {
        backgroundColor: "#00412D",
        boxShadow: `0 0 25px 2px ${alpha("#8EFFAC", 0.2)}`,
        transform: "translateY(-1px)",

        "&::before": {
            opacity: 1,
            animation: `${rotateSnake} 1.8s linear infinite`,
        },

        "&::after": {
            backgroundColor: "#015B3F",
            inset: "5px",
        },

        "& .MuiButton-endIcon": {
            transform: "translate(3px, -3px)",
        },
    },

    "& .MuiButton-endIcon": {
        margin: 0,
        transition: "transform 0.3s ease",
        zIndex: 2,
        "& svg": {
            fontSize: "20px",
        },
    },
}));

export default function DiscoverButton(props: ButtonProps) {
    return (
        <StyledDiscoverButton
            variant="contained"
            disableElevation
            endIcon={<ArrowOutwardIcon />}
            {...props}
        >
            {props.children || "Discover"}
        </StyledDiscoverButton>
    );
}
