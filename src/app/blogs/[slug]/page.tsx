
import BlogDetailContent from '@/components/blogs/BlogDetailContent/BlogDetailContent'
import BlogDetailsHero from '@/components/blogs/BlogDetailsHero/BlogDetailsHero'
import ReadSimilarBlogs from '@/components/blogs/ReadSimilar/ReadSimilar'
import ExploreSection from '@/components/home/explore/Explore'
import Ready from '@/components/home/ready/Ready'
import { client } from '@/sanity/lib/client'
import { Box } from '@mui/material'


export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    //  Await the params object
    const { slug } = await params;

    const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        "date": publishedAt,
        "image": mainImage.asset->url,
        "tag": category
    }`;

    const allBlogs = await client.fetch(query);

    //  Used the awaited slug
    const currentBlog = allBlogs.find((b: any) => b.slug === slug);

    if (!currentBlog) {
        return (
            <Box style={{ padding: '100px', textAlign: 'center' }}>
                <h1>Blog not found</h1>
                <p>Slug searched: {slug}</p>
            </Box>
        );
    }

    return (
        <>
            <BlogDetailsHero
                imgSrc={currentBlog.image || "/fallback-hero.jpg"}
                title={currentBlog.title}
            />

            <BlogDetailContent />

            <ReadSimilarBlogs
                initialBlogs={allBlogs}
                currentCategory={currentBlog?.tag}
                currentSlug={slug}
            />

            <ExploreSection />

            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
            />
        </>
    );
}
