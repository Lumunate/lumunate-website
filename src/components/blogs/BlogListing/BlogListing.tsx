"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Box, Typography, PaginationItem } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";
import * as S from "./BlogListing.styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CATEGORIES, BLOG_DATA } from "@/data/blogData";
import Link from "next/link";

const ITEMS_PER_PAGE = 6;

const BlogListing = () => {
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
        <S.BlogGridWrapper>
            <S.BlogNavBarContainer ref={navRef}>
                {CATEGORIES.map((cat) => (
                    <S.BlogNavItem
                        key={cat.tag}
                        className={activeCategory.tag === cat.tag ? "active" : ""}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        {cat.title}
                    </S.BlogNavItem>
                ))}
            </S.BlogNavBarContainer>

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
                    <Grid container spacing={4}>
                        {paginatedBlogs.map((blog, index) => (
                            <Grid key={`${blog.tag}-${index}`} size={{ xs: 12, sm: 6, md: 4 }}>
                                <S.BlogCard sx={{ padding: "16px" }}>
                                    <S.ImageWrapper sx={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px", mb: 2 }}>
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            priority={index < 3}
                                            style={{ objectFit: "cover", borderRadius: "8px" }}
                                        />
                                    </S.ImageWrapper>
                                    <S.ContentBox sx={{ p: 0 }}>
                                        <S.BlogTitle>{blog.title}</S.BlogTitle>
                                        <S.BlogDate>{blog.date}</S.BlogDate>

                                        <S.ReadNowLink>
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
                                        </S.ReadNowLink>
                                    </S.ContentBox>
                                </S.BlogCard>
                            </Grid>
                        ))}
                    </Grid>

                    {filteredBlogs.length === 0 && (
                        <Typography sx={{ color: 'text.secondary', textAlign: 'center', mt: 10, opacity: 0.6 }}>
                            No articles found in this category yet.
                        </Typography>
                    )}
                </Box>

                {totalPages > 1 && (
                    <S.StyledPagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        shape="rounded"
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{
                                    previous: () => (
                                        <Typography sx={{ mr: 1, color: 'text.secondary', fontSize: "14px", fontWeight: 500 }}>
                                            ← Prev
                                        </Typography>
                                    ),
                                    next: () => (
                                        <Typography sx={{ ml: 1, color: 'text.secondary', fontSize: "14px", fontWeight: 500 }}>
                                            Next →
                                        </Typography>
                                    )
                                }}
                                {...item}
                            />
                        )}
                    />
                )}
            </PageContainer>
        </S.BlogGridWrapper>
    );
};

export default BlogListing;