import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/app/schemas/booking";
import { emailService } from "@/server/services/EmailService";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    await emailService.sendBookingEmail(parsed.data);
    return NextResponse.json({ success: true });
}
