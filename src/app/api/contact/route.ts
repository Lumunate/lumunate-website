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
        // 1. Parse JSON body safely
        const body = await req.json();

        // 2. Validate with Zod
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                { message: "Invalid form data.", errors: parsed.error.format() },
                { status: 400 }
            );
        }

        // 3. Attempt to send email
        // We wrap this in the try-catch to prevent the 500 HTML error page
        await emailService.sendContactEmail(parsed.data);

        return NextResponse.json({
            success: true,
            message: "Email sent successfully!"
        }, { status: 200 });

    } catch (error: any) {
        console.error("Contact API Error:", error);

        // 4. Return a JSON error instead of letting the server crash
        return NextResponse.json(
            {
                message: "Failed to send message. Please try again later.",
                details: error.message
            },
            { status: 500 }
        );
    }
}