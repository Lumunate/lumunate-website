"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Cleanup when route changes
        return () => {
            console.log("🧹 Clearing GSAP + ScrollTriggers on route change");
            gsap.globalTimeline.clear();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [pathname]);

    return <>{children}</>;
}
