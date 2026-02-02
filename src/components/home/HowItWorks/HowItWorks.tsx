"use client";

import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { AccordionDetails } from "@mui/material";

import {
    Section,
    Container,
    Title,
    FaqAccordion,
    FaqSummary,
    QuestionText,
    AnswerText,
    BottomRow,
    BottomText,
    TalkLink,
} from "./HowItWorks.styles";
import PageContainer from "@/components/common/PageContainer";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
    {
        q: "How long does a typical project take?",
        a: "Typically 2–6 weeks depending on scope and feedback cycles.",
    },
    {
        q: "What if our requirements aren’t fully defined yet?",
        a: "We can start with discovery to clarify goals, scope, and priorities.",
    },
    {
        q: "Will we have full ownership of the design and code?",
        a: "Yes—upon completion and final payment, everything is yours.",
    },
    {
        q: "How do you handle changes during the project?",
        a: "We track changes and adjust scope/timelines transparently before starting work.",
    },
    {
        q: "How often will we receive updates?",
        a: "You’ll get regular check-ins (usually 2–3 times per week), plus milestone demos.",
    },
    {
        q: "What happens if we’re not satisfied with the outcome?",
        a: "We iterate based on feedback until the agreed acceptance criteria are met.",
    },
];

export default function HowItWorks() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
            setExpanded(isExpanded ? panel : false);

    return (
        <Section>
            <PageContainer>
                <Container>
                    <Title>How It Works</Title>

                    {FAQS.map((item, idx) => {
                        const key = `panel-${idx}`;
                        return (
                            <FaqAccordion
                                key={key}
                                disableGutters
                                expanded={expanded === key}
                                onChange={handleChange(key)}
                            >
                                <FaqSummary expandIcon={<ExpandMoreIcon />}>
                                    <QuestionText>{item.q}</QuestionText>
                                </FaqSummary>

                                <AccordionDetails sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                    <AnswerText>{item.a}</AnswerText>
                                </AccordionDetails>
                            </FaqAccordion>
                        );
                    })}

                    <BottomRow>
                        <BottomText>
                            Couldn’t find what you were looking for?{" "}
                            <TalkLink href="/contact">
                                LET&apos;S TALK <ArrowOutwardIcon />
                            </TalkLink>
                        </BottomText>
                    </BottomRow>
                </Container>
            </PageContainer>
        </Section>
    );
}
