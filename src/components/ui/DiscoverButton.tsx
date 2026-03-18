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
    backgroundColor: "#015B3F",
    willChange: "transform, opacity",
    transition: "all 0.4s ease",

    [theme.breakpoints.down("md")]: {
        padding: "8px 18px",
        gap: "8px",
    },

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
        animationPlayState: "paused",
    },

    "&::after": {
        content: '""',
        position: "absolute",
        zIndex: -1,
        inset: "2px",
        borderRadius: "15px",
        backgroundColor: "#015B3F",
        transition: "all 0.4s ease",
    },

    "&:hover": {
        backgroundColor: "#002419",
        transform: "translateY(-1px)",

        boxShadow: `
          0 8px 20px rgba(0, 0, 0, 0.6),
          0 0 25px 2px ${alpha("#8EFFAC", 0.25)}
        `,

        "&::before": {
            opacity: 1,
            animation: `${rotateSnake} 1.8s linear infinite`,
            animationPlayState: "running",
        },

        "&::after": {
            inset: "3px",
            borderRadius: "12px",
            background: `radial-gradient(circle, #135f48 0%, #002B1E 100%)`,
            boxShadow: `
              inset 0 2px 6px rgba(0,0,0,0.6),
              inset 0 -2px 6px rgba(0,0,0,0.6)
            `,
        },

        "& .MuiButton-endIcon": {
            transform: "translate(3px, -3px)",
        },
    },

    "&:focus-visible": {
        outline: `2px solid #8EFFAC`,
        outlineOffset: "2px",
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

interface DiscoverButtonProps extends ButtonProps {
    hideIcon?: boolean;
    label?: string;
}

export default function DiscoverButton({ hideIcon = false, label, ...props }: DiscoverButtonProps) {
    return (
        <StyledDiscoverButton
            variant="contained"
            disableElevation
            aria-label={label || (typeof props.children === 'string' ? props.children : "Discover")}
            endIcon={hideIcon ? null : <ArrowOutwardIcon aria-hidden="true" />}
            {...props}
        >
            {props.children || "Discover"}
        </StyledDiscoverButton>
    );
}