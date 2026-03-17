"use client";

import React, { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { BlogCard, BlogDate, BlogTitle, ContentBox, ImageWrapper, ReadNowLink } from "../BlogListing/BlogListing.styles";

interface Blog {
    slug: string;
    title: string;
    image?: string;
    tag?: string;
    date?: string | Date;
}

interface ReadSimilarBlogsProps {
    initialBlogs: Blog[];
    currentCategory?: string;
    currentSlug?: string;
}

const ReadSimilarBlogs = ({ initialBlogs = [], currentCategory, currentSlug }: ReadSimilarBlogsProps) => {
    const filteredBlogs = useMemo(() => {
        return initialBlogs
            .filter((blog) => !currentCategory || blog.tag === currentCategory)
            .filter((blog) => blog.slug !== currentSlug)
            .slice(0, 3);
    }, [initialBlogs, currentCategory, currentSlug]);

    if (filteredBlogs.length === 0) return null;

    return (
        <PageContainer>
            <Box sx={{ mt: { xs: "32px", lg: "80px" }, mb: 8 }}>
                <Typography sx={{ fontSize: { xs: "18px", md: "22px" }, fontWeight: 400, mb: "32px" }}>
                    Read Similar
                </Typography>

                <Grid container spacing={4}>
                    {filteredBlogs.map((blog) => (
                        <Grid key={blog.slug} size={{ xs: 12, sm: 6, md: 6, xl: 4 }}>
                            <BlogCard sx={{ padding: "16px" }}>
                                <ImageWrapper sx={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px", mb: 2 }}>
                                    <Image
                                        src={blog.image || '/fallback.jpg'}
                                        alt={blog.title ? `Featured image for blog: ${blog.title}` : "Lumunate blog post preview"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: "cover", borderRadius: "8px" }}
                                    />
                                </ImageWrapper>
                                <ContentBox sx={{ p: 0 }}>
                                    <BlogTitle>{blog.title}</BlogTitle>
                                    <BlogDate>
                                        {blog.date ? new Date(blog.date).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        }) : ""}
                                    </BlogDate>

                                    <ReadNowLink>
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none', gap: '4px' }}
                                        >
                                            Read Now <ArrowOutwardIcon sx={{ fontSize: '18px' }} />
                                        </Link>
                                    </ReadNowLink>
                                </ContentBox>
                            </BlogCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </PageContainer>
    );
};

export default ReadSimilarBlogs;