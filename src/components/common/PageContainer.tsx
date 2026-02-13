import { Box } from "@mui/material";

export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                width: "100%",
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
