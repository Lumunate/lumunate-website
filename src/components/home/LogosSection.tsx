"use client";

import Image from "next/image";
import { Typography, Box } from "@mui/material";
import {
    LogosRoot,
    LogoItem,
    LogosTrack,
} from "./LogosSection.styles";
import PageContainer from "../common/PageContainer";

interface Logo {
    src: string;
    label?: string;
}

interface LogosSectionProps {
    title?: string;
    logos?: Logo[];
}

// Default logos for the homepage 
const DEFAULT_LOGOS: Logo[] = [
    { src: "/logos/nextjs.svg", label: "" },
    { src: "/logos/reactjs.svg", label: "" },
    { src: "/logos/tailwindcss.svg", label: "" },
    { src: "/logos/aws.svg", label: "" },
    { src: "/logos/angularjs.svg", label: "" },
    { src: "/logos/astro.svg", label: "" },
    { src: "/logos/alpinejs.svg", label: "" },
    { src: "/logos/vuejs.svg", label: "" },
];

export default function LogosSection({
    title,
    logos = DEFAULT_LOGOS
}: LogosSectionProps) {
    return (
        <LogosRoot>
            <PageContainer>
                {/* Optional Title */}
                {title && (
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: 'start',
                            mb: 6,
                            fontWeight: 400,
                            color: 'text.primary'
                        }}
                    >
                        {title}
                    </Typography>
                )}

                <LogosTrack>
                    {/* Double the logos for a seamless infinite scroll loop */}
                    {[...logos, ...logos].map((logo, index) => (
                        <LogoItem key={`${logo.src}-${index}`}>
                            <Image
                                src={logo.src}
                                alt={logo.label || "logo"}
                                width={93}
                                height={93}
                                style={{ objectFit: "contain" }}
                            />
                        </LogoItem>
                    ))}
                </LogosTrack>
            </PageContainer>
        </LogosRoot>
    );
}