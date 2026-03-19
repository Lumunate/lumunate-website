"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";
import { LogosRoot, LogoItem, LogosTrack } from "./LogosSection.styles";
import PageContainer from "../common/PageContainer";

interface Logo {
  src: string;
  label?: string;
}

interface LogosSectionProps {
  title?: string;
  logos?: Logo[];
}

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
  logos = DEFAULT_LOGOS,
}: LogosSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <LogosRoot suppressHydrationWarning>
      <PageContainer>
        {mounted ? (
          <>
            {title && (
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  textAlign: "start",
                  mb: 6,
                  fontWeight: 400,
                  color: "text.primary",
                }}
              >
                {title}
              </Typography>
            )}

            <LogosTrack>
              {[...logos, ...logos].map((logo, index) => (
                <LogoItem key={`${logo.src}-${index}`}>
                  <Image
                    src={logo.src}
                    alt={
                      logo.label
                        ? `${logo.label} partner logo`
                        : "Partner brand logo"
                    }
                    width={93}
                    height={93}
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </LogoItem>
              ))}
            </LogosTrack>
          </>
        ) : (
          /* Placeholder with the same height to avoid layout shift */
          <Box sx={{ height: title ? "200px" : "100px" }} />
        )}
      </PageContainer>
    </LogosRoot>
  );
}
