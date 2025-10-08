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
  | "scale-up"
  | "text-expand";

interface GsapOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  stagger?: number;
}

const useGsapAnimation = ({
  direction = "bottom",
  delay = 1,
  duration = 0.8,
  once = true,
  stagger = 0,
}: GsapOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

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
      default:
        fromProps = { y: 50, opacity: 0 };
    }

    gsap.from(element, {
      ...fromProps,
      delay,
      duration,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [direction, delay, duration, once, stagger]);

  return elementRef;
};

export default useGsapAnimation;

export const useGsapSlideAnimation = (data: unknown[]) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!elementRef.current) return;

    const sections = data.length;

    gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top top",
          end: `+=${sections * 100}%`,
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            // progress goes from 0 → 1 as we scroll
            const newIndex = Math.min(
              sections - 1,
              Math.floor(self.progress * sections)
            );
            setActiveIndex(newIndex);
          },
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [data]);

  return { elementRef, activeIndex };
};