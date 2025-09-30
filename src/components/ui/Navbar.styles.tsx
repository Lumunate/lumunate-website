import theme from "@/theme/theme";
import { Box, styled, Toolbar } from "@mui/material";

export const NavContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: 0,
    padding: theme.spacing(0, 6.25),
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider ?? "#1c1c1c"}`,
    borderBottom: `1px solid ${theme.palette.divider ?? "#1c1c1c"}`,
    color: theme.palette.text.secondary,
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
    flex: 1,
}));

export const MenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    "& > *:not(:last-child)": {
        marginRight: theme.spacing(3),
    },
}));

export const RightBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
}));

export const VerticalDivider = styled(Box)(({ theme }) => ({
    width: "1px",
    height: "80px",
    backgroundColor: theme.palette.divider ?? "#222",
    alignSelf: "center",
}));


