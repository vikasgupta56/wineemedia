import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  const lenis = useRef(null);
  const router = useRouter();
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.2, // Adjust for scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Start the scroll animation loop
    const startAnimationLoop = () => {
      const raf = (time) => {
        lenis.current?.raf(time);
        animationFrameId.current = requestAnimationFrame(raf);
      };
      animationFrameId.current = requestAnimationFrame(raf);
    };

    startAnimationLoop();

    // Clean up on unmount
    return () => {
      lenis.current?.destroy();
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  useEffect(() => {
    // Reset scroll on route change and restart the animation loop
    const handleRouteChange = () => {
      lenis.current?.scrollTo(0, { immediate: true });
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      const startAnimationLoop = () => {
        const raf = (time) => {
          lenis.current?.raf(time);
          animationFrameId.current = requestAnimationFrame(raf);
        };
        animationFrameId.current = requestAnimationFrame(raf);
      };
      startAnimationLoop();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Recalculate Lenis scroll on window resize
    const handleResize = () => {
      lenis.current?.update();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
