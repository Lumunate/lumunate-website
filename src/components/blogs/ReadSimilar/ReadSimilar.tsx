"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Box, Typography, PaginationItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CATEGORIES, BLOG_DATA } from "@/data/blogData";
import Link from "next/link";
import { BlogCard, BlogDate, BlogTitle, ContentBox, ImageWrapper, ReadNowLink } from "../BlogListing/BlogListing.styles";

const ITEMS_PER_PAGE = 3;

const ReadSimilarBlogs = () => {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const navRef = useRef<HTMLDivElement>(null);
    const gridTopRef = useRef<HTMLDivElement>(null);

    const [hasInteracted, setHasInteracted] = useState(false);

    const filteredBlogs = useMemo(() => {
        if (activeCategory.tag === "all") return BLOG_DATA;
        return BLOG_DATA.filter((blog) => blog.tag === activeCategory.tag);
    }, [activeCategory]);

    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

    const paginatedBlogs = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredBlogs, currentPage]);

    useEffect(() => {
        if (!hasInteracted) return;

        const activeItem = navRef.current?.querySelector(".active") as HTMLElement;
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }

        if (gridTopRef.current) {
            gridTopRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, [activeCategory, currentPage, hasInteracted]);

    const handleCategoryClick = (cat: typeof CATEGORIES[0]) => {
        setHasInteracted(true);
        setCurrentPage(1);
        setActiveCategory(cat);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setHasInteracted(true);
        setCurrentPage(value);
    };

    return (

        <PageContainer>
            <Box
                ref={gridTopRef}
                sx={{
                    mt: { xs: "32px", lg: "80px" },
                    mb: 4,
                    minHeight: '500px',
                    scrollMarginTop: '100px'
                }}
            >
                <Typography sx={{ fontSize: { xs: "18px", md: "22px" }, fontWeight: 400, mb: "32px" }}>Read Similar</Typography>
                <Grid container spacing={4}>
                    {paginatedBlogs.map((blog, index) => (
                        <Grid key={`${blog.tag}-${index}`} size={{ xs: 12, sm: 6, md: 6, xl: 4 }}>
                            <BlogCard sx={{ padding: "16px" }}>
                                <ImageWrapper sx={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px", mb: 2 }}>
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        priority={index < 3}
                                        style={{ objectFit: "cover", borderRadius: "8px" }}
                                    />
                                </ImageWrapper>
                                <ContentBox sx={{ p: 0 }}>
                                    <BlogTitle>{blog.title}</BlogTitle>
                                    <BlogDate>{blog.date}</BlogDate>

                                    <ReadNowLink>
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'inherit',
                                                textDecoration: 'none',
                                                gap: '4px'
                                            }}
                                        >
                                            Read Now <ArrowOutwardIcon sx={{ fontSize: '18px' }} />
                                        </Link>
                                    </ReadNowLink>
                                </ContentBox>
                            </BlogCard>
                        </Grid>
                    ))}
                </Grid>

                {filteredBlogs.length === 0 && (
                    <Typography sx={{ color: 'text.secondary', textAlign: 'center', mt: 10, opacity: 0.6 }}>
                        No articles found in this category yet.
                    </Typography>
                )}
            </Box>


        </PageContainer>
    );
};

export default ReadSimilarBlogs;