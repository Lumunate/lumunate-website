"use client";

import Grid from "@mui/material/Grid";
import { Typography, Stack, Box, useTheme } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import Image from "next/image";
import * as S from "./FeaturedBlogs.style";
import Link from "next/link";

const FeaturedBlogs = () => {
    const theme = useTheme();

    const ReadNowButton = ({
        fontSize = "14px",
        isCentered = false,
        mt = "10px",
        slug = ""
    }) => (
        <Link href={`/blogs/${slug}`} style={{ textDecoration: 'none', width: isCentered ? "auto" : "100%" }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={isCentered ? "center" : "flex-start"}
                spacing={1}
                sx={{
                    mt: mt,
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 }
                }}
            >
                <Typography sx={{ fontSize: fontSize, fontWeight: 500, color: "#fff" }}>
                    Read Now
                </Typography>
                <Box sx={{ width: 16, height: 16, position: "relative" }}>
                    <Image
                        src="/blogs/arrow-up-right.svg"
                        alt="arrow"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </Box>
            </Stack>
        </Link>
    );

    return (
        <S.BlogSectionWrapper>
            <PageContainer>
                <S.FeaturedTitle>Featured Blogs</S.FeaturedTitle>

                <Grid container spacing={0}>
                    <Grid size={{ xs: 12, lg: 7.5 }}>
                        <S.MainFeaturedCard>
                            <Image
                                src="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183485/92c81bb55ef0ab2752eaf71d674e61be83a70a6e_11zon_d5ul6f.webp"
                                alt="Low Code Platforms"
                                fill
                                priority
                                style={{ objectFit: "cover", zIndex: 0, opacity: 0.5 }}
                            />
                            <S.CardOverlay />

                            <Box sx={{ position: "relative", zIndex: 2 }}>
                                <S.RoleTag label="Development" />
                                <Typography sx={{ fontSize: { xs: "32px", md: "32px" }, fontWeight: 400, lineHeight: 1.1, mb: { xs: "12px", md: "24px" } }}>
                                    Low-Code Platforms: Friend or Foe?
                                </Typography>
                                <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, color: theme.palette.section.desc }}>
                                    Sunday 19, Sept 2024
                                </Typography>
                                <ReadNowButton fontSize="14px" mt="24px" slug="low-code-platforms-friend-or-foe" />
                            </Box>
                        </S.MainFeaturedCard>
                    </Grid>

                    {/* RIGHT SIDE */}
                    <Grid size={{ xs: 12, lg: 4.5 }}>
                        <Stack direction={{ xs: "column", md: "row", lg: "column" }} sx={{ height: "100%" }}>
                            <Box sx={{ width: { xs: "100%", md: "50%", lg: "100%" }, display: "flex", flexDirection: "column" }}>

                                {[
                                    {
                                        img: "/blogs/Ellipse-2.svg",
                                        title: "Why We Ditched Microservices And What We Use Instead",
                                        slug: "why-we-ditched-microservices"
                                    },
                                    {
                                        img: "/blogs/Ellipse-3.svg",
                                        title: "How We Ship Features Twice as Fast Without Burning Out",
                                        slug: "how-we-ship-features-fast"
                                    },
                                ].map((blog, index) => (
                                    <S.SmallBlogBox key={index}>
                                        <S.OverlappingThumb>
                                            <Image src={blog.img} alt="thumb" fill />
                                        </S.OverlappingThumb>

                                        <Box sx={{ ml: { xs: "16px", lg: "80px" }, flex: 1 }}>
                                            <Typography sx={{ fontSize: { xs: "16px", lg: "18px" }, mb: "4px", lineHeight: 1.3, fontWeight: 500 }}>
                                                {blog.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: { xs: "14px", md: "18px" }, color: theme.palette.section.desc }}>
                                                Sunday 19, Sept 2024
                                            </Typography>
                                            <ReadNowButton fontSize="14px" slug={blog.slug} />
                                        </Box>
                                    </S.SmallBlogBox>
                                ))}
                            </Box>

                            <S.BottomFeaturedCard>
                                <Image
                                    src="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183483/f235c98380f5332377a7aabb7104774362324a7d_cupt9s.webp"
                                    alt="Building Tech Team"
                                    fill
                                    style={{ objectFit: "cover", zIndex: 0, opacity: 0.5 }}
                                />
                                <S.CardOverlaySolid />

                                <Box sx={{ position: "relative", zIndex: 2, px: 2, textAlign: 'center' }}>
                                    <S.RoleTag label="Development" />
                                    <Typography sx={{ fontSize: { xs: "32px", lg: "32px" }, mb: "16px", lineHeight: 1.2, fontWeight: 400 }}>
                                        Building a Tech Team That Actually Stays
                                    </Typography>
                                    <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, color: theme.palette.section.desc }}>
                                        Sunday 19, Sept 2024
                                    </Typography>
                                    <ReadNowButton isCentered fontSize="14px" mt="24px" slug="building-a-tech-team" />
                                </Box>
                            </S.BottomFeaturedCard>
                        </Stack>
                    </Grid>
                </Grid>
            </PageContainer>
        </S.BlogSectionWrapper>
    );
};

export default FeaturedBlogs;