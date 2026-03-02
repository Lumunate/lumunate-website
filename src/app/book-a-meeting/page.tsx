"use client";

import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Stack,
    useTheme,
    Snackbar,
    Alert,
    Dialog,
    Zoom
} from "@mui/material";
import { InlineWidget } from "react-calendly";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/navigation";

import BookingForm from "@/components/bookingCalendar/BookingForm";
import { bookingSchema, BookingFormData } from "@/app/schemas/booking";
import PageContainer from "@/components/common/PageContainer";
import Button from "@mui/material/Button";

export default function BookCalenderPage() {
    const theme = useTheme();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        type: "error" as "success" | "error",
        message: "",
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [step]);

    useEffect(() => {
        if (isSuccessModalOpen) {
            const timer = setTimeout(() => {
                router.push("/");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccessModalOpen, router]);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: { email: "", phone: "", project: "" },
        mode: "onSubmit"
    });

    const onFormSubmit = async (data: BookingFormData) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsSuccessModalOpen(true);
            reset();
        } catch (error) {
            setSnackbar({
                open: true,
                message: "Something went wrong. Please try again.",
                type: "error"
            });
        }
    };

    return (
        <PageContainer>
            <Box sx={{ width: "100%", position: "relative" }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 400,
                        fontFamily: "Montserrat",
                        fontSize: { xs: "30px", md: "90px" },
                        mb: 1,
                        color: theme.palette.text.primary
                    }}
                >
                    Book a Meeting
                </Typography>

                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 6 }}>
                    {step === 1 ? "Select date & Time" : "Enter your info"}
                </Typography>

                {/* CONTENT AREA */}
                {step === 1 ? (
                    <Box sx={{
                        bgcolor: theme.palette.section.calenderBg,
                        borderRadius: "15px",
                        border: `1px solid ${theme.palette.divider}`,
                        px: { xs: 2, md: 10 },
                        py: { xs: 4, md: 6 },
                        position: "relative",
                        overflow: "hidden",
                        "& iframe": { overflow: "hidden" }
                    }}>
                        <InlineWidget
                            url="https://calendly.com/saad-b-javaid22/consultation"
                            styles={{ height: "650px", width: "100%" }}
                            pageSettings={{
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: true,
                            }}
                        />

                        <Button
                            variant="outlined"
                            startIcon={<Image src="/troubleshooting.svg" alt="" width={18} height={18} />}
                            sx={{
                                mt: 2,
                                color: theme.palette.section.heading,
                                textTransform: "none",
                                border: `1px solid ${theme.palette.divider}`,
                                borderRadius: "15px",
                                p: "11px 15px",
                                "&:hover": {
                                    color: theme.palette.text.primary,
                                    border: `1px solid ${theme.palette.text.secondary}`,
                                    bgcolor: "transparent"
                                }
                            }}
                        >
                            Troubleshooting
                        </Button>
                    </Box>
                ) : (
                    <Box sx={{ mt: 4 }}>
                        <BookingForm control={control} errors={errors} />
                    </Box>
                )}

                {/* NAVIGATION BUTTONS */}
                <Stack direction="row" spacing={{ xs: 2, md: 4 }} justifyContent="center" sx={{ mt: 10 }}>
                    <Button
                        onClick={() => {
                            if (step === 2) {
                                setStep(1);
                            } else {
                                router.push("/");
                            }
                        }}
                        sx={{
                            bgcolor: theme.palette.button.CancelBg,
                            minWidth: { xs: "101px", md: "188px" },
                            py: { xs: "12px", md: "18px" },
                            borderRadius: "15px",
                            color: theme.palette.text.primary,
                            textTransform: "none",
                            "&:hover": { opacity: 0.9 }
                        }}
                    >
                        {step === 2 ? "Back" : "Cancel"}
                    </Button>

                    <Button
                        disabled={isSubmitting}
                        onClick={step === 1 ? () => setStep(2) : handleSubmit(onFormSubmit)}
                        sx={{
                            bgcolor: theme.palette.section.processNumber,
                            minWidth: { xs: "110px", md: "188px" },
                            py: { xs: "12px", md: "18px" },
                            borderRadius: "15px",
                            color: theme.palette.text.primary,
                            textTransform: "none",
                            "&:hover": { opacity: 0.9 },
                        }}
                    >
                        {step === 1 ? "Next" : isSubmitting ? "Confirming..." : "Confirm"}
                    </Button>
                </Stack>

                {/* SUCCESS MODAL */}
                <Dialog
                    open={isSuccessModalOpen}
                    disableScrollLock={false}
                    TransitionComponent={Zoom}
                    PaperProps={{
                        sx: {
                            bgcolor: theme.palette.section.calenderBg,
                            backgroundImage: "none",
                            borderRadius: "24px",
                            p: { xs: 4, md: "80px" },
                            textAlign: "center",
                            maxWidth: "746px",
                            border: `1px solid ${theme.palette.divider}`,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        }
                    }}
                    slotProps={{
                        backdrop: {
                            sx: {
                                backdropFilter: "blur(12px)",
                                backgroundColor: "rgba(0, 0, 0, 0.7)",
                            }
                        }
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <Box sx={{
                            width: 80,
                            height: 80,
                            bgcolor: theme.palette.section.processNumber,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: "20px",
                        }}>
                            <CheckIcon sx={{ fontSize: 50, color: "white" }} />
                        </Box>

                        <Typography variant="h4" sx={{ color: theme.palette.text.primary, fontWeight: 500, fontSize: { xs: "22px", md: "32px" } }}>
                            Scheduled Successfully!
                        </Typography>

                        <Typography variant="h5" sx={{ color: theme.palette.text.secondary, fontSize: { xs: "16px", md: "22px" }, maxWidth: "450px" }}>
                            A Calendar Invitation has been sent to your email.
                        </Typography>

                        <Typography variant="body2" sx={{ color: theme.palette.section.muted, mt: 2 }}>
                            Redirecting you to home...
                        </Typography>
                    </Box>
                </Dialog>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={4000}
                    onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </PageContainer>
    );
}