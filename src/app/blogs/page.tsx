
import Hero from '@/components/about/hero/Hero'
import BlogListing from '@/components/blogs/BlogListing/BlogListing'
import FeaturedBlogs from '@/components/blogs/FeaturedBlogs/FeaturedBlogs'
import ExploreSection from '@/components/home/explore/Explore'
import Ready from '@/components/home/ready/Ready'


const blogsPage = () => {
    return (
        <>
            <Hero
                title="The Commit Log"
                subtitle=""
                videoSrc="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772643969/3130284-hd_1920_1080_30fps_c1vxbo.webm"
                description="Fresh perspectives on tech, innovation, and the digital stories worth telling."
                descFontSize="16px"
            />

            <FeaturedBlogs />

            <BlogListing />

            <ExploreSection />

            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
            />

        </>
    )
}

export default blogsPage
