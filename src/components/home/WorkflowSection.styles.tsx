import { Box, styled } from "@mui/material";

export const WorkflowSectionRoot = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    padding: theme.spacing(8, 0),
    backgroundColor: "#181818",

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6, 0),
        minHeight: "auto",
    },
}));

// NavBar container...
export const NavBarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "100vw",
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
}));

export const NavItem = styled(Box)(({ theme }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(2)} 60px`,  
    cursor: "pointer",
    whiteSpace: "nowrap",
    color: "#AAAAAA",
    borderLeft: "1px solid #333",
    transition: "background-color 0.3s ease, color 0.3s ease",
    fontWeight: 400,

    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        color: "#fff",
    },

    "&.active": {
        backgroundColor: "#292929",
        color: "#fff",
        fontWeight: 600,
        boxShadow: "inset 0 -2px 0 #fff", 
    },

    "&:first-of-type": {
        borderLeft: "none",
    },

    [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(1.5)} 20px`, 
    },
}));


