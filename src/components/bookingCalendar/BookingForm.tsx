"use client";
import { Box } from "@mui/material";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ContactTextField } from "../contact/ContactSection.styles";
import { BookingFormData } from "@/app/schemas/booking";

interface BookingFormProps {
    control: Control<BookingFormData>;
    errors: FieldErrors<BookingFormData>;
}

const BookingForm = ({ control, errors }: BookingFormProps) => {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: "40px" }}>
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
                        placeholder="12-2324-347856"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                    />
                )}
            />

            <Box sx={{ gridColumn: "1 / -1" }}>
                <Controller
                    name="project"
                    control={control}
                    render={({ field }) => (
                        <ContactTextField
                            {...field}
                            variant="standard"
                            label="More about the Project"
                            placeholder="Type here..."
                            fullWidth
                            multiline
                            minRows={1}
                            InputLabelProps={{ shrink: true }}
                            error={!!errors.project}
                            helperText={errors.project?.message}
                        />
                    )}
                />
            </Box>
        </Box>
    );
};

export default BookingForm;