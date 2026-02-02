import { Box } from "@mui/material";

export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                width: "100%",
                mx: "auto",
                maxWidth: "1654px",
                px: {
                    xs: "24px",
                    sm: "24px",
                    md: "48px",
                    lg: "131px",
                    xl: "131px",
                },
            }}
        >
            {children}
        </Box>
    );
}
