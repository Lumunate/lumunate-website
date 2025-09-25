import Image from "next/image";
import { Typography } from "@mui/material";
import {
    LogosRoot,
    LogosRow,
    LogoItem,
} from "./LogosSection.styles";

const logos = [
    { src: "/logos/nextjs.svg", label: "" },
    { src: "/logos/reactjs.svg", label: "" },
    { src: "/logos/tailwindcss.svg", label: "" },
    { src: "/logos/aws.svg", label: "" },
    { src: "/logos/angularjs.svg", label: "" },
    { src: "/logos/astro.svg", label: "" },
    { src: "/logos/alpinejs.svg", label: "" },
    { src: "/logos/vuejs.svg", label: "" },
];

export default function LogosSection() {
    return (
        <LogosRoot>
            <LogosRow>
                {logos.map((logo) => (
                    <LogoItem key={logo.src}>
                        <Image
                            src={logo.src}
                            alt={logo.label || "logo"}
                            width={60}
                            height={60}
                            style={{ objectFit: "contain" }}
                        />
                        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                            {logo.label}
                        </Typography>
                    </LogoItem>
                ))}
            </LogosRow>
        </LogosRoot>
    );
}