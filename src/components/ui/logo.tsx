"use client";

import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

export default function Logo() {
    return (
        <Box
            component={Link}
            href="/"
            aria-label="Lumunate Home"
            sx={{
                display: "inline-flex",
                flexShrink: 0,
                alignItems: "center",
                textDecoration: "none",
                width: { xs: "150px", md: "259px" },
                height: "auto",
            }}
        >
            <Image
                src="/lumunate-logo.svg"
                alt=""
                width={259}
                height={85}
                priority
                fetchPriority="high"
            />
        </Box>
    );
}
