import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
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

export default function HeaderSection() {
    return (
        <HeaderRoot>
            {/* Background Image */}
            <SvgBg>
                <img src="/home-header.svg" alt="Background" />
            </SvgBg>

            {/* Content */}
            <ContentBox>
                {/* Left Side - Heading */}
                <LeftBox>
                    <StyledH1 variant="h1">Your digital evolution partner</StyledH1>
                </LeftBox>

                {/* Right Side - Text + Social Icons */}
                <RightBox>
                    <StyledParagraph variant="body1">
                        Transform ideas into scalable digital products that grow with your
                        business. From AI-powered platforms to enterprise solutions, we're
                        the technology partner that turns vision into velocity.
                    </StyledParagraph>

                    <SocialStack>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon fontSize="large" sx={{ color: "#fff" }} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon fontSize="large" sx={{ color: "#fff" }} />
                        </a>
                    </SocialStack>
                </RightBox>
            </ContentBox>
        </HeaderRoot>
    );
}
