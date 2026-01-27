import { Box, styled, Toolbar } from "@mui/material";

export const NavContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: 0,
    padding: "8px 131px",
    borderTop: `1px solid ${theme.palette.divider ?? "#1c1c1c"}`,
    borderBottom: `1px solid ${theme.palette.divider ?? "#1c1c1c"}`,
    color: theme.palette.text.secondary,

    height: 80,

    [theme.breakpoints.down("lg")]: {
        padding: "8px 80px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "8px 32px",
        height: 64,
    },
}));

export const StyledToolbar = styled(Toolbar)(() => ({
    justifyContent: "space-between",
    padding: 0,

    height: "100%",
    minHeight: "unset",
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
    height: "100%",

    "& > *:not(:last-child)": {
        marginRight: theme.spacing(3),
    },
}));


export const RightBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
}));

export const VerticalDivider = styled(Box)(({ theme }) => ({

    width: "1px",
    minWidth: "1px",
    flexShrink: 0,

    height: "calc(100% + 16px)",   // 8px top + 8px bottom
    marginTop: "-8px",
    marginBottom: "-8px",

    backgroundColor: "rgba(255,255,255,0.14)",
}));


