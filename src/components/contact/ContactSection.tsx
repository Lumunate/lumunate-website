"use client";

import { Typography, MenuItem, Button } from "@mui/material";
import {
    ContactRoot,
    ContactForm,
    ContactTextField,
    VideoHeader,
    BackgroundVideo,
} from "./ContactSection.styles";

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
                        ml: 5,
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

            <Typography
                variant="h1"
                component="div"
                sx={{
                    width: "100%",
                    textAlign: "center",
                    mt: 0,
                    pb: 8,
                    fontWeight: 300,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(2rem, 7.3vw, 12rem)",
                    whiteSpace: "nowrap",
                    color: "#FFFFFF08",
                    bgcolor: "#0E0E0E",
                    letterSpacing: "0.05em",
                    filter: "blur(1px)",
                    userSelect: "none",
                    lineHeight: 1.2,
                }}
            >
                Explore. Engineer. Evolve.
            </Typography>


            {/* .... */}
            {/* After the Form, There will be a re-usable component (Ready/Ready.tsx) which is created by Zubair in the Homepage section and we will use here once his PR get merged.... */}
            {/* .... */}

        </>
    );
}
