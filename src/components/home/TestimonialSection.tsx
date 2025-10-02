"use client"
import StarIcon from "@mui/icons-material/Star";
import {
    TestimonialRoot,
    TestimonialContent,
    TestimonialHeading,
    TestimonialBox,
    StarsRow,
    TestimonialText,
    AuthorRow,
    AuthorAvatar,
    AuthorInfo,
    AuthorName,
    AuthorTitle,
} from "./TestimonialSection.styles";
import Image from "next/image";
import useGsapAnimation from "@/hooks/useGsapAnimation";

export default function TestimonialSection() {

      const headingRef = useGsapAnimation({ direction: "fade", delay: 0.5, duration:1 });
  const boxRef = useGsapAnimation({ direction: "fade", delay: 0.5, duration:1 });

    return (
        <TestimonialRoot>
            <TestimonialContent>
                <TestimonialHeading ref={headingRef} variant="h2">
                    Solutions crafted for your digital ambitions
                </TestimonialHeading>
                <TestimonialBox ref={boxRef}>
                    <StarsRow>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} sx={{ color: "#FFD600", fontSize: 24 }} />
                        ))}
                    </StarsRow>
                    <TestimonialText>
                        The team at Lumunate is simply the best. They do the best jobs as always and have brought our idea for Koinfolio to life. Will continue the work with them for sure!
                    </TestimonialText>
                    <AuthorRow>
                        <AuthorAvatar>
                            <Image src="/Ebrahim.png" alt="Ebrahim" width={48} height={48} style={{ borderRadius: '50%' }} />
                        </AuthorAvatar>
                        <AuthorInfo>
                            <AuthorName>Ebrahim</AuthorName>
                            <AuthorTitle>CEO, Koinfolio</AuthorTitle>
                        </AuthorInfo>
                    </AuthorRow>
                </TestimonialBox>
            </TestimonialContent>
        </TestimonialRoot>
    );
}