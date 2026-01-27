"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
    AppBar,
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
    { name: "Zeal – AI-Driven Healthcare Platform 2", href: "/projects/zeal-2" },
    { name: "TCR Properties – Dubai Real Estate Platform", href: "/projects/tcrproperties.ae" },
];

const navButtonSx = {
    color: "#E0E0E0",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    textTransform: "none",
    letterSpacing: "0.5px",
    "&:hover": { color: "#fff" },
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
    const navRef = useRef<HTMLDivElement>(null);

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

    // GSAP animation: Navbar slides in safely using gsap.context
    useEffect(() => {
        if (!navRef.current) return;

        gsap.fromTo(
            navRef.current,
            { y: -80, opacity: 0, pointerEvents: "none" },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: 7.2, // sync with header
                onStart: () => {
                    gsap.set(navRef.current, { pointerEvents: "none" });
                },
                onComplete: () => {
                    // Re-enable clicks once animation completes
                    gsap.set(navRef.current, { pointerEvents: "auto" });
                },
            }
        );
    }, []);



    return (
        <AppBar
            ref={navRef}
            position="static"
            color="transparent"
            elevation={0}
            sx={{
                width: "100vw",
                zIndex: 30,
                background: "transparent",
                boxShadow: "none",
                opacity: 0,
                transform: "translateY(-60px)",
                pointerEvents: "none",
            }}
        >

            <NavContainer>
                <StyledToolbar disableGutters>
                    <LogoBox>
                        <Logo />
                    </LogoBox>

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
                                        bgcolor: theme.palette.background.paper,
                                        color: theme.palette.text.secondary,
                                        border: `1px solid ${theme.palette.divider}`,
                                        borderRadius: 0,
                                        boxShadow: theme.shadows[8],
                                        mt: 2,
                                        p: 0,
                                        width: { xs: "90vw", md: "800px", lg: "1050px" },
                                        left: "50.55% !important",
                                        transform: "translateX(-50%) !important",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "1fr",
                                            md: "1fr 1fr",
                                            lg: "1fr 1fr 1fr",
                                        },
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
                                                px: 2,
                                                py: 1.5,
                                                fontFamily: "Montserrat, sans-serif",
                                                fontSize: theme.typography.body2.fontSize,
                                                lineHeight: 1.3,
                                                whiteSpace: "nowrap",
                                                color: theme.palette.text.secondary,
                                                borderTop: `1px solid ${theme.palette.divider}`,
                                                borderLeft: `1px solid ${theme.palette.divider}`,

                                                "&:nth-last-of-type(-n+3)": {
                                                    borderBottom: `1px solid ${theme.palette.divider}`,
                                                },
                                                "&:nth-of-type(3n)": {
                                                    borderRight: `1px solid ${theme.palette.divider}`,
                                                },

                                                "&:hover": {
                                                    bgcolor: theme.palette.action.hover,
                                                    color: theme.palette.text.primary,
                                                },
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
                        {!isMobile && (
                            <>
                                <VerticalDivider />
                                <Box sx={{ pl: "32px" }}>
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
                                            fontWeight: 400,
                                            fontFamily: "Montserrat, sans-serif",
                                            bgcolor: "#015B3F",
                                            color: "#bdbdbd",
                                            borderRadius: 0,
                                            "&:hover": { bgcolor: "#333" },
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </Box>
                            </>
                        )}
                    </RightBox>

                </StyledToolbar>

                {/* Drawer for mobile */}
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

                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={() => setMobileProjectsOpen((open) => !open)}
                            >
                                <ListItemText primary="Case Studies" />
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
                        <Box sx={{ mt: 2, textAlign: "center" }}>
                            <Button
                                component="a"
                                href="https://calendly.com/saad-b-javaid22/consultation"
                                target="_blank"
                                variant="contained"
                                color="success"
                                fullWidth
                                sx={{
                                    boxShadow: 1,
                                    textTransform: "none",
                                    py: 1,
                                    fontWeight: 600,
                                    bgcolor: "#015B3F",
                                    color: "#fff",
                                    borderRadius: 0,
                                    "&:hover": { bgcolor: "#333" },
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </List>
                </Drawer>
            </NavContainer>
        </AppBar>
    );
}
