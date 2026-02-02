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
import PageContainer from "../common/PageContainer";

export default function Footer() {
    return (
        <FooterRoot>
            {/* <PageContainer> */}
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
                            <Image src="/icons/phone.svg" alt="Call" width={25} height={25} />
                        </IconButton>
                        <IconButton size="small" color="inherit" className="icon-item">
                            <Image src="/icons/mail.svg" alt="Mail" width={25} height={25} />
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
                                width={25}
                                height={25}
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
                                width={25}
                                height={25}
                            />
                        </IconButton>
                    </FooterIconBox>
                </FooterBottom>
            {/* </PageContainer> */}
        </FooterRoot>
    );
}
