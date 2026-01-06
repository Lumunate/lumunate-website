"use client";

import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

export default function Logo() {
    return (
        <Box
            component={Link}
            href="/"
            aria-label="Lumunate"
            sx={{
                display: "inline-flex",
                flexShrink: 0,         
                alignItems: "center",  
                textDecoration: "none",
            }}
        >
            <Image
                src="/lumunate-logo.svg"
                alt="Lumunate Portfolio - Logo"
                width={150}
                height={62}
                priority
            />
        </Box>
    );
}
