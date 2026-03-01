"use client";

import Grid from "@mui/material/Grid";
import { Typography, Stack, Box, useTheme } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import Image from "next/image";
import * as S from "./FeaturedBlogs.style";

const FeaturedBlogs = () => {
    const theme = useTheme();

    return (
        <S.BlogSectionWrapper>
            <PageContainer>
                <S.FeaturedTitle>Featured Blogs</S.FeaturedTitle>

                <Grid container spacing={0}>

                    {/* LEFT SIDE: Big Featured Image */}
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
                                <Typography sx={{ fontSize: { xs: "32px", md: "48px" }, lineHeight: 1.1, mb: { xs: "12px", md: "24px" } }}>
                                    Low-Code Platforms: Friend or Foe?
                                </Typography>
                                <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, color: theme.palette.section.desc }}>
                                    Sunday 19, Sept 2024
                                </Typography>
                            </Box>
                        </S.MainFeaturedCard>
                    </Grid>

                    {/* RIGHT SIDE */}
                    <Grid size={{ xs: 12, lg: 4.5 }}>
                        <Stack
                            direction={{ xs: "column", md: "row", lg: "column" }}
                            sx={{ height: "100%" }}
                        >
                            <Box sx={{
                                width: { xs: "100%", md: "50%", lg: "100%" },
                                display: "flex",
                                flexDirection: "column"
                            }}>

                                {/* Top small blog entries */}
                                {[
                                    {
                                        img: "/blogs/Ellipse-2.svg",
                                        title: "Why We Ditched Microservices And What We Use Instead",
                                    },
                                    {
                                        img: "/blogs/Ellipse-3.svg",
                                        title: "How We Ship Features Twice as Fast Without Burning Out",
                                    },
                                ].map((blog, index) => (
                                    <S.SmallBlogBox key={index}>
                                        <S.OverlappingThumb>
                                            <Image src={blog.img} alt="thumb" fill />
                                        </S.OverlappingThumb>

                                        <Box
                                            sx={{
                                                ml: { xs: "16px", md: "16px", lg: "80px" },
                                                flex: 1
                                            }}
                                        >
                                            <Typography sx={{ fontSize: { xs: "16px", lg: "22px" }, mb: "8px", lineHeight: 1.3, fontWeight: 500 }}>
                                                {blog.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, color: theme.palette.section.desc }}>
                                                Sunday 19, Sept 2024
                                            </Typography>
                                        </Box>
                                    </S.SmallBlogBox>
                                ))}
                            </Box>

                            {/* Bottom-right card */}
                            <S.BottomFeaturedCard>
                                <Image
                                    src="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183483/f235c98380f5332377a7aabb7104774362324a7d_cupt9s.webp"
                                    alt="Building Tech Team"
                                    fill
                                    style={{ objectFit: "cover", zIndex: 0, opacity: 0.5 }}
                                />
                                <S.CardOverlaySolid />

                                <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
                                    <S.RoleTag label="Development" />
                                    <Typography sx={{ fontSize: { xs: "32px", lg: "40px" }, mb: "16px", lineHeight: 1.2, fontWeight: 600 }}>
                                        Building a Tech Team That Actually Stays
                                    </Typography>
                                    <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, color: theme.palette.section.desc }}>
                                        Sunday 19, Sept 2024
                                    </Typography>
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