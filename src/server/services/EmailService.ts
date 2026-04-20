import type { Resend } from "resend";
import ResendClient from "@/server/config/resend";
import TemplateRenderer from "@/server/templates/TemplateRenderer";

export interface ContactEmailPayload {
    email: string;
    phone: string;
    interest: string;
    budget: string;
    project?: string;
}

export interface BookingEmailPayload {
    email: string;
    phone: string;
    project: string;
}

/**
 * Handles all outbound email sending for the application.
 * Receives the Resend client via the ResendClient singleton (dependency injection).
 * Delegates HTML rendering to TemplateRenderer.
 */
export class EmailService {
    private readonly client: Resend;
    private readonly fromAddress: string;
    private readonly toAddress: string;
    private readonly ccAddress: string | undefined;

    constructor() {
        this.client = ResendClient.getInstance();
        this.fromAddress = "Lumunate <no-reply@lumunate.com>";
        this.toAddress = process.env.CONTACT_EMAIL ?? "hello@lumunate.com";
        this.ccAddress = process.env.CONTACT_EMAIL_CC;
    }

    // ─── Public Methods ──────────────────────────────────────────────────────────

    async sendContactEmail(payload: ContactEmailPayload): Promise<void> {
        const { email, phone, interest, budget, project } = payload;
        const subject = `New Contact Inquiry — ${interest}`;

        const html = await TemplateRenderer.render("contact", {
            subject,
            fields: [
                { label: "Email", value: email },
                { label: "Phone", value: phone },
                { label: "Interest", value: interest },
                { label: "Budget", value: budget },
                ...(project ? [{ label: "Project", value: project }] : []),
            ],
        });

        await this.client.emails.send({
            from: this.fromAddress,
            to: this.toAddress,
            ...(this.ccAddress && { cc: this.ccAddress }),
            replyTo: email,
            subject,
            html,
        });
    }

    async sendBookingEmail(payload: BookingEmailPayload): Promise<void> {
        const { email, phone, project } = payload;
        const subject = "New Meeting Booking Request";

        const html = await TemplateRenderer.render("booking", {
            subject,
            fields: [
                { label: "Email", value: email },
                { label: "Phone", value: phone },
                { label: "Project", value: project },
            ],
        });

        await this.client.emails.send({
            from: this.fromAddress,
            to: this.toAddress,
            ...(this.ccAddress && { cc: this.ccAddress }),
            replyTo: email,
            subject,
            html,
        });
    }
}

export const emailService = new EmailService();
