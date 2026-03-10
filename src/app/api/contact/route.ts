import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { emailService } from "@/server/services/EmailService";

const schema = z.object({
    email: z.string().trim().email(),
    phone: z.string().trim().min(7).regex(/^[0-9+\-()\s]*$/),
    interest: z.string().nonempty(),
    budget: z.string().nonempty(),
    project: z.string().trim().max(500).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
    try {
        // Parse JSON body safely
        const body = await req.json();

        // Validate with Zod
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { message: "Invalid form data.", errors: parsed.error.format() },
                { status: 400 }
            );
        }

        // Attempt to send email
        await emailService.sendContactEmail(parsed.data);

        return NextResponse.json({
            success: true,
            message: "Email sent successfully!"
        }, { status: 200 });

    } catch (error: unknown) {
        console.error("Contact API Error:", error);

        const message = error instanceof Error ? error.message : String(error);

        return NextResponse.json(
            {
                message: "Failed to send message. Please try again later.",
                details: message
            },
            { status: 500 }
        );
    }
}