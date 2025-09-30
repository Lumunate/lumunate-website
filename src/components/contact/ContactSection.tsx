"use client";

import { Typography, MenuItem, Button, Box } from "@mui/material";
import {
    ContactRoot,
    ContactForm,
    ContactTextField,
    VideoHeader,
    BackgroundVideo,
} from "./ContactSection.styles";
import Ready from "../home/ready/Ready";
import { Explore } from "../case-studies/Explore.styles";

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
                        ml: 12,
                    }}
                >
                    Get in Touch
                </Typography>

                <ContactForm onSubmit={(e) => e.preventDefault()}>
                    {/* Email */}
                    <ContactTextField
                        label="Your Email"
                        type="email"
                        placeholder="you@email.com"
                        fullWidth
                    />

                    {/* Phone */}
                    <ContactTextField
                        label="Your Phone"
                        type="tel"
                        placeholder="123-456-7890"
                        fullWidth
                    />

                    {/* Interested */}
                    <ContactTextField
                        select
                        label="I’m interested in..."
                        defaultValue=""
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    sx: {
                                        bgcolor: "#0E0E0E",
                                        color: "#AAAAAA",
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


                    {/* Budget */}
                    <ContactTextField
                        select
                        label="Your Budget"
                        defaultValue=""
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                                PaperProps: {
                                    sx: {
                                        bgcolor: "#0E0E0E",
                                        color: "#AAAAAA",
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
                        bgcolor: "#015B3F",
                        textTransform: "none",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "#333" },
                    }}
                >
                    Submit
                </Button>

            </ContactRoot>

            <Box component="section">
                <Explore variant="h1">
                    Explore. Engineer. Evolve.
                </Explore>
            </Box>


            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
                linkText="Let's Connect"
                linkHref="/contact"
            />


        </>
    );
}
