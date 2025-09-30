import { Box, styled, Toolbar } from "@mui/material";

// Main Navbar container with background and borders
export const NavContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: 0,
    padding: theme.spacing(0, 6.25), // 50px → spacing system
    backgroundColor: theme.palette.background.default, // ✅ theme bg
    borderTop: `1px solid ${theme.palette.divider ?? "#1c1c1c"}`,
    borderBottom: `1px solid ${theme.palette.divider ?? "#1c1c1c"}`,
    color: theme.palette.text.secondary, // ✅ text color
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: "space-between",
    minHeight: 64,
    [theme.breakpoints.up("md")]: {
        minHeight: 80,
    },
    padding: 0,
}));

export const LogoBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    flex: 1, // take equal space on left
}));

export const MenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2, // center section wider
    "& > *:not(:last-child)": {
        marginRight: theme.spacing(3), // 24px via theme
    },
}));

export const RightBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1, // equal space on right
}));

// Vertical divider for y-axis borders
export const VerticalDivider = styled(Box)(({ theme }) => ({
    width: "1px",
    height: "80px",
    backgroundColor: theme.palette.divider ?? "#222",
    alignSelf: "center",       // vertically center
}));


