"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

// Register plugin once
gsap.registerPlugin(ScrollTrigger);

type Direction = "fade" | "bottom" | "top" | "left" | "right";

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
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
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
