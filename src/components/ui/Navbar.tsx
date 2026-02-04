"use client";

import Link from "next/link";
import Logo from "./logo";
import { useEffect, useRef, useState, useMemo } from "react";
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
    IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import {
    NavContainer,
    StyledToolbar,
    LogoBox,
    MenuBox,
    RightBox,
    VerticalDivider,
} from "./Navbar.styles";
import { usePathname } from "next/navigation";

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
    { name: "TCR Properties – Dubai Real Estate Platform", href: "/projects/tcr-properties" },
];

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const pathname = usePathname();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);

    // dropdown measurement refs
    const navContainerRef = useRef<HTMLDivElement>(null);
    const logoBoxRef = useRef<HTMLDivElement>(null);
    const caseStudiesRightDividerRef = useRef<HTMLDivElement>(null);

    const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(null);
    const [menuWidth, setMenuWidth] = useState<number>(800);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
        setMobileProjectsOpen(false);
    };

    const navButtonSx = useMemo(
        () => ({
            color: theme.palette.navbar.itemText,
            fontWeight: 400,
            fontSize: "16px",
            fontFamily: "Montserrat, sans-serif",
            textTransform: "none",
            letterSpacing: "0.5px",
            "&:hover": { color: theme.palette.navbar.itemTextHover },
        }),
        [theme]
    );

    // GSAP animation ONLY for homepage
    useEffect(() => {
        if (pathname !== "/") return; // Only run on homepage
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
    }, [pathname]);

    // Compute desktop dropdown position/width
    useEffect(() => {
        const calcMenuMetrics = () => {
            if (!navContainerRef.current || !logoBoxRef.current || !caseStudiesRightDividerRef.current)
                return;

            const navRect = navContainerRef.current.getBoundingClientRect();
            const logoRect = logoBoxRef.current.getBoundingClientRect();
            const dividerRect = caseStudiesRightDividerRef.current.getBoundingClientRect();

            const left = Math.round(logoRect.left);
            const right = Math.round(dividerRect.right);

            const desiredWidth = Math.max(320, right - left);
            const maxAllowed = Math.max(320, Math.round(window.innerWidth - left - 16));
            const width = Math.min(desiredWidth, maxAllowed);

            setMenuWidth(width);
            setMenuPos({
                top: Math.round(navRect.bottom),
                left,
            });
        };

        if (Boolean(anchorEl)) calcMenuMetrics();

        window.addEventListener("resize", calcMenuMetrics);
        return () => window.removeEventListener("resize", calcMenuMetrics);
    }, [anchorEl]);

    // Close dropdown on scroll
    useEffect(() => {
        if (!anchorEl) return;

        const closeOnScroll = () => setAnchorEl(null);
        window.addEventListener("scroll", closeOnScroll, true);

        return () => window.removeEventListener("scroll", closeOnScroll, true);
    }, [anchorEl]);

    const columns = menuWidth >= 1050 ? 3 : menuWidth >= 740 ? 2 : 1;

    return (
        <AppBar
            ref={navRef}
            position="static"
            elevation={0}
            sx={{
                width: "100vw",
                zIndex: 30,
                backgroundColor: theme.palette.navbar.bg,
                borderTop: `1px solid ${theme.palette.navbar.border}`,
                borderBottom: `1px solid ${theme.palette.navbar.border}`,
                boxShadow: "none",
                opacity: pathname === "/" ? 0 : 1,          // only 0 on homepage
                transform: pathname === "/" ? "translateY(-60px)" : "translateY(0)", // only animate on homepage
                pointerEvents: pathname === "/" ? "none" : "auto", // allow clicks on other pages
            }}
        >

            <NavContainer ref={navContainerRef}>
                <StyledToolbar disableGutters>
                    <LogoBox ref={logoBoxRef}>
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

                            <VerticalDivider ref={caseStudiesRightDividerRef} />

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorReference="anchorPosition"
                                anchorPosition={menuPos ?? undefined}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                                MenuListProps={{
                                    disablePadding: true,
                                    sx: {
                                        backgroundColor: theme.palette.background.default,
                                        backgroundImage: "none",
                                    },
                                }}
                                PaperProps={{
                                    sx: {
                                        p: 0,
                                        borderRadius: 0,
                                        backgroundColor: theme.palette.background.default,
                                        backgroundImage: "none",
                                        border: `1px solid ${theme.palette.navbar.border}`,
                                        boxShadow: "none",
                                        width: `${menuWidth}px`,
                                        maxWidth: "none",
                                        maxHeight: "70vh",
                                        overflowY: "auto",
                                        overflowX: "hidden",
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
                                                whiteSpace: "normal",
                                                overflowWrap: "anywhere",
                                                color: theme.palette.section.desc,
                                                borderTop: `1px solid ${theme.palette.navbar.border}`,
                                                borderLeft: `1px solid ${theme.palette.navbar.border}`,
                                                backgroundColor: theme.palette.background.default,
                                                "&:hover": {
                                                    backgroundColor: theme.palette.navbar.itemHoverBg,
                                                    color: theme.palette.section.heading,
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
                        {/* Mobile/Tablet: Hamburger */}
                        {isMobile && (
                            <IconButton
                                onClick={toggleDrawer(true)}
                                sx={{ color: theme.palette.section.heading, p: 1 }}
                                aria-label="Open menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        {/* Desktop: Get Started */}
                        {!isMobile && (
                            <>
                                <VerticalDivider />
                                <Box sx={{ pl: "32px" }}>
                                    <Button
                                        href="https://calendly.com/saad-b-javaid22/consultation"
                                        target="_blank"
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            fontWeight: 400,
                                            fontFamily: "Montserrat, sans-serif",
                                            borderRadius: 0,
                                            color: theme.palette.navbar.itemText,
                                            backgroundColor: "transparent",
                                            boxShadow: "none",
                                            "&:hover": {
                                                backgroundColor: theme.palette.navbar.itemHoverBg,
                                                color: theme.palette.navbar.itemTextHover,
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

                {/* FULL SCREEN Drawer for sm/md */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    slotProps={{
                        paper: {
                            sx: {
                                width: "100vw",
                                maxWidth: "100vw",
                                height: "100vh",
                                bgcolor: theme.palette.navbar.bg,
                                color: theme.palette.section.desc,
                                p: 0,
                                m: 0,
                                borderRadius: 0,
                                left: 0,
                                right: 0,
                            },
                        },
                        backdrop: {
                            sx: {
                                backgroundColor: "rgba(0,0,0,0.55)",
                            },
                        },
                    }}
                >
                    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        {/* Top bar */}
                        <Box
                            sx={{
                                height: 64,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                px: 3,
                                borderBottom: `1px solid ${theme.palette.navbar.border}`,
                            }}
                        >
                            <Logo />

                            <IconButton
                                onClick={toggleDrawer(false)}
                                aria-label="Close menu"
                                sx={{ color: theme.palette.section.heading }}
                            >
                                <Typography sx={{ fontSize: 22, lineHeight: 1 }}>✕</Typography>
                            </IconButton>
                        </Box>

                        {/* Menu items */}
                        <List sx={{ px: 2, pt: 2 }}>
                            {navLinks.map((link) => (
                                <ListItem key={link.label} disablePadding>
                                    <ListItemButton
                                        LinkComponent={Link}
                                        href={link.href}
                                        onClick={toggleDrawer(false)}
                                        sx={{
                                            borderBottom: `1px solid ${theme.palette.navbar.border}`,
                                            py: 1.5,
                                            "&:hover": { bgcolor: theme.palette.navbar.itemHoverBg },
                                        }}
                                    >
                                        <ListItemText
                                            primary={link.label}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontFamily: "Montserrat, sans-serif",
                                                    fontSize: "16px",
                                                    color: theme.palette.section.heading,
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}

                            {/* Case Studies */}
                            <ListItem disablePadding sx={{ mt: 1 }}>
                                <ListItemButton
                                    onClick={() => setMobileProjectsOpen((open) => !open)}
                                    sx={{
                                        borderBottom: `1px solid ${theme.palette.navbar.border}`,
                                        py: 1.5,
                                        "&:hover": { bgcolor: theme.palette.navbar.itemHoverBg },
                                    }}
                                >
                                    <ListItemText
                                        primary="Case Studies"
                                        primaryTypographyProps={{
                                            sx: {
                                                fontFamily: "Montserrat, sans-serif",
                                                fontSize: "16px",
                                                color: theme.palette.section.heading,
                                            },
                                        }}
                                    />
                                    {mobileProjectsOpen ? (
                                        <ExpandLessIcon sx={{ color: theme.palette.section.heading }} />
                                    ) : (
                                        <ExpandMoreIcon sx={{ color: theme.palette.section.heading }} />
                                    )}
                                </ListItemButton>
                            </ListItem>

                            {mobileProjectsOpen &&
                                projects.map((proj) => (
                                    <ListItem key={proj.name} disablePadding sx={{ pl: 2 }}>
                                        <ListItemButton
                                            LinkComponent={Link}
                                            href={proj.href}
                                            onClick={toggleDrawer(false)}
                                            sx={{
                                                py: 1.25,
                                                borderBottom: `1px solid ${theme.palette.navbar.border}`,
                                                "&:hover": { bgcolor: theme.palette.navbar.itemHoverBg },
                                            }}
                                        >
                                            <ListItemText
                                                primary={proj.name}
                                                primaryTypographyProps={{
                                                    sx: {
                                                        fontFamily: "Montserrat, sans-serif",
                                                        fontSize: "14px",
                                                        color: theme.palette.section.desc,
                                                        whiteSpace: "normal",
                                                    },
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                        </List>

                        {/* Footer text at bottom (replaces Get Started in sm/md) */}
                        <Box
                            sx={{
                                mt: "auto",
                                px: 3,
                                py: 2.5,
                                borderTop: `1px solid ${theme.palette.navbar.border}`,
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: theme.palette.section.muted,
                                    fontFamily: "Montserrat, sans-serif",
                                    letterSpacing: "0.3px",
                                    fontSize: "13px",
                                    fontWeight: 400,
                                }}
                            >
                                LUMUNATE &copy; {new Date().getFullYear()} All rights reserved
                            </Typography>
                        </Box>
                    </Box>
                </Drawer>
            </NavContainer>
        </AppBar>
    );
}
