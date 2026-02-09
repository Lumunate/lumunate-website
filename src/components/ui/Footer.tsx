"use client";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import {
    FooterRoot,
    FooterTop,
    FooterNavItem,
    FooterBottom,
    FooterSection,
    FooterText,
    FooterSpacer,
} from "./Footer.styles";

export default function Footer() {
    return (
        <FooterRoot>
            <FooterTop>
                {/* Left nav */}
                <Box sx={{ display: "flex", height: "100%" }}>
                    <FooterSpacer />
                    <FooterNavItem href="/terms">Terms & Services</FooterNavItem>
                </Box>

                {/* Icons */}
                <FooterSection>
                    <FooterSpacer variant="icon" />

                    <IconButton
                        disableRipple
                        disableFocusRipple
                        className="icon-item"
                        component="a"
                        href="tel:+923310200888"
                    >
                        <Image src="/icons/phone.svg" alt="Call" width={20} height={20} />
                    </IconButton>

                    <FooterSpacer variant="icon" />

                    <IconButton
                        disableRipple
                        disableFocusRipple
                        className="icon-item"
                        component="a"
                        href="mailto:info@lumunate.com"
                    >
                        <Image src="/icons/mail.svg" alt="Mail" width={20} height={20} />
                    </IconButton>

                    <FooterSpacer variant="icon" />

                    <IconButton
                        disableRipple
                        disableFocusRipple
                        className="icon-item"
                        component="a"
                        href="https://www.linkedin.com/company/lumunate/"
                        target="_blank"
                    >
                        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
                    </IconButton>
                </FooterSection>

                {/* Right nav */}
                <Box sx={{ display: "flex", height: "100%" }}>
                    <FooterSpacer />
                    <FooterNavItem href="/privacy-policy">Privacy Policy</FooterNavItem>
                    <FooterSpacer />
                </Box>
            </FooterTop>

            <FooterBottom>
                <FooterText>
                    LUMUNATE © {new Date().getFullYear()} All rights reserved
                </FooterText>
            </FooterBottom>
        </FooterRoot>
    );
}
