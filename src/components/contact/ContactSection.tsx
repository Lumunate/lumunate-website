"use client";

import { Typography, MenuItem, Button, useTheme } from "@mui/material";
import {
    ContactRoot,
    ContactForm,
    ContactTextField,
    VideoHeader,
    BackgroundVideo,
} from "./ContactSection.styles";
import Ready from "../home/ready/Ready";
import ExploreSection from "../home/explore/Explore";

const interests = [
    "Creative & UI/UX Design",
    "Mobile & Web Application",
    "AI/ML Solutions",
    "Web3 & Blockchain",
    "Enterprise Solutions",
    "Digital Marketing and Transformation",
    "Other",
];

const budgets = [
    "Less than $5,000",
    "$5,000 – $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
];

export default function ContactSection() {
    const theme = useTheme();

    return (
        <>
            <VideoHeader>
                <BackgroundVideo autoPlay muted loop playsInline>
                    <source src="/contact-page-video.mp4" type="video/mp4" />
                </BackgroundVideo>
            </VideoHeader>

            <ContactRoot>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontWeight: 400,
                        fontFamily: "Montserrat",
                        textAlign: "left",
                        alignSelf: "flex-start",
                        mb: 4,
                        ml: { xs: 2, md: 12 },
                        color: theme.palette.text.primary,
                    }}
                >
                    Get in Touch
                </Typography>

                <ContactForm onSubmit={(e) => e.preventDefault()}>
                    <ContactTextField
                        label="Your Email"
                        type="email"
                        placeholder="you@email.com"
                        fullWidth
                    />

                    <ContactTextField
                        label="Your Phone"
                        type="tel"
                        placeholder="123-456-7890"
                        fullWidth
                    />

                    <ContactTextField
                        select
                        label="I’m interested in..."
                        defaultValue=""
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    sx: {
                                        bgcolor: theme.palette.background.paper,
                                        color: theme.palette.text.secondary,
                                    },
                                },
                            },
                        }}
                    >
                        <MenuItem value="">– Select –</MenuItem>
                        {interests.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </ContactTextField>

                    <ContactTextField
                        select
                        label="Your Budget"
                        defaultValue=""
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    sx: {
                                        bgcolor: theme.palette.background.paper,
                                        color: theme.palette.text.secondary,
                                    },
                                },
                            },
                        }}
                    >
                        <MenuItem value="">– Select –</MenuItem>
                        {budgets.map((item) => (
                            <MenuItem key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </ContactTextField>
                </ContactForm>

                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{
                        mt: 4,
                        px: 4,
                        py: 1.5,
                        bgcolor: theme.palette.success.main,
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: theme.palette.success.dark },
                    }}
                >
                    Submit
                </Button>
            </ContactRoot>

            <ExploreSection />

            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
                linkText="Let's Connect"
                linkHref="/contact"
            />
        </>
    );
}
