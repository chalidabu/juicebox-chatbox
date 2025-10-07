"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LottieAnimation from "./LottieAnimation";

const HomeSection = ({ onNext }: { onNext: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
  }, []);

  const handleNext = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      onComplete: onNext,
    });
  };

  return (
    <section ref={containerRef}>
      <LottieAnimation />
      
      <h2>Compare your thoughts on <span className="text-colored">technology</span> with current industry opinions.</h2>
      <button
        onClick={handleNext}
        aria-label="Go to walkthrough"
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Get a reality check
      </button>
    </section>
  );
};

export default HomeSection;
