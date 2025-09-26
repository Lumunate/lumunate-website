"use client";

import {
    SectionRoot,
    InnerContainer,
    RowGrid,
    TitleText,
    ListWrapper,
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
        <SectionRoot as="section">

            <InnerContainer maxWidth="lg">
                {/* Group 1: Impact */}
                <RowGrid>
                    <TitleText variant="h6">{impactTitle}</TitleText>
                    <ListWrapper>
                        {impactPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ListWrapper>
                </RowGrid>

                {/* Group 2: Services Provided */}
                <RowGrid>
                    <TitleText variant="h6">{servicesTitle}</TitleText>
                    <ServicesWrapper>
                        {services.map((service, idx) => (
                            <ServiceChip key={idx} label={service} />
                        ))}
                    </ServicesWrapper>
                </RowGrid>
            </InnerContainer>
        </SectionRoot>
    );
}
