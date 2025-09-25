"use client";

import { Box } from "@mui/material";
import DiscoverButton from "../ui/DiscoverButton";
import {
    WorkflowCardRoot,
    CardLeft,
    CardRight,
    TopText,
    Title,
    Description,
    WorkflowVideo,
} from "./WorkflowCard.styles";

interface WorkflowCardProps {
    activeSection: {
        tag: string;
        title: string;
        description: string;
        video: string;
        buttonText: string;
    } | null;
}

export default function WorkflowCard({ activeSection }: WorkflowCardProps) {
    if (!activeSection) return null;

    return (
        <WorkflowCardRoot>
            <CardLeft>
                <Box>
                    <TopText variant="h6">{activeSection.tag}</TopText>
                    <Title variant="h4">{activeSection.title}</Title>
                    <Description>{activeSection.description}</Description>
                </Box>
                <DiscoverButton>{activeSection.buttonText}</DiscoverButton>
            </CardLeft>

            <CardRight>
                <WorkflowVideo
                    key={activeSection.video}
                    src={activeSection.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </CardRight>
        </WorkflowCardRoot>
    );
}
