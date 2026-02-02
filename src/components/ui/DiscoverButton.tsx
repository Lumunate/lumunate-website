"use client";

import { Button, ButtonProps, styled } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const StyledDiscoverButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#015B3F",
    padding: "22px 33px 19px 37px",
    fontSize: theme.typography.body2.fontSize,
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    marginTop: theme.spacing(5),
    color: theme.palette.common.white,
    borderRadius: "16px",
    textTransform: "none",

    // prevent full width
    width: "fit-content",
    minWidth: "fit-content",
    maxWidth: "fit-content",
    display: "inline-flex",
    alignSelf: "flex-start",

    "&:hover": {
        backgroundColor: theme.palette.success.dark,
    },
}));

export default function DiscoverButton(props: ButtonProps) {
    return (
        <StyledDiscoverButton
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            {...props}
        >
            {props.children || "Discover"}
        </StyledDiscoverButton>
    );
}
