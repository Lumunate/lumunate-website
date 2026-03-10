"use client";

import StarIcon from "@mui/icons-material/Star";
import {
    TestimonialRoot,
    TestimonialContent,
    TestimonialHeading,
    TestimonialBox,
    StarsRow,
    TestimonialText,
    AuthorRow,
    AuthorInfo,
    AuthorName,
    AuthorTitle,
} from "./TestimonialSection.styles";
import useGsapAnimation from "@/hooks/useGsapAnimation";
import PageContainer from "../common/PageContainer";
import { useTheme } from "@mui/material/styles";

export default function TestimonialSection() {
    const theme = useTheme();

    // Using GSAP-safe hook that internally uses gsap.context()
    const headingRef = useGsapAnimation({
        direction: "fade",
        delay: 0.4,
        duration: 1,
    });

    const boxRef = useGsapAnimation({
        direction: "bottom",
        delay: 0.6,
        duration: 1.2,
    });

    return (
        <TestimonialRoot>
            <PageContainer>
                <TestimonialContent>
                    <TestimonialHeading ref={headingRef}>
                        Solutions crafted for your digital ambitions
                    </TestimonialHeading>

                    <TestimonialBox ref={boxRef}>
                        <StarsRow>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon
                                    key={i}
                                    sx={{ color: theme.palette.section.star, fontSize: 24 }}
                                />
                            ))}
                        </StarsRow>

                        <TestimonialText>
                            The team at Lumunate is simply the best. They do the best jobs as always
                            and have brought our idea for Koinfolio to life. Will continue the work
                            with them for sure!
                        </TestimonialText>

                        <AuthorRow>
                            <AuthorInfo>
                                <AuthorName>{"// Ebrahim"}</AuthorName>
                                <AuthorTitle>CEO, Koinfolio</AuthorTitle>
                            </AuthorInfo>
                        </AuthorRow>
                    </TestimonialBox>
                </TestimonialContent>
            </PageContainer>
        </TestimonialRoot>
    );
}
