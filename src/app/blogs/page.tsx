import Hero from '@/components/about/hero/Hero'
import BlogListing from '@/components/blogs/BlogListing/BlogListing'
import FeaturedBlogs from '@/components/blogs/FeaturedBlogs/FeaturedBlogs'
import ExploreSection from '@/components/home/explore/Explore'
import Ready from '@/components/home/ready/Ready'
import { client } from "@/sanity/lib/client"

const blogsPage = async () => {
    // We fetch all posts for the listing, 
    // and a specific slice (latest 4) for the Featured section
    const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        "date": publishedAt,
        "image": mainImage.asset->url,
        "tag": category,
        description // Add description if you want to use it in the hero
    }`;

    const blogs = await client.fetch(query);

    // Pass the first 4 blogs to Featured, the rest (or all) to Listing
    const featuredData = blogs.slice(0, 4);

    return (
        <>
            <Hero
                title="The Commit Log"
                subtitle=""
                videoSrc="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772643969/3130284-hd_1920_1080_30fps_c1vxbo.webm"
                description="Fresh perspectives on tech, innovation, and the digital stories worth telling."
                descFontSize="16px"
            />

            <FeaturedBlogs posts={featuredData} />

            <BlogListing initialBlogs={blogs} />

            <ExploreSection />

            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
            />
        </>
    )
}

export default blogsPage