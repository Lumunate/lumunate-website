"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

// Register ScrollTrigger once (safe for Next.js Fast Refresh)
let scrollTriggerRegistered = false;
if (!scrollTriggerRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  scrollTriggerRegistered = true;
}

// Refresh ScrollTrigger on page load to fix direct landing on section
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    ScrollTrigger.refresh(true);
  });
}

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
  once?: boolean;
  stagger?: number;
}


// useGsapAnimation Hook - standard fade/slide/zoom scroll animation
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
        case "scale-up":
          fromProps = { scale: 0.5, opacity: 0, transformOrigin: "center center" };
          break;
        case "text-expand":
          fromProps = { fontSize: "6px", opacity: 0, textShadow: "0px 0px 15px rgba(0,0,0,0.6)" };
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

      gsap.set(element, fromProps);

      const toProps: gsap.TweenVars = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        fontSize: direction === "text-expand" ? "" : undefined,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
          onEnter: () => {
            gsap.to(element, {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              duration,
              delay,
              ease: "power3.out",
            });
          },
        },
      };

      gsap.to(element, toProps);
    }, elementRef);

    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, [direction, delay, duration, once, stagger]);

  return elementRef;
};
export default useGsapAnimation;


// useGsapSlideAnimation - controls slide section progress (Our Approach)
export const useGsapSlideAnimation = (data: unknown[]) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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


// useGsapTimelineAnimation - sequential header/hero animation
export const useGsapTimelineAnimation = <T extends HTMLElement = HTMLElement>(
  refs: React.RefObject<T | null>[],
  delay = 0,
  enabled = true,
  isHome = true
) => {
  useEffect(() => {
    if (!enabled) return;

    // Filter out nulls
    const elements = refs
      .map((r) => r.current)
      .filter((el): el is T => el !== null);

    if (!elements.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: delay });

      if (elements[1]) {
        tl.fromTo(elements[1], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
      }
      if (elements[2]) {
        tl.fromTo(elements[2], { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6");
      }
    });

    return () => ctx.revert();
  }, [refs, delay, enabled, isHome]);
};

// useGsapCounterAnimation - Track Record counters
export const useGsapCounterAnimation = (
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  data: { total: number; suffix: string; prefix?: string }[]
) => {
  useEffect(() => {
    if (!refs.current.length) return;

    const ctx = gsap.context(() => {
      refs.current.forEach((el, index) => {
        if (!el) return;

        const { total: finalValue, suffix, prefix = "" } = data[index];

        el.textContent = `${prefix}0${suffix}`;

        const counter = { value: 0 };

        gsap.to(counter, {
          value: finalValue,
          duration: 4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            once: true,
          },
          onUpdate: () => {
            if (!el) return;

            let formattedNumber: string;

            if (finalValue >= 1000) {

              formattedNumber = Math.floor(counter.value).toLocaleString();
            } else if (finalValue % 1 !== 0) {

              formattedNumber = counter.value.toFixed(1);
            } else {

              formattedNumber = Math.floor(counter.value).toString();
            }

            el.textContent = `${prefix}${formattedNumber}${suffix}`;
          },
        });
      });
    });

    return () => ctx.revert();
  }, [refs, data]);
};
