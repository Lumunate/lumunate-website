"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";
import {
    HeaderRoot,
    BackgroundVideo,
    HeaderContent,
    HeaderLeft,
    Title,
    SubTitle,
} from "./servicesHero.styles";
import PageContainer from "@/components/common/PageContainer";

type MetaSimple = { label: string; value: ReactNode };
type MetaGroupItem = { label?: string; value: ReactNode };
type MetaGroup = { label: string; items: MetaGroupItem[] };
type Meta = MetaSimple | MetaGroup;

type Background =
    | { kind: "video"; src: string; type?: string; poster?: string; autoPlay?: boolean; loop?: boolean; muted?: boolean }
    | { kind: "image"; src: string; alt?: string };

export interface ServicesHeroProps {
    background: Background;
    title: string;
    subtitle?: string;
    description?: ReactNode;
    metaItems?: Meta[];
    metaColumnGap?: string;
    overlayOpacity?: number;
    rightMaxWidth?: number | string;
}


export default function ServicesHero({
    title,
    subtitle,
    overlayOpacity = 0.4,
}: ServicesHeroProps) {
    return (
        <HeaderRoot>
            <BackgroundVideo
                key="services-video"
                component="video"
                src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1771226276/Hero_Bg_Video_tfkir2.webm"
                autoPlay
                muted
                loop
                playsInline
            />

            <HeaderContent overlayopacity={overlayOpacity}>
                <PageContainer>
                    <Box
                        sx={(theme) => ({
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",

                            gap: { xs: theme.spacing(3), md: theme.spacing(6), lg: "200px", xl: "298px" },

                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                gap: theme.spacing(3),
                            },
                            [theme.breakpoints.down("sm")]: {
                                alignItems: "flex-start",
                                textAlign: "left",
                            },
                        })}
                    >
                        <HeaderLeft>
                            <Title>{title}</Title>
                            {subtitle && <SubTitle>{subtitle}</SubTitle>}
                        </HeaderLeft>

                    </Box>
                </PageContainer>
            </HeaderContent>
        </HeaderRoot>
    );
}
