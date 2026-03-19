"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

// Register ScrollTrigger safely for Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper to prevent "Flash of Unstyled Content" in Next.js
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Type Definitions
type Direction =
  | "fade"
  | "bottom"
  | "top"
  | "left"
  | "right"
  | "scale-up"
  | "text-expand"
  | "zoomTop"
  | "zoomTopLeft"
  | "zoomTopRight";

interface GsapOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  stagger?: number;
}

// useGsapAnimation - standard fade/slide/zoom scroll animation
export const useGsapAnimation = <T extends HTMLElement = HTMLDivElement>({
  direction = "bottom",
  delay = 0,
  duration = 0.8,
  once = true,
  stagger = 0,
}: GsapOptions = {}) => {
  const elementRef = useRef<T | null>(null);

  useIsomorphicLayoutEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      let fromProps: gsap.TweenVars = { opacity: 0 };

      switch (direction) {
        case "bottom": fromProps.y = 50; break;
        case "top": fromProps.y = -50; break;
        case "left": fromProps.x = -50; break;
        case "right": fromProps.x = 50; break;
        case "scale-up":
          fromProps = { ...fromProps, scale: 0.5, transformOrigin: "center center" };
          break;
        case "text-expand":
          fromProps = { ...fromProps, fontSize: "6px", textShadow: "0px 0px 15px rgba(0,0,0,0.6)" };
          break;
        case "zoomTop":
          fromProps = { ...fromProps, y: -40, scale: 0.6 };
          break;
        case "zoomTopLeft":
          fromProps = { ...fromProps, x: -50, y: -50, scale: 0.6 };
          break;
        case "zoomTopRight":
          fromProps = { ...fromProps, x: 50, y: -50, scale: 0.6 };
          break;
        default: fromProps.y = 50;
      }

      // Using fromTo is more performant than set + to
      gsap.fromTo(element, fromProps, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        fontSize: direction === "text-expand" ? "inherit" : undefined,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: once ? "play none none none" : "play none none reverse",
          invalidateOnRefresh: true,
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [direction, delay, duration, once, stagger]);

  return elementRef;
};

// useGsapSlideAnimation - controls slide section progress
export const useGsapSlideAnimation = (data: unknown[]) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const sections = data.length;

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: () => `+=${sections * window.innerHeight}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(sections - 1, Math.floor(self.progress * sections));
          setActiveIndex(index);
        },
      });
    }, elementRef);

    return () => ctx.revert();
  }, [data]);

  return { elementRef, activeIndex };
};


// useGsapTimelineAnimation - sequential hero animation
export const useGsapTimelineAnimation = <T extends HTMLElement = HTMLElement>(
  refs: React.RefObject<T | null>[],
  delay = 0,
  enabled = true
) => {
  useIsomorphicLayoutEffect(() => {
    if (!enabled) return;

    const elements = refs.map((r) => r.current).filter((el): el is T => el !== null);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: delay });
      if (elements[1]) tl.fromTo(elements[1], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      if (elements[2]) tl.fromTo(elements[2], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6");
    });

    return () => ctx.revert();
  }, [refs, delay, enabled]);
};


// useGsapCounterAnimation - Track Record counters
export const useGsapCounterAnimation = (
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  data: { total: number; suffix: string; prefix?: string }[]
) => {
  useIsomorphicLayoutEffect(() => {
    if (!refs.current.length) return;

    const ctx = gsap.context(() => {
      refs.current.forEach((el, index) => {
        if (!el) return;
        const { total: finalValue, suffix, prefix = "" } = data[index];
        const obj = { value: 0 };

        gsap.to(obj, {
          value: finalValue,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
          onUpdate: () => {
            if (!el) return;
            let displayVal: string;

            if (finalValue >= 1000) {
              displayVal = Math.floor(obj.value).toLocaleString();
            } else if (finalValue % 1 !== 0) {
              displayVal = obj.value.toFixed(1);
            } else {
              displayVal = Math.floor(obj.value).toString();
            }

            el.textContent = `${prefix}${displayVal}${suffix}`;
          },
          onComplete: () => {
            const final = finalValue >= 1000
              ? finalValue.toLocaleString()
              : (finalValue % 1 !== 0 ? finalValue.toFixed(1) : finalValue.toString());
            el.textContent = `${prefix}${final}${suffix}`;
          }
        });
      });
    });

    return () => ctx.revert();
  }, [data]);
};

export default useGsapAnimation;