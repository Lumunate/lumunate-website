import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/app/schemas/booking";
import { emailService } from "@/server/services/EmailService";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const parsed = bookingSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { message: "Invalid form data.", errors: parsed.error.format() },
                { status: 400 }
            );
        }

        await emailService.sendBookingEmail(parsed.data);

        return NextResponse.json({
            success: true,
            message: "Booking confirmation sent!"
        }, { status: 200 });

    } catch (error: any) {
        console.error("Booking API Error:", error);
        return NextResponse.json(
            {
                message: "Failed to process booking. Please try again later.",
                details: error.message
            },
            { status: 500 }
        );
    }
}