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

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
    const pathname = usePathname();
    const navRef = useNavbarRef();
    const isHome = pathname === "/";

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

    // dropdown measurement refs
    const navContainerRef = useRef<HTMLDivElement>(null);
    const logoBoxRef = useRef<HTMLDivElement>(null);
    const caseStudiesRightDividerRef = useRef<HTMLDivElement>(null);

    const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(null);
    const [menuWidth, setMenuWidth] = useState<number>(800);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const isCaseStudiesOpen = Boolean(anchorEl);

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
            backgroundColor: "transparent",
            whiteSpace: "nowrap",
            minWidth: "fit-content",
            "&:hover": {
                color: theme.palette.section.heading,
                backgroundColor: "transparent",
            },
        }),
        [theme]
    );


    useEffect(() => {
        const calcMenuMetrics = () => {
            if (!navContainerRef.current || !logoBoxRef.current || !caseStudiesRightDividerRef.current)
                return;

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
            requestAnimationFrame(calcMenuMetrics);
        }

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
            position="sticky"
            elevation={0}
            sx={{
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1300,
                backgroundColor: theme.palette.navbar.bg,
                borderTop: `1px solid ${theme.palette.navbar.border}`,
                borderBottom: `1px solid ${theme.palette.navbar.border}`,
                // FIX: Hides navbar on Home ONLY until GSAP starts
                visibility: isHome ? "hidden" : "visible",
                // Ensure sticky works
                transition: "background-color 0.3s ease",
                "& .MuiToolbar-root": {
                    minHeight: "auto"
                }
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
                                onClick={handleMenuOpen}
                                endIcon={
                                    isCaseStudiesOpen ? (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    )
                                }
                                sx={{
                                    ...navButtonSx,
                                    color: isCaseStudiesOpen
                                        ? theme.palette.section.heading
                                        : theme.palette.navbar.itemText,

                                    "&:hover": {
                                        color: theme.palette.section.heading,
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                Case Studies
                            </Button>


                            <VerticalDivider ref={caseStudiesRightDividerRef} />

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                disableScrollLock
                                anchorReference="anchorPosition"
                                anchorPosition={menuPos || { top: 0, left: 0 }}
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
                                    {projects.map((proj, index) => {
                                        const isFirstRow = index < columns;
                                        const isLastRow = index >= projects.length - columns;
                                        const isFirstCol = index % columns === 0;
                                        const isLastCol =
                                            (index + 1) % columns === 0 || index === projects.length - 1;

                                        return (
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

                                                    ...(!isFirstRow && {
                                                        borderTop: `1px solid ${theme.palette.navbar.border}`,
                                                    }),

                                                    ...(!isFirstCol && {
                                                        borderLeft: `1px solid ${theme.palette.navbar.border}`,
                                                    }),

                                                    ...(isLastRow && {
                                                        borderBottom: `1px solid ${theme.palette.navbar.border}`,
                                                    }),

                                                    backgroundColor: "transparent",

                                                    "&:hover": {
                                                        backgroundColor: "transparent",
                                                        color: theme.palette.section.heading,
                                                    },
                                                }}
                                            >
                                                {proj.name}
                                            </MenuItem>

                                        );
                                    })}

                                </Box>
                            </Menu>
                        </MenuBox>
                    )}

                    <RightBox>
                        {/* Mobile/Tablet: Hamburger */}
                        {isMobile && (
                            <IconButton
                                onClick={toggleDrawer(!drawerOpen)}
                                sx={{
                                    color: theme.palette.section.heading,
                                    p: 1,
                                    zIndex: 1400
                                }}
                                aria-label={drawerOpen ? "Close menu" : "Open menu"}
                            >
                                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        )}

                        {/* Desktop: Get Started */}
                        {!isMobile && (
                            <>
                                <VerticalDivider sx={{ display: { xs: 'none', xl: 'block' } }} />
                                <Box sx={{ pl: "32px" }}>
                                    <Button
                                        href="https://calendly.com/saad-b-javaid22/consultation"
                                        target="_blank"
                                        sx={{
                                            px: 2,
                                            py: 1,
                                            fontWeight: 400,
                                            fontFamily: "Montserrat, sans-serif",
                                            fontSize: "16px",
                                            borderRadius: 0,
                                            color: theme.palette.navbar.itemText,
                                            backgroundColor: "transparent",
                                            boxShadow: "none",
                                            whiteSpace: "nowrap",
                                            minWidth: "fit-content",
                                            "&:hover": {
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
                    onClose={() => setDrawerOpen(false)}
                    ModalProps={{ keepMounted: true }}
                    slotProps={{
                        paper: {
                            sx: {
                                width: "100vw",
                                height: "100vh",
                                bgcolor: theme.palette.navbar.bg,
                                color: theme.palette.section.desc,
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: 0,
                                boxShadow: "none",
                                overflowY: "auto",
                            },
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "sticky",
                            top: 0,
                            zIndex: 1100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            px: { xs: "24px", md: "80px" },
                            height: { xs: "64px", md: "80px" },
                            bgcolor: theme.palette.navbar.bg,
                            borderBottom: `1px solid ${theme.palette.navbar.border}`,
                        }}
                    >
                        <LogoBox>
                            <Logo />
                        </LogoBox>

                        <IconButton
                            onClick={() => setDrawerOpen(false)}
                            sx={{ color: theme.palette.section.heading, p: 1 }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ pt: "20px", bgcolor: theme.palette.navbar.bg }} />

                    {/* MENU ITEMS */}
                    <List
                        sx={{
                            px: 2,
                            py: 0,
                            flexGrow: 1,
                            bgcolor: theme.palette.navbar.bg
                        }}
                    >
                        {navLinks.map((link) => (
                            <ListItem key={link.label} disablePadding>
                                <ListItemButton
                                    LinkComponent={Link}
                                    href={link.href}
                                    onClick={toggleDrawer(false)}
                                    sx={{
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

                        {/* Case Studies Toggle */}
                        <ListItem disablePadding sx={{ mt: 1 }}>
                            <ListItemButton
                                onClick={() => setMobileProjectsOpen((open) => !open)}
                                sx={{
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

                        {/* Project Sub-items */}
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

                    {/* FOOTER */}
                    <Box
                        sx={{
                            mt: "auto",
                            px: 3,
                            pt: "40px",
                            pb: 4,
                            textAlign: "center",
                            bgcolor: theme.palette.navbar.bg,
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
                </Drawer>
            </NavContainer>
        </AppBar>
    );
}
