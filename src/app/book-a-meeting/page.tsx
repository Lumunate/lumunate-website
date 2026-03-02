"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Internal Imports
import BookingForm from "@/components/bookingCalendar/BookingForm";
import { bookingSchema, BookingFormData } from "@/app/schemas/booking";
import PageContainer from "@/components/common/PageContainer";

export default function BookCalenderPage() {
    const theme = useTheme();
    const [step, setStep] = useState(1);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [snackbar, setSnackbar] = useState({
        open: false,
        type: "error" as "success" | "error",
        message: "",
    });

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

    const handleCloseModal = () => {
        setIsSuccessModalOpen(false);
        setStep(1);
    };

    return (
        <PageContainer>
            <Box sx={{ width: "100%", position: "relative" }}>
                {/* SINGLE TITLE SECTION */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 400,
                        fontFamily: "Montserrat",
                        fontSize: { xs: "30px", md: "90px" },
                        mb: 1,
                        color: "white"
                    }}
                >
                    Book a Meeting
                </Typography>

                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.5)", mb: 6 }}>
                    {step === 1 ? "Select date & Time" : "Enter your info"}
                </Typography>

                {/* CONTENT AREA */}
                {step === 1 ? (
                    <Box sx={{
                        bgcolor: "#111",
                        borderRadius: "15px",
                        border: `1px solid ${theme.palette.divider}`,
                        px: { xs: 2, md: 10 },
                        py: { xs: 4, md: 6 },
                        position: "relative"
                    }}>
                        <InlineWidget
                            url="https://calendly.com/saad-b-javaid22/consultation"
                            styles={{ height: "600px", width: "100%" }}
                        />
                        <Button
                            startIcon={<Image src="/troubleshooting.svg" alt="" width={18} height={18} />}
                            sx={{
                                mt: 2,
                                color: "rgba(255,255,255,0.6)",
                                textTransform: "none",
                                "&:hover": { color: "white" }
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
                <Stack
                    direction="row"
                    spacing={{ xs: 2, md: 4 }}
                    justifyContent="center"
                    sx={{ mt: 10 }}
                >
                    <Button
                        onClick={() => step === 2 && setStep(1)}
                        sx={{
                            bgcolor: "#222",
                            minWidth: { xs: "101px", md: "188px" },
                            py: { xs: "12px", md: "18px" },
                            borderRadius: "15px",
                            color: "white",
                            fontSize: { xs: "16px", md: "18px" },
                            textTransform: "none",
                            "&:hover": { bgcolor: "#333" }
                        }}
                    >
                        {step === 2 ? "Back" : "Cancel"}
                    </Button>

                    <Button
                        disabled={isSubmitting}
                        onClick={step === 1 ? () => setStep(2) : handleSubmit(onFormSubmit)}
                        sx={{
                            bgcolor: "#00a270",
                            minWidth: { xs: "110px", md: "188px" },
                            py: { xs: "12px", md: "18px" },
                            borderRadius: "15px",
                            color: "white",
                            fontSize: { xs: "16px", md: "18px" },
                            textTransform: "none",
                            "&:hover": { bgcolor: "#008a60" },
                            "&.Mui-disabled": { bgcolor: "rgba(0, 162, 112, 0.5)", color: "rgba(255,255,255,0.5)" }
                        }}
                    >
                        {step === 1 ? "Next" : isSubmitting ? "Confirm..." : "Confirm"}
                    </Button>
                </Stack>

                {/* SUCCESS MODAL WITH BLUR */}
                <Dialog
                    open={isSuccessModalOpen}
                    onClose={handleCloseModal}
                    TransitionComponent={Zoom}
                    PaperProps={{
                        sx: {
                            bgcolor: "#111",
                            backgroundImage: "none",
                            borderRadius: "24px",
                            p: { xs: 4, md: 6 },
                            textAlign: "center",
                            maxWidth: "500px",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }
                    }}
                    slotProps={{
                        backdrop: {
                            sx: {
                                backdropFilter: "blur(10px)",
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                            }
                        }
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                        <CheckCircleIcon sx={{ fontSize: 90, color: "#00a270", mb: 1 }} />
                        <Typography variant="h4" sx={{ color: "white", fontWeight: 500 }}>
                            Scheduled Successfully!
                        </Typography>
                        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.6)", mb: 3 }}>
                            A Calendar Invitation has been sent to your email.
                        </Typography>
                        <Button
                            onClick={handleCloseModal}
                            fullWidth
                            sx={{
                                bgcolor: "#00a270",
                                color: "white",
                                borderRadius: "12px",
                                py: 2,
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": { bgcolor: "#008a60" }
                            }}
                        >
                            Close
                        </Button>
                    </Box>
                </Dialog>

                {/* ERROR TOAST */}
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