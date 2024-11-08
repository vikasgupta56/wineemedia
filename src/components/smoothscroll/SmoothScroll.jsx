import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroller = ({ children }) => {
    const lenisRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        // Initialize Lenis if not already initialized
        if (!lenisRef.current) {
            lenisRef.current = new Lenis();
        }

        // Create a recursive animation loop
        const raf = (time) => {
            lenisRef.current?.raf(time);
            animationFrameId.current = requestAnimationFrame(raf);
        };
        animationFrameId.current = requestAnimationFrame(raf);

        return () => {
            // Cleanup on unmount
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
            // Cancel the animation frame loop
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroller;
