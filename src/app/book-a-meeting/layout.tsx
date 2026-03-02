// app/book-a-meeting/layout.tsx
import { Box } from "@mui/material";
import ExploreSection from "@/components/home/explore/Explore";
import Ready from "@/components/home/ready/Ready";

export default function BookingLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ bgcolor: "background.default" }}>
            <Box sx={{ minHeight: "80vh", pt: { xs: 12, md: 15 }, pb: 10 }}>
                {children}
            </Box>
            <ExploreSection />
            <Ready
                title="Ready to Build What's Next?"
                description="Let's build something amazing together."
                linkText="Let's Connect"
                linkHref="/contact"
            />
        </Box>
    );
}