import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Capture the ref value in a local variable for the cleanup function
    const currentElement = domRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Reset animation when element leaves viewport
        if (!entry.isIntersecting) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      });
    }, {
      threshold: 0.3, // Trigger when 30% of element is visible
      rootMargin: '0px 0px -100px 0px' // Adjust trigger point
    });

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [domRef, isVisible];
};
