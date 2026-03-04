import { Box, SxProps, Theme } from "@mui/material";
import { forwardRef } from "react";

interface PageContainerProps {
    children: React.ReactNode;
    sx?: SxProps<Theme>; // Allow custom styles to be passed in
}

// Wrapped with forwardRef to allow navRef to work
const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
    ({ children, sx }, ref) => {
        return (
            <Box
                ref={ref}
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
                    ...sx, // Spread incoming sx props to override/extend defaults
                }}
            >
                {children}
            </Box>
        );
    }
);

PageContainer.displayName = "PageContainer";

export default PageContainer;