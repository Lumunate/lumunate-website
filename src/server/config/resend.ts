import { Resend } from "resend";

/**
 * Singleton wrapper around the Resend SDK client.
 * Ensures only one instance is created per process, regardless of
 * how many times `ResendClient.getInstance()` is called.
 */
class ResendClient {
    private static instance: Resend | null = null;

    private constructor() {}

    static getInstance(): Resend {
        if (!ResendClient.instance) {
            if (!process.env.RESEND_API_KEY) {
                throw new Error("Missing RESEND_API_KEY environment variable");
            }
            ResendClient.instance = new Resend(process.env.RESEND_API_KEY);
        }
        return ResendClient.instance;
    }
}

export default ResendClient;
