"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Snackbar,
    Alert,
    Typography,
    Button,
    MenuItem,
    useTheme,
    Box,
} from "@mui/material";
import {
    ContactRoot,
    ContactForm,
    ContactTextField,
    VideoHeader,
    BackgroundVideo,
} from "./ContactSection.styles";
import Ready from "../home/ready/Ready";
import ExploreSection from "../home/explore/Explore";
import { z } from "zod";

const contactSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    phone: z
        .string()
        .min(7, "Phone number is too short")
        .regex(/^[0-9+\-()\s]*$/, "Invalid phone number format"),
    interest: z.string().nonempty("Please select your interest"),
    budget: z.string().nonempty("Please select your budget"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { email: "", phone: "", interest: "", budget: "" },
    });

    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        type: "success" | "error";
        message: string;
    }>({
        open: false,
        type: "success",
        message: "",
    });

    const onSubmit = (data: ContactFormData) => {
        console.log("Form Submitted ✅:", data);
        setSnackbar({
            open: true,
            type: "success",
            message: "Your form has been submitted successfully!",
        });
        reset();
    };

    const onError = () => {
        setSnackbar({
            open: true,
            type: "error",
            message: "Please fix the errors before submitting.",
        });
    };

    return (
        <>
            {/* Background Video */}
            <VideoHeader>
                <BackgroundVideo autoPlay muted loop playsInline>
                    <source src="/contact-page-video.mp4" type="video/mp4" />
                </BackgroundVideo>
            </VideoHeader>

            {/* Contact Form Section */}
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

                <ContactForm onSubmit={handleSubmit(onSubmit, onError)}>
                    {/* Email */}
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <ContactTextField
                                {...field}
                                label="Your Email"
                                type="email"
                                placeholder="you@email.com"
                                fullWidth
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        )}
                    />

                    {/* Phone */}
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <ContactTextField
                                {...field}
                                label="Your Phone"
                                type="tel"
                                placeholder="123-456-7890"
                                fullWidth
                                error={!!errors.phone}
                                helperText={errors.phone?.message}
                            />
                        )}
                    />

                    {/* Interest */}
                    <Controller
                        name="interest"
                        control={control}
                        render={({ field }) => (
                            <ContactTextField
                                {...field}
                                select
                                label="I’m interested in..."
                                fullWidth
                                error={!!errors.interest}
                                helperText={errors.interest?.message}
                            >
                                <MenuItem value="">– Select –</MenuItem>
                                {interests.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </ContactTextField>
                        )}
                    />

                    {/* Budget */}
                    <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                            <ContactTextField
                                {...field}
                                select
                                label="Your Budget"
                                fullWidth
                                error={!!errors.budget}
                                helperText={errors.budget?.message}
                            >
                                <MenuItem value="">– Select –</MenuItem>
                                {budgets.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </ContactTextField>
                        )}
                    />

                    {/* Submit Button */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            sx={{
                                mt: 4,
                                px: 3,
                                py: 1.7,
                                minWidth: "160px",
                                bgcolor: theme.palette.success.main,
                                textTransform: "none",
                                fontWeight: 600,
                                borderRadius: "12px",
                                "&:hover": { bgcolor: theme.palette.success.dark },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </ContactForm>
            </ContactRoot>

            {/* Snackbar (Toast) */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    severity={snackbar.type}
                    variant="filled"
                    sx={{ width: "100%", fontSize: "16px" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

            {/* Other Sections */}
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
