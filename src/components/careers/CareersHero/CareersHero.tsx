"use client";

import * as S from "./CareersHero.styles";
import PageContainer from "@/components/common/PageContainer";

export default function CareersHero() {
    return (
        <S.HeroRoot>
            {/* Background Video */}
            <S.VideoBackground
                autoPlay
                muted
                loop
                playsInline
                poster="/images/careers-fallback.jpg"
            >
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772569113/compressed_1_iwqivd.webm" type="video/mp4" />
            </S.VideoBackground>

            <S.Overlay />

            <PageContainer>
                <S.ContentWrapper>
                    <S.HeroTitle variant="h1">
                        Careers at Lumunate
                    </S.HeroTitle>
                    <S.HeroSubtitle>
                        We value thinking, not titles.
                    </S.HeroSubtitle>
                </S.ContentWrapper>
            </PageContainer>
        </S.HeroRoot>
    );
}