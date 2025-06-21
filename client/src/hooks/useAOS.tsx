import { useEffect } from 'react';

export function useAOS() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
        delay: 0,
      });
    }
  }, []);
}

// Extend Window interface to include AOS
declare global {
  interface Window {
    AOS: {
      init: (options?: {
        duration?: number;
        once?: boolean;
        offset?: number;
        easing?: string;
        delay?: number;
      }) => void;
      refresh: () => void;
    };
  }
}
