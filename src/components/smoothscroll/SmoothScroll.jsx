import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  const lenis = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1.2, // Adjust for scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Start the scroll animation loop
    const raf = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  useEffect(() => {
    // Reset scroll on route change
    const handleRouteChange = () => {
      if (lenis.current) {
        lenis.current.scrollTo(0, { immediate: true });
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // Recalculate Lenis scroll on window resize
    const handleResize = () => {
      if (lenis.current) {
        lenis.current.update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
