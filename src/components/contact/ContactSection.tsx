"use client";

import { useMemo, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Snackbar, Alert, Typography, MenuItem, useTheme, Box, alpha } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { z } from "zod";

// Styles & Components
import {
    VideoHeader,
    BackgroundVideo,
    HeroContent,
    ContactForm,
    ContactTextField,
    BottomBlur,
    FullRow
} from "./ContactSection.styles";
import Ready from "../home/ready/Ready";
import ExploreSection from "../home/explore/Explore";
import PageContainer from "../common/PageContainer";
import DiscoverButton from "../ui/DiscoverButton";

/*  Validation Logic  */
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

/* Custom Status Icon  */
const StatusIcon = ({ type }: { type: "success" | "error" | "warning" }) => {
    const theme = useTheme();
    const iconColor = theme.palette.status[type];

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: iconColor,
                flexShrink: 0,
            }}
        >
            {type === "success" && (
                <Box
                    sx={{
                        width: "12px",
                        height: "6px",
                        borderBottom: `2.5px solid ${theme.palette.common.white}`,
                        borderLeft: `2.5px solid ${theme.palette.common.white}`,
                        transform: "rotate(-45deg) translate(1px, -1px)",
                    }}
                />
            )}
            {type === "error" && (
                <Typography sx={{ color: theme.palette.common.white, fontSize: "14px", fontWeight: 700, lineHeight: 1 }}>✕</Typography>
            )}
            {type === "warning" && (
                <Typography sx={{ color: theme.palette.common.white, fontSize: "14px", fontWeight: 700, lineHeight: 1 }}>!</Typography>
            )}
        </Box>
    );
};

export default function ContactSection() {
    const theme = useTheme();
    const [interestOpen, setInterestOpen] = useState(false);
    const [budgetOpen, setBudgetOpen] = useState(false);

    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        type: "success" | "error" | "warning";
        message: string;
    }>({
        open: false,
        type: "success",
        message: "",
    });

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { email: "", phone: "", interest: "", budget: "", project: "" },
        mode: "onSubmit",
    });

    // Close menus on scroll logic
    useEffect(() => {
        if (!interestOpen && !budgetOpen) return;
        const closeOnScroll = () => {
            setInterestOpen(false);
            setBudgetOpen(false);
        };
        window.addEventListener("scroll", closeOnScroll, true);
        return () => window.removeEventListener("scroll", closeOnScroll, true);
    }, [interestOpen, budgetOpen]);

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Submission Failed");

            setSnackbar({
                open: true,
                type: "success",
                message: "Form Submitted Successfully",
            });
            reset();
        } catch {
            setSnackbar({
                open: true,
                type: "error",
                message: "Submission Failed",
            });
        }
    };

    const onError = () => {
        setSnackbar({
            open: true,
            type: "warning",
            message: "Please Fill All Necessary Fields Before Submission",
        });
    };

    const selectMenuProps = useMemo(() => ({
        disablePortal: false,
        disableScrollLock: true,
        PaperProps: {
            sx: {
                borderRadius: "12px",
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
                backgroundImage: "none",
                "& .MuiMenuItem-root": {
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    color: theme.palette.section.muted,
                    padding: "12px 16px",
                    "&:hover": { backgroundColor: alpha(theme.palette.text.primary, 0.08) },
                },
            },
        },
    }), [theme]);

    const renderSelectPlaceholder = (selected: unknown) => {
        const value = (selected ?? "") as string;
        if (!value) return <span style={{ color: alpha(theme.palette.text.primary, 0.55) }}>--Select--</span>;
        return value;
    };

    return (
        <>
            <VideoHeader>
                <BackgroundVideo autoPlay muted loop playsInline>
                    <source src="https://res.cloudinary.com/dlhe4iq8c/video/upload/v1770897842/Contact_Us_h2snzh.webm" type="video/mp4" />
                </BackgroundVideo>
                <BottomBlur />
                <HeroContent>
                    <PageContainer>
                        <Typography
                            variant="h2"
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
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <ContactTextField
                                        {...field}
                                        variant="standard"
                                        label="Your Email"
                                        placeholder="you@email.com"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />

                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <ContactTextField
                                        {...field}
                                        variant="standard"
                                        label="Your Phone"
                                        placeholder="123-456-7890"
                                        fullWidth
                                        InputLabelProps={{ shrink: true }}
                                        error={!!errors.phone}
                                        helperText={errors.phone?.message}
                                    />
                                )}
                            />

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
                                            <MenuItem key={item} value={item}>{item}</MenuItem>
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
                                            <MenuItem key={item} value={item}>{item}</MenuItem>
                                        ))}
                                    </ContactTextField>
                                )}
                            />

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

                            <Box sx={{ gridColumn: { xs: "auto", md: "1 / -1" }, display: "flex", justifyContent: "flex-start" }}>
                                <DiscoverButton type="submit" disabled={isSubmitting} sx={{ mt: { xs: "40px", md: "43px" } }}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </DiscoverButton>
                            </Box>
                        </ContactForm>
                    </PageContainer>
                </HeroContent>
            </VideoHeader>

            {/* Top-right Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                sx={{ mt: 2, mr: 2 }}
            >
                <Alert
                    onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                    severity={snackbar.type}
                    variant="outlined"
                    iconMapping={{
                        success: <StatusIcon type="success" />,
                        error: <StatusIcon type="error" />,
                        warning: <StatusIcon type="warning" />,
                    }}
                    sx={{
                        minWidth: { xs: "100%", sm: "380px" },
                        fontSize: "14px",
                        fontFamily: "Montserrat, sans-serif",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.status[`${snackbar.type}Bg` as keyof typeof theme.palette.status],
                        borderColor: snackbar.type === "success"
                            ? theme.palette.status.successBorder
                            : theme.palette.status[snackbar.type],

                        px: 2,
                        "& .MuiAlert-icon": {
                            padding: 0,
                            mr: 2,
                            display: "flex",
                            alignItems: "center",
                        },
                        "& .MuiAlert-message": {
                            padding: "12px 0",
                            mr: 1,
                        },
                        "& .MuiAlert-action": {
                            padding: 0,
                            mr: -0.5,
                            color: "inherit"
                        }
                    }}
                >
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