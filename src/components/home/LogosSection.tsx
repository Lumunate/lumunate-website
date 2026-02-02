import Image from "next/image";
import {
    LogosRoot,
    LogoItem,
    LogosTrack,
} from "./LogosSection.styles";
import PageContainer from "../common/PageContainer";

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
            <PageContainer>
                <LogosTrack>
                    {[...logos, ...logos].map((logo, index) => (
                        <LogoItem key={`${logo.src}-${index}`}>
                            <Image
                                src={logo.src}
                                alt={logo.label || "logo"}
                                width={93}
                                height={93}
                                style={{ objectFit: "contain" }}
                            />
                        </LogoItem>
                    ))}
                </LogosTrack>
            </PageContainer>
        </LogosRoot>
    );
}
