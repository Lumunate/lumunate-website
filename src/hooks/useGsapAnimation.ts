"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

// ✅ Register ScrollTrigger once (safe for Next.js Fast Refresh)
let scrollTriggerRegistered = false;
if (!scrollTriggerRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  scrollTriggerRegistered = true;
}

// ✅ Refresh ScrollTrigger on page load to fix direct landing on section
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    ScrollTrigger.refresh(true);
  });
}

// ----------------------
// Type Definitions
// ----------------------
type Direction =
  | "fade"
  | "bottom"
  | "top"
  | "left"
  | "right"
  | "zoomTop"
  | "zoomTopLeft"
  | "zoomTopRight";

interface GsapOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  stagger?: number;
}

// ======================================================
// ✅ useGsapAnimation Hook - standard fade/slide/zoom scroll animation
// ======================================================
const useGsapAnimation = <T extends HTMLElement = HTMLDivElement>({
  direction = "bottom",
  delay = 0,
  duration = 0.8,
  once = true,
  stagger = 0,
}: GsapOptions = {}) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      let fromProps: gsap.TweenVars = {};

      switch (direction) {
        case "bottom":
          fromProps = { y: 50, opacity: 0 };
          break;
        case "top":
          fromProps = { y: -50, opacity: 0 };
          break;
        case "left":
          fromProps = { x: -50, opacity: 0 };
          break;
        case "right":
          fromProps = { x: 50, opacity: 0 };
          break;
        case "fade":
          fromProps = { opacity: 0 };
          break;
        case "zoomTop":
          fromProps = { y: -40, scale: 0.6, opacity: 0 };
          break;
        case "zoomTopLeft":
          fromProps = { x: -50, y: -50, scale: 0.6, opacity: 0 };
          break;
        case "zoomTopRight":
          fromProps = { x: 50, y: -50, scale: 0.6, opacity: 0 };
          break;
        default:
          fromProps = { y: 50, opacity: 0 };
      }

      const anim = gsap.fromTo(
        element,
        fromProps,
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            once,
          },
        }
      );

      // 🔹 Ensure animation plays if user lands mid-section
      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        once,
        onEnter: () => anim.play(),
      });
    }, elementRef);

    return () => ctx.revert();
  }, [direction, delay, duration, once, stagger]);

  return elementRef;
};

export default useGsapAnimation;

// ======================================================
// ✅ useGsapSlideAnimation - controls slide section progress (Our Approach)
// ======================================================
export const useGsapSlideAnimation = (data: unknown[]) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const sections = data.length;

      gsap.to({}, {
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: `+=${sections * 100}%`,
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            const newIndex = Math.min(
              sections - 1,
              Math.floor(self.progress * sections)
            );
            setActiveIndex(newIndex);
          },
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [data]);

  return { elementRef, activeIndex };
};

// ======================================================
// ✅ useGsapTimelineAnimation - sequential header/hero animation
// ======================================================
export const useGsapTimelineAnimation = <T extends HTMLElement = HTMLElement>(
  refs: React.RefObject<T | null>[],
  delay = 0
) => {
  useEffect(() => {
    const validRefs = refs.filter((r) => r?.current) as React.RefObject<T>[];
    if (validRefs.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay });

      if (validRefs[0])
        tl.fromTo(
          validRefs[0].current,
          { x: "-10%", y: "-50%", opacity: 0, scale: 0.8 },
          { x: 0, y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" }
        );

      if (validRefs[1])
        tl.fromTo(
          validRefs[1].current,
          { x: "20%", y: "-50%", opacity: 0, scale: 0.8 },
          { x: 0, y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.8"
        );

      if (validRefs[2])
        tl.fromTo(
          validRefs[2].current,
          { x: "20%", y: "-50%", opacity: 0, scale: 0.8 },
          { x: 0, y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.7"
        );
    });

    return () => ctx.revert();
  }, [refs, delay]);
};

// ======================================================
// ✅ useGsapCounterAnimation - Track Record counters
// ======================================================
export const useGsapCounterAnimation = (
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  data: { total: number; suffix: string }[]
) => {
  useEffect(() => {
    if (!refs.current.length) return;

    const ctx = gsap.context(() => {
      refs.current.forEach((el, index) => {
        if (!el) return;

        const { total: finalValue, suffix } = data[index];
        const counter = { value: 0 };

        gsap.fromTo(
          counter,
          { value: 0 },
          {
            value: finalValue,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              if (!el) return;
              if (finalValue > 1000) {
                el.textContent = `${Math.floor(counter.value).toLocaleString()}${suffix}`;
              } else if (finalValue < 10) {
                el.textContent = `${counter.value.toFixed(1)}${suffix}`;
              } else {
                el.textContent = `${Math.floor(counter.value)}${suffix}`;
              }
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [refs, data]);
};
