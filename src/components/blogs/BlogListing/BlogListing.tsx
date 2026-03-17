"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Box, Typography, PaginationItem, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PageContainer from "@/components/common/PageContainer";
import * as S from "./BlogListing.styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CATEGORIES } from "@/data/blogData";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Define a proper type for blogs
interface Blog {
    slug: string;
    title: string;
    tag: string;
    date: string;
    image?: string;
}

interface BlogListingProps {
    initialBlogs: Blog[];
}

const BlogListing = ({ initialBlogs = [] }: BlogListingProps) => {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const navRef = useRef<HTMLDivElement>(null);
    const gridTopRef = useRef<HTMLDivElement>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isVerySmallMobile = useMediaQuery("(max-width:350px)");

    const itemsPerPage = isMobile ? 3 : 6;

    // Safe effect: only update state if currentPage !== 1
    useEffect(() => {
        if (currentPage !== 1) {
            setCurrentPage(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);

    // Filtering logic
    const filteredBlogs = useMemo(() => {
        if (activeCategory.tag === "all") return initialBlogs;
        return initialBlogs.filter((blog) => blog.tag === activeCategory.tag);
    }, [activeCategory, initialBlogs]);

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

    const paginatedBlogs = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredBlogs.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredBlogs, currentPage, itemsPerPage]);

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
            <S.BlogNavBarContainer>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <PageContainer>
                        <Box
                            ref={navRef}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                overflowX: 'auto',
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': { display: 'none' }
                            }}
                        >
                            {CATEGORIES.map((cat) => (
                                <S.BlogNavItem
                                    key={cat.tag}
                                    className={activeCategory.tag === cat.tag ? "active" : ""}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {cat.title}
                                </S.BlogNavItem>
                            ))}
                        </Box>
                    </PageContainer>
                </Box>
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
                            <Grid key={`${blog.slug}-${index}`} size={{ xs: 12, sm: 6, md: 6, xl: 4 }}>
                                <S.BlogCard sx={{ padding: "16px" }}>
                                    <S.ImageWrapper sx={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px", mb: 2 }}>
                                        <Image
                                            src={blog.image || '/fallback.jpg'}
                                            alt={blog.title ? `Blog post: ${blog.title}` : "Lumunate blog post featured image"}
                                            fill
                                            priority={index < 3}
                                            style={{ objectFit: "cover", borderRadius: "8px" }}
                                        />
                                    </S.ImageWrapper>
                                    <S.ContentBox sx={{ p: 0 }}>
                                        <S.BlogTitle>{blog.title}</S.BlogTitle>
                                        <S.BlogDate>{new Date(blog.date).toLocaleDateString()}</S.BlogDate>

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
                        siblingCount={isVerySmallMobile ? 0 : 1}
                        boundaryCount={isVerySmallMobile ? 0 : 1}
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{
                                    previous: () => (
                                        <Typography sx={{ mr: 1, color: 'text.secondary', fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                                            <ArrowBackIcon sx={{ fontSize: "18px" }} /> Prev
                                        </Typography>
                                    ),
                                    next: () => (
                                        <Typography sx={{ ml: 1, color: 'text.secondary', fontSize: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                                            Next <ArrowForwardIcon sx={{ fontSize: "18px" }} />
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