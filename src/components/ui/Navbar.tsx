"use client";

import Link from "next/link";
import Logo from "./logo";
import { useRef, useState } from "react";
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
    Box,
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
    { name: "Airbot – AI-Powered Hospitality Assistant", href: "/projects/airbot" },
    { name: "Koinfolio – Cryptocurrency Portfolio Manager", href: "/projects/koinfolio" },
    { name: "Allfred – Healthcare ERP", href: "/projects/allfred" },
    { name: "Ayse – Concert Discovery App", href: "/projects/ayse" },
    { name: "Map Mavens – Interactive Mapping Tool", href: "/projects/map-mavens" },
    { name: "Cut Connect – Men’s Grooming SaaS Platform", href: "/projects/cut-connect" },
    { name: "Zeal – AI-Driven Healthcare Platform", href: "/projects/zeal" },
    { name: "Fast Clean Service – Car Detailing Platform", href: "/projects/fast-clean" },
    { name: "Poppynz – On-Demand Family Support", href: "/projects/poppynz" },
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
    const handleMenuClose = () => setAnchorEl(null);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
        setMobileProjectsOpen(false);
    };

    const centerRef = useRef<HTMLDivElement | null>(null);

    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            sx={{ width: "100vw", zIndex: 30, background: "transparent", boxShadow: "none" }}
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
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                MenuListProps={{ disablePadding: true }}
                                PaperProps={{
                                    sx: {
                                        bgcolor: "#343434",
                                        color: "#bdbdbd",
                                        border: "1px solid #343434",
                                        borderRadius: 0,
                                        boxShadow: "0px 8px 20px rgba(0,0,0,0.25)",
                                        mt: 0,
                                        p: 0,
                                        minWidth: { xs: 320, md: 660, lg: 1560 },
                                        left: "40% !important",
                                        transform: "translateX(-50%) !important",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
                                        gap: 0,
                                    }}
                                >
                                    {projects.map((proj) => (
                                        <MenuItem
                                            key={proj.name}
                                            component={Link}
                                            href={proj.href}
                                            onClick={handleMenuClose}
                                            disableGutters
                                            sx={{
                                                px: 2.5,
                                                py: 1.75,
                                                fontSize: "0.95rem",
                                                lineHeight: 1.4,
                                                color: "#bdbdbd",
                                                borderTop: "1px solid #2B2B2B",
                                                borderLeft: "1px solid #2B2B2B",
                                                "&:hover": { bgcolor: "#232323", color: "#fff" },
                                            }}
                                        >
                                            {proj.name}
                                        </MenuItem>
                                    ))}

                                </Box>
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
                                bgcolor: "#015B3F",
                                color: "#bdbdbd",
                                borderRadius: 0,
                                "&:hover": { bgcolor: "#333" },
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
                            sx: { width: 260, bgcolor: "#181818", color: "#bdbdbd", p: 2 },
                        },
                    }}
                >
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton LinkComponent={Link} href={link.href} onClick={toggleDrawer(false)}>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setMobileProjectsOpen((open) => !open)}>
                                <ListItemText primary="Projects" />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    {mobileProjectsOpen ? "▲" : "▼"}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        {mobileProjectsOpen &&
                            projects.map((proj) => (
                                <ListItem key={proj.name} disablePadding sx={{ pl: 3 }}>
                                    <ListItemButton LinkComponent={Link} href={proj.href} onClick={toggleDrawer(false)}>
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
