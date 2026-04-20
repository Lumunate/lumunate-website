import LegalLayout from "@/components/LegalLayout";
import { Box, Typography } from "@mui/material";

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="9/2/2026">
            <section>
                <Box className="legal-subtitle">Introduction:</Box>
                <Typography className="legal-body">
                    At Lumunate, we are committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use and safeguard it, and your rights regarding your personal data.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">1. Information We Collect</Box>
                <ul>
                    <li>Personal Information: Name, email, phone number, company information provided during sign-up or communication.</li>
                    <li>Technical Information: IP address, browser type, operating system, usage statistics collected through cookies.</li>
                    <li>Project Information: Specifications, design preferences, business details necessary for service delivery.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">2. How We Use Your Information</Box>
                <Typography className="legal-body">
                    We use your information to:
                </Typography>
                <ul>
                    <li>Provide Services: Deliver web development, app development, and IT solutions as requested.</li>
                    <li>Improve Our Website: Enhance user experience through analytics.</li>
                    <li>Communicate with You: Send project updates and respond to inquiries.</li>
                    <li>Marketing (With Consent): Send promotional content and newsletters if opted in.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">3. Cookies and Tracking Technologies</Box>
                <ul>
                    <li>We use cookies to improve website functionality and user experience.</li>
                    <li>Cookies help us track user behavior and optimize our services.</li>
                    <li>You can control cookies through your browser settings.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">4. How We Share Your Information</Box>
                <Typography className="legal-body">
                    We do not sell, trade, or rent your information. However, we may share it with:
                </Typography>
                <ul>
                    <li>Service Providers: Trusted third-party tools for hosting, payment, or analytics.</li>
                    <li>Legal Obligations: When required by law or in legal proceedings.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">5. Data Security</Box>
                <ul>
                    <li>We take reasonable steps to protect your personal data from unauthorized access or alteration.</li>
                    <li>However, no method of transmission over the internet is 100% secure.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">6. Your Rights Regarding Your Information</Box>
                <Typography className="legal-body">
                    You have the right to:
                </Typography>
                <ul>
                    <li>Access: Request access to your personal data.</li>
                    <li>Correction: Request correction of inaccurate data.</li>
                    <li>Deletion: Request deletion of personal data where legally applicable.</li>
                    <li>Opt-Out: Withdraw consent for marketing communications at any time.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">7. Retention of Information</Box>
                <ul>
                    <li>We retain personal information only for as long as necessary to provide services or as required by law.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">8. Third-Party Links</Box>
                <ul>
                    <li>Our website may contain links to third-party services.</li>
                    <li>Lumunate is not responsible for their privacy practices.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">9. Children&apos;s Privacy</Box>
                <ul>
                    <li>Our services are not directed to children under 18 years old.</li>
                    <li>If you believe we have collected data from a minor, please contact us.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">10. Changes to This Privacy Policy</Box>
                <ul>
                    <li>We reserve the right to update this policy at any time.</li>
                    <li>Continued use of our services after changes signifies acceptance of the updated policy.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">11. Contact Us</Box>
                <Typography className="legal-body">
                    If you have any questions about this Privacy Policy, you can contact us:
                </Typography>
                <Box className="contact-list">
                    <Box className="contact-item">Email: info@lumunate.com</Box>
                    <Box className="contact-item">Phone: +92 3361000001</Box>
                    <Box className="contact-item">WhatsApp: +92 3310200888</Box>
                    <Box className="contact-item">
                        Office Address: Office # 2, 3rd Floor, Plaza 74, Bahria Springs (North) Commercial,
                        Bahria Town Phase 7, Rawalpindi, Pakistan
                    </Box>
                </Box>
            </section>
        </LegalLayout>
    );
}