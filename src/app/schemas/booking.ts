import { z } from "zod";

export const bookingSchema = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    project: z.string().min(10, "Please provide a bit more detail about your project"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;