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
                        <img src={logo.src} alt={logo.label || "logo"} />
                        <span>{logo.label}</span>
                    </LogoItem>
                ))}
            </LogosRow>
        </LogosRoot>
    );
}