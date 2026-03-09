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
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    await emailService.sendContactEmail(parsed.data);
    return NextResponse.json({ success: true });
}
