import { Box, styled, Toolbar } from "@mui/material";

// Main Navbar container with background and borders
export const NavContainer = styled(Box)(() => ({
    width: "100%",
    margin: 0,
    padding: "0 50px",
    background: "#181818",
    borderTop: "1px solid #1c1c1c",
    borderBottom: "1px solid #1c1c1c",
    color: "#bdbdbd",
}));


export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: "space-between",
    minHeight: 64,
    [theme.breakpoints.up("md")]: {
        minHeight: 80,
    },
    padding: "0",
}));

export const LogoBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    flex: 1,   // take equal space on left
}));

export const MenuBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,   // keep center wider
    "& > *:not(:last-child)": {
        marginRight: "24px",
    },
}));

export const RightBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,   // take equal space on right
}));



// Vertical divider for y-axis borders
export const VerticalDivider = styled(Box)(() => ({
    width: "1px",
    height: "80px",
    backgroundColor: "#2B2B2B",
    alignSelf: "center",       // vertically center
}));



