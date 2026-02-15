import LegalLayout from "@/components/LegalLayout";
import { Box, Typography } from "@mui/material";

export default function TermsPage() {
    return (
        <LegalLayout title="Terms and Conditions" lastUpdated="9/2/2026">
            <section>
                <Box className="legal-subtitle">Welcome to Lumunate</Box>
                <Typography className="legal-body">
                    These Terms of Service ("Terms") govern your access to and use of our website and services.
                    By using our services, you agree to comply with and be bound by the following terms.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">1. Acceptance of Terms</Box>
                <Typography className="legal-body">
                    By accessing and using our services, you agree to these Terms.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">2. Services Provided</Box>
                <Typography className="legal-body">
                    Lumunate offers a wide range of digital services, including but not limited to:
                </Typography>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Systems Integration</li>
                    <li>Custom Software Development</li>
                    <li>Digital Marketing Solutions</li>
                    <li>IT Consulting</li>
                </ul>
                <Typography className="legal-body">
                    All services are subject to the terms outlined in individual contracts or agreements established between Lumunate and its clients.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">3. User Responsibility</Box>
                <Typography className="legal-body">
                    By using our services, you agree to:
                </Typography>
                <ul>
                    <li>Provide accurate and complete information during project engagements.</li>
                    <li>Maintain the confidentiality of your account credentials.</li>
                    <li>Comply with all applicable laws and regulations while using our services.</li>
                </ul>

            </section>

            <section>
                <Box className="legal-point">4. Payment Information</Box>
                <ul>
                    <li>Payment terms will be specified in a separate agreement or invoice for each project.</li>
                    <li>Payments are expected to be made on time as per the agreement. Delays in payment may result in service suspension. </li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">5. Lumunate Project Delivery</Box>
                <ul>
                    <li>Lumunate will make every effort to meet the agreed project timelines for completion.</li>
                    <li>Unforeseen circumstances, client-side delays, or project scope changes may impact delivery times.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">6. Intellectual Property</Box>
                <ul>
                    <li>All content, designs, and materials created by Lumunate remain intellectual property of Lumunate unless otherwise agreed in writing.</li>
                    <li>Upon full payment, clients will be granted the right to use the delivered project for its intended purposes.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">7. Revisions and Modifications</Box>
                <ul>
                    <li>Project revisions will be limited to the number outlined in the agreement.</li>
                    <li>Additional revisions may be subject to extra fees.</li>
                    <li>Changes in project scope after the start of the project will require a new agreement or modification to the original contract.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">8. Limitation of Liability</Box>
                <ul>
                    <li>Lumunate will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">9. Termination</Box>
                <ul>
                    <li>Lumunate reserves the right to terminate your access to our services if the Terms are violated.</li>
                    <li>Upon termination, all licenses and rights granted will cease immediately.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">10. Confidentiality</Box>
                <Typography className="legal-body">
                    Lumunate values client confidentiality and will take reasonable steps to ensure the protection of sensitive data shared during project engagements.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">11. Third-Party Links</Box>
                <Typography className="legal-body">
                    Our website may contain links to third-party websites. Lumunate does not endorse or assume responsibility for third-party content or services.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">12. Governing Law</Box>
                <Typography className="legal-body">
                    These Terms are governed by the laws of Pakistan. Any disputes arising will be subject to the exclusive jurisdiction of Pakistani courts.
                </Typography>
            </section>

            <section>
                <Box className="legal-point">13. Changes to Terms</Box>
                <ul>
                    <li>Lumunate reserves the right to modify these Terms at any time.</li>
                    <li>Changes will become effective once posted on our website.</li>
                </ul>
            </section>

            <section>
                <Box className="legal-point">14. Contact Us</Box>
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