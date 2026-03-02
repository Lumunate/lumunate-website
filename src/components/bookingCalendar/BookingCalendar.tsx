"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Stack, useTheme, Snackbar, Alert } from "@mui/material";
import { InlineWidget } from "react-calendly";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { bookingSchema, BookingFormData } from "@/app/schemas/booking";
import BookingForm from "@/components/bookingCalendar/BookingForm";

const BookCalenderPage = () => {
    const theme = useTheme();
    const [step, setStep] = useState(1);

    // Toast state
    const [toast, setToast] = useState({ open: false, message: "", severity: "success" as "success" | "error" });

    // Initialize React Hook Form
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: { email: "", phone: "", project: "" }
    });

    // Handle Form Submission
    const onSubmit = async (data: BookingFormData) => {
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form Submitted:", data);

            setToast({ open: true, message: "Meeting booked successfully!", severity: "success" });

            reset();
            setStep(1);
        } catch (error) {
            setToast({ open: true, message: "Failed to book. Please try again.", severity: "error" });
        }
    };

    const handleNext = () => {
        if (step === 1) {
            setStep(2);
        } else {
            handleSubmit(onSubmit)();
        }
    };

    const handleBackOrCancel = () => {
        if (step === 2) {
            setStep(1);
        } else {
            console.log("Cancelled");
        }
    };

    return (
        <Box sx={{ width: "100%", position: "relative" }}>
            {/* Step Sub-header */}
            <Typography variant="body1" sx={{ color: theme.palette.section.muted, mb: 4, fontSize: { xs: "14px", md: "22px" } }}>
                {step === 1 ? "Select date & Time" : "Enter your info"}
            </Typography>

            <Box sx={{ maxWidth: "1200px", mx: "auto", position: "relative" }}>
                {step === 1 ? (
                    /* CALENDAR */
                    <Box sx={{
                        bgcolor: theme.palette.section.calenderBg,
                        borderRadius: "15px",
                        border: { xs: "none", md: `1px solid ${theme.palette.divider}` },
                        overflow: "hidden",
                        px: { xs: 2, md: "200px" },
                        py: { xs: 4, md: "50px" },
                        position: "relative"
                    }}>
                        <InlineWidget
                            url="https://calendly.com/saad-b-javaid22/consultation"
                            styles={{ height: "600px", width: "100%" }}
                        />
                        <Button
                            startIcon={<Image src="/troubleshooting.svg" alt="" width={18} height={18} />}
                            sx={{ position: "absolute", bottom: "50px", left: "200px", color: "white", textTransform: "none", display: { xs: "none", md: "flex" } }}
                        >
                            Troubleshooting
                        </Button>
                    </Box>
                ) : (
                    <BookingForm control={control} errors={errors} />
                )}

                {/* NAVIGATION BUTTONS */}
                <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 10 }}>
                    <Button
                        variant="contained"
                        onClick={handleBackOrCancel}
                        sx={{ bgcolor: theme.palette.button.CancelBg, p: "18px 60px", borderRadius: "15px", color: "white", textTransform: "none" }}
                    >
                        {step === 2 ? "Back" : "Cancel"}
                    </Button>

                    <Button
                        variant="contained"
                        onClick={step === 1 ? handleNext : handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        sx={{ bgcolor: theme.palette.button.discoverBg, p: "18px 60px", borderRadius: "15px", color: "white", textTransform: "none" }}
                    >
                        {step === 1 ? "Next" : isSubmitting ? "Confirming..." : "Confirm"}
                    </Button>
                </Stack>
            </Box>

            {/* SUCCESS/FAILURE TOAST */}
            <Snackbar
                open={toast.open}
                autoHideDuration={6000}
                onClose={() => setToast({ ...toast, open: false })}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert severity={toast.severity} variant="filled" sx={{ width: "100%" }}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default BookCalenderPage;