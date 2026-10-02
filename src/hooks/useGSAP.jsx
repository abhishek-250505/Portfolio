import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      animation = "fadeUp",
      delay = 0,
      duration = 1,
      stagger = 0.1,
      start = "top 80%",
      end = "bottom 20%",
      scrub = false,
      markers = false,
    } = options;

    let tween;

    switch (animation) {
      case "fadeUp":
        gsap.set(element, { y: 50, opacity: 0 });
        tween = gsap.to(element, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
        break;
      case "fadeIn":
        gsap.set(element, { opacity: 0 });
        tween = gsap.to(element, {
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
        });
        break;
      case "scaleUp":
        gsap.set(element, { scale: 0.8, opacity: 0 });
        tween = gsap.to(element, {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: "back.out(1.7)",
        });
        break;
      case "slideInLeft":
        gsap.set(element, { x: -100, opacity: 0 });
        tween = gsap.to(element, {
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
        break;
      case "slideInRight":
        gsap.set(element, { x: 100, opacity: 0 });
        tween = gsap.to(element, {
          x: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
        break;
      case "staggerFade":
        gsap.set(element, { y: 30, opacity: 0 });
        tween = gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          stagger,
          ease: "power3.out",
        });
        break;
      default:
        gsap.set(element, { y: 30, opacity: 0 });
        tween = gsap.to(element, {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
    }

    ScrollTrigger.create({
      trigger: element,
      start,
      end,
      scrub,
      markers,
      animation: tween,
    });

    return () => {
      tween?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return elementRef;
};

export const useStaggerAnimation = (selector, options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    const {
      y = 50,
      opacity = 0,
      duration = 0.8,
      stagger = 0.1,
      delay = 0,
      start = "top 80%",
    } = options;

    gsap.set(elements, { y, opacity });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);

  return containerRef;
};