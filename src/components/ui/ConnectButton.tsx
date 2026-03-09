"use client";

import React from "react";
import { Typography, styled, useTheme, Box, BoxProps } from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface ConnectButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
}

const commonStyles = {
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "38px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "fit-content",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    "&:hover": {
        opacity: 0.8,
    },
};

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    ...commonStyles,
}));

const StyledButton = styled((props: BoxProps) => (
    <Box component="button" {...props} />
))(({ theme }) => ({
    color: theme.palette.text.primary,
    ...commonStyles,
    fontFamily: "inherit",
}));

export default function ConnectButton({ children, href, onClick }: ConnectButtonProps) {
    const theme = useTheme();

    const content = (
        <Typography
            variant="h4"
            sx={{
                fontSize: { xs: "16px", lg: "28px" },
                display: "inline-flex",
                alignItems: "center",
                color: "inherit",
                fontWeight: 400,
                letterSpacing: "-1.5px",
                lineHeight: "97%",
            }}
        >
            {children}
            <ArrowOutwardIcon
                sx={{
                    fontSize: { xs: "20px", sm: "26px" },
                    ml: 1,
                }}
            />
        </Typography>
    );

    if (onClick) {
        return <StyledButton onClick={onClick}>{content}</StyledButton>;
    }

    return <StyledLink href={href || "#"}>{content}</StyledLink>;
}