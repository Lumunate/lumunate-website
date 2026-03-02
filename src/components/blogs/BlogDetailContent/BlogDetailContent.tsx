"use client";

import { Box, Typography, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import PageContainer from "@/components/common/PageContainer";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import * as S from "./BlogDetailContent.styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const BlogDetailContent = () => {
    const tableOfContents = [
        { title: "Introduction", id: "introduction" },
        { title: "What exactly are low code platforms?", id: "what-is-low-code" },
        { title: "The Case FOR Low-Code: Why It's a Friend", id: "case-for" },
        { title: "The Case AGAINST Low-Code: Why It's a Foe", id: "case-against" },
        { title: "Our Hybrid Approach", id: "hybrid-approach" },
        { title: "What's your experience?", id: "experience" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <Box sx={{ bgcolor: "background.default", py: { xs: 6, lg: 15 } }}>
            <PageContainer>

                <Grid container spacing={0} alignItems="stretch">

                    {/* Left Content Section */}
                    <Grid size={{ xs: 12, lg: 7 }} sx={{ order: { xs: 3, lg: 1 } }}>
                        <S.ArticleBody>
                            <Typography variant="h4" id="introduction" gutterBottom>Introduction</Typography>
                            <Typography variant="body1" paragraph>
                                The rise of low-code and no-code platforms has sparked one of the most heated debates in the software development world. Are these tools democratizing technology and empowering businesses, or are they creating a dangerous landscape of unmaintainable, insecure applications?
                                <br />
                                As a software house that's watched this trend unfold and experimented with these platforms ourselves — we're here to cut through the noise and give you the honest truth about low-code development.
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "divider" }} />

                            <Typography variant="h4" id="what-is-low-code" gutterBottom>What exactly are low code platforms?</Typography>
                            <Typography variant="body1" paragraph>
                                Low-code platforms allow users to build applications through visual interfaces, drag-and-drop components, and pre-built templates—requiring minimal hand-coding. Think platforms like OutSystems, Mendix, Microsoft Power Apps, and Bubble.
                                <br />
                                The promise is simple: build faster, build cheaper, and let non-developers create software.
                                <br />
                                Sounds perfect, right? Well, not quite.
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "divider" }} />

                            <Typography variant="h4" id="case-for" gutterBottom>The Case FOR Low-Code: Why It's a Friend</Typography>
                            <Typography variant="body2" component="div">
                                <Typography variant="body1" paragraph>
                                    Lets start with the positives, because there are genuinely compelling reasons businesses are flocking to these platforms.
                                </Typography>
                                <ol>
                                    <li>Speed to Market When you need a functional MVP or internal tool yesterday, low-code platforms deliver. What might take weeks in traditional development can be prototype-ready in days. For startups testing ideas or enterprises building internal workflows, this speed is invaluable.</li>
                                    <li>Empowering Non-Technical Teams Marketing needs a landing page builder. Operations wants a custom dashboard. HR needs an onboarding portal. Low-code puts power in the hands of people who understand the problem intimately—without waiting on developer bandwidth.</li>
                                    <li>Cost-Effective for Simple Use Cases For straightforward CRUD applications, form builders, or basic workflows, low-code can be significantly cheaper than custom development. Why pay for a Ferrari when a sedan gets you there just fine?</li>
                                    <li>Reducing Developer Burnout By offloading repetitive, simple tasks to low-code tools, development teams can focus on complex, high-value work that actually requires their expertise.</li>
                                </ol>
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "divider" }} />

                            <Typography variant="h4" id="case-against" gutterBottom>The Case AGAINST Low-Code: Why It's a Foe</Typography>
                            <Typography variant="body2" component="div">
                                <Typography variant="body1" paragraph>
                                    Now for the uncomfortable truths that low-code vendors won't advertise on their landing pages.
                                </Typography>
                                <ol>
                                    <li>The Illusion of Simplicity Low-code is easy until it isn't. The moment you need custom logic, complex integrations, or performance optimization, you hit a wall. And that wall often requires a developer anyway—except now they're debugging a visual workflow instead of clean code.</li>
                                    <li>Vendor Lock-In Most low-code platforms are proprietary black boxes. You can't easily migrate your application elsewhere. If the vendor raises prices, changes terms, or goes out of business, you're stuck. Your entire application is held hostage.</li>
                                    <li>Scalability Concerns That app that works beautifully for 50 users? Watch it crumble at 5,000. Low-code platforms often struggle with performance at scale, and optimization options are limited compared to custom-built solutions.</li>
                                    <li>Security and Compliance Risks When non-technical users build applications, they rarely consider security best practices, data privacy regulations, or compliance requirements. We've seen low-code apps leak sensitive data simply because the builder didn't understand authentication properly.</li>
                                    <li>Technical Debt in Disguise Low-code creates a different kind of technical debt. Instead of messy code, you get messy visual workflows that become impossible to understand, document, or hand off. Try onboarding a new team member to a spaghetti flowchart built by someone who left the company.</li>
                                </ol>
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "divider" }} />

                            <Typography variant="h4" id="hybrid-approach" gutterBottom>Our Hybrid Approach</Typography>
                            <Typography variant="body2" component="div">
                                <Typography variant="body1" paragraph>
                                    At Lumunate, we don't see this as an either/or situation. We've successfully used low-code platforms for client admin panels and internal dashboards while building the core application logic in custom code. Low-code platforms aren't the enemy—but they're not a silver bullet either. They're a legitimate option in the developer's toolkit that deserves neither blind enthusiasm nor blanket dismissal.
                                    <br /><br />
                                    The real danger isn't the platforms themselves—it's the misconception that building software is now easy. Software is still complex. Good software still requires expertise. Low-code just changes where that expertise is applied.
                                    <br /><br />
                                    So before you dive into that shiny new low-code platform, ask yourself: Am I choosing this because it's the right tool for the job, or because I'm trying to avoid the hard work of building something properly? The answer to that question will determine whether low-code becomes your friend or your foe.
                                </Typography>
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "divider" }} />

                            <Typography variant="h4" id="experience" gutterBottom>What's Your Experience?</Typography>
                            <Typography variant="body2" component="div">
                                <Typography variant="body1" paragraph>
                                    Have you built with low-code platforms? We'd love to hear your war stories—both the wins and the disasters.
                                    <br /><br />
                                    Ready to discuss your next project? Whether it's low-code, custom development, or a hybrid approach, we'll help you choose the right path.
                                </Typography>
                            </Typography>
                        </S.ArticleBody>
                    </Grid>

                    {/* Sidebar Container */}
                    <Grid size={{ xs: 12, lg: 5 }} sx={{ order: { xs: 2, lg: 3 }, position: 'relative' }}>

                        <S.StickySidebar sx={{
                            p: 0,
                            borderTop: 0,
                            position: 'sticky',
                            top: '40px',
                            height: 'fit-content'
                        }}>
                            <Divider sx={{ borderColor: "divider" }} />
                            <Box sx={{ px: { xs: 0, md: "40px" }, py: { xs: 3, md: "40px" } }}>
                                <Stack direction="row" spacing={1.5} justifyContent="space-between" sx={{ color: "text.secondary" }}>
                                    {[
                                        { icon: <FavoriteIcon sx={{ color: 'error.main', fontSize: { xs: "14px", lg: "18px" } }} />, label: "24.5k" },
                                        { icon: <VisibilityOutlinedIcon />, label: "50k" },
                                        { icon: <SendOutlinedIcon />, label: "208" }
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
                                    <Grid size={{ xs: 6, md: 4, lg: 5, xl: 4 }}>
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
                                                        color: "text.primary",
                                                        fontSize: { xs: "14px", md: "16px", lg: "18px" },
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        gap: { xs: 1, lg: 2 },
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
                    </Grid>
                </Grid>
            </PageContainer>
        </Box >
    );
};

export default BlogDetailContent;