"use client";

import { Box } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";
import {
    SectionRoot,
    RowFlex,
    TitleText,
    ContentRight,
    ListWrapper,
    ListItemStyled,
    ServicesWrapper,
    ServiceChip,
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
            <PageContainer>
                <RowFlex sx={{ marginBottom: "55px" }}>
                    <TitleText
                        sx={{
                            fontSize: { xs: "22px", md: "33px" },
                            fontWeight: 400,
                            flexShrink: 0,
                        }}
                    >
                        {impactTitle}
                    </TitleText>

                    <ContentRight>
                        <ListWrapper>
                            {impactPoints.map((point, idx) => (
                                <ListItemStyled key={idx}>{point}</ListItemStyled>
                            ))}
                        </ListWrapper>
                    </ContentRight>
                </RowFlex>

                <RowFlex sx={{ mb: 0 }}>
                    <TitleText
                        sx={{
                            fontSize: { xs: "22px", md: "33px" },
                            fontWeight: 400,
                            flexShrink: 0,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {servicesTitle}
                    </TitleText>

                    <ContentRight>
                        <ServicesWrapper>
                            {services.map((service, idx) => (
                                <ServiceChip key={idx} label={service} />
                            ))}
                        </ServicesWrapper>
                    </ContentRight>
                </RowFlex>
            </PageContainer>
        </SectionRoot>
    );
}
