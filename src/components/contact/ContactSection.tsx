"use client";

import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Snackbar, Alert, Typography, MenuItem, useTheme, Box, alpha } from "@mui/material";
import {
    VideoHeader,
    BackgroundVideo,
    HeroContent,
    ContactForm,
    ContactTextField,
    BottomBlur,
} from "./ContactSection.styles";
import { FullRow } from "./ContactSection.styles";

import Ready from "../home/ready/Ready";
import ExploreSection from "../home/explore/Explore";
import { z } from "zod";
import PageContainer from "../common/PageContainer";
import DiscoverButton from "../ui/DiscoverButton";
import { useEffect } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface ApiResponse {
    message?: string;
    [key: string]: unknown; // for any extra fields
}

/* Frontend schema (Zod) */
const contactSchema = z.object({
    email: z.string().trim().email("Please enter a valid email address"),
    phone: z
        .string()
        .trim()
        .min(7, "Phone number is too short")
        .regex(/^[0-9+\-()\s]*$/, "Invalid phone number format"),
    interest: z.string().nonempty("Please select your interest"),
    budget: z.string().nonempty("Please select your budget"),
    project: z
        .string()
        .trim()
        .max(500, "Project details must be under 500 characters")
        .optional()
        .or(z.literal("")),
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
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { email: "", phone: "", interest: "", budget: "", project: "" },
        mode: "onSubmit",
        reValidateMode: "onChange",
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

    const selectMenuProps = useMemo(
        () => ({
            disablePortal: false,
            disableScrollLock: true,
            PaperProps: {
                sx: {
                    mt: 0,
                    borderRadius: "12px",
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                    backgroundImage: "none",

                    "& .MuiMenuItem-root": {
                        fontSize: "14px",
                        fontFamily: "Montserrat, sans-serif",
                        color: theme.palette.section.muted,
                        padding: "12px 16px",

                        "&:hover": {
                            backgroundColor: alpha(theme.palette.text.primary, 0.08),
                        },
                        "&.Mui-selected": {
                            backgroundColor: alpha(theme.palette.text.primary, 0.12),
                        },
                        "&.Mui-selected:hover": {
                            backgroundColor: alpha(theme.palette.text.primary, 0.16),
                        },
                    },
                },
            },
        }),
        [theme]
    );

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Check content type
            const contentType = res.headers.get("content-type");
            let result: ApiResponse = {};

            if (contentType && contentType.includes("application/json")) {
                result = await res.json();
            } else {
                // For non-JSON responses (like HTML errors)
                const textError = await res.text();
                console.error("Non-JSON response received:", textError);
                throw new Error(`Server returned ${res.status}: ${res.statusText}`);
            }

            if (!res.ok) {
                // Use the API message if available
                throw new Error(result.message ?? `Submission failed with status ${res.status}`);
            }

            setSnackbar({
                open: true,
                type: "success",
                message: "Your form has been submitted successfully!",
            });
            reset(); // Clears the form
        } catch (error: unknown) {
            console.error("Form submission error:", error);

            let message = "Something went wrong. Please try again.";
            if (error instanceof Error) {
                message = error.message;
            }

            setSnackbar({
                open: true,
                type: "error",
                message,
            });
        }
    };

    const onError = () => {
        setSnackbar({
            open: true,
            type: "error",
            message: "Please fix the errors before submitting.",
        });
    };

    const [interestOpen, setInterestOpen] = useState(false);
    const [budgetOpen, setBudgetOpen] = useState(false);

    useEffect(() => {
        if (!interestOpen && !budgetOpen) return;

        const closeOnScroll = () => {
            setInterestOpen(false);
            setBudgetOpen(false);
        };

        window.addEventListener("scroll", closeOnScroll, true);
        return () => window.removeEventListener("scroll", closeOnScroll, true);
    }, [interestOpen, budgetOpen]);

    const renderSelectPlaceholder = (selected: unknown) => {
        const value = (selected ?? "") as string;

        if (!value) {
            return (
                <span
                    style={{
                        color: alpha(theme.palette.text.primary, 0.55),
                    }}
                >
                    --Select--
                </span>
            );
        }

        return value;
    };


    return (
        <>
            <VideoHeader>
                <BackgroundVideo autoPlay muted loop playsInline>
                    <source
                        src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770897842/Contact_Us_h2snzh.webm"
                        type="video/mp4"
                    />
                </BackgroundVideo>
                <BottomBlur />
                <HeroContent>
                    <PageContainer>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 400,
                                fontFamily: "Montserrat",
                                textAlign: "left",
                                color: theme.palette.text.primary,
                                mb: { xs: "40px", md: "43px" },
                                fontSize: { xs: "40px", sm: "60px", lg: "90px" },
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
                                        variant="standard"
                                        label="Your Email"
                                        type="email"
                                        placeholder="you@email.com"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
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
                                        variant="standard"
                                        label="Your Phone"
                                        type="tel"
                                        placeholder="123-456-7890"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
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
                                        variant="standard"
                                        select
                                        label="I’m Interested in..."
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        SelectProps={{
                                            open: interestOpen,
                                            onOpen: () => setInterestOpen(true),
                                            onClose: () => setInterestOpen(false),

                                            MenuProps: selectMenuProps,

                                            displayEmpty: true,
                                            renderValue: renderSelectPlaceholder,

                                            IconComponent: KeyboardArrowDownRoundedIcon,
                                        }}
                                        error={!!errors.interest}
                                        helperText={errors.interest?.message}
                                    >
                                        {interests.map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </ContactTextField>
                                )}
                            />


                            <Controller
                                name="budget"
                                control={control}
                                render={({ field }) => (
                                    <ContactTextField
                                        {...field}
                                        variant="standard"
                                        select
                                        label="Your Budget"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        SelectProps={{
                                            open: budgetOpen,
                                            onOpen: () => setBudgetOpen(true),
                                            onClose: () => setBudgetOpen(false),

                                            MenuProps: selectMenuProps,

                                            displayEmpty: true,
                                            renderValue: renderSelectPlaceholder,

                                            IconComponent: KeyboardArrowDownRoundedIcon,
                                        }}
                                        error={!!errors.budget}
                                        helperText={errors.budget?.message}
                                    >
                                        {budgets.map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </ContactTextField>
                                )}
                            />


                            {/* Project */}
                            <FullRow>
                                <Controller
                                    name="project"
                                    control={control}
                                    render={({ field }) => (
                                        <ContactTextField
                                            {...field}
                                            variant="standard"
                                            label="More about the Project"
                                            placeholder="Type here..."
                                            InputLabelProps={{ shrink: true }}
                                            fullWidth
                                            multiline
                                            minRows={1}
                                            error={!!errors.project}
                                            helperText={errors.project?.message}
                                        />
                                    )}
                                />
                            </FullRow>

                            {/* Submit */}
                            <Box
                                sx={{
                                    gridColumn: { xs: "auto", md: "1 / -1" },
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <DiscoverButton
                                    type="submit"
                                    disabled={isSubmitting}
                                    sx={{
                                        mt: { xs: "40px", md: "43px" },
                                        minHeight: "auto",
                                        minWidth: "auto",
                                    }}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </DiscoverButton>

                            </Box>
                        </ContactForm>
                    </PageContainer>
                </HeroContent>
            </VideoHeader>

            {/* Top-right toast */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert severity={snackbar.type} variant="filled" sx={{ width: "100%", fontSize: "16px", backgroundColor: theme.palette.button.discoverBg, }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

            <ExploreSection />
            <Ready
                title="Tell us about your vision"
                description="Every great product starts with a conversation. Let's discuss how we can accelerate your digital transformation and turn your ideas into scalable solutions that drive real results."
                linkText="Let's Connect"
                linkHref="https://calendly.com/saad-b-javaid22/consultation"
            />
        </>
    );
}
