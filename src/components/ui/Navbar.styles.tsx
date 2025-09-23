import { Box, styled, Toolbar } from "@mui/material";

// Main Navbar container with background and borders
export const NavContainer = styled(Box)(({ theme }) => ({
    maxWidth: "1920px",
    margin: "0 auto",
    padding: "0 32px",
    background: "#343434",
    borderTop: "1px solid #343434",
    borderBottom: "1px solid #343434",
    color: "#bdbdbd",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: "space-between",
    minHeight: 56,
    [theme.breakpoints.up("md")]: {
        minHeight: 72,
    },
    padding: 0,
}));

export const LogoBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    minWidth: 180,
}));

export const MenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    flex: 1,
    justifyContent: "center",
}));

export const RightBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    minWidth: 180,
    justifyContent: "flex-end",
}));

// Vertical divider for y-axis borders
export const VerticalDivider = styled("span")(({ theme }) => ({
    display: "inline-block",
    width: "1px",
    height: "80px",
    background: "#4f4f4f", // 👈 slightly lighter so it shows against dark bg
    margin: "0 5px",
    [theme.breakpoints.down("md")]: {
        height: 32,
        margin: "0 5px",
    },
}));
