"use client";

import * as S from "./CareerPath.styles";
import { Box } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import DiscoverButton from "@/components/ui/DiscoverButton";

export default function CareerPath() {
    return (
        <S.SectionRoot>
            <PageContainer>
                <S.StackContainer>
                    <S.Title variant="h2">
                        Build Your Career path with us
                    </S.Title>

                    <S.Subtitle>
                        We offer remote and on-site opportunities in design and development,
                        open to talent across the country. If you value ownership and impact,
                        you’ll feel at home here.
                    </S.Subtitle>

                    <S.ActionAndVideoArea>
                        <Box sx={{ flexShrink: 0 }}>
                            <DiscoverButton sx={{ fontSize: { xs: "14px", lg: "16px" } }}>
                                Browse Opportunities
                            </DiscoverButton>
                        </Box>

                        <S.VideoWrapper>
                            <S.CareerVideo autoPlay muted loop playsInline>
                                <source
                                    src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772513859/14523606_1920_1080_30fps_usaody.webm"
                                    type="video/mp4"
                                />
                            </S.CareerVideo>
                            <S.VideoOverlay />
                        </S.VideoWrapper>
                    </S.ActionAndVideoArea>
                </S.StackContainer>
            </PageContainer>
        </S.SectionRoot>
    );
}