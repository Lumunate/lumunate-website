"use client";

import {
    Box,
    Typography,
    Avatar,
    Stack,
} from "@mui/material";
import * as S from "./CEOSection.styles";
import PageContainer from "@/components/common/PageContainer";
import DiscoverButton from "@/components/ui/DiscoverButton";

const CEOSection = () => {
    return (
        <S.SectionWrapper>
            <S.VideoBackground autoPlay muted loop playsInline>
                <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1772440694/16296848-hd_1920_1080_24fps_vp2tgd.webm" type="video/mp4" />
            </S.VideoBackground>

            <S.Overlay />

            <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
                <PageContainer>
                    <Typography
                        variant="h1"
                        align="center"
                        sx={{
                            fontSize: { xs: "30px", md: "48px", lg: "60px" },
                            fontWeight: 400,
                            mb: { xs: "20px", md: "80px" },
                            color: "text.primary",
                            ml: { md: "50px" },
                        }}
                    >
                        Hello from the CEO
                    </Typography>

                    <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={{ xs: "20px", md: "40px" }}
                            alignItems={{ xs: "center", md: "flex-start" }}
                            justifyContent="center"
                        >
                            <Avatar
                                src="/ceo-img.svg"
                                alt="Saad Javaid"
                                sx={{
                                    width: 100,
                                    height: 100,
                                }}
                            />

                            <Stack spacing="20px" sx={{ flex: 1, width: "100%" }}>
                                {/* Box 1 */}
                                <S.MessageCard>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: { xs: "16px", md: "18px", lg: "22px" },
                                            color: "text.primary",
                                            lineHeight: 1.4
                                        }}
                                    >
                                        Hello 👋, <br />
                                        I am Saad Javaid, CEO of Lumunate.
                                    </Typography>
                                </S.MessageCard>

                                {/* Box 2 */}
                                <S.MessageCard>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: { xs: "16px", md: "18px", lg: "22px" }, color: "text.primary" }}
                                    >
                                        Whether you have a clear brief or just questions, a short call can bring clarity. Pick a time that works for you.
                                    </Typography>
                                </S.MessageCard>

                                {/* Box 3 */}
                                <S.MessageCard>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: { xs: "16px", md: "18px", lg: "22px" }, color: "text.primary" }}
                                    >
                                        Looking forward to hear from you!
                                    </Typography>
                                </S.MessageCard>

                                <Box
                                    sx={{
                                        pt: { xs: "0px", md: "20px" },
                                        display: "flex",
                                        justifyContent: { xs: "center", md: "flex-start" },
                                        width: "100%"
                                    }}
                                >
                                    <DiscoverButton
                                        variant="contained"
                                        href="/book-a-meeting"
                                    >
                                        Book a Slot
                                    </DiscoverButton>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </PageContainer>
            </Box>
        </S.SectionWrapper>
    );
};

export default CEOSection;