"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import PageContainer from "@/components/common/PageContainer";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import * as S from "./BlogDetailContent.styles";

const BlogDetailContent = () => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [isFixed, setIsFixed] = useState(false);
    const [isPinnedBottom, setIsPinnedBottom] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);
    const [activeId, setActiveId] = useState("");

    const tableOfContents = [
        { title: "Introduction", id: "introduction" },
        { title: "What exactly are low code platforms?", id: "what-is-low-code" },
        { title: "The Case FOR Low-Code: Why It's a Friend", id: "case-for" },
        { title: "The Case AGAINST Low-Code: Why It's a Foe", id: "case-against" },
        { title: "Our Hybrid Approach", id: "hybrid-approach" },
        { title: "What's your experience?", id: "experience" },
    ];

    // JS SCROLL LOGIC (STICKY SIDEBAR) 
    // Modified to only apply logic on screens >= 1024px
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !sidebarRef.current) return;

            // Only apply sticky logic for 1024px and up
            if (window.innerWidth < 1024) {
                setIsFixed(false);
                setIsPinnedBottom(false);
                return;
            }

            const containerRect = containerRef.current.getBoundingClientRect();
            const sidebarHeight = sidebarRef.current.offsetHeight;
            const stickyTopGap = 0;

            const parentWidth = sidebarRef.current.parentElement?.getBoundingClientRect().width || 0;
            setSidebarWidth(parentWidth);

            const shouldBeFixed = containerRect.top < stickyTopGap;
            const shouldBePinned = containerRect.bottom < (sidebarHeight + stickyTopGap);

            setIsFixed(shouldBeFixed && !shouldBePinned);
            setIsPinnedBottom(shouldBePinned);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // INTERSECTION OBSERVER (Works on all screens) 
    useEffect(() => {
        const observerOptions = {
            rootMargin: "-20% 0% -70% 0%",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, observerOptions);

        tableOfContents.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        const handleBottomReach = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
            if (isAtBottom) {
                setActiveId(tableOfContents[tableOfContents.length - 1].id);
            }
        };

        window.addEventListener("scroll", handleBottomReach);
        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleBottomReach);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            setActiveId(id);
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ bgcolor: "background.default", py: { xs: 6, lg: 15 } }}>
            <PageContainer>
                <Grid container spacing={0} alignItems="stretch" ref={containerRef} sx={{ position: 'relative' }}>

                    {/* Left Content Section */}
                    <Grid size={{ xs: 12, lg: 7 }} sx={{ order: { xs: 3, lg: 1 } }}>
                        <S.ArticleBody>
                            <Typography variant="h4" id="introduction" gutterBottom sx={{ fontSize: { xs: '24px', md: '32px' } }}>Introduction</Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                                The rise of low-code and no-code platforms has sparked one of the most heated debates in the software development world. Are these tools democratizing technology and empowering businesses, or are they creating a dangerous landscape of unmaintainable, insecure applications?
                                <br /><br />
                                As a software house that's watched this trend unfold and experimented with these platforms ourselves — we're here to cut through the noise and give you the honest truth about low-code development.
                            </Typography>

                            <Divider sx={{ mb: 4, borderColor: "divider" }} />

                            <Typography variant="h4" id="what-is-low-code" gutterBottom sx={{ fontSize: { xs: '24px', md: '32px' } }}>What exactly are low code platforms?</Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                                Low-code platforms allow users to build applications through visual interfaces, drag-and-drop components, and pre-built templates—requiring minimal hand-coding. These platforms include OutSystems, Mendix, Microsoft Power Apps, and Bubble.
                                <br /><br />
                                The promise is simple: build faster, build cheaper, and let non-developers create software.
                                <br />
                                Sounds perfect, right? Well, not quite.
                            </Typography>

                            <Divider sx={{ mb: 4, borderColor: "divider" }} />

                            <Typography variant="h4" id="case-for" gutterBottom sx={{ fontSize: { xs: '24px', md: '32px' } }}>The Case FOR Low-Code: Why It's a Friend</Typography>
                            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                                Let's start with the positives, because there are genuinely compelling reasons businesses are flocking to these platforms:
                            </Typography>
                            <Box sx={{ color: 'text.secondary', mb: 4 }}>
                                <Typography variant="body1" sx={{ mb: 2 }}>1. <strong>Speed to Market:</strong> When you need a functional MVP or internal tool yesterday, low-code platforms deliver. What might take weeks in traditional development can be prototype-ready in days. For startups testing ideas or enterprises building internal workflows, this speed is invaluable.</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>2. <strong>Empowering Non-Technical Teams:</strong> Marketing needs a landing page builder. Operations wants a custom dashboard. HR needs an onboarding portal. Low-code puts power in the hands of people who understand the problem intimately—without waiting on developer bandwidth.</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>3. <strong>Cost-Effective for Simple Use Cases:</strong> For straightforward CRUD applications, form builders, or basic workflows, low-code can be significantly cheaper than custom development. Why pay for a Ferrari when a sedan gets you there just fine?</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>4. <strong>Reducing Developer Burnout:</strong> By offloading repetitive, simple tasks to low-code tools, development teams can focus on complex, high-value work that actually requires their expertise.</Typography>
                            </Box>

                            <Divider sx={{ mb: 4, borderColor: "divider" }} />

                            <Typography variant="h4" id="case-against" gutterBottom sx={{ fontSize: { xs: '24px', md: '32px' } }}>The Case AGAINST Low-Code: Why It's a Foe</Typography>
                            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                                Now for the uncomfortable truths that low-code vendors won't advertise on their landing pages:
                            </Typography>
                            <Box sx={{ color: 'text.secondary', mb: 4 }}>
                                <Typography variant="body1" sx={{ mb: 2 }}>1. <strong>The Illusion of Simplicity:</strong> Low-code is easy until it isn't. The moment you need custom logic, complex integrations, or performance optimization, you hit a wall. And that wall often requires a developer anyway—except now they're debugging a visual workflow instead of clean code.</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>2. <strong>Vendor Lock-In:</strong> Most low-code platforms are proprietary black boxes. You can't easily migrate your application elsewhere. If the vendor raises prices, changes terms, or goes out of business, you're stuck. Your entire application is held hostage.</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>3. <strong>Scalability Concerns:</strong> That app that works beautifully for 50 users? Watch it crumble at 5,000. Low-code platforms often struggle with performance at scale, and optimization options are limited compared to custom-built solutions.</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>4. <strong>Security and Compliance Risks:</strong> When non-technical users build applications, they rarely consider security best practices, data privacy regulations, or compliance requirements. We've seen low-code apps leak sensitive data simply because the builder didn't understand authentication properly.</Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>5. <strong>Technical Debt in Disguise:</strong> Low-code creates a different kind of technical debt. Instead of messy code, you get messy visual workflows that become impossible to understand, document, or hand off. Try onboarding a new team member to a spaghetti flowchart built by someone who left the company.</Typography>
                            </Box>

                            <Divider sx={{ mb: 4, borderColor: "divider" }} />

                            <Typography variant="h4" id="hybrid-approach" gutterBottom sx={{ fontSize: { xs: '24px', md: '32px' } }}>Our Hybrid Approach</Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                                At Lumunate, we don't see this as an either/or situation. We've successfully used low-code platforms for client admin panels and internal dashboards while building the core application logic in custom code.
                                <br /><br />
                                Low-code platforms aren't the enemy—but they're not a silver bullet either. They're a legitimate option in the developer's toolkit that deserves neither blind enthusiasm nor blanket dismissal.
                                <br /><br />
                                The real danger isn't the platforms themselves—it's the misconception that building software is now easy. Software is still complex. Good software still requires expertise. Low-code just changes where that expertise is applied.
                                <br /><br />
                                So before you dive into that shiny new low-code platform, ask yourself: Am I choosing this because it's the right tool for the job, or because I'm trying to avoid the hard work of building something properly? The answer to that question will determine whether low-code becomes your friend or your foe.
                            </Typography>

                            <Divider sx={{ mb: 4, borderColor: "divider" }} />

                            <Typography variant="h4" id="experience" gutterBottom sx={{ fontSize: { xs: '24px', md: '32px' } }}>What's Your Experience?</Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                Have you built with low-code platforms? We'd love to hear your war stories—both the wins and the disasters.
                                <br /><br />
                                Ready to discuss your next project? Whether it's low-code, custom development, or a hybrid approach, we'll help you choose the right path.
                            </Typography>
                        </S.ArticleBody>
                    </Grid>

                    {/* Sidebar Section */}
                    <Grid
                        size={{ xs: 12, lg: 5 }}
                        sx={{
                            order: { xs: 2, lg: 3 },
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Box
                            ref={sidebarRef}
                            sx={{
                                // Width logic only applies when screen is lg (1024px+)
                                width: { lg: (isFixed || isPinnedBottom) ? `${sidebarWidth}px` : '100%' },
                                // Sticky/Pinned logic only triggers if isFixed/isPinnedBottom is true 
                                // (which we now prevent on screens < 1024px)
                                ...(isFixed && {
                                    position: 'fixed',
                                    top: 0,
                                    zIndex: 10,
                                }),
                                ...(isPinnedBottom && {
                                    position: 'absolute',
                                    bottom: 0,
                                    top: 'auto',
                                })
                            }}
                        >
                            <S.StickySidebar sx={{ p: 0, borderTop: 0 }}>
                                <Divider sx={{ borderColor: "divider" }} />
                                <Box sx={{ px: { xs: 0, md: "40px" }, py: { xs: 3, md: "40px" } }}>
                                    <Stack direction="row" spacing={1.5} justifyContent="space-between" sx={{ color: "text.secondary" }}>
                                        {[
                                            { icon: <FavoriteIcon sx={{ color: 'error.main', fontSize: { xs: "14px", lg: "18px" } }} />, label: "24.5k" },
                                            { icon: <VisibilityOutlinedIcon sx={{ fontSize: { xs: "14px", lg: "18px" } }} />, label: "50k" },
                                            { icon: <SendOutlinedIcon sx={{ fontSize: { xs: "14px", lg: "18px" } }} />, label: "208" }
                                        ].map((item, i) => (
                                            <Stack key={i} direction="row" spacing={"4px"} alignItems="center"
                                                sx={{
                                                    bgcolor: "background.paper",
                                                    px: { xs: 1.5, xl: 3 },
                                                    py: "10px",
                                                    borderRadius: "100px",
                                                    border: "1px solid #333",
                                                    flex: 1,
                                                    justifyContent: 'center'
                                                }} >
                                                {item.icon}
                                                <Typography variant="body1" sx={{ fontWeight: 500, fontSize: { xs: "14px", md: "18px" } }}>{item.label}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>

                                <Divider sx={{ borderColor: "divider", width: "100%" }} />

                                <Box sx={{ py: 4, px: { xs: 0, md: 5, lg: 5 } }}>
                                    <Grid container spacing={3} sx={{ mb: 5 }}>
                                        <Grid size={{ xs: 6, md: 4, lg: 7, xl: 4 }}>
                                            <Typography variant="body1" color="text.secondary" sx={{ display: 'block', whiteSpace: "nowrap", mb: 0.5, fontSize: { xs: "14px", lg: "16px" } }}>Publication Date</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500, fontSize: { xs: "14px", lg: "16px" } }}>Oct 15, 2023</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 4, xl: 4 }}>
                                            <Typography variant="body1" color="text.secondary" sx={{ display: 'block', mb: 0.5, fontSize: { xs: "14px", lg: "16px" } }}>Category</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500, fontSize: { xs: "14px", lg: "16px" } }}>Development</Typography>
                                        </Grid>
                                        <Grid size={{ xs: 6, md: 4, xl: 4 }}>
                                            <Typography variant="body1" color="text.secondary" sx={{ display: 'block', mb: 0.5, whiteSpace: "nowrap", fontSize: { xs: "14px", lg: "16px" } }}>Reading Time</Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 500, fontSize: { xs: "14px", lg: "16px" } }}>10 Min</Typography>
                                        </Grid>
                                    </Grid>

                                    <Typography variant="body1" sx={{ mb: 2, letterSpacing: "-3%", color: "text.secondary", fontSize: { xs: "14px", lg: "18px" } }}>
                                        Table of Contents
                                    </Typography>

                                    <S.TOCContainer sx={{ p: "16px 20px 20px 20px", mb: { xs: 4, lg: 0 } }} >
                                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                            {tableOfContents.map((item, index) => (
                                                <Box component="li" key={index} sx={{ mb: { xs: "12px", lg: 2 } }}>
                                                    <Typography
                                                        variant="body1"
                                                        onClick={() => scrollToSection(item.id)}
                                                        sx={{
                                                            color: activeId === item.id ? "button.discoverBg" : "text.primary",
                                                            fontSize: { xs: "14px", md: "16px", lg: "18px" },
                                                            fontWeight: activeId === item.id ? 600 : 400,
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            gap: { xs: 1, lg: 2 },
                                                            transition: 'all 0.2s ease',
                                                            '&:hover': { color: 'button.discoverBg' }
                                                        }}
                                                    >
                                                        <span style={{ opacity: 0.5 }}>•</span> {item.title}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </S.TOCContainer>
                                </Box>
                            </S.StickySidebar>
                        </Box>
                    </Grid>
                </Grid>
            </PageContainer>
        </Box >
    );
};

export default BlogDetailContent;