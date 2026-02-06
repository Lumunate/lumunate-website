"use client";

import { Button, ButtonProps, styled, keyframes, alpha } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const rotateSnake = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledDiscoverButton = styled(Button)(({ theme }) => ({

    backgroundColor: "#00412D",
    padding: "20px 37px",
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 500,
    color: "#FFFFFF",
    borderRadius: "16px",
    textTransform: "none",
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    zIndex: 1,
    border: "none",
    transition: "background-color 0.4s ease, box-shadow 0.4s ease, transform 0.2s ease",

    "&::before": {
        content: '""',
        position: "absolute",
        zIndex: -2,
        left: "-50%",
        top: "-50%",
        width: "200%",
        height: "200%",
        backgroundImage: "conic-gradient(transparent, transparent, #8EFFAC, transparent 25%)",
        opacity: 0,
        transition: "opacity 0.3s ease",
    },

    // The Inner Background Mask
    "&::after": {
        content: '""',
        position: "absolute",
        zIndex: -1,
        inset: "2px",
        borderRadius: "14px",
        backgroundColor: "#015B3F",
        transition: "background-color 0.4s ease",
    },

    "&:hover": {
        backgroundColor: "transparent",
        boxShadow: `0 0 25px 2px ${alpha("#8EFFAC", 0.3)}`,
        transform: "translateY(-1px)",

        "&::before": {
            opacity: 1,
            animation: `${rotateSnake} 1.5s linear infinite`,
        },

        "&::after": {
            backgroundColor: "#047C57",
        },

        "& .MuiButton-endIcon": {
            transform: "translate(3px, -3px)",
        },
    },

    "& .MuiButton-endIcon": {
        transition: "transform 0.3s ease",
        marginLeft: "12px",
        zIndex: 2,
        "& svg": {
            fontSize: "20px",
        }
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
            {props.children || "Create Magic"}
        </StyledDiscoverButton>
    );
}