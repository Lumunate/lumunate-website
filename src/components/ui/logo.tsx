import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex shrink-0" aria-label="Lumunate">
            <Image src={'/lumunate-logo.png'} alt="Lumunate Portfolio - Logo" width={150} height={62} />
        </Link>
    );
}