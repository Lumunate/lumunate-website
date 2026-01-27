import { Box } from "@mui/material";

export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                width: "100%",
                mx: 0,           
                maxWidth: "100%", 
                px: {
                    xs: "24px",
                    sm: "24px",
                    md: "48px",
                    lg: "135px",
                    xl: "135px",
                },
            }}
        >
            {children}
        </Box>
    );
}
