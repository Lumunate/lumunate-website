"use client";

import { Box, Typography, Divider, Stack } from "@mui/material";

import Grid from "@mui/material/Grid";
import PageContainer from "@/components/common/PageContainer";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import * as S from "./BlogDetailContent.styles";

const BlogDetailContent = () => {
    const tableOfContents = [
        "Introduction",
        "What exactly are low code platforms?",
        "The Case FOR Low-Code: Why It's a Friend",
        "The Case AGAINST Low-Code: Why It's a Foe",
        "Our Hybrid Approach",
        "What's your experience?",
    ];

    return (
        <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
            <PageContainer>

                <Grid container spacing={6}>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <S.ArticleBody>
                            <Typography variant="h4" gutterBottom>Introduction</Typography>
                            <Typography variant="body1" paragraph>
                                The rise of low-code and no-code platforms has sparked one of the most heated debates in the software development world. Are these tools democratizing technology and empowering businesses, or are they creating a dangerous landscape of unmaintainable, insecure applications?
                                <br />
                                As a software house that's watched this trend unfold and experimented with these platforms ourselves — we're here to cut through the noise and give you the honest truth about low-code development.
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "rgba(255,255,255,0.1)" }} />

                            <Typography variant="h4" gutterBottom>What exactly are low code platforms?</Typography>
                            <Typography variant="body1" paragraph>
                                Low-code platforms allow users to build applications through visual interfaces, drag-and-drop components, and pre-built templates—requiring minimal hand-coding. Think platforms like OutSystems, Mendix, Microsoft Power Apps, and Bubble.
                                <br />
                                The promise is simple: build faster, build cheaper, and let non-developers create software.
                                Sounds perfect, right? Well, not quite.
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "rgba(255,255,255,0.1)" }} />

                            <Typography variant="h4" gutterBottom>The Case FOR Low-Code: Why It's a Friend</Typography>
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

                            <Divider sx={{ mb: "20px", borderColor: "rgba(255,255,255,0.1)" }} />

                            <Typography variant="h4" gutterBottom>The Case AGAINST Low-Code: Why It's a Foe</Typography>
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

                            <Divider sx={{ mb: "20px", borderColor: "rgba(255,255,255,0.1)" }} />

                            <Typography variant="h4" gutterBottom>Our Hybrid Approach</Typography>
                            <Typography variant="body2" component="div">
                                <Typography variant="body1" paragraph>
                                    At Lumunate, we don't see this as an either/or situation. We've successfully used low-code platforms for client admin panels and internal dashboards while building the core application logic in custom code. Low-code platforms aren't the enemy—but they're not a silver bullet either. They're a legitimate option in the developer's toolkit that deserves neither blind enthusiasm nor blanket dismissal.
                                    The real danger isn't the platforms themselves—it's the misconception that building software is now easy. Software is still complex. Good software still requires expertise. Low-code just changes where that expertise is applied.
                                    <br />
                                    So before you dive into that shiny new low-code platform, ask yourself: Am I choosing this because it's the right tool for the job, or because I'm trying to avoid the hard work of building something properly? The answer to that question will determine whether low-code becomes your friend or your foe.
                                </Typography>
                            </Typography>

                            <Divider sx={{ mb: "20px", borderColor: "rgba(255,255,255,0.1)" }} />

                            <Typography variant="h4" gutterBottom>What's Your Experience?</Typography>
                            <Typography variant="body2" component="div">
                                <Typography variant="body1" paragraph>
                                    Have you built with low-code platforms? We'd love to hear your war stories—both the wins and the disasters.
                                    <br />
                                    Ready to discuss your next project? Whether it's low-code, custom development, or a hybrid approach, we'll help you choose the right path.
                                </Typography>


                            </Typography>
                        </S.ArticleBody>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <S.StickySidebar>
                            <Stack direction="row" spacing={"14px"} sx={{ mb: 5, color: "text.secondary" }}>
                                <Stack direction="row" spacing={"4px"} alignItems="center"
                                    sx={{ bgcolor: "#191919", padding: "10px 24px", borderRadius: "100px", border: "1px solid yellow" }} >
                                    <FavoriteBorderIcon fontSize="small" sx={{ color: 'error.main' }} />
                                    <Typography variant="body1">24.5k</Typography>
                                </Stack>
                                <Stack direction="row" spacing={"4px"} alignItems="center"
                                    sx={{ bgcolor: "#191919", padding: "10px 24px", borderRadius: "100px", border: "1px solid yellow" }}
                                >
                                    <VisibilityOutlinedIcon fontSize="small" />
                                    <Typography variant="body1">50k</Typography>
                                </Stack>
                                <Stack direction="row" spacing={"4px"} alignItems="center"
                                    sx={{ bgcolor: "#191919", padding: "10px 24px", borderRadius: "100px", border: "1px solid yellow" }}
                                >
                                    <ShareOutlinedIcon fontSize="small" />
                                    <Typography variant="body1">208</Typography>
                                </Stack>
                            </Stack>

                            <Divider sx={{ mb: 5, borderColor: "rgba(255,255,255,0.1)" }} />

                            <Grid container spacing={"20px"} sx={{ mb: "50px" }}>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="body1" color="text.secondary" display="block">Publication Date</Typography>
                                    <Typography variant="body1" fontWeight={500}>October 15, 2023</Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="body1" color="text.secondary" display="block">Category</Typography>
                                    <Typography variant="body1" fontWeight={500}>Development</Typography>
                                </Grid>
                                <Grid size={{ xs: 4 }}>
                                    <Typography variant="body1" color="text.secondary" display="block">Reading Time</Typography>
                                    <Typography variant="body1" fontWeight={500}>10 Min</Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body1" sx={{ mb: 2, letterSpacing: 1, color: "text.secondary" }}>Table of Contents</Typography>
                            <S.TOCContainer>

                                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                    {tableOfContents.map((item, index) => (
                                        <Box component="li" key={index} sx={{ mb: "20px", }}>
                                            <Typography variant="body1" sx={{ color: "text.primary", cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                                                • {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </S.TOCContainer>
                        </S.StickySidebar>
                    </Grid>
                </Grid>
            </PageContainer>
        </Box >
    );
};

export default BlogDetailContent;