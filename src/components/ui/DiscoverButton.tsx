import { Button, ButtonProps } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function DiscoverButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            color="success"
            endIcon={<ArrowOutwardIcon />}
            sx={{
                background: "#015B3F",
                color: "#fff",
                borderRadius: 4,
                textTransform: "none",
                fontWeight: 700,
                fontSize: "16px",
                px: 3,
                py: 1.5,
                boxShadow: "0 2px 8px 0 rgba(0,0,0,0.15)",
                "&:hover": {
                    background: "#017a53",
                },
                alignSelf: "flex-start",
                ...props.sx,
            }}
            {...props}
        >
            {props.children || "Discover"}
        </Button>
    );
}