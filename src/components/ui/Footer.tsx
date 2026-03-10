"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import {
    FooterRoot,
    FooterTop,
    FooterNavItem,
    FooterBottom,
    FooterText,
    FooterSpacer,
    IconWrapper,
    NoiseOverlay,
} from "./Footer.styles";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <FooterRoot>
            {/* MD/LG Screen View */}
            <Box sx={{
                display: { xs: "none", sm: "flex" },
                height: 56,
                borderBottom: "1px solid",
                borderColor: "divider",
            }}>
                <FooterSpacer sx={{ borderLeft: 'none' }} />
                <FooterNavItem href="/terms-&-conditions">Terms & Services</FooterNavItem>

                <Box sx={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    position: "relative",
                }}>
                    <NoiseOverlay />

                    <Box sx={{ display: "flex", zIndex: 1 }}>
                        <IconWrapper >
                            <a href="tel:+923310200888">
                                <IconWrapper>
                                    <Image src="/icons/phone.svg" alt="Call" width={20} height={20} />
                                </IconWrapper>
                            </a>
                        </IconWrapper>

                        <FooterSpacer size="small" />

                        <IconWrapper>
                            <a href="mailto:info@lumunate.com">
                                <IconWrapper>
                                    <Image src="/icons/mail.svg" alt="Mail" width={20} height={20} />
                                </IconWrapper>
                            </a>
                        </IconWrapper>

                        <FooterSpacer size="small" />

                        {/* LinkedIn Icon */}
                        <IconWrapper

                        ><a href="https://www.linkedin.com/company/lumunate/" target="_blank" rel="noopener noreferrer">
                                <IconWrapper>
                                    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                                </IconWrapper>
                            </a>
                        </IconWrapper>

                        <Box sx={{ borderLeft: (theme) => `1px solid ${theme.palette.divider}`, height: '100%' }} />
                    </Box>
                </Box>

                <FooterNavItem href="/privacy-policy" sx={{ borderLeft: 'none' }}>
                    Privacy Policy
                </FooterNavItem>
                <FooterSpacer />
            </Box>

            {/* SM Screen View */}
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <FooterTop sx={{ justifyContent: "space-around" }}>
                    <FooterNavItem href="/terms-&-conditions">Terms & Services</FooterNavItem>
                    <FooterNavItem href="/privacy-policy">Privacy Policy</FooterNavItem>
                </FooterTop>

                <Box
                    sx={{
                        display: "flex",
                        height: 56,
                        px: "32px",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                        justifyContent: "center",
                    }}
                >
                    <a href="tel:+923310200888" style={{ textDecoration: "none" }}>
                        <IconWrapper className="mobile-icon" sx={{ borderLeft: "none" }}>
                            <Image src="/icons/phone.svg" alt="Call" width={24} height={24} />
                        </IconWrapper>
                    </a>

                    <a href="mailto:info@lumunate.com" style={{ textDecoration: "none" }}>
                        <IconWrapper className="mobile-icon">
                            <Image src="/icons/mail.svg" alt="Mail" width={24} height={24} />
                        </IconWrapper>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/lumunate/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        <IconWrapper className="mobile-icon">
                            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                        </IconWrapper>
                    </a>
                </Box>
            </Box>

            <FooterBottom>
                <FooterText>
                    LUMUNATE © {year} All rights reserved
                </FooterText>
            </FooterBottom>
        </FooterRoot >
    );
}