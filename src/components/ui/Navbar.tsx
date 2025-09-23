"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import {
    AppBar,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    NavContainer,
    StyledToolbar,
    LogoBox,
    MenuBox,
    RightBox,
    VerticalDivider,
} from "./Navbar.styles";

const projects = [
    { name: "Ayse", href: "/projects/ayse" },
    { name: "Zeal", href: "/projects/zeal" },
    { name: "Koinfolio", href: "/projects/koinfolio" },
    { name: "Fast Clean", href: "/projects/fast-clean" },
    { name: "Map Mavens", href: "/projects/map-mavens" },
    { name: "Ace My Exam", href: "/projects/ace-my-exams" },
];

const navButtonSx = {
    color: "#bdbdbd",
    fontWeight: 400,
    fontSize: "1rem",
    textTransform: "none",
};

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
        setMobileProjectsOpen(false);
    };

    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{
                mt: { xs: 1, md: 3 },
                zIndex: 30,
                background: "transparent",
                boxShadow: "none",
            }}
        >
            <NavContainer>
                <StyledToolbar disableGutters>
                    {/* Logo */}
                    <LogoBox>
                        <Logo />
                    </LogoBox>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <MenuBox>
                            <VerticalDivider />

                            {navLinks.map((link) => (
                                <Button
                                    key={link.label}
                                    LinkComponent={Link}
                                    href={link.href}
                                    color="inherit"
                                    sx={navButtonSx}
                                >
                                    {link.label}
                                </Button>
                            ))}

                            <Button
                                color="inherit"
                                endIcon={<KeyboardArrowDownIcon fontSize="small" />}
                                onClick={handleMenuOpen}
                                sx={navButtonSx}
                            >
                                Case Studies
                            </Button>

                            <VerticalDivider />

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                                PaperProps={{
                                    sx: {
                                        bgcolor: "#181818",
                                        color: "#bdbdbd",
                                    },
                                }}
                            >
                                {projects.map((proj) => (
                                    <MenuItem
                                        key={proj.name}
                                        LinkComponent={Link}
                                        href={proj.href}
                                        onClick={handleMenuClose}
                                        sx={{
                                            color: "#bdbdbd",
                                            "&:hover": {
                                                bgcolor: "#232323",
                                            },
                                        }}
                                    >
                                        {proj.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </MenuBox>
                    )}
                    <RightBox>
                        <Button
                            component="a"
                            href="https://calendly.com/saad-b-javaid22/consultation"
                            target="_blank"
                            variant="contained"
                            color="success"
                            sx={{
                                boxShadow: 1,
                                textTransform: "none",
                                px: 2,
                                py: 1,
                                fontWeight: 600,
                                bgcolor: "#232323",
                                color: "#bdbdbd",
                                borderRadius: 0,
                                "&:hover": {
                                    bgcolor: "#333",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                        {isMobile && (
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                size="large"
                                sx={{ color: "#bdbdbd" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </RightBox>
                </StyledToolbar>

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    slotProps={{
                        paper: {
                            sx: {
                                width: 260,
                                bgcolor: "#181818",
                                color: "#bdbdbd",
                                p: 2,
                            },
                        },
                    }}
                >
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton
                                    LinkComponent={Link}
                                    href={link.href}
                                    onClick={toggleDrawer(false)}
                                >
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                        {/* Projects Dropdown */}
                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => setMobileProjectsOpen((open) => !open)}
                            >
                                <ListItemText primary="Projects" />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    {mobileProjectsOpen ? "▲" : "▼"}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        {mobileProjectsOpen &&
                            projects.map((proj) => (
                                <ListItem key={proj.name} disablePadding sx={{ pl: 3 }}>
                                    <ListItemButton
                                        LinkComponent={Link}
                                        href={proj.href}
                                        onClick={toggleDrawer(false)}
                                    >
                                        <ListItemText primary={proj.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                </Drawer>
            </NavContainer>
        </AppBar>
    );
}