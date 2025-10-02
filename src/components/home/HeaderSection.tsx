"use client";

import {
    HeaderRoot,
    SvgBg,
    ContentBox,
    LeftBox,
    StyledH1,
    RightBox,
    StyledParagraph,
    SocialStack,
} from "./HeaderSection.styles";
import { IconButton } from "@mui/material";
import Image from "next/image";
import useGsapAnimation from "@/hooks/useGsapAnimation";

export default function HeaderSection() {
    // GSAP hooks
    const titleRef = useGsapAnimation<HTMLHeadingElement>({
        direction: "zoomTopLeft",
        delay: 0.2,
        duration: 1.2,
    });

    const descRef = useGsapAnimation<HTMLParagraphElement>({
        direction: "zoomTopRight",
        delay: 0.5,
        duration: 1.2,
    });

    // apply same animation style as desc
    const socialRef = useGsapAnimation<HTMLDivElement>({
        direction: "zoomTopRight", 
        delay: 0.9,
        duration: 1.2,
    });


    return (
        <HeaderRoot>
            <SvgBg>
                <video src="/home-header-video.mp4" autoPlay loop muted playsInline />
            </SvgBg>

            <ContentBox>
                <LeftBox>
                    <StyledH1 ref={titleRef} variant="h1">
                        Your digital evolution partner
                    </StyledH1>
                </LeftBox>

                <RightBox>
                    <StyledParagraph ref={descRef} variant="body1">
                        Transform ideas into scalable digital products that grow with your
                        business. From AI-powered platforms to enterprise solutions, we&apos;re
                        the technology partner that turns vision into velocity.
                    </StyledParagraph>

                    <SocialStack ref={socialRef}>
                        <IconButton
                            size="small"
                            color="inherit"
                            href="https://www.instagram.com/company/lumunate/"
                            target="_blank"
                            className="icon-item"
                        >
                            <Image
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={20}
                                height={20}
                            />
                        </IconButton>
                        <IconButton
                            size="small"
                            color="inherit"
                            href="https://www.linkedin.com/company/lumunate/"
                            target="_blank"
                            className="icon-item"
                        >
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={20}
                                height={20}
                            />
                        </IconButton>
                    </SocialStack>

                </RightBox>
            </ContentBox>
        </HeaderRoot>
    );
}
