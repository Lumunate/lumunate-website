import { Box } from "@mui/material";

export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1920px",
                margin: "0 auto",
                px: {
                    xs: "24px",
                    sm: "24px",
                    md: "48px",
                    lg: "48px",
                    xl: "132px",
                },
            }}
        >
            {children}
        </Box>
    );
}
