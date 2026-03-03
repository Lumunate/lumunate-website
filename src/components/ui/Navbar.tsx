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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import {
    NavContainer,
    StyledToolbar,
    LogoBox,
    MenuBox,
    RightBox,
    VerticalDivider,
} from "./Navbar.styles";
import { usePathname } from "next/navigation";
import { useNavbarRef } from "./NavbarContext";

const projects = [
    { name: "Airbot – AI-Powered Hospitality Assistant", href: "/projects/airbot" },
    { name: "Koinfolio – Cryptocurrency Portfolio Manager", href: "/projects/koinfolio" },
    { name: "Allfred – Healthcare ERP", href: "/projects/allfred" },
    { name: "Cut Connect – Men’s Grooming SaaS Platform", href: "/projects/cut-connect" },
    { name: "TCR Properties – Real-estate Management", href: "/projects/tcr-properties" },
    { name: "Scoplex – Science-led skincare E-commerce", href: "/projects/scoplex" },
    { name: "Elumi – Luxury Home Fragrance E-commerce", href: "/projects/elumi" },
    { name: "Altrow – Comfort Wear E-commerce", href: "/projects/altrow" },
    { name: "Corpfit – AI-Powered Training Platform", href: "/projects/corpfit" },
    { name: "XS Uniforms – Automated Garment Sizing Tool", href: "/projects/xs-uniforms" },
];

const services = [
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Web & Mobile Development", href: "/services/web-mobile-development" },
    { name: "AI/ML Solutions", href: "/services/ai-ml-solutions" },
    { name: "Web3 & Blockchain", href: "/services/web3-blockchain" },
    { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
    { name: "Digital Marketing & Transformation", href: "/services/digital-marketing-transformation" },
];

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xl"));
    const pathname = usePathname();
    const navRef = useNavbarRef();
    const isHome = pathname === "/";

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null);
    const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const navContainerRef = useRef<HTMLDivElement>(null);
    const logoBoxRef = useRef<HTMLDivElement>(null);
    const caseStudiesRightDividerRef = useRef<HTMLDivElement>(null);

    const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(null);
    const [menuWidth, setMenuWidth] = useState<number>(800);

    const isProjectsOpen = Boolean(projectsAnchor);
    const isServicesOpen = Boolean(servicesAnchor);

    const handleMenuClose = () => {
        setProjectsAnchor(null);
        setServicesAnchor(null);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
        setMobileProjectsOpen(false);
        setMobileServicesOpen(false);
    };



    // Helper to check if a link is active
    const isActive = (href: string) => pathname === href;
    const isServicesPath = pathname.startsWith("/services");
    const isProjectsPath = pathname.startsWith("/projects");

    const navButtonSx = useMemo(() => ({
        fontWeight: 400,
        fontSize: "16px",
        fontFamily: "Montserrat, sans-serif",
        textTransform: "none",
        letterSpacing: "0.5px",
        backgroundColor: "transparent",
        whiteSpace: "nowrap",
        minWidth: "fit-content",
        transition: "color 0.3s ease",
        "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: "transparent",
        },
    }), [theme]);

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
            setMenuPos({ top: Math.round(navRect.bottom), left });
        };

        if (isProjectsOpen || isServicesOpen) requestAnimationFrame(calcMenuMetrics);
        window.addEventListener("resize", calcMenuMetrics);
        return () => window.removeEventListener("resize", calcMenuMetrics);
    }, [isProjectsOpen, isServicesOpen]);

    useEffect(() => {
        if (!isProjectsOpen && !isServicesOpen) return;
        const closeOnScroll = () => handleMenuClose();
        window.addEventListener("scroll", closeOnScroll, true);
        return () => window.removeEventListener("scroll", closeOnScroll, true);
    }, [isProjectsOpen, isServicesOpen]);

    const columns = menuWidth >= 1050 ? 3 : menuWidth >= 740 ? 2 : 1;


    return (

        <AppBar
            ref={navRef}
            elevation={0}
            sx={{
                position: { xs: "fixed", xl: "sticky" },
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1300,
                backgroundColor: theme.palette.navbar.bg,
                borderTop: `1px solid ${theme.palette.navbar.border}`,
                borderBottom: `1px solid ${theme.palette.navbar.border}`,

                visibility: "visible !important",
                opacity: "1 !important",
                pointerEvents: "auto !important",
                transform: "none !important"
            }}
        >
            <NavContainer ref={navContainerRef}>
                <StyledToolbar disableGutters>
                    <LogoBox ref={logoBoxRef}><Logo /></LogoBox>

                    {!isMobile && (
                        <MenuBox>
                            <VerticalDivider />

                            {/* Home */}
                            <Button LinkComponent={Link} href="/" sx={{
                                ...navButtonSx,
                                color: isActive("/") ? theme.palette.common.white : theme.palette.navbar.itemText
                            }}>Home</Button>

                            {/* Services Dropdown */}
                            <Button
                                color="inherit"
                                onClick={(e) => setServicesAnchor(e.currentTarget)}
                                endIcon={isServicesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                sx={{
                                    ...navButtonSx,
                                    color: (isServicesOpen || isServicesPath) ? theme.palette.common.white : theme.palette.navbar.itemText
                                }}
                            >
                                Services
                            </Button>

                            {/* Remaining Nav Links (About, Blogs, Contact) */}
                            {navLinks.slice(1).map((link) => (
                                <Button key={link.label} LinkComponent={Link} href={link.href} color="inherit"
                                    sx={{
                                        ...navButtonSx,
                                        color: isActive(link.href) ? theme.palette.common.white : theme.palette.navbar.itemText
                                    }}
                                >
                                    {link.label}
                                </Button>
                            ))}

                            {/* Case Studies Dropdown */}
                            <Button
                                color="inherit"
                                onClick={(e) => setProjectsAnchor(e.currentTarget)}
                                endIcon={isProjectsOpen ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
                                sx={{
                                    ...navButtonSx,
                                    color: (isProjectsOpen || isProjectsPath) ? theme.palette.common.white : theme.palette.navbar.itemText
                                }}
                            >
                                Case Studies
                            </Button>

                            <VerticalDivider ref={caseStudiesRightDividerRef} />

                            {/* Services Menu */}
                            <Menu
                                anchorEl={servicesAnchor}
                                open={isServicesOpen}
                                onClose={handleMenuClose}
                                disableScrollLock
                                anchorReference="anchorPosition"
                                anchorPosition={menuPos || { top: 0, left: 0 }}
                                MenuListProps={{
                                    disablePadding: true,
                                }}

                                PaperProps={{
                                    sx: {
                                        p: 0, borderRadius: 0, boxShadow: "none",
                                        width: `${menuWidth}px`,
                                        bgcolor: theme.palette.navbar.bg,
                                        border: `1px solid ${theme.palette.navbar.border}`,
                                        backgroundImage: "none",
                                        overflow: "hidden",
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                                        width: "100%",
                                    }}
                                >
                                    {Array.from({ length: columns }).map((_, colIndex) => (
                                        <Box
                                            key={colIndex}
                                            sx={{
                                                height: "100%",
                                                borderLeft:
                                                    colIndex !== 0
                                                        ? `1px solid ${theme.palette.navbar.border}`
                                                        : "none",
                                            }}
                                        >
                                            {services
                                                .filter((_, i) => i % columns === colIndex)
                                                .map((item, idx, colItems) => (
                                                    <MenuItem
                                                        key={item.name}
                                                        component={Link}
                                                        href={item.href}
                                                        onClick={handleMenuClose}
                                                        disableGutters
                                                        sx={{
                                                            px: "24px",
                                                            py: "12px",
                                                            fontFamily: "Montserrat, sans-serif",
                                                            fontSize: theme.typography.body2.fontSize,
                                                            color: theme.palette.section.desc,

                                                            borderBottom:
                                                                idx !== colItems.length - 1
                                                                    ? `1px solid ${theme.palette.navbar.border}`
                                                                    : "none",

                                                            "&:hover": {
                                                                color: theme.palette.section.heading,
                                                                bgcolor: "transparent",
                                                            },
                                                        }}
                                                    >
                                                        {item.name}
                                                    </MenuItem>
                                                ))}
                                        </Box>
                                    ))}
                                </Box>
                            </Menu>

                            {/* Case Studies Menu */}
                            <Menu
                                anchorEl={projectsAnchor}
                                open={isProjectsOpen}
                                onClose={handleMenuClose}
                                disableScrollLock
                                anchorReference="anchorPosition"
                                anchorPosition={menuPos || { top: 0, left: 0 }}
                                MenuListProps={{
                                    disablePadding: true,
                                }}

                                PaperProps={{
                                    sx: {
                                        p: 0,
                                        borderRadius: 0,
                                        boxShadow: "none",
                                        width: `${menuWidth}px`,
                                        bgcolor: theme.palette.navbar.bg,
                                        border: `1px solid ${theme.palette.navbar.border}`,
                                        backgroundImage: "none",
                                        overflow: "hidden",
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: `repeat(${columns}, 1fr)`,
                                        width: "100%",
                                    }}
                                >
                                    {Array.from({ length: columns }).map((_, colIndex) => (
                                        <Box
                                            key={colIndex}
                                            sx={{
                                                height: "100%",
                                                borderLeft:
                                                    colIndex !== 0
                                                        ? `1px solid ${theme.palette.navbar.border}`
                                                        : "none",
                                            }}
                                        >
                                            {projects
                                                .filter((_, i) => i % columns === colIndex)
                                                .map((proj, idx, colItems) => (
                                                    <MenuItem
                                                        key={proj.name}
                                                        component={Link}
                                                        href={proj.href}
                                                        onClick={handleMenuClose}
                                                        disableGutters
                                                        sx={{
                                                            px: "24px",
                                                            py: "12px",
                                                            fontFamily: "Montserrat, sans-serif",
                                                            fontSize: theme.typography.body2.fontSize,
                                                            color: theme.palette.section.desc,

                                                            borderBottom:
                                                                idx !== colItems.length - 1
                                                                    ? `1px solid ${theme.palette.navbar.border}`
                                                                    : "none",

                                                            "&:hover": {
                                                                color: theme.palette.section.heading,
                                                                bgcolor: "rgba(255,255,255,0.05)",
                                                            },
                                                        }}
                                                    >
                                                        {proj.name}
                                                    </MenuItem>
                                                ))}
                                        </Box>
                                    ))}
                                </Box>
                            </Menu>
                        </MenuBox>
                    )}

                    <RightBox>
                        {isMobile && (
                            <IconButton onClick={toggleDrawer(!drawerOpen)} sx={{ color: theme.palette.section.heading, p: 1, zIndex: 1400 }}>
                                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        )}
                        {!isMobile && (
                            <>
                                <VerticalDivider sx={{ display: { xs: 'none', xl: 'block' } }} />
                                <Box sx={{ pl: "32px" }}>
                                    <Button
                                        href="https://calendly.com/saad-b-javaid22/consultation"
                                        target="_blank"
                                        sx={{
                                            ...navButtonSx, px: "24px", borderRadius: 0,
                                            color: theme.palette.navbar.itemText,
                                            "&:hover": { color: theme.palette.common.white }
                                        }}
                                    >
                                        Get Started
                                    </Button>
                                </Box>
                            </>
                        )}
                    </RightBox>
                </StyledToolbar>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    slotProps={{
                        paper: {
                            sx: {
                                width: "100vw", height: "100vh", bgcolor: theme.palette.navbar.bg,
                                color: theme.palette.section.desc, borderRadius: 0, boxShadow: "none"
                            }
                        }
                    }}
                >
                    <Box sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        px: { xs: "24px", md: "80px" }, height: { xs: "64px", md: "80px" },
                        bgcolor: theme.palette.navbar.bg,
                    }}>
                        <LogoBox><Logo /></LogoBox>
                        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: theme.palette.section.heading }}><CloseIcon /></IconButton>
                    </Box>

                    <List sx={{ px: 2, py: 0, flexGrow: 1, bgcolor: theme.palette.navbar.bg }}>
                        {/* Mobile Nav Links */}
                        <ListItem disablePadding>
                            <ListItemButton component={Link} href="/" onClick={toggleDrawer(false)}
                                sx={{ px: "24px", }}>
                                <ListItemText primary="Home" primaryTypographyProps={{
                                    sx: {
                                        fontFamily: "Montserrat", fontSize: "16px", color: isActive("/") ? theme.palette.common.white : theme.palette.navbar.mobileItem,
                                        fontWeight: isActive("/") ? 600 : 400
                                    }
                                }} />
                            </ListItemButton>
                        </ListItem>

                        {/* Mobile Services Accordion */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                sx={{ px: "24px", }}
                            >
                                <ListItemText primary="Services" primaryTypographyProps={{ sx: { fontFamily: "Montserrat", fontSize: "16px", color: theme.palette.navbar.mobileItem } }} />
                                {mobileServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ListItemButton>
                        </ListItem>
                        {mobileServicesOpen && services.map((s, index) => (
                            <ListItem key={s.name} disablePadding >
                                <ListItemButton
                                    component={Link}
                                    href={s.href}
                                    onClick={toggleDrawer(false)}
                                    sx={{
                                        ml: "24px",
                                        mr: "24px",
                                        px: 0,

                                        borderBottom: index !== services.length - 1
                                            ? `1px solid ${theme.palette.navbar.border}`
                                            : "none"
                                    }}
                                >
                                    <ListItemText
                                        primary={s.name}
                                        primaryTypographyProps={{
                                            sx: { fontSize: "14px", color: theme.palette.navbar.mobileItem }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}

                        {/* Other Mobile Links */}
                        {navLinks.slice(1).map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton component={Link} href={link.href} onClick={toggleDrawer(false)} sx={{ px: "24px" }}>
                                    <ListItemText primary={link.label} primaryTypographyProps={{ sx: { fontFamily: "Montserrat", fontSize: "16px", color: theme.palette.navbar.mobileItem } }} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                        {/* Mobile Case Studies Accordion */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                                sx={{ px: "24px", }}>
                                <ListItemText primary="Case Studies" primaryTypographyProps={{ sx: { fontFamily: "Montserrat", fontSize: "16px", color: theme.palette.navbar.mobileItem } }} />
                                {mobileProjectsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ListItemButton>
                        </ListItem>
                        {mobileProjectsOpen && projects.map((proj, index) => (
                            <ListItem key={proj.name} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={proj.href}
                                    onClick={toggleDrawer(false)}
                                    sx={{
                                        ml: "24px",
                                        mr: "24px",
                                        px: 0,
                                        borderBottom: index !== projects.length - 1
                                            ? `1px solid ${theme.palette.navbar.border}`
                                            : "none"
                                    }}
                                >
                                    <ListItemText
                                        primary={proj.name}
                                        primaryTypographyProps={{
                                            sx: { fontSize: "14px", color: theme.palette.navbar.mobileItem }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Box>
                            <Button
                                href="https://calendly.com/saad-b-javaid22/consultation"
                                target="_blank"
                                endIcon={<ArrowOutwardIcon sx={{ fontSize: "20px !important" }} />}
                                sx={{
                                    ...navButtonSx,
                                    color: theme.palette.common.white,
                                    px: "24px",
                                    borderRadius: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    "&:hover": {
                                        color: theme.palette.navbar.itemTextHover,
                                        "& .MuiButton-endIcon": {
                                            color: theme.palette.navbar.itemTextHover
                                        }
                                    },
                                    "& .MuiButton-endIcon": {
                                        marginLeft: "auto",
                                    }
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>

                    </List>

                    <Box sx={{ p: 4, textAlign: "center", bgcolor: theme.palette.navbar.bg }}>
                        <Typography sx={{ color: theme.palette.section.muted, fontFamily: "Montserrat", fontSize: "13px" }}>
                            LUMUNATE &copy; {new Date().getFullYear()} All rights reserved
                        </Typography>
                    </Box>
                </Drawer>
            </NavContainer>
        </AppBar >
    );
}