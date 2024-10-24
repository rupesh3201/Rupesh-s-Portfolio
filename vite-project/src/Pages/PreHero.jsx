import React, { useEffect, useState } from "react";
import gsap from "gsap";

const PreHero = ({ onLoadComplete }) => {
  const [percentage, setPercentage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Trigger the fade-out animation
          gsap.to(".preHero", { opacity: 0, duration: 0.5, onComplete: onLoadComplete });
          return prev;
        }
        return Math.min(prev + 1, 100); // Increment up to 100
      });
    }, 10); // Adjust the interval for speed of loading

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="preHero w-full h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-4xl">{percentage}%</h1>
    </div>
  );
};

export default PreHero;
