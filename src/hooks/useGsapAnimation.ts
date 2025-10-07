"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";

// Register plugin once
gsap.registerPlugin(ScrollTrigger);

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

      // Create tween
      if (direction.startsWith("zoomTop")) {
        gsap.fromTo(
          element,
          fromProps,
          {
            x: 0,
            y: 0,
            scale: 1.05,
            opacity: 1,
            duration,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none none",
              once,
            },
            onComplete: () => {
              gsap.to(element, { scale: 1, duration: 0.2, ease: "power2.out" });
            },
          }
        );
      } else {
        gsap.from(element, {
          ...fromProps,
          delay,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once,
          },
        });
      }
    }, elementRef);

    // Local cleanup: only kills this component's ScrollTriggers + animations
    return () => ctx.revert();
  }, [direction, delay, duration, once, stagger]);

  return elementRef;
};

export default useGsapAnimation;

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

    // Clean only the triggers created in this hook
    return () => ctx.revert();
  }, [data]);

  return { elementRef, activeIndex };
};
