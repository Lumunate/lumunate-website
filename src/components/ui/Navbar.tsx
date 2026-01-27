"use client";

import Link from "next/link";
import Logo from "./logo";
import { useEffect, useRef, useState } from "react";
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

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const navButtonSx = {
    color: "#363636",
    fontWeight: 400,
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    textTransform: "none",
    letterSpacing: "0.5px",
    "&:hover": { color: "#fff" },
};

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // GSAP ref
    const navRef = useRef<HTMLDivElement>(null);

    // dropdown measurement refs
    const navContainerRef = useRef<HTMLDivElement>(null);
    const logoBoxRef = useRef<HTMLDivElement>(null);
    const caseStudiesRightDividerRef = useRef<HTMLDivElement>(null);

    const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(null);
    const [menuWidth, setMenuWidth] = useState<number>(800);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => setAnchorEl(null);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
        setMobileProjectsOpen(false);
    };

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
                delay: 7.2,
                onStart: () => {
                    if (!navRef.current) return;
                    gsap.set(navRef.current, { pointerEvents: "none" });
                },
                onComplete: () => {
                    if (!navRef.current) return;
                    gsap.set(navRef.current, { pointerEvents: "auto" });
                },
            }
        );
    }, []);

    // compute dropdown position/width:
    // start from logo left edge, end at case-studies right divider edge
    useEffect(() => {
        const calcMenuMetrics = () => {
            if (!navContainerRef.current || !logoBoxRef.current || !caseStudiesRightDividerRef.current) return;

            const navRect = navContainerRef.current.getBoundingClientRect();
            const logoRect = logoBoxRef.current.getBoundingClientRect();
            const dividerRect = caseStudiesRightDividerRef.current.getBoundingClientRect();

            const left = Math.round(logoRect.left);
            const right = Math.round(dividerRect.right);
            const width = Math.max(320, right - left);

            setMenuWidth(width);
            setMenuPos({
                top: Math.round(navRect.bottom),
                left,
            });
        };

        if (Boolean(anchorEl)) {
            calcMenuMetrics();
        }

        window.addEventListener("resize", calcMenuMetrics);
        return () => window.removeEventListener("resize", calcMenuMetrics);
    }, [anchorEl]);

    // Close dropdown on scroll
    useEffect(() => {
        if (!anchorEl) return;

        const closeOnScroll = () => {
            setAnchorEl(null);
        };

        // capture true so it triggers even if scroll happens inside containers
        window.addEventListener("scroll", closeOnScroll, true);

        return () => {
            window.removeEventListener("scroll", closeOnScroll, true);
        };
    }, [anchorEl]);

    // Responsive columns to avoid cropping on smaller widths
    const columns =
        menuWidth >= 1050 ? 3 :
            menuWidth >= 720 ? 2 :
                1;

    return (
        <AppBar
            ref={navRef}
            position="static"
            elevation={0}
            sx={{
                width: "100vw",
                zIndex: 30,
                backgroundColor: "rgba(14, 14, 14, 0.34) !important",
                borderTop: "1px solid #343434",
                borderBottom: "1px solid #343434",
                boxShadow: "none",
                opacity: 0,
                transform: "translateY(-60px)",
                pointerEvents: "none",
            }}
        >
            <NavContainer ref={navContainerRef}>
                <StyledToolbar disableGutters>
                    <LogoBox ref={logoBoxRef}>
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

                            {/* RIGHT boundary divider (dropdown end) */}
                            <VerticalDivider ref={caseStudiesRightDividerRef} />

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorReference="anchorPosition"
                                anchorPosition={menuPos ?? undefined}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                                MenuListProps={{ disablePadding: true }}
                                PaperProps={{
                                    sx: {
                                        p: 0,
                                        borderRadius: 0,
                                        bgcolor: "rgba(14, 14, 14, 0.92)",
                                        border: "1px solid #343434",
                                        boxShadow: "none",
                                        width: `${menuWidth}px`,
                                        maxWidth: "none",
                                        overflow: "hidden",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
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

                                                // allow wrapping so no cropping on smaller widths
                                                whiteSpace: "normal",
                                                overflowWrap: "anywhere",

                                                color: theme.palette.text.secondary,
                                                borderTop: `1px solid ${theme.palette.divider}`,
                                                borderLeft: `1px solid ${theme.palette.divider}`,

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
                                        href="https://calendly.com/saad-b-javaid22/consultation"
                                        target="_blank"
                                        sx={{
                                            textTransform: "none",
                                            px: 2,
                                            py: 1,
                                            fontWeight: 400,
                                            fontFamily: "Montserrat, sans-serif",
                                            borderRadius: 0,
                                            color: "#363636",
                                            backgroundColor: "transparent",
                                            boxShadow: "none",
                                            "&:hover": {
                                                backgroundColor: "rgba(255, 255, 255, 0.08)",
                                                color: "#FFFFFF",
                                                boxShadow: "none",
                                            },
                                            transition: "background-color 0.25s ease, color 0.25s ease",
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
                                <ListItemButton LinkComponent={Link} href={link.href} onClick={toggleDrawer(false)}>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setMobileProjectsOpen((open) => !open)}>
                                <ListItemText primary="Case Studies" />
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
