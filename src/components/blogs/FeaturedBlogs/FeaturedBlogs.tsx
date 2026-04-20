"use client";

import Grid from "@mui/material/Grid";
import { Typography, Stack, Box, useTheme } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import Image from "next/image";
import * as S from "./FeaturedBlogs.style";
import Link from "next/link";

//  Types 
interface BlogPost {
    slug: string;
    title: string;
    image?: string;
    tag?: string;
    date?: string | Date;
}

interface FeaturedBlogsProps {
    posts: BlogPost[];
}

interface ReadNowButtonProps {
    slug: string;
    fontSize?: string;
    isCentered?: boolean;
    mt?: string;
}

//  Stable Component 
const ReadNowButton = ({ slug, fontSize = "14px", isCentered = false, mt = "10px" }: ReadNowButtonProps) => {
    return (
        <Link href={`/blogs/${slug}`} style={{ textDecoration: 'none', width: isCentered ? "auto" : "100%" }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={isCentered ? "center" : "flex-start"}
                spacing={1}
                sx={{ mt: mt, cursor: "pointer", "&:hover": { opacity: 0.8 } }}
            >
                <Typography sx={{ fontSize: fontSize, fontWeight: 500, color: 'text.primary' }}>
                    Read Now
                </Typography>
                <Box
                    sx={{
                        width: 16,
                        height: 16,
                        position: "relative",

                        "& img": {
                            filter: (theme) => theme.palette.mode === 'light'
                                ? "brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)"
                                : "none",
                        }
                    }}
                >
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
};

//  Main Component 
const FeaturedBlogs = ({ posts = [] }: FeaturedBlogsProps) => {
    const theme = useTheme();

    if (posts.length === 0) return null;

    const mainPost = posts[0];
    const sidePosts = posts.slice(1, 3);
    const bottomPost = posts[3];

    const formatDate = (dateStr?: string | Date) =>
        dateStr ? new Date(dateStr).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : "";

    return (
        <S.BlogSectionWrapper>
            <PageContainer>
                <S.FeaturedTitle>Featured Blogs</S.FeaturedTitle>
                <Grid container spacing={0}>
                    {/* MAIN FEATURED */}
                    <Grid size={{ xs: 12, lg: 7.5 }}>
                        <S.MainFeaturedCard>
                            <Image
                                src={mainPost?.image || "/fallback.jpg"}
                                alt={mainPost?.title}
                                fill
                                priority
                                style={{ objectFit: "cover", zIndex: 0, opacity: 0.5 }}
                            />
                            <S.CardOverlay />
                            <Box sx={{ position: "relative", zIndex: 2 }}>
                                <S.RoleTag label={mainPost?.tag || "General"} />
                                <Typography sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: 400, lineHeight: 1.1, mb: "12px" }}>
                                    {mainPost?.title}
                                </Typography>
                                <Typography sx={{ fontSize: "16px", color: theme.palette.section.desc }}>
                                    {formatDate(mainPost?.date)}
                                </Typography>
                                <ReadNowButton mt="24px" slug={mainPost?.slug} />
                            </Box>
                        </S.MainFeaturedCard>
                    </Grid>

                    {/* SIDE & BOTTOM SECTION */}
                    <Grid size={{ xs: 12, lg: 4.5 }}>
                        <Stack direction={{ xs: "column", md: "row", lg: "column" }} sx={{ height: "100%" }}>
                            <Box sx={{ width: { xs: "100%", md: "50%", lg: "100%" }, display: "flex", flexDirection: "column" }}>
                                {sidePosts.map((blog) => (
                                    <S.SmallBlogBox key={blog.slug}>
                                        <S.OverlappingThumb>
                                            <Image src={blog.image || "/fallback.jpg"} alt={blog.title} fill style={{ objectFit: 'cover', borderRadius: '50%' }} />
                                        </S.OverlappingThumb>
                                        <Box sx={{ ml: { xs: "16px", lg: "80px" }, flex: 1 }}>
                                            <Typography sx={{ fontSize: "18px", mb: "4px", fontWeight: 500 }}>
                                                {blog.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: theme.palette.section.desc }}>
                                                {formatDate(blog.date)}
                                            </Typography>
                                            <ReadNowButton slug={blog.slug} />
                                        </Box>
                                    </S.SmallBlogBox>
                                ))}
                            </Box>

                            {bottomPost && (
                                <S.BottomFeaturedCard>
                                    <Image src={bottomPost.image || "/fallback.jpg"} alt={bottomPost.title} fill style={{ objectFit: "cover", zIndex: 0, opacity: 0.5 }} />
                                    <S.CardOverlaySolid />
                                    <Box sx={{ position: "relative", zIndex: 2, px: 2, textAlign: 'center' }}>
                                        <S.RoleTag label={bottomPost.tag || "Insight"} />
                                        <Typography sx={{ fontSize: "24px", mb: "16px", fontWeight: 400 }}>
                                            {bottomPost.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: "16px", color: theme.palette.section.desc }}>
                                            {formatDate(bottomPost.date)}
                                        </Typography>
                                        <ReadNowButton isCentered slug={bottomPost.slug} />
                                    </Box>
                                </S.BottomFeaturedCard>
                            )}
                        </Stack>
                    </Grid>
                </Grid>
            </PageContainer>
        </S.BlogSectionWrapper>
    );
};

export default FeaturedBlogs;