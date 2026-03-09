
import BlogDetailContent from '@/components/blogs/BlogDetailContent/BlogDetailContent'
import BlogDetailsHero from '@/components/blogs/BlogDetailsHero/BlogDetailsHero'
import ReadSimilarBlogs from '@/components/blogs/ReadSimilar/ReadSimilar'
import ExploreSection from '@/components/home/explore/Explore'
import Ready from '@/components/home/ready/Ready'

const blogsDetailPage = () => {
    return (
        <>
            <BlogDetailsHero imgSrc="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1772183485/92c81bb55ef0ab2752eaf71d674e61be83a70a6e_11zon_d5ul6f.webp" title="Low-Code Platforms: Friend or Foe?" />

            <BlogDetailContent />

            <ReadSimilarBlogs />

            <ExploreSection />

            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
            />

        </>
    )
}

export default blogsDetailPage
