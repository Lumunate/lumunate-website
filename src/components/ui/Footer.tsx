"use client";
import { IconButton } from "@mui/material";
import Image from "next/image";

import {
    FooterRoot,
    FooterTop,
    FooterNavItem,
    FooterBottom,
    FooterSection,
    FooterText,
    FooterIconBox,
} from "./Footer.styles";

export default function Footer() {
    return (
        <FooterRoot>
            <FooterTop>
                <FooterNavItem href="/terms" className="left-item">
                    Terms & Services
                </FooterNavItem>
                <FooterNavItem href="/digital-transformation" className="right-item">
                    Digital Transformation
                </FooterNavItem>
            </FooterTop>

            <FooterBottom>
                <FooterSection className="left-icons">
                    <IconButton size="small" color="inherit" className="icon-item">
                        <Image src="/icons/phone.svg" alt="Call" width={20} height={20} />
                    </IconButton>
                    <IconButton size="small" color="inherit" className="icon-item">
                        <Image src="/icons/mail.svg" alt="Mail" width={20} height={20} />
                    </IconButton>
                </FooterSection>

                <FooterText>
                    LUMUNATE &copy; {new Date().getFullYear()} All rights reserved
                </FooterText>


                <FooterIconBox className="right-icons">
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
                </FooterIconBox>
            </FooterBottom>
        </FooterRoot>
    );
}
