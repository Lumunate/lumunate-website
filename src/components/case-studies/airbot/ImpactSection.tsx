"use client";

import { Box } from "@mui/material";
import {
    SectionRoot,
    InnerContainer,
    RowGrid,
    TitleText,
    ListWrapper,
    ServicesWrapper,
    ServiceChip,
    ListItemStyled,
} from "./ImpactSection.styles";

type ImpactSectionProps = {
    impactTitle?: string;
    impactPoints: string[];
    servicesTitle?: string;
    services: string[];
};

export default function ImpactSection({
    impactTitle = "Impact",
    impactPoints,
    servicesTitle = "Services Provided",
    services,
}: ImpactSectionProps) {
    return (
        <SectionRoot>
            <InnerContainer maxWidth="xl">
                {/* Group 1: Impact */}
                <RowGrid>
                    <TitleText variant="h6">{impactTitle}</TitleText>
                    <Box
                        sx={{
                            pl: { xs: 0, md: 6, lg: 16 },
                        }}
                    >
                        <ListWrapper>
                            {impactPoints.map((point, idx) => (
                                <ListItemStyled key={idx}>{point}</ListItemStyled>
                            ))}
                        </ListWrapper>
                    </Box>
                </RowGrid>

                <RowGrid>
                    <TitleText variant="h6">{servicesTitle}</TitleText>
                    <Box
                        sx={{
                            pl: { xs: 0, md: 6, lg: 16 },
                        }}
                    >
                        <ServicesWrapper>
                            {services.map((service, idx) => (
                                <ServiceChip key={idx} label={service} />
                            ))}
                        </ServicesWrapper>
                    </Box>
                </RowGrid>

            </InnerContainer>
        </SectionRoot >
    );
}
